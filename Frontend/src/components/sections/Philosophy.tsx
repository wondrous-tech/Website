import { Link } from 'react-router-dom'
import watermark from '../../assets/pngwing.com.png'
import './Philosophy.css'

export function Philosophy() {
  return (
    <section className="philosophy" aria-label="Founder's philosophy">
      <img
        className="philosophy__watermark"
        src={watermark}
        alt=""
        aria-hidden="true"
      />
      <div className="philosophy__scrim" aria-hidden="true" />



      <div className="philosophy__inner">
        <span className="philosophy__mark" aria-hidden="true">"</span>

        <div className="philosophy__body">
          <blockquote className="philosophy__quote">
            The African author is not just a writer, but a custodian of a destiny that is unfolding in every ink stroke.
          </blockquote>
          <cite className="philosophy__cite">
            <span className="philosophy__cite-line" aria-hidden="true" />
            MK Cyprian, Founder
          </cite>
        </div>

        <Link className="philosophy__cta" to="/about">
          <span className="philosophy__cta-text">Our Philosophy</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
