import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { galleryItems } from '../../utils/galleryItems'
import type { GalleryItem } from '../../utils/galleryItems'
import './Gallery.css'

const genres = [
  { id: 'all', label: 'All Works' },
  { id: 'wisdom', label: 'Wisdom & Growth', match: ['WISDOM', 'LEADERSHIP'] },
  { id: 'economy', label: 'Economy & Development', match: ['ECONOMY', 'LEADERSHIP'] },
  { id: 'culture', label: 'Culture & History', match: ['CULTURE', 'HISTORY', 'IDENTITY'] },
  { id: 'poetry', label: 'Poetry & Art', match: ['POETRY'] },
]

export function Gallery() {
  const [activeGenre, setActiveGenre] = useState('all')
  const [selectedBook, setSelectedBook] = useState<GalleryItem | null>(null)
  const [requestedSample, setRequestedSample] = useState(false)
  const [sampleEmail, setSampleEmail] = useState('')

  const selectedMatch = genres.find((g) => g.id === activeGenre)
  const filteredItems = galleryItems
    .filter((item) => {
      if (activeGenre === 'all') return true
      return selectedMatch?.match?.includes(item.category) ?? false
    })
    .slice(0, 4)

  const openBook = (item: GalleryItem) => setSelectedBook(item)

  const handleCardKeyDown = (e: React.KeyboardEvent, item: GalleryItem) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openBook(item)
    }
  }

  const handleRequestSampleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!sampleEmail.trim()) return
    setRequestedSample(true)
    setTimeout(() => {
      setRequestedSample(false)
      setSampleEmail('')
    }, 4000)
  }

  const scrollToQuote = () => {
    setSelectedBook(null)
    const quoteSection = document.getElementById('get-a-quote')
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="gallery">
      <div className="gallery__glow gallery__glow--one" aria-hidden="true" />
      <div className="gallery__glow gallery__glow--two" aria-hidden="true" />

      <div className="gallery__container">
        <div className="gallery__header">
          <div className="gallery__intro">
            <span className="gallery__eyebrow">The Reading Room</span>
            <h2 className="gallery__title">Gallery of Excellence</h2>
            <p className="gallery__description">
              Curating over 100 transformational works that define the modern African narrative.
              Tap any title to inspect it up close.
            </p>
          </div>
        </div>

        <div className="gallery__filters" role="tablist" aria-label="Book Categories">
          {genres.map((g) => (
            <button
              key={g.id}
              role="tab"
              type="button"
              aria-selected={activeGenre === g.id}
              className={`gallery__filter-pill ${activeGenre === g.id ? 'gallery__filter-pill--active' : ''}`}
              onClick={() => setActiveGenre(g.id)}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25, ease: 'easeOut', delay: index * 0.02 }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${item.title} by ${item.author}`}
                className="gallery__card"
                onClick={() => openBook(item)}
                onKeyDown={(e) => handleCardKeyDown(e, item)}
              >
                <div className="gallery__card-cover">
                  <img className="gallery__card-image" src={item.image} alt="" loading="lazy" />
                </div>
                <div className="gallery__card-body">
                  <span className="gallery__card-category">{item.category}</span>
                  <h3 className="gallery__card-title">{item.title}</h3>
                  <span className="gallery__card-author">{item.author}</span>
                </div>
                <span className="gallery__card-chevron" aria-hidden="true">
                  <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6.5 6.5L1 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="gallery__footer">
          <Link className="gallery__catalog-link" to="/marketplace">
            Explore the Full Catalog (100+)
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0.5L13.5 6L8 11.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M13 6H0.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {selectedBook && (
            <div className="gallery-modal" role="dialog" aria-modal="true">
              <motion.div
                className="gallery-modal__backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedBook(null)}
              />
              <motion.div
                className="gallery-modal__card"
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <button
                  type="button"
                  className="gallery-modal__close"
                  aria-label="Close details"
                  onClick={() => setSelectedBook(null)}
                >
                  ✕
                </button>

                {selectedBook && (
                  <div className="gallery-modal__grid">
                    <div className="gallery-modal__book-container">
                      <div className="gallery-modal__book-cover">
                        <img src={selectedBook.image} alt={selectedBook.title} />
                      </div>
                      <div className="gallery-modal__book-badge">{selectedBook.format} Edition</div>
                    </div>

                    <div className="gallery-modal__details">
                      <span className="gallery-modal__category">{selectedBook.category}</span>
                      <h3 className="gallery-modal__title">{selectedBook.title}</h3>
                      <p className="gallery-modal__author">
                        By <span className="gallery-modal__author-name">{selectedBook.author}</span>
                      </p>

                      <div className="gallery-modal__divider" />

                      <div className="gallery-modal__section">
                        <h4 className="gallery-modal__section-title">Synopsis</h4>
                        <p className="gallery-modal__synopsis">{selectedBook.synopsis}</p>
                      </div>

                      <div className="gallery-modal__divider" />

                      <div className="gallery-modal__specs">
                        <div className="gallery-modal__spec-item">
                          <span className="gallery-modal__spec-label">Pages</span>
                          <strong className="gallery-modal__spec-val">{selectedBook.pages} pages</strong>
                        </div>
                        <div className="gallery-modal__spec-item">
                          <span className="gallery-modal__spec-label">Format</span>
                          <strong className="gallery-modal__spec-val">{selectedBook.format}</strong>
                        </div>
                        <div className="gallery-modal__spec-item">
                          <span className="gallery-modal__spec-label">Publishing Care</span>
                          <strong className="gallery-modal__spec-val">Wondrous Editorial</strong>
                        </div>
                      </div>

                      <div className="gallery-modal__divider" />

                      <div className="gallery-modal__action-box">
                        <h5 className="gallery-modal__action-title">Want to see the layout quality?</h5>
                        <p className="gallery-modal__action-text">
                          Enter your email to receive a complimentary digital sample chapter.
                        </p>

                        {requestedSample ? (
                          <motion.div
                            className="gallery-modal__success"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            ✓ Chapter dispatched! Check your email.
                          </motion.div>
                        ) : (
                          <form className="gallery-modal__form" onSubmit={handleRequestSampleSubmit}>
                            <input
                              type="email"
                              required
                              placeholder="Your professional email"
                              className="gallery-modal__input"
                              value={sampleEmail}
                              onChange={(e) => setSampleEmail(e.target.value)}
                            />
                            <button type="submit" className="gallery-modal__submit">
                              Send Chapter
                            </button>
                          </form>
                        )}
                      </div>

                      <div className="gallery-modal__actions">
                        <button type="button" className="gallery-modal__quote-btn" onClick={scrollToQuote}>
                          Publish a book like this
                        </button>
                        <Link
                          className="gallery-modal__buy-btn"
                          to="/marketplace"
                          onClick={() => setSelectedBook(null)}
                        >
                          Buy Copy on Marketplace
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}
