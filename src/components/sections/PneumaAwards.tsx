import { Link } from 'react-router-dom'
import './PneumaAwards.css'

const awardHighlights = [
  { label: 'Highlights', title: '2023 Winners Ceremony' },
  { label: 'Call for Entries', title: 'The 2024 Category List' },
]

export function PneumaAwards() {
  return (
    <section className="pneuma-awards" id="pneuma-awards">
      <div className="pneuma-awards__border">
        <div className="pneuma-awards__intro">
          <svg
            className="pneuma-awards__icon"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 45V40H20V32.25C17.9583 31.7917 16.1354 30.9271 14.5312 29.6562C12.9271 28.3854 11.75 26.7917 11 24.875C7.875 24.5 5.26042 23.1354 3.15625 20.7812C1.05208 18.4271 0 15.6667 0 12.5V10C0 8.625 0.489583 7.44792 1.46875 6.46875C2.44792 5.48958 3.625 5 5 5H10V0H35V5H40C41.375 5 42.5521 5.48958 43.5312 6.46875C44.5104 7.44792 45 8.625 45 10V12.5C45 15.6667 43.9479 18.4271 41.8438 20.7812C39.7396 23.1354 37.125 24.5 34 24.875C33.25 26.7917 32.0729 28.3854 30.4688 29.6562C28.8646 30.9271 27.0417 31.7917 25 32.25V40H35V45H10ZM10 19.5V10H5V12.5C5 14.0833 5.45833 15.5104 6.375 16.7812C7.29167 18.0521 8.5 18.9583 10 19.5ZM35 19.5C36.5 18.9583 37.7083 18.0521 38.625 16.7812C39.5417 15.5104 40 14.0833 40 12.5V10H35V19.5Z"
              fill="#735C00"
            />
          </svg>

          <h2 className="pneuma-awards__title">Pneuma Awards</h2>
          <p className="pneuma-awards__description">
            Our annual celebration of literary excellence, honoring authors who have demonstrated
            profound impact and visionary thought in their work.
          </p>

          <Link className="pneuma-awards__cta" to="/contact#contact-form-panel">
            Nominate a Writer
          </Link>
        </div>

        <div className="pneuma-awards__cards">
          {awardHighlights.map((item) => (
            <div className="pneuma-awards__card" key={item.title}>
              <div className="pneuma-awards__card-scrim" aria-hidden="true" />
              <div className="pneuma-awards__card-content">
                <span className="pneuma-awards__card-label">{item.label}</span>
                <h3 className="pneuma-awards__card-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
