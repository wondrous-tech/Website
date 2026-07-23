import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EditingMarquee } from '../common/EditingMarquee'
import { heroSlides } from '../../utils/heroSlides'
import './Hero.css'

const AUTOPLAY_MS = 6000

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const slide = heroSlides[activeIndex]

  useEffect(() => {
    if (heroSlides.length <= 1 || isPaused) return

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % heroSlides.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [isPaused])

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <span key={`badge-${activeIndex}`} className="hero__badge hero__reveal">
            <span className="hero__badge-dot" aria-hidden="true" />
            {slide.badge}
          </span>

          <h1 key={`heading-${activeIndex}`} className="hero__heading hero__reveal hero__reveal--delay-1">
            {slide.titleLine1}
            <br />
            <span className="hero__heading-accent">{slide.titleLine2}</span>
          </h1>

          <p key={`description-${activeIndex}`} className="hero__description hero__reveal hero__reveal--delay-2">
            {slide.description}
          </p>

          <div className="hero__actions hero__reveal hero__reveal--delay-3">
            <Link className="hero__cta hero__cta--primary" to={slide.route}>
              {slide.ctaLabel}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#745C00" />
              </svg>
            </Link>
            <Link className="hero__cta hero__cta--outline" to="/#services">
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      <div className="hero__service-visual" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="hero__service-panel" aria-hidden="true" />
        <div className="hero__service-orbit" aria-hidden="true" />
        <div className="hero__service-image-shell">
          <img
            key={slide.image}
            className={`hero__service-image${slide.imageFit === 'contain' ? ' hero__service-image--contain' : ''}`}
            src={slide.image}
            alt={`${slide.titleLine1} ${slide.titleLine2}`}
          />
        </div>

        <div className="hero__service-dots" role="tablist" aria-label="Hero services">
          {heroSlides.map((item, i) => (
            <button
              key={item.image}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Show service ${i + 1}: ${item.titleLine1}`}
              className={`hero__service-dot${i === activeIndex ? ' hero__service-dot--active' : ''}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="hero__marquee">
        <EditingMarquee />
      </div>
    </section>
  )
}
