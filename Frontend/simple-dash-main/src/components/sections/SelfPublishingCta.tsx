import { Link } from 'react-router-dom'
import './SelfPublishingCta.css'

export function SelfPublishingCta() {
  return (
    <section className="self-publishing-cta">
      <div className="self-publishing-cta__border">
        <span className="self-publishing-cta__glyph" aria-hidden="true">
          &ldquo;
        </span>

        <p className="self-publishing-cta__quote">
          "You write it. We publish it. The world reads it."
        </p>

        <div className="self-publishing-cta__actions">
          <Link className="self-publishing-cta__cta" to="/contact?type=self-publishing">
            Start Your Publishing Journey
          </Link>

        </div>
      </div>
    </section>
  )
}
