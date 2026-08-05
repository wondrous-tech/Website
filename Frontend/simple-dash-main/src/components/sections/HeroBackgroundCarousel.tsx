import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import brandImage from '../../assets/brand.png'
import educationImage from '../../assets/edu2.png'
import printingImage from '../../assets/prin2.png'
import './HeroBackgroundCarousel.css'

const AUTOPLAY_MS = 6500

interface HeroBackgroundSlide {
  badge: string
  titleLine1: string
  titleLine2: string
  description: string
  image: string
  ctaLabel: string
  route: string
}

const slides: HeroBackgroundSlide[] = [
  {
    badge: 'Branding',
    titleLine1: 'Make your imprint',
    titleLine2: 'feel unforgettable.',
    description:
      'From visual identity to cover systems, we shape a publishing presence that feels premium, coherent, and unmistakably yours.',
    image: brandImage,
    ctaLabel: 'Start Branding',
    route: '/solutions/branding',
  },
  {
    badge: 'Educational',
    titleLine1: 'Build learning materials',
    titleLine2: 'with lasting impact.',
    description:
      'We create curriculum-ready books and educational assets that are polished, accessible, and aligned with your publishing goals.',
    image: educationImage,
    ctaLabel: 'Explore Education',
    route: '/solutions/educational-publishing',
  },
  {
    badge: 'Printing',
    titleLine1: 'Bring every page',
    titleLine2: 'to life beautifully.',
    description:
      'Premium print production, thoughtful finishing, and meticulous quality control make every edition feel crafted with care.',
    image: printingImage,
    ctaLabel: 'Start Printing',
    route: '/solutions/printing',
  },
]

export function HeroBackgroundCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slide = slides[activeIndex]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="hero-bg" aria-label="Featured publishing services">
      <div className="hero-bg__backdrop">
        <div className="hero-bg__left-overlay" aria-hidden="true" />
        <div className="hero-bg__image-shell hero-bg__image-shell--active">
          <img
            key={`${slide.image}-${activeIndex}`}
            className="hero-bg__image"
            src={slide.image}
            alt={slide.titleLine1}
          />
        </div>
      </div>

      <div className="hero-bg__content">
        <div className="hero-bg__copy">
          <span className="hero-bg__eyebrow">{slide.badge}</span>
          <h1 className="hero-bg__heading">
            {slide.titleLine1}
            <br />
            <span className="hero-bg__heading-accent">{slide.titleLine2}</span>
          </h1>
          <p className="hero-bg__description">{slide.description}</p>

          <div className="hero-bg__actions">
            <Link className="hero-bg__cta hero-bg__cta--primary" to={slide.route}>
              {slide.ctaLabel}
            </Link>
            <Link className="hero-bg__cta hero-bg__cta--ghost" to="/#services">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="hero-bg__indicators" role="tablist" aria-label="Hero slides">
          {slides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show slide ${index + 1}: ${item.titleLine1}`}
              className={`hero-bg__indicator${index === activeIndex ? ' hero-bg__indicator--active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
