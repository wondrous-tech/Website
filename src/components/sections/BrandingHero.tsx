import { Link } from 'react-router-dom'
import backgroundImage from '../../assets/back.jpeg'
import './BrandingHero.css'

export function BrandingHero() {
  return (
    <section className="branding-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="branding-hero__scrim" aria-hidden="true" />

      <div className="branding-hero__container">
        <span className="branding-hero__eyebrow branding-hero__reveal">
          <span className="branding-hero__eyebrow-dot" aria-hidden="true" />
          Visual Excellence
        </span>

        <h1 className="branding-hero__heading branding-hero__reveal branding-hero__reveal--delay-1">
          Architects of Identity
        </h1>

        <p className="branding-hero__subtext branding-hero__reveal branding-hero__reveal--delay-2">
          Crafting the visual language of modern visionary thought — from brand systems to
          collateral that carries your story with confidence.
        </p>

        <div className="branding-hero__actions branding-hero__reveal branding-hero__reveal--delay-3">
          <Link className="branding-hero__cta cursor-target" to="/contact?type=branding">
            Inquire About Services
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.07404 4.81247H0V3.93749H7.07404L3.75128 0.614729L4.37498 0L8.74996 4.37498L4.37498 8.74996L3.75128 8.13523L7.07404 4.81247V4.81247"
                fill="currentColor"
              />
            </svg>
          </Link>
          <a className="branding-hero__cta-outline cursor-target" href="#portfolio">
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
