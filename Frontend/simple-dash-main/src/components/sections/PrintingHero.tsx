import { Link } from 'react-router-dom'
import printingImage from '../../assets/print.jpeg'
import './PrintingHero.css'

export function PrintingHero() {
  return (
    <section className="printing-hero" style={{ backgroundImage: `url(${printingImage})` }}>
      <div className="printing-hero__scrim" aria-hidden="true" />

      <div className="printing-hero__container">
        <span className="printing-hero__eyebrow printing-hero__reveal">
          <span className="printing-hero__eyebrow-dot" aria-hidden="true" />
          Craftsmanship &amp; Technology
        </span>

        <h1 className="printing-hero__heading printing-hero__reveal printing-hero__reveal--delay-1">
          Precision in Every Print
        </h1>

        <p className="printing-hero__subtext printing-hero__reveal printing-hero__reveal--delay-2">
          High-quality printing solutions tailored for visionary brands and personal excellence. We bridge the gap
          between artisanal heritage and modern precision.
        </p>

        <div className="printing-hero__actions printing-hero__reveal printing-hero__reveal--delay-3">
          <Link className="printing-hero__cta cursor-target" to="/contact?type=printing">
            Request a Quote
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.07404 4.81247H0V3.93749H7.07404L3.75128 0.614729L4.37498 0L8.74996 4.37498L4.37498 8.74996L3.75128 8.13523L7.07404 4.81247V4.81247"
                fill="currentColor"
              />
            </svg>
          </Link>
          <a className="printing-hero__cta-outline cursor-target" href="#samples">
            View Samples
          </a>
        </div>
      </div>
    </section>
  )
}
