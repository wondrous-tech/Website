import './BrandingPhilosophy.css'

export function BrandingPhilosophy() {
  return (
    <section className="branding-philosophy">
      <div className="branding-philosophy__container">
        <svg
          className="branding-philosophy__quote-mark"
          width="34"
          height="24"
          viewBox="0 0 34 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M3.4 24L8 16V16V16C5.8 16 3.91667 15.2167 2.35 13.65C0.783333 12.0833 0 10.2 0 8C0 5.8 0.783333 3.91667 2.35 2.35C3.91667 0.783333 5.8 0 8 0C10.2 0 12.0833 0.783333 13.65 2.35C15.2167 3.91667 16 5.8 16 8C16 8.76667 15.9083 9.475 15.725 10.125C15.5417 10.775 15.2667 11.4 14.9 12L8 24H3.4V24M21.4 24L26 16V16V16C23.8 16 21.9167 15.2167 20.35 13.65C18.7833 12.0833 18 10.2 18 8C18 5.8 18.7833 3.91667 20.35 2.35C21.9167 0.783333 23.8 0 26 0C28.2 0 30.0833 0.783333 31.65 2.35C33.2167 3.91667 34 5.8 34 8C34 8.76667 33.9083 9.475 33.725 10.125C33.5417 10.775 33.2667 11.4 32.9 12L26 24H21.4V24"
            fill="var(--accent-yellow)"
          />
        </svg>

        <blockquote className="branding-philosophy__quote">
          "Our goal is to deliver high-quality branding that increases visibility, strengthens customer recognition, and gives your business a professional and lasting impression."
        </blockquote>

        <span className="branding-philosophy__divider" aria-hidden="true" />
      </div>
    </section>
  )
}
