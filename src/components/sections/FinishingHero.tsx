import { Link } from 'react-router-dom'
import finishingImage from '../../assets/books.jpg'
import './FinishingHero.css'

export function FinishingHero() {
  return (
    <section className="finishing-hero" style={{ backgroundImage: `url(${finishingImage})` }}>
      <div className="finishing-hero__scrim" aria-hidden="true" />

      <div className="finishing-hero__container">
        <span className="finishing-hero__eyebrow finishing-hero__reveal finishing-hero__reveal--delay-1">
          <span className="finishing-hero__eyebrow-dot" aria-hidden="true" />
          Artisanal Craftsmanship
        </span>

        <h1 className="finishing-hero__heading finishing-hero__reveal finishing-hero__reveal--delay-2">
          The Mastery of Detail
        </h1>

        <p className="finishing-hero__subtext finishing-hero__reveal finishing-hero__reveal--delay-3">
          Elevating every page with artisanal precision and world-class finishes.
        </p>

        <div className="finishing-hero__actions finishing-hero__reveal finishing-hero__reveal--delay-4">
          <Link className="finishing-hero__cta cursor-target" to="/contact?type=finishing">
            Request a Finishing Quote
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.07404 4.81247H0V3.93749H7.07404L3.75128 0.614729L4.37498 0L8.74996 4.37498L4.37498 8.74996L3.75128 8.13523L7.07404 4.81247V4.81247"
                fill="currentColor"
              />
            </svg>
          </Link>
          <a className="finishing-hero__cta-outline cursor-target" href="#finalities">
            Explore Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
