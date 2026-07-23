import introImage from '../../assets/branding.png'
import './BrandingIntro.css'

export function BrandingIntro() {
  return (
    <section className="branding-intro">
      <div className="branding-intro__content">
        <h2 className="branding-intro__heading">Branding That Leaves a Lasting Impression</h2>
        <p className="branding-intro__subtext">
          We help businesses build strong and memorable brand identities through creative and professional branding solutions. Our goal is to deliver high-quality branding that increases visibility, strengthens customer recognition, and gives your business a professional and lasting impression. Reach out to us for all your promotional materials and corporate branding.
        </p>
      </div>

      <div className="branding-intro__visual">
        <img className="branding-intro__image" src={introImage} alt="Wondrous Publishing brand materials" />
        <div className="branding-intro__overlay" aria-hidden="true" />
      </div>
    </section>
  )
}
