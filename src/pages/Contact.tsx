import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { ContactHero } from '../components/sections/ContactHero'
import { ContactForm } from '../components/sections/ContactForm'

import { contactTypes, getContactType, type ContactType } from '../utils/contactTypes'
import './Contact.css'

export function Contact() {
  const [searchParams, setSearchParams] = useSearchParams()
  const rawType = searchParams.get('type')
  const active = useMemo(() => getContactType(rawType), [rawType])

  function selectType(id: ContactType) {
    const next = new URLSearchParams(searchParams)
    next.set('type', id)
    setSearchParams(next, { replace: true })
    // Scroll form into view on small screens
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      window.setTimeout(() => {
        document
          .getElementById('contact-form-panel')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 40)
    }
  }

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="contact-page">
          <div className="contact-page__grid">
            <ContactHero />

            <div className="contact-page__panel" id="contact-form-panel">
              <div className="contact-types" role="tablist" aria-label="Contact reason">
                {contactTypes.map((t) => {
                  const isActive = t.id === active.id
                  return (
                    <button
                      key={t.id}
                      role="tab"
                      aria-selected={isActive}
                      type="button"
                      className={`contact-types__btn cursor-target${
                        isActive ? ' contact-types__btn--active' : ''
                      }`}
                      onClick={() => selectType(t.id)}
                    >
                      {t.short}
                    </button>
                  )
                })}
              </div>

              <ContactForm key={active.id} type={active.id} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
