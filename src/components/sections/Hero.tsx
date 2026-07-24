import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../../utils/heroSlides'
import './Hero.css'

const AUTOPLAY_MS = 6500
const TRANSITION_MS = 1150

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [isPaused, setIsPaused] = useState(false)
  const animatingRef = useRef(false)
  const activeRef = useRef(0)
  const pausedRef = useRef(false)

  useEffect(() => { activeRef.current = activeIndex }, [activeIndex])
  useEffect(() => { pausedRef.current = isPaused }, [isPaused])

  const go = (target: number, dir: 'next' | 'prev') => {
    if (animatingRef.current) return
    const normalized = ((target % heroSlides.length) + heroSlides.length) % heroSlides.length
    if (normalized === activeRef.current) return
    animatingRef.current = true
    setDirection(dir)
    setPrevIndex(activeRef.current)
    setActiveIndex(normalized)
    window.setTimeout(() => {
      setPrevIndex(null)
      animatingRef.current = false
    }, TRANSITION_MS)
  }

  useEffect(() => {
    if (heroSlides.length <= 1) return
    const timer = window.setInterval(() => {
      if (pausedRef.current || animatingRef.current) return
      go(activeRef.current + 1, 'next')
    }, AUTOPLAY_MS)
    return () => window.clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderSlide = (index: number, role: 'current' | 'previous') => {
    const s = heroSlides[index]
    const stateClass =
      role === 'current'
        ? direction === 'next'
          ? 'hero__slide--enter-next'
          : 'hero__slide--enter-prev'
        : direction === 'next'
          ? 'hero__slide--leave-next'
          : 'hero__slide--leave-prev'

    return (
      <div key={`${role}-${index}`} className={`hero__slide ${stateClass}`} aria-hidden={role === 'previous'}>
        <div className="hero__visual">
          <div className="hero__visual-frame" aria-hidden="true" />
          <div className="hero__visual-shell">
            <img
              className={`hero__visual-image${s.imageFit === 'contain' ? ' hero__visual-image--contain' : ''}`}
              src={s.image}
              alt={`${s.titleLine1} ${s.titleLine2}`}
            />
          </div>
        </div>

        <div className="hero__card">
          <span className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            {s.badge}
          </span>
          <h1 className="hero__heading">
            {s.titleLine1}
            <br />
            <span className="hero__heading-accent">{s.titleLine2}</span>
          </h1>
          <p className="hero__description">{s.description}</p>
          <div className="hero__actions">
            <Link className="hero__cta hero__cta--primary" to={s.route}>
              {s.ctaLabel}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="currentColor" />
              </svg>
            </Link>
            <Link className="hero__cta hero__cta--outline" to="/#services">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section
      className="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero__stage">
        {prevIndex !== null && renderSlide(prevIndex, 'previous')}
        {renderSlide(activeIndex, 'current')}
      </div>

      <div className="hero__dots" role="tablist" aria-label="Hero services">
        {heroSlides.map((item, i) => (
          <button
            key={item.image}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Show service ${i + 1}: ${item.titleLine1}`}
            className={`hero__dot${i === activeIndex ? ' hero__dot--active' : ''}`}
            onClick={() => go(i, i > activeIndex ? 'next' : 'prev')}
          />
        ))}
      </div>
    </section>
  )
}
