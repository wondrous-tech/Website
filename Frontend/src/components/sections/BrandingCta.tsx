import './BrandingCta.css'

export function BrandingCta() {
  return (
    <section className="branding-cta">
      <div className="branding-cta__border branding-cta__border--small" aria-hidden="true" />
      <div className="branding-cta__border branding-cta__border--large" aria-hidden="true" />

      <div className="branding-cta__container">
        <h2 className="branding-cta__heading">Forge Your Legacy</h2>

        <p className="branding-cta__subtext">
          Reach out for all your promotional materials and corporate branding. Let us translate your business vision
          into a visual masterpiece.
        </p>

        <div className="branding-cta__actions">
          <a className="branding-cta__cta cursor-target" href="/contact?type=branding">
            Inquire About Services
          </a>
          <a className="branding-cta__cta-outline cursor-target" href="#portfolio">
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
