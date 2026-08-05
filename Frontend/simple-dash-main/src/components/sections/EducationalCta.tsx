import { Link } from 'react-router-dom'
import './EducationalCta.css'

export function EducationalCta() {
  return (
    <section className="educational-cta">
      <div className="educational-cta__glow" aria-hidden="true" />

      <div className="educational-cta__container">
        <span className="educational-cta__eyebrow">Ready to Collaborate?</span>
        <h2 className="educational-cta__heading">
          Let Us Help You Publish Books That Educate, Inspire, and Transform.
        </h2>

        <p className="educational-cta__subtext">
          Whether you are a school, a teacher, an author, or an organisation with a vision for educational impact, Wondrous Publishing is ready to partner with you.
        </p>

        <div className="educational-cta__actions">
          <Link className="educational-cta__cta cursor-target" to="/contact?type=educational">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="currentColor" />
            </svg>
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  )
}
