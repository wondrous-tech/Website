import './EditingIncluded.css'

const inclusions = [
  {
    key: 'book-layout',
    title: 'Book Layout & Graphic Design',
    description: 'Our book layout and graphic design service ensures your manuscript is professionally formatted and visually appealing for both print and digital publishing. We create clean, reader-friendly layouts, attractive book covers, and high-quality designs that enhance the overall presentation of your book while reflecting your message, style, and brand.',
    icon: (
      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 12V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V12C18 12.55 17.8042 13.0208 17.4125 13.4125C17.0208 13.8042 16.55 14 16 14H2C1.45 14 0.979167 13.8042 0.5875 13.4125C0.195833 13.0208 0 12.55 0 12V12M7.325 6H16V2H7.325V6M12.675 12H16V8H12.675V12M7.325 12H10.675V8H7.325V12M2 12H5.325V2H2V12"
          fill="#735C00"
        />
      </svg>
    ),
  },
  {
    key: 'isbn-copyright',
    title: 'ISBN & Copyright Registration',
    description: 'We assist authors in securing ISBN numbers and copyright registration for their books to ensure professional publishing and legal protection of their work. Our service guides you through the registration process, helping your book gain official identification, credibility, and protection against unauthorized use or reproduction.',
    icon: (
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 18V13H2V16H5V18H0V18M17 18V16H20V13H22V18H17V18M3 15V3H5V15H3V15M6 15V3H7V15H6V15M9 15V3H11V15H9V15M12 15V3H15V15H12V15M16 15V3H17V15H16V15M18 15V3H19V15H18V15M0 5V0H5V2H2V5H0V5M20 5V2H17V0H22V5H20V5"
          fill="#735C00"
        />
      </svg>
    ),
  },
]

export function EditingIncluded() {
  return (
    <section className="editing-included-section">
      <div className="editing-included">
        <div className="editing-included__header">
          <div className="editing-included__intro">
            <h2 className="editing-included__heading">Additional Services</h2>
            <p className="editing-included__description">
              In addition to your core editing package, we also offer these professional add-on services to support your publishing goals.
            </p>
          </div>
          <span className="editing-included__badge">Available as Add-Ons</span>
        </div>

        <div className="editing-included__grid">
          {inclusions.map((item) => (
            <div key={item.key} className="editing-included__item">
              <span className="editing-included__icon">{item.icon}</span>
              <h3 className="editing-included__item-title">{item.title}</h3>
              <p className="editing-included__item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
