import { Link } from 'react-router-dom'
import './FinishingCta.css'

export function FinishingCta() {
  return (
    <section className="finishing-cta">
      <div className="finishing-cta__container">
        <h2 className="finishing-cta__heading">Ready to perfect your project?</h2>

        <p className="finishing-cta__description">
          Consult with our artisanal team to determine the optimal finishing combination for your brand or
          publication.
        </p>

        <div className="finishing-cta__actions">
          <Link className="finishing-cta__cta cursor-target" to="/contact?type=finishing">
            Start Quote Process
          </Link>
          <Link className="finishing-cta__cta-outline cursor-target" to="/contact?type=general">
            Download Finishing Guide
          </Link>
        </div>
      </div>
    </section>
  )
}
