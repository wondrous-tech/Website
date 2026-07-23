import './AboutHero.css'

export function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__scrim" aria-hidden="true" />

      <div className="about-hero__container">
        <span className="about-hero__eyebrow">
          <span className="about-hero__eyebrow-rule" aria-hidden="true" />
          A Visionary Narrative
        </span>

        <h1 className="about-hero__heading">About Us</h1>

        <p className="about-hero__lede">
          Wondrous Publishing is a visionary Pan-African publishing house dedicated to
          discovering, nurturing, and promoting transformative voices across the continent.
        </p>

        <p className="about-hero__quote">
          "Engineering platforms for destiny-shaping and intellectual actualization."
        </p>
      </div>

      <svg
        className="about-hero__scroll-cue"
        width="18"
        height="9"
        viewBox="0 0 18 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M9 5.55L0 1.05L1.05 0L9 3.45L16.95 0L18 1.05L9 5.55Z" fill="white" fillOpacity="0.5" />
      </svg>
    </section>
  )
}
