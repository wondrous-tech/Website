import { Link } from 'react-router-dom'
import ghostwritingImage from '../../assets/book1.jpeg'
import './EditingGhostwriting.css'

export function EditingGhostwriting() {
  const handleViewSamples = () => {
    // Open Gmail compose with prefilled subject and body for requesting samples
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@wondrouspublishing.com&su=${encodeURIComponent('Request: Editing Samples')}&body=${encodeURIComponent('Dear Wondrous Publishing,\n\nI would like to view samples of your editing work. Please share examples of your editing quality.\n\nThank you.')}`
    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="editing-ghostwriting-section">
      <div className="editing-ghostwriting">
        <article className="editing-ghostwriting__card" id="ghostwriting">
          <div className="editing-ghostwriting__image">
            <img src={ghostwritingImage} alt="Author collaborating with a ghostwriter" />
          </div>
          <div className="editing-ghostwriting__content">
            <h3 className="editing-ghostwriting__title">Ghostwriting</h3>
            <p className="editing-ghostwriting__description">
              Our ghostwriting services are designed for individuals with powerful stories, ideas, knowledge, or experiences but who may not have the time, writing skills, or structure needed to turn them into a professionally written book. Here we write the book on your behalf.
            </p>
            <p className="editing-ghostwriting__description">
              Whether it is a memoir, autobiography, faith-based book, inspirational book, business book, or personal story, we work closely with you in a professional and collaborative manner to transform your ideas into a compelling book that truly reflects your vision and voice. Our goal is to deliver a polished manuscript you will be proud to call your own.
            </p>
            <Link className="editing-ghostwriting__link" to="/contact?type=editing">
              Inquire about Ghostwriting
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9V9"
                  fill="#FFE088"
                />
              </svg>
            </Link>
          </div>
        </article>

        <article className="editing-ghostwriting__academy" id="writing-academy">
          <div className="editing-ghostwriting__academy-intro">
            <h3 className="editing-ghostwriting__academy-title">Writing Academy</h3>
            <p className="editing-ghostwriting__academy-description">
              We additionally offer writing training services that equips aspiring and experienced writers with practical skills in book writing, storytelling, manuscript development, grammar, and structure. Through professional guidance and hands-on training, we help writers develop confidence, refine their craft, and turn their ideas into impactful written works.
            </p>
          </div>
          <div className="editing-ghostwriting__academy-actions">
            <Link className="editing-ghostwriting__academy-button" to="/contact?type=editing">
              Enquire
            </Link>
            <button
              type="button"
              className="editing-ghostwriting__samples-button"
              onClick={handleViewSamples}
            >
              View Samples
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9V9"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}
