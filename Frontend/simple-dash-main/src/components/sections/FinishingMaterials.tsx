import materialsImage from '../../assets/book6.jpeg'
import './FinishingMaterials.css'

const materials = [
  {
    title: 'Foil Stamping',
    description: 'Gold, silver, copper, and holographic foils applied with heat and pressure for enduring shine.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 13.5L3.825 16.725L5.175 10.8375L0.525 6.825L6.5625 6.3L9 0.75L11.4375 6.3L17.475 6.825L12.825 10.8375L14.175 16.725L9 13.5V13.5"
          fill="#12a45c"
        />
      </svg>
    ),
  },
  {
    title: 'Specialty Papers',
    description: 'Cotton, linen, and archival stocks sourced for texture, weight, and longevity.',
    icon: (
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10L16 6V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2M9 7V2H2V18H14V7H9Z"
          fill="#12a45c"
        />
      </svg>
    ),
  },
  {
    title: 'Thread & Adhesives',
    description: 'Reinforced stitching and archival-grade adhesives engineered for a lifetime of use.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20V20M10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18V18Z"
          fill="#12a45c"
        />
      </svg>
    ),
  },
]

export function FinishingMaterials() {
  return (
    <section className="finishing-materials">
      <div className="finishing-materials__container">
        <div className="finishing-materials__visual">
          <img className="finishing-materials__image" src={materialsImage} alt="Selection of finishing materials and paper stocks" />
          <div className="finishing-materials__badge">
            <span className="finishing-materials__badge-value">12+</span>
            <span className="finishing-materials__badge-label">Curated Materials</span>
          </div>
        </div>

        <div className="finishing-materials__content">
          <div className="finishing-materials__intro">
            <span className="finishing-materials__eyebrow">The Finishing Toolkit</span>
            <h2 className="finishing-materials__heading">Materials Worthy of the Craft</h2>
            <span className="finishing-materials__underline" aria-hidden="true" />
            <p className="finishing-materials__subtext">
              Every finish begins with a sourced material chosen for how it feels, ages, and catches the light. We
              pair heritage techniques with a curated palette of papers, foils, and threads.
            </p>
          </div>

          <ul className="finishing-materials__list">
            {materials.map((material) => (
              <li key={material.title} className="finishing-materials__item">
                <span className="finishing-materials__icon">{material.icon}</span>
                <div className="finishing-materials__item-copy">
                  <h3 className="finishing-materials__item-title">{material.title}</h3>
                  <p className="finishing-materials__item-description">{material.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
