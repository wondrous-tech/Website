import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import './Faq.css'

interface FaqItem {
  q: string
  a: React.ReactNode
}

interface FaqSection {
  eyebrow: string
  title: string
  items: FaqItem[]
}

const sections: FaqSection[] = [
  {
    eyebrow: 'I. Getting Started',
    title: 'Beginning the Journey',
    items: [
      {
        q: 'What kind of books does Wondrous Publishing publish?',
        a: (
          <>
            We are a Pan-African publishing house focused on <strong>transformational writing</strong> —
            self-development, spiritual growth, purpose-driven leadership, memoir, African literature,
            and educational titles for schools and institutions.
          </>
        ),
      },
      {
        q: 'I have an idea but I have never written a book. Can you still help me?',
        a: (
          <>
            Absolutely. Start with our <Link to="/editing">Ghostwriting</Link> package or our{' '}
            <em>Writing Academy</em>, where you are trained one-on-one until your manuscript takes
            shape. You bring the vision; we bring the craft.
          </>
        ),
      },
      {
        q: 'Where are you located, and do you work with authors outside Kenya?',
        a: (
          <>
            Our editorial house is in Nairobi, but we serve authors across Africa and the diaspora
            — every step of publishing, from evaluation to distribution, is delivered remotely with
            live editorial dialogue over email, WhatsApp, and video calls.
          </>
        ),
      },
    ],
  },
  {
    eyebrow: 'II. Manuscript Evaluation',
    title: 'Evaluating Your Work',
    items: [
      {
        q: 'What is a manuscript evaluation, and is it the same as editing?',
        a: (
          <>
            No. A <strong>manuscript evaluation</strong> is a detailed professional review — we
            assess structure, clarity, flow, language, and overall impact, then send you a written
            report with recommendations. Editing is a separate service that <em>implements</em>{' '}
            those changes in your text.
          </>
        ),
      },
      {
        q: 'How much does an evaluation cost?',
        a: (
          <>
            <strong>KES 2,000 (approximately USD 20)</strong> — a flat rate regardless of manuscript
            length. This makes serious editorial feedback accessible to first-time authors.
          </>
        ),
      },
      {
        q: 'Do I have to sign a non-disclosure agreement first?',
        a: (
          <>
            Yes. Before we open your manuscript, both parties sign a mutual NDA. You can download
            the form from the evaluation page, sign it, and upload it back with your document — the
            entire exchange stays confidential.
          </>
        ),
      },
    ],
  },
  {
    eyebrow: 'III. Editing Packages',
    title: 'Which Edit Do I Need?',
    items: [
      {
        q: 'What is the difference between light, medium, and heavy editing?',
        a: (
          <>
            <strong>Light</strong> editing combines copy editing and proofreading — grammar,
            punctuation, spelling, consistency. It suits strong writers.{' '}
            <strong>Medium</strong> editing adds line-by-line work on clarity and style — for solid
            average writers. <strong>Heavy</strong> editing is the full developmental pass —
            structure, logic, flow, and everything below — for first drafts that need shaping.
          </>
        ),
      },
      {
        q: 'What does ghostwriting look like in practice?',
        a: (
          <>
            You share the story, wisdom, or experience — through interviews, voice notes, or
            outlines — and a Wondrous writer builds the full manuscript in your voice. You approve
            every chapter along the way, and the final book is entirely yours.
          </>
        ),
      },
      {
        q: 'Do I keep the copyright to my book?',
        a: (
          <>
            Always. Whether you use editing, ghostwriting, or full self-publishing, the copyright
            stays with you. We assist you in registering it in your name and securing an ISBN as
            part of our free author bonuses.
          </>
        ),
      },
    ],
  },
  {
    eyebrow: 'IV. Publishing & Printing',
    title: 'Getting to Print',
    items: [
      {
        q: 'Do I need to have a completed manuscript before requesting a quote?',
        a: (
          <>
            No. If your book is still in draft, request an evaluation first — our editors will tell
            you what stage you are at and recommend the right next step before any printing quote.
          </>
        ),
      },
      {
        q: 'What formats do you print, and do you support print-on-demand?',
        a: (
          <>
            We produce paperback, hardcover, eBooks, and audiobooks. For authors testing the market,
            we offer <strong>print-on-demand</strong> in low quantities; for launches and school
            orders, we handle bulk runs with finishing services in-house.
          </>
        ),
      },
      {
        q: 'How long does the full publishing process take?',
        a: (
          <>
            Typical timelines: evaluation returns in <strong>7–14 days</strong>; editing takes{' '}
            <strong>3–8 weeks</strong> depending on tier; print production and cover design run{' '}
            <strong>2–4 weeks</strong> after editing sign-off. Rush timelines are available on request.
          </>
        ),
      },
    ],
  },
  {
    eyebrow: 'V. Selling, Distribution & Awards',
    title: 'After Publication',
    items: [
      {
        q: 'How do readers buy my book once published?',
        a: (
          <>
            Print copies are sold through{' '}
            <a href="https://www.afrisitestore.com" target="_blank" rel="noopener noreferrer">
              afrisitestore.com
            </a>
            , and eBooks & audiobooks through{' '}
            <a href="https://www.somaflex.com" target="_blank" rel="noopener noreferrer">
              somaflex.com
            </a>
            . We also handle digital marketing and rights placement on your behalf.
          </>
        ),
      },
      {
        q: 'What are the Pneuma Awards, and can any Wondrous author enter?',
        a: (
          <>
            The Pneuma Awards celebrate outstanding African authors whose works shape destiny. Any
            author — published with us or independently — may submit their book for consideration.
            Winners receive distribution partnerships and international shelf placement.
          </>
        ),
      },
      {
        q: 'How do I reach a human on your team?',
        a: (
          <>
            Fastest route is WhatsApp live chat at <strong>+254 798 872 998</strong> or{' '}
            <strong>+254 100 777 333</strong>. You can also write to{' '}
            <a href="mailto:info@wondrouspublishing.com">info@wondrouspublishing.com</a> or visit our{' '}
            <Link to="/contact">Contact page</Link>.
          </>
        ),
      },
    ],
  },
]

