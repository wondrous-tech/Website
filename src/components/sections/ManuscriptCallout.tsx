import { Link } from 'react-router-dom'
import partnerImage from '../../assets/back.jpeg'
import './ManuscriptCallout.css'

export function ManuscriptCallout() {
  return (
    <section className="manuscript-callout">
      <div
        className="manuscript-callout__card"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(20, 77, 55, 0.88), rgba(20, 77, 55, 0.75)), url(${partnerImage})`,
        }}
      >
        <div className="manuscript-callout__container">
          <h2 className="manuscript-callout__heading">
            Ready to write the next chapter of African literature?
          </h2>

          <div className="manuscript-callout__actions">
            <Link className="manuscript-callout__btn-solid" to="/contact?type=manuscript">
              Submit Your Manuscript
            </Link>
            <Link className="manuscript-callout__btn-outline" to="/contact?type=partnership">
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
