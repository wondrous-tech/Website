import { Link } from 'react-router-dom'
import educationImage from '../../assets/reading.jpg'
import './EducationalHero.css'

export function EducationalHero() {
  return (
    <section className="educational-hero" style={{ backgroundImage: `url(${educationImage})` }}>
      <div className="educational-hero__scrim" aria-hidden="true" />

      <div className="educational-hero__container">
        <span className="educational-hero__badge educational-hero__reveal">
          <span className="educational-hero__badge-dot" aria-hidden="true" />
          Educational Publishing
        </span>

        <h1 className="educational-hero__heading educational-hero__reveal educational-hero__reveal--delay-1">
          Empowering African Education Through Books
        </h1>

        <p className="educational-hero__subtext educational-hero__reveal educational-hero__reveal--delay-2">
          At Wondrous Publishing, we are committed to supporting educational institutions across Africa with high-quality, affordable, and curriculum-aligned learning materials. We partner with schools, colleges, and training centres to publish textbooks, workbooks, study guides, exam preparation books, and supplementary reading materials tailored to the African learner.
        </p>

        <div className="educational-hero__actions educational-hero__reveal educational-hero__reveal--delay-3">
          <Link className="educational-hero__cta cursor-target" to="/contact?type=educational">
            Partner With Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9V9" fill="currentColor" />
            </svg>
          </Link>
          <a className="educational-hero__cta-outline cursor-target" href="#services">
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