export function Faq() {
  const [openKey, setOpenKey] = useState<string | null>('0-0')

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="faq-hero">
          <div className="faq-hero__container">
            <span className="faq-hero__eyebrow">
              <span className="faq-hero__rule" aria-hidden="true" />
              Reader Enquiries
            </span>
            <h1 className="faq-hero__heading">
              Questions, <em>answered</em>.
            </h1>
            <p className="faq-hero__subtext">
              A living reference for authors, partners, and readers navigating the Wondrous
              Publishing journey — from first idea to global bookshelf.
            </p>
          </div>
        </section>

        <section className="faq-body">
          <div className="faq-body__container">
            <aside className="faq-body__toc" aria-label="Sections">
              <span className="faq-body__toc-label">In this reference</span>
              <ol className="faq-body__toc-list">
                {sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#faq-section-${i}`} className="faq-body__toc-link cursor-target">
                      <span className="faq-body__toc-num">{String(i + 1).padStart(2, '0')}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="faq-body__content">
              {sections.map((section, sIdx) => (
                <div className="faq-section" id={`faq-section-${sIdx}`} key={section.title}>
                  <span className="faq-section__eyebrow">{section.eyebrow}</span>
                  <h2 className="faq-section__title">{section.title}</h2>

                  <ul className="faq-section__list">
                    {section.items.map((item, iIdx) => {
                      const key = `${sIdx}-${iIdx}`
                      const isOpen = openKey === key
                      return (
                        <li
                          key={key}
                          className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
                        >
                          <button
                            type="button"
                            className="faq-item__trigger cursor-target"
                            aria-expanded={isOpen}
                            onClick={() => setOpenKey(isOpen ? null : key)}
                          >
                            <span className="faq-item__q">{item.q}</span>
                            <span className="faq-item__icon" aria-hidden="true">
                              <span />
                              <span />
                            </span>
                          </button>
                          <div className="faq-item__panel" role="region">
                            <div className="faq-item__panel-inner">
                              <p>{item.a}</p>
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-cta">
          <div className="faq-cta__inner">
            <span className="faq-cta__eyebrow">Still curious?</span>
            <h2 className="faq-cta__title">A dedicated editor is one message away.</h2>
            <p className="faq-cta__text">
              If your question isn't here, our team responds personally — usually within a working
              day. Every conversation is confidential.
            </p>
            <div className="faq-cta__actions">
              <Link to="/contact" className="faq-cta__btn faq-cta__btn--primary cursor-target">
                Talk to an editor
              </Link>
              <a
                href="https://wa.me/254798872998"
                target="_blank"
                rel="noopener noreferrer"
                className="faq-cta__btn faq-cta__btn--ghost cursor-target"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
