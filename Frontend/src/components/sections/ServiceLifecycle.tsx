import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import lifecycleImage from '../../assets/print.jpeg'
import './ServiceLifecycle.css'

interface LifecyclePhase {
  key: string
  title: string
  subtitle: string
  items: string[]
  contactType: string
}

const phases: LifecyclePhase[] = [
  {
    key: 'pre-publishing',
    title: 'Pre-Publishing',
    subtitle: 'From raw manuscript to a polished, publish-ready book.',
    contactType: 'editing',
    items: [
      'Writing & Editing Training',
      'Publishing Consultancy',
      'Manuscript Evaluation / Critique',
      'Ghostwriting / Creative Writing',
      'Editing and Proofreading',
      'Book Layout / Internal Design',
      'Cover Design Development',
      'ISBN Issuance',
      'Copyright Registration',
    ],
  },
  {
    key: 'publishing',
    title: 'Publishing',
    subtitle: 'Turning your manuscript into a tangible product readers can hold.',
    contactType: 'printing',
    items: [
      'eBooks',
      'Bulk Printing',
      'Print on Demand',
      'Hardcover Books',
      'Paperback Books',
    ],
  },
  {
    key: 'post-publishing',
    title: 'Post-Publishing',
    subtitle: 'Extending the reach and lifespan of your book.',
    contactType: 'self-publishing',
    items: [
      'Audiobooks',
      'Book Translation',
      'Digital Marketing & Book Distribution',
      'Book Rights (Literary Rights) Agency',
    ],
  },
]

export function ServiceLifecycle() {
  const [activeTab, setActiveTab] = useState<string>('pre-publishing')
  const navigate = useNavigate()
  const activePhase = phases.find((p) => p.key === activeTab) || phases[0]

  const handleCtaClick = () => {
    navigate(`/contact?type=${activePhase.contactType}`)
  }

  return (
    <section className="service-lifecycle">
      <div className="service-lifecycle__intro">
        <span className="service-lifecycle__eyebrow">Our Self-Publishing Services</span>
        <h2 className="service-lifecycle__heading">We Have Divided Our Services Into Three</h2>
        <p className="service-lifecycle__intro-desc">
          Whether your book is a message of hope, a story of transformation, or a guide to purpose, Wondrous Publishing is here to walk with you from manuscript to marketplace.
        </p>
      </div>

      {/* Interactive Phase Navigation */}
      <div className="service-lifecycle__nav" role="tablist" aria-label="Publishing Phases">
        <div className="service-lifecycle__timeline-line" />
        {phases.map((phase) => {
          const isActive = phase.key === activeTab
          return (
            <button
              key={phase.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`service-lifecycle__nav-btn ${isActive ? 'service-lifecycle__nav-btn--active' : ''}`}
              onClick={() => setActiveTab(phase.key)}
            >
              <span className="service-lifecycle__nav-label">{phase.title}</span>
            </button>
          )
        })}
      </div>

      {/* Selected Phase Detail Dashboard */}
      <div className="service-lifecycle__container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="service-lifecycle__dashboard"
          >
            <div className="service-lifecycle__main-details">
              <h3 className="service-lifecycle__dashboard-title">{activePhase.title}</h3>
              <p className="service-lifecycle__dashboard-subtitle">{activePhase.subtitle}</p>

              <ul className="service-lifecycle__checklist">
                {activePhase.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="service-lifecycle__checklist-item"
                  >
                    <span className="service-lifecycle__check-bullet">✓</span>
                    <span className="service-lifecycle__check-text">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="service-lifecycle__highlight-card">
              <div className="service-lifecycle__card-glow" />
              <div className="service-lifecycle__highlight-content">
                <span className="service-lifecycle__highlight-badge">Why Choose Wondrous Publishing?</span>
                <p className="service-lifecycle__highlight-desc">
                  Because your book deserves excellence — and your message deserves to go far. Whether you're writing on self-development, spiritual growth, or transformational ideas, we're here to bring your vision to life.
                </p>
                <p className="service-lifecycle__highlight-desc" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                  You write it. We publish it. The world reads it.
                </p>

                {activeTab === 'publishing' && (
                  <div className="service-lifecycle__image-container">
                    <img className="service-lifecycle__image" src={lifecycleImage} alt="Premium printing" />
                  </div>
                )}

                <button
                  type="button"
                  className="service-lifecycle__dashboard-cta"
                  onClick={handleCtaClick}
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
