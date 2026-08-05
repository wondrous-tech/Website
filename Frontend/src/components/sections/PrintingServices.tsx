import './PrintingServices.css'

const services = [
  {
    key: 'digital-printing',
    index: '01',
    title: 'Digital Printing',
    items: [
      'Business Cards',
      'Flyers',
      'Brochures',
      'Booklets & Catalogues',
      'Menus',
      'Customized Notebooks',
    ],
    linkLabel: 'Explore Options',
    icon: (
      <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.71152 26.2498C1.95383 26.2498 1.31249 25.9873 0.787493 25.4623C0.262498 24.9373 0 24.296 0 23.5383V7.96146C0 7.20378 0.262498 6.56243 0.787493 6.03744C1.31249 5.51244 1.95383 5.24995 2.71152 5.24995H9V2.71152C9 1.95383 9.2625 1.31249 9.78749 0.787493C10.3125 0.262498 10.9538 0 11.7115 0H16.7884C17.5461 0 18.1874 0.262498 18.7124 0.787493C19.2374 1.31249 19.4999 1.95383 19.4999 2.71152V5.24995H25.7884C26.5461 5.24995 27.1874 5.51244 27.7124 6.03744C28.2374 6.56243 28.4999 7.20378 28.4999 7.96146V23.5383C28.4999 24.296 28.2374 24.9373 27.7124 25.4623C27.1874 25.9873 26.5461 26.2498 25.7884 26.2498H2.71152V26.2498M11.2499 5.24995H17.2499V2.71152C17.2499 2.59612 17.2019 2.49035 17.1057 2.39419C17.0095 2.29803 16.9038 2.24995 16.7884 2.24995H11.7115C11.5961 2.24995 11.4903 2.29803 11.3942 2.39419C11.298 2.49035 11.2499 2.59612 11.2499 2.71152V5.24995V5.24995M26.2499 17.6249H17.9999V20.2498H10.5V17.6249H2.24995V23.5383C2.24995 23.6537 2.29803 23.7595 2.39419 23.8556C2.49035 23.9518 2.59612 23.9999 2.71152 23.9999H25.7884C25.9038 23.9999 26.0095 23.9518 26.1057 23.8556C26.2019 23.7595 26.2499 23.6537 26.2499 23.5383V17.6249V17.6249M12.7499 17.9999H15.7499V14.9999H12.7499V17.9999V17.9999M2.24995 15.3749H10.5V12.7499H17.9999V15.3749H26.2499V7.96146C26.2499 7.84607 26.2019 7.74029 26.1057 7.64413C26.0095 7.54797 25.9038 7.49989 25.7884 7.49989H2.71152C2.59612 7.49989 2.49035 7.54797 2.39419 7.64413C2.29803 7.74029 2.24995 7.84607 2.24995 7.96146V15.3749V15.3749"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    key: 'large-format-printing',
    index: '02',
    title: 'Large Format Printing',
    items: [
      'Posters',
      'Banners',
      'Roll-up Displays',
      'Billboards',
      'Wall Murals',
      'Event Signage',
    ],
    linkLabel: 'View Materials',
    icon: (
      <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.3076 12.4038V10.1538H28.7307V12.4038H23.3076V12.4038M25.0211 22.4999L20.6827 19.2461L22.0499 17.4519L26.3884 20.7057L25.0211 22.4999V22.4999M21.9922 5.04801L20.625 3.25382L24.9634 0L26.3307 1.79419L21.9922 5.04801V5.04801M4.24037 20.9999V15.1441H2.71152C1.96345 15.1441 1.32451 14.8792 0.794705 14.3494C0.264902 13.8196 0 13.1807 0 12.4326V10.125C0 9.3769 0.264902 8.73796 0.794705 8.20816C1.32451 7.67836 1.96345 7.41346 2.71152 7.41346H8.50958L15.2307 3.40388V19.1537L8.50958 15.1441H6.49031V20.9999H4.24037V20.9999M12.9807 15.1557V7.40186L9.13264 9.6634H2.71152C2.59612 9.6634 2.49035 9.71148 2.39419 9.80764C2.29803 9.9038 2.24995 10.0096 2.24995 10.125V12.4326C2.24995 12.548 2.29803 12.6538 2.39419 12.7499C2.49035 12.8461 2.59612 12.8942 2.71152 12.8942H9.13264L12.9807 15.1557V15.1557M17.3076 15.9576V6.59997C17.8961 7.13266 18.3701 7.80381 18.7297 8.61342C19.0894 9.42303 19.2692 10.3115 19.2692 11.2788C19.2692 12.2461 19.0894 13.1346 18.7297 13.9442C18.3701 14.7538 17.8961 15.4249 17.3076 15.9576V15.9576"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    key: 'offset-printing',
    index: '03',
    title: 'Offset Printing',
    items: [
      'Bulk Book Printing',
      'Magazines',
      'Annual Reports',
      'Corporate Stationery',
      'Packaging & Labels',
      'Custom Branded Products',
    ],
    linkLabel: 'Customize Now',
    icon: (
      <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24.6056 10.2114L23.0191 6.69222L19.4999 5.1057L23.0191 3.51919L24.6056 0L26.1921 3.51919L29.7113 5.1057L26.1921 6.69222L24.6056 10.2114V10.2114M24.6056 30.6344L23.0191 27.1153L19.4999 25.5287L23.0191 23.9422L24.6056 20.423L26.1921 23.9422L29.7113 25.5287L26.1921 27.1153L24.6056 30.6344V30.6344M10.1826 25.4998L7.00952 18.4903L0 15.3172L7.00952 12.1442L10.1826 5.13466L13.3556 12.1442L20.3651 15.3172L13.3556 18.4903L10.1826 25.4998V25.4998M10.1826 20.0422L11.6826 16.8172L14.9076 15.3172L11.6826 13.8172L10.1826 10.5922L8.68256 13.8172L5.45756 15.3172L8.68256 16.8172L10.1826 20.0422V20.0422"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

const linkArrow = (
  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.614729 8.16662L0 7.5519L6.67692 0.874979H2.62498V0H8.16662V5.54165H7.29165V1.48971L0.614729 8.16662V8.16662"
      fill="currentColor"
    />
  </svg>
)

export function PrintingServices() {
  return (
    <section className="printing-services">
      <div className="printing-services__intro">
        <h2 className="printing-services__heading">Our Printing Services</h2>
        <span className="printing-services__underline" aria-hidden="true" />
        <p className="printing-services__subtext">
          We offer high-quality printing solutions designed to meet both personal and business needs. From business cards, flyers, brochures, posters, banners, and branding materials to customized print products, we deliver sharp, professional results. Our commitment to quality, affordability, and customer satisfaction ensures every project is printed with precision and attention to detail. Whether you need small or bulk printing, we provide reliable services tailored to your requirements.
        </p>
      </div>

      <div className="printing-services__grid">
        {services.map((service) => (
          <div key={service.key} className="printing-services__card">
            <span className="printing-services__card-overlay" aria-hidden="true" />
            <span className="printing-services__index" aria-hidden="true">
              {service.index}
            </span>
            <div className="printing-services__icon">{service.icon}</div>
            <h3 className="printing-services__card-title">{service.title}</h3>

            <ul className="printing-services__list">
              {service.items.map((item) => (
                <li key={item}>
                  <span className="printing-services__bullet" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <a className="printing-services__link cursor-target" href="#get-a-quote">
              {service.linkLabel}
              {linkArrow}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
