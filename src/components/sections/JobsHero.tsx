import { jobs } from '../../utils/jobs'
import './JobsHero.css'

export function JobsHero() {
  return (
    <section className="jobs-hero">
      <svg
        className="jobs-hero__watermark"
        width="220"
        height="183"
        viewBox="0 0 240 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g opacity="0.08" fill="#1B1C1A">
          <rect x="94" y="18" width="52" height="40" rx="18" />
          <rect x="18" y="66" width="204" height="60" rx="14" />
          <rect x="18" y="132" width="204" height="60" rx="14" />
          <rect x="108" y="122" width="24" height="18" rx="4" />
        </g>
        <rect x="108" y="30" width="28" height="16" rx="8" fill="#FAF9F5" />
      </svg>

      <div className="jobs-hero__container">
        <span className="jobs-hero__eyebrow">Careers at Wondrous</span>

        <h1 className="jobs-hero__heading">Help Us Build The Future Of African Publishing</h1>

        <p className="jobs-hero__subtext">
          We are always looking for storytellers, builders, and operators who believe in the
          power of books to shape destinies. Explore our open roles below.
        </p>

        <div className="jobs-hero__stat">
          <span className="jobs-hero__stat-value">{jobs.length}</span>
          <span className="jobs-hero__stat-label">Open Positions</span>
        </div>
      </div>
    </section>
  )
}
