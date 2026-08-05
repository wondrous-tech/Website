import { Link } from 'react-router-dom'
import './PrintingCta.css'

export function PrintingCta() {
  return (
    <section className="printing-cta">
      <div className="printing-cta__glow" aria-hidden="true" />
      <svg
        className="printing-cta__watermark"
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M140 62.2L130.5 40.8L109 31.3L130.5 21.8L140 0.399994L149.5 21.8L171 31.3L149.5 40.8L140 62.2V62.2M140 171.6L130.5 150.2L109 140.7L130.5 131.2L140 109.8L149.5 131.2L171 140.7L149.5 150.2L140 171.6V171.6M62.2 148L42.9 105L0 85.7L42.9 66.4L62.2 23.4L81.5 66.4L124.4 85.7L81.5 105L62.2 148V148"
          fill="white"
        />
      </svg>

      <div className="printing-cta__container">
        <h2 className="printing-cta__heading">Ready to bring your project to life? Let&rsquo;s print your future.</h2>

        <div className="printing-cta__actions">
          <Link className="printing-cta__cta cursor-target" to="/contact?type=printing">
            Start Your Project
          </Link>
          <a className="printing-cta__cta-outline cursor-target" href="/contact?type=general">
            Talk to a Specialist
          </a>
        </div>
      </div>
    </section>
  )
}
