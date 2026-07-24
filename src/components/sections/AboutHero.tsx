import './AboutHero.css'
import aboutHeroBg from '../../assets/about-hero-bg.png'

export function AboutHero() {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${aboutHeroBg})` }}
    >
      <div className="about-hero__scrim" aria-hidden="true" />
      <div className="about-hero__vignette" aria-hidden="true" />

      <div className="about-hero__inner">
        <h1 className="about-hero__heading about-hero__anim" style={{ ['--d' as string]: '0ms' }}>
          <span className="about-hero__word">About</span>
          <span className="about-hero__word about-hero__word--accent">
            Us<span className="about-hero__word-dot" aria-hidden="true" />
          </span>
        </h1>

        <p className="about-hero__lede about-hero__anim" style={{ ['--d' as string]: '180ms' }}>
          Wondrous Publishing is a visionary Pan-African publishing house dedicated to
          discovering, nurturing, and promoting transformative voices across the continent.
        </p>

        <p className="about-hero__quote about-hero__anim" style={{ ['--d' as string]: '340ms' }}>
          "Engineering platforms for destiny-shaping and intellectual actualization."
        </p>
      </div>
    </section>
  )
}
