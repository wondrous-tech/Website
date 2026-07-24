import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { InitialsAvatar } from '../common/InitialsAvatar'
import './TestimonialSpotlight.css'

interface Testimonial {
  quote: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Publishing my first book with Wondrous was seamless from start to finish. The team guided me through editing, design, and printing — my dream became reality.",
    name: 'Grace M.',
    role: 'NAIROBI',
  },
  {
    quote:
      "The care they took with my manuscript was extraordinary. Every page reflected the story I set out to tell — refined, thoughtful, and unmistakably mine.",
    name: 'Daniel O.',
    role: 'KAMPALA',
  },
  {
    quote:
      "From cover design to final print run, Wondrous handled every detail with precision. I finally hold a book I'm proud to place in any reader's hands.",
    name: 'Amara N.',
    role: 'LAGOS',
  },
  {
    quote:
      "Their editorial team brought clarity to ideas I'd struggled with for years. The finished book is polished, beautiful, and deeply true to my voice.",
    name: 'Wanjiku K.',
    role: 'NAIROBI',
  },
]

const AUTOPLAY_MS = 5000

export function TestimonialSpotlight() {
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = window.setInterval(() => {
      setIndex((i) => {
        setPrevIndex(i)
        return (i + 1) % testimonials.length
      })
    }, AUTOPLAY_MS)
    return () => window.clearInterval(t)
  }, [paused])

  useEffect(() => {
    if (prevIndex === null) return
    const t = window.setTimeout(() => setPrevIndex(null), 1200)
    return () => window.clearTimeout(t)
  }, [prevIndex, index])

  const goTo = (i: number) => {
    if (i === index) return
    setPrevIndex(index)
    setIndex(i)
  }

  return (
    <section className="testimonial-spotlight">
      <div className="testimonial-spotlight__container">
        <span className="testimonial-spotlight__eyebrow">Success Stories</span>
        <h2 className="testimonial-spotlight__title">The Author's Journey</h2>

        <div
          className="testimonial-spotlight__viewport"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-live="polite"
        >
          <div className="testimonial-spotlight__stage">
            {testimonials.map((t, i) => {
              const isActive = i === index
              const isLeaving = i === prevIndex
              const stateClass = isActive
                ? ' testimonial-spotlight__card--active'
                : isLeaving
                  ? ' testimonial-spotlight__card--leaving'
                  : ''
              return (
              <figure
                key={i}
                className={`testimonial-spotlight__card${stateClass}`}
                aria-hidden={!isActive}
              >
                <svg
                  className="testimonial-spotlight__quote-mark"
                  width="43"
                  height="30"
                  viewBox="0 0 43 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4.25 30L10 20V20V20C7.25 20 4.89583 19.0208 2.9375 17.0625C0.979167 15.1042 0 12.75 0 10C0 7.25 0.979167 4.89583 2.9375 2.9375C4.89583 0.979167 7.25 0 10 0C12.75 0 15.1042 0.979167 17.0625 2.9375C19.0208 4.89583 20 7.25 20 10C20 10.9583 19.8854 11.8438 19.6562 12.6562C19.4271 13.4688 19.0833 14.25 18.625 15L10 30H4.25V30M26.75 30L32.5 20V20V20C29.75 20 27.3958 19.0208 25.4375 17.0625C23.4792 15.1042 22.5 12.75 22.5 10C22.5 7.25 23.4792 4.89583 25.4375 2.9375C27.3958 0.979167 29.75 0 32.5 0C35.25 0 37.6042 0.979167 39.5625 2.9375C41.5208 4.89583 42.5 7.25 42.5 10C42.5 10.9583 42.3854 11.8438 42.1562 12.6562C41.9271 13.4688 41.5833 14.25 41.125 15L32.5 30H26.75V30"
                    fill="#C0C8C3"
                  />
                </svg>

                <blockquote className="testimonial-spotlight__quote">{t.quote}</blockquote>

                <figcaption className="testimonial-spotlight__author">
                  <InitialsAvatar name={t.name} className="testimonial-spotlight__avatar" />
                  <div className="testimonial-spotlight__author-info">
                    <span className="testimonial-spotlight__author-name">{t.name}</span>
                    <span className="testimonial-spotlight__author-role">{t.role}</span>
                  </div>
                </figcaption>
              </figure>
              )
            })}
          </div>
        </div>

        <div className="testimonial-spotlight__dots" role="tablist" aria-label="Testimonials">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial ${i + 1}`}
              className={`testimonial-spotlight__dot${i === index ? ' testimonial-spotlight__dot--active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <Link className="testimonial-spotlight__cta" to="/testimonials">
          Read More Success Stories
        </Link>
      </div>
    </section>
  )
}
