import './ContactHero.css'

function MailIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V4V14V4Z"
        fill="white"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.95 18C14.8667 18 12.8083 17.5458 10.775 16.6375C8.74167 15.7292 6.89167 14.4417 5.225 12.775C3.55833 11.1083 2.27083 9.25833 1.3625 7.225C0.454167 5.19167 0 3.13333 0 1.05C0 0.75 0.1 0.5 0.3 0.3C0.5 0.1 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0791667 5.725 0.2375C5.90833 0.395833 6.01667 0.583333 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.70417 9.1125 5.1625 9.6875C5.62083 10.2625 6.125 10.8167 6.675 11.35C7.19167 11.8667 7.73333 12.3458 8.3 12.7875C8.86667 13.2292 9.46667 13.6333 10.1 14L12.45 11.65C12.6 11.5 12.7958 11.3875 13.0375 11.3125C13.2792 11.2375 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1375 17.775 12.3125C17.925 12.4875 18 12.6833 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18ZM3.025 6L4.675 4.35L4.25 2H2.025C2.10833 2.68333 2.225 3.35833 2.375 4.025C2.525 4.69167 2.74167 5.35 3.025 6ZM11.975 14.95C12.625 15.2333 13.2875 15.4583 13.9625 15.625C14.6375 15.7917 15.3167 15.9 16 15.95V13.75L13.65 13.275L11.975 14.95Z"
        fill="white"
      />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z"
        fill="#12a45c"
      />
    </svg>
  )
}

export function ContactHero() {
  return (
    <div className="contact-hero">
      <div className="contact-hero__intro">
        <h1 className="contact-hero__heading">
          Begin Your
          <br />
          <em className="contact-hero__heading-accent">
            Informed
            <br />
            Transformation
          </em>
        </h1>

        <p className="contact-hero__subtext">
          Whether you seek a professional evaluation or have questions about our literary
          excellence, our team is here to guide your manuscript to its destiny.
        </p>
      </div>

      <div className="contact-hero__cards">
        <div className="contact-card">
          <div className="contact-card__header">
            <span className="contact-card__icon contact-card__icon--green">
              <MailIcon />
            </span>
            <h3 className="contact-card__title">Editorial Inquiry</h3>
          </div>
          <p className="contact-card__text">Connect with our acquisitions team:</p>
          <a className="contact-card__link" href="mailto:info@wondrouspublishing.com">
            info@wondrouspublishing@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-card__header">
            <span className="contact-card__icon contact-card__icon--gold">
              <PhoneIcon />
            </span>
            <h3 className="contact-card__title">Voice Consultation</h3>
          </div>
          <p className="contact-card__text">Direct lines to our Kenya office:</p>
          <a className="contact-card__link" href="tel:+254798872998">
            +254798872998
          </a>
        </div>
      </div>

      <div className="contact-nda">
        <div className="contact-nda__body">
          <h4 className="contact-nda__title">Protect Your Wisdom</h4>
          <p className="contact-nda__text">
            We value intellectual property. Download and sign our Non-Disclosure Agreement, then
            attach it alongside your submission using the upload field in the relevant form.
          </p>
        </div>
        <div className="contact-nda__actions">
          <a
            className="contact-nda__link"
            href="/nda/wondrous-publishing-nda.pdf"
            download="Wondrous-Publishing-NDA.pdf"
          >
            <DownloadIcon />
            Download NDA
          </a>
        </div>
      </div>
    </div>
  )
}

