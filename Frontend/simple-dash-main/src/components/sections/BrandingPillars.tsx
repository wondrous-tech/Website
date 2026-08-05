import './BrandingPillars.css'

const pillars = [
  {
    key: 'brand-identity',
    title: 'Brand Identity Design',
    description: 'Crafting the core essence of your brand — the visual language that defines who you are.',
    items: [
      'Logo Design',
      'Brand Style Guides',
      'Brand Strategy',
    ],
    icon: (
      <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.288455 26.1922L0 23.7577L4.07306 12.5308C4.36152 12.7943 4.6692 13.0111 4.99612 13.1813C5.32303 13.3515 5.66918 13.4846 6.03455 13.5808L2.08264 24.4731L0.288455 26.1922V26.1922M15.4615 26.1922L13.6673 24.4731L9.71539 13.5808C10.0808 13.4846 10.4269 13.3515 10.7538 13.1813C11.0807 13.0111 11.3884 12.7943 11.6769 12.5308L15.7499 23.7577L15.4615 26.1922V26.1922M7.87497 11.625C6.73075 11.625 5.7572 11.2235 4.95432 10.4207C4.15144 9.61777 3.75 8.64422 3.75 7.5C3.75 6.525 4.04327 5.68269 4.62981 4.97308C5.21635 4.26347 5.92308 3.80194 6.75 3.58848V0H8.99994V3.58848C9.82686 3.80194 10.5336 4.26347 11.1201 4.97308C11.7067 5.68269 11.9999 6.525 11.9999 7.5C11.9999 8.64422 11.5985 9.61777 10.7956 10.4207C9.99275 11.2235 9.0192 11.625 7.87497 11.625V11.625M7.87497 9.37503C8.39613 9.37503 8.83893 9.19281 9.20336 8.82838C9.56779 8.46396 9.75 8.02116 9.75 7.5C9.75 6.97884 9.56779 6.53604 9.20336 6.17162C8.83893 5.80719 8.39613 5.62497 7.87497 5.62497C7.35381 5.62497 6.91102 5.80719 6.54659 6.17162C6.18216 6.53604 5.99995 6.97884 5.99995 7.5C5.99995 8.02116 6.18216 8.46396 6.54659 8.82838C6.91102 9.19281 7.35381 9.37503 7.87497 9.37503V9.37503"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    key: 'promotional-materials',
    title: 'Promotional Materials',
    description: 'Tangible expressions of your brand that command attention and respect.',
    items: [
      'Business Cards',
      'Brochures',
      'Flyers',
      'Posters',
      'Banners',
    ],
    icon: (
      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.2884 25.7479L0 16.1999L1.84034 14.7864L12.2884 22.8749L22.7364 14.7864L24.5767 16.1999L12.2884 25.7479V25.7479M12.2884 19.096L0 9.54801L12.2884 0L24.5767 9.54801L12.2884 19.096V19.096M12.2884 16.223L20.9134 9.54801L12.2884 2.87301L3.66337 9.54801L12.2884 16.223V16.223"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    key: 'corporate-branding',
    title: 'Corporate Branding',
    description: 'Transforming physical spaces and corporate materials into immersive brand experiences.',
    items: [
      'Corporate Stationery',
      'Office Signage',
      'Vehicle Wraps',
      'Spatial Wayfinding',
      'All Promotional Materials',
    ],
    icon: (
      <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 26.2499V0H14.2499V6H28.9038V26.2499H0V26.2499M2.24995 24H6V20.2499H2.24995V24V24M2.24995 18H6V14.2499H2.24995V18V18M2.24995 12H6V8.24994H2.24995V12V12M2.24995 6H6V2.24995H2.24995V6V6M8.24994 24H12V20.2499H8.24994V24V24M8.24994 18H12V14.2499H8.24994V18V18M8.24994 12H12V8.24994H8.24994V12V12M8.24994 6H12V2.24995H8.24994V6V6M14.2499 24H26.6538V8.24994H14.2499V12H17.5384V14.2499H14.2499V18H17.5384V20.2499H14.2499V24V24M20.8269 14.2499V12H23.0769V14.2499H20.8269V14.2499M20.8269 20.2499V18H23.0769V20.2499H20.8269V20.2499"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

export function BrandingPillars() {
  return (
    <section className="branding-pillars">
      <div className="branding-pillars__container">
        <div className="branding-pillars__intro">
          <span className="branding-pillars__eyebrow">Our Expertise</span>
          <h2 className="branding-pillars__heading">The Pillars of Branding</h2>
        </div>

        <div className="branding-pillars__grid">
          {pillars.map((pillar) => (
            <div key={pillar.key} className="branding-pillars__card">
              <div className="branding-pillars__icon">{pillar.icon}</div>
              <h3 className="branding-pillars__card-title">{pillar.title}</h3>
              <p className="branding-pillars__description">{pillar.description}</p>

              <ul className="branding-pillars__list">
                {pillar.items.map((item) => (
                  <li key={item}>
                    <span className="branding-pillars__bullet" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
