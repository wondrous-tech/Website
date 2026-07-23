import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import './Marketplace.css'

interface StoreDef {
  id: 'hardcopies' | 'ebooks'
  eyebrow: string
  title: string
  tagline: string
  url: string
  features: string[]
  cta: string
}

const STORES: Record<'hardcopies' | 'ebooks', StoreDef> = {
  hardcopies: {
    id: 'hardcopies',
    eyebrow: 'Afrisite Store',
    title: 'Hardcopies, printed with intention.',
    tagline:
      'Physical editions curated and fulfilled through our sister marketplace, Afrisite — Africa’s home for beautifully printed books.',
    url: 'https://www.afrisitestore.com',
    features: [
      'Nationwide & cross-border shipping',
      'Author royalties tracked per copy',
      'Bookstore-grade print finishes',
      'Bundles, box sets & signed editions',
    ],
    cta: 'Enter Afrisite Store',
  },
  ebooks: {
    id: 'ebooks',
    eyebrow: 'Somaflex',
    title: 'eBooks & Audiobooks, without borders.',
    tagline:
      'Digital reading and listening powered by Somaflex — our streaming home for African stories, sermons, and study libraries.',
    url: 'https://www.somaflex.com',
    features: [
      'Instant global delivery',
      'Read on any device, offline-ready',
      'Narrated audiobooks by African voices',
      'Subscription & single-title purchase',
    ],
    cta: 'Open Somaflex',
  },
}

const REDIRECT_SECONDS = 6

export function Marketplace() {
  const [params, setParams] = useSearchParams()
  const active = (params.get('store') as 'hardcopies' | 'ebooks') || 'hardcopies'
  const store = STORES[active] ?? STORES.hardcopies
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS)
  const [autoRedirect, setAutoRedirect] = useState(true)

  const [prevStoreId, setPrevStoreId] = useState(store.id)
  if (store.id !== prevStoreId) {
    setPrevStoreId(store.id)
    setCountdown(REDIRECT_SECONDS)
    setAutoRedirect(true)
  }

  useEffect(() => {
    if (!autoRedirect) return
    if (countdown <= 0) {
      window.open(store.url, '_blank', 'noopener,noreferrer')
      setTimeout(() => setAutoRedirect(false), 0)
      return
    }
    const t = window.setTimeout(() => setCountdown((c) => c - 1), 1000)
    return () => window.clearTimeout(t)
  }, [countdown, autoRedirect, store.url])

  const setTab = (id: 'hardcopies' | 'ebooks') => {
    setParams({ store: id })
  }

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="marketplace">
          <div className="marketplace__bg" aria-hidden="true" />
          <div className="marketplace__glow" aria-hidden="true" />

          <div className="marketplace__container">
            <span className="marketplace__eyebrow">
              <span className="marketplace__eyebrow-rule" aria-hidden="true" />
              WONDROUS MARKETPLACE
            </span>

            <h1 className="marketplace__heading">
              Digital bridges between <em>authors</em> and <em>readers</em>.
            </h1>

            <p className="marketplace__intro">
              At Wondrous Publishing, we go beyond printing books; we create digital bridges that
              connect authors to a global marketplace and readers to the stories and knowledge they
              seek. Our online services are designed to make book selling and buying easier,
              faster, and more rewarding.
            </p>

            <div className="marketplace__tabs" role="tablist" aria-label="Marketplace channels">
              {(['hardcopies', 'ebooks'] as const).map((id) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={active === id}
                  className={`marketplace__tab${active === id ? ' marketplace__tab--active' : ''}`}
                  onClick={() => setTab(id)}
                >
                  {id === 'hardcopies' ? 'Hardcopies' : 'eBooks & Audiobooks'}
                </button>
              ))}
            </div>

            <article key={store.id} className="marketplace__card">
              <div className="marketplace__card-head">
                <span className="marketplace__card-eyebrow">{store.eyebrow}</span>
                <h2 className="marketplace__card-title">{store.title}</h2>
                <p className="marketplace__card-tagline">{store.tagline}</p>
              </div>

              <ul className="marketplace__features">
                {store.features.map((f) => (
                  <li key={f} className="marketplace__feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M13.5 4L6 11.5L2.5 8"
                        stroke="#e9c349"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="marketplace__actions">
                <a
                  className="marketplace__cta cursor-target"
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setAutoRedirect(false)}
                >
                  {store.cta}
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M2 18C1.45 18 0.98 17.8 0.59 17.41C0.2 17.02 0 16.55 0 16V2C0 1.45 0.2 0.98 0.59 0.59C0.98 0.2 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8 17.02 17.41 17.41C17.02 17.8 16.55 18 16 18H2M6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <div className="marketplace__countdown" aria-live="polite">
                  {autoRedirect ? (
                    <>
                      Opening <strong>{store.url.replace('https://www.', '')}</strong> in{' '}
                      <span className="marketplace__count">{countdown}s</span>
                      <button
                        type="button"
                        className="marketplace__cancel"
                        onClick={() => setAutoRedirect(false)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>Auto-redirect paused. Use the button above when you’re ready.</>
                  )}
                </div>
              </div>
            </article>

            <p className="marketplace__foot">
              Prefer to speak with our team first? Email{' '}
              <a href="mailto:info@wondrouspublishing.com">info@wondrouspublishing.com</a> or call{' '}
              <a href="tel:+254798872998">+254 798 872 998</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
