import { Link } from 'react-router-dom'
import solutionsImage from '../../assets/about.jpeg'
import './EducationalCustomSolutions.css'

export function EducationalCustomSolutions() {
  return (
    <section className="educational-custom">
      <div className="educational-custom__container">
        <div className="educational-custom__visual">
          <div className="educational-custom__glow" aria-hidden="true" />
          <img className="educational-custom__image" src={solutionsImage} alt="School partners reviewing custom curriculum materials" />
        </div>

        <div className="educational-custom__content">
          <div className="educational-custom__intro">
            <h2 className="educational-custom__heading">Why Partner With Wondrous Publishing?</h2>
          </div>

          <ul className="educational-custom__list">
            <li className="educational-custom__item">
              <div className="educational-custom__item-copy">
                <h3 className="educational-custom__item-title">Quality Assurance</h3>
                <p className="educational-custom__item-description">
                  We follow rigorous editorial and production standards to ensure every educational material meets professional publishing benchmarks.
                </p>
              </div>
            </li>
            <li className="educational-custom__item">
              <div className="educational-custom__item-copy">
                <h3 className="educational-custom__item-title">Curriculum Alignment</h3>
                <p className="educational-custom__item-description">
                  All our materials are developed in line with national and regional curricula, ensuring relevance and compliance.
                </p>
              </div>
            </li>
            <li className="educational-custom__item">
              <div className="educational-custom__item-copy">
                <h3 className="educational-custom__item-title">Affordable Pricing</h3>
                <p className="educational-custom__item-description">
                  We offer competitive pricing models designed to make quality educational materials accessible to schools of all sizes.
                </p>
              </div>
            </li>
            <li className="educational-custom__item">
              <div className="educational-custom__item-copy">
                <h3 className="educational-custom__item-title">Cultural Relevance</h3>
                <p className="educational-custom__item-description">
                  Our content celebrates African identity, values, and perspectives, ensuring learners see themselves reflected in what they read.
                </p>
              </div>
            </li>
            <li className="educational-custom__item">
              <div className="educational-custom__item-copy">
                <h3 className="educational-custom__item-title">Distribution Network</h3>
                <p className="educational-custom__item-description">
                  We have the infrastructure to deliver books to schools across Kenya and beyond, ensuring timely and reliable distribution.
                </p>
              </div>
            </li>
          </ul>

          <Link className="educational-custom__cta cursor-target" to="/contact?type=educational">
            Start a Partnership
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="currentColor" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
