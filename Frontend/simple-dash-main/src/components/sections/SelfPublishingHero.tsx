import { Link } from 'react-router-dom'
import selfPublishingImage from '../../assets/selfp.jpg'
import './SelfPublishingHero.css'

export function SelfPublishingHero() {
  return (
    <section className="self-publishing-hero" style={{ backgroundImage: `url(${selfPublishingImage})` }}>
      <div className="self-publishing-hero__scrim" aria-hidden="true" />

      <div className="self-publishing-hero__container">
        <span className="self-publishing-hero__eyebrow">
          <span className="self-publishing-hero__eyebrow-dot" aria-hidden="true" />
          Self-Publishing Solutions
        </span>

        <h1 className="self-publishing-hero__heading">Your Voice, Our Craft</h1>

        <p className="self-publishing-hero__subtext">
          Do you have a powerful message, a story that needs to be heard, or a book that can change lives? At Wondrous Publishing, we make self-publishing simple, professional, and impactful — giving you full creative control while we handle the hard work. We walk with you from manuscript to market, turning your ideas into a polished, publish-ready book you'll be proud to share with the world.
        </p>

        <div className="self-publishing-hero__actions">
          <Link className="self-publishing-hero__cta" to="/contact?type=self-publishing">
            Start Your Journey
          </Link>
          <a className="self-publishing-hero__cta-outline" href="#packages">
            View Services
          </a>
        </div>
      </div>
    </section>
  )
}
