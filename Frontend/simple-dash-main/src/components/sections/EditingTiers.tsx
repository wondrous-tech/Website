import { Link } from 'react-router-dom'
import './EditingTiers.css'

const listCheck = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.325 7.01458L0 3.68958L0.83125 2.85833L3.325 5.35208L8.67708 0L9.50833 0.83125L3.325 7.01458V7.01458"
      fill="#735C00"
    />
  </svg>
)

const listCheckHighlight = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.49125 7.36531L0 3.87406L0.872812 3.00125L3.49125 5.61969L9.11094 0L9.98375 0.872812L3.49125 7.36531V7.36531"
      fill="#FFE088"
    />
  </svg>
)

const lightIcon = (
  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.875 11.7375L15.2625 13.125L23.4 4.9875L22.0125 3.6L13.875 11.7375V11.7375M3 24H4.3875L13.125 15.2625L11.7375 13.875L3 22.6125V24V24M16.3125 16.3125L10.6875 10.6875L16.95 4.425L15.8625 3.3375V3.3375V3.3375L7.65 11.55L5.55 9.45L13.725 1.2375C14.325 0.6375 15.0312 0.3375 15.8438 0.3375C16.6562 0.3375 17.3625 0.6375 17.9625 1.2375L19.05 2.325L20.925 0.45C21.225 0.15 21.5812 0 21.9937 0C22.4062 0 22.7625 0.15 23.0625 0.45L26.55 3.9375C26.85 4.2375 27 4.59375 27 5.00625C27 5.41875 26.85 5.775 26.55 6.075L16.3125 16.3125V16.3125M5.625 27H0V21.375L10.6875 10.6875L16.3125 16.3125L5.625 27V27"
      fill="#12a45c"
    />
  </svg>
)

const heavyIcon = (
  <svg width="17" height="27" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.375 27L0 23.7L4.275 11.925C4.65 12.275 5.05625 12.5687 5.49375 12.8062C5.93125 13.0437 6.4 13.225 6.9 13.35L2.775 24.675L0.375 27V27M16.125 27L13.725 24.675L9.6 13.35C10.1 13.225 10.5688 13.0437 11.0063 12.8062C11.4438 12.5687 11.85 12.275 12.225 11.925L16.5 23.7L16.125 27V27M8.25 12C7 12 5.9375 11.5625 5.0625 10.6875C4.1875 9.8125 3.75 8.75 3.75 7.5C3.75 6.525 4.03125 5.65625 4.59375 4.89375C5.15625 4.13125 5.875 3.6 6.75 3.3V0H9.75V3.3C10.625 3.6 11.3438 4.13125 11.9062 4.89375C12.4688 5.65625 12.75 6.525 12.75 7.5C12.75 8.75 12.3125 9.8125 11.4375 10.6875C10.5625 11.5625 9.5 12 8.25 12V12M8.25 9C8.675 9 9.03125 8.85625 9.31875 8.56875C9.60625 8.28125 9.75 7.925 9.75 7.5C9.75 7.075 9.60625 6.71875 9.31875 6.43125C9.03125 6.14375 8.675 6 8.25 6C7.825 6 7.46875 6.14375 7.18125 6.43125C6.89375 6.71875 6.75 7.075 6.75 7.5C6.75 7.925 6.89375 8.28125 7.18125 8.56875C7.46875 8.85625 7.825 9 8.25 9V9"
      fill="#12a45c"
    />
  </svg>
)

const mediumIcon = (
  <svg width="35" height="31" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.325 30.7125C16.065 29.715 14.7 28.9406 13.23 28.3894C11.76 27.8381 10.2375 27.5625 8.6625 27.5625C7.56 27.5625 6.47719 27.7069 5.41406 27.9956C4.35094 28.2844 3.33375 28.6912 2.3625 29.2162C1.81125 29.505 1.27969 29.4919 0.767812 29.1769C0.255937 28.8619 0 28.4025 0 27.7987V8.82C0 8.53125 0.0721875 8.25562 0.216562 7.99312C0.360937 7.73062 0.5775 7.53375 0.86625 7.4025C2.07375 6.7725 3.33375 6.3 4.64625 5.985C5.95875 5.67 7.2975 5.5125 8.6625 5.5125C10.185 5.5125 11.6747 5.70937 13.1316 6.10312C14.5884 6.49687 15.9862 7.0875 17.325 7.875V26.9325C18.6637 26.0925 20.0681 25.4625 21.5381 25.0425C23.0081 24.6225 24.4912 24.4125 25.9875 24.4125C26.9325 24.4125 27.8578 24.4912 28.7634 24.6487C29.6691 24.8062 30.5812 25.0425 31.5 25.3575V6.4575C31.8937 6.58875 32.2809 6.72656 32.6616 6.87094C33.0422 7.01531 33.4162 7.1925 33.7837 7.4025C34.0725 7.53375 34.2891 7.73062 34.4334 7.99312C34.5778 8.25562 34.65 8.53125 34.65 8.82V27.7987C34.65 28.4025 34.3941 28.8619 33.8822 29.1769C33.3703 29.4919 32.8387 29.505 32.2875 29.2162C31.3162 28.6912 30.2991 28.2844 29.2359 27.9956C28.1728 27.7069 27.09 27.5625 25.9875 27.5625C24.4125 27.5625 22.89 27.8381 21.42 28.3894C19.95 28.9406 18.585 29.715 17.325 30.7125V30.7125"
      fill="#FFE088"
    />
  </svg>
)

const tiers = [
  {
    key: 'light-editing',
    icon: lightIcon,
    title: 'Light Editing',
    eyebrow: 'Proofreading & Polishing',
    description: 'Our light editing service combines professional copy editing and proofreading to ensure your manuscript is polished, clear, and publication-ready while preserving your unique voice and writing style. It focuses on the technical aspects of the text, such as grammar, punctuation, spelling, and consistency. A book written by a good writer needs light editing.',
    features: ['Grammar & Spelling', 'Punctuation Accuracy', 'Typo Elimination', 'Consistency Check'],
    cta: 'Select Tier',
  },
  {
    key: 'heavy-editing',
    icon: heavyIcon,
    title: 'Heavy Editing',
    eyebrow: 'Structural Development',
    description: 'Our heavy editing service focuses on the big picture; that is, the overall structure and content, flow, clarity, and logic. It combines both developmental editing, line editing, copy editing and proofreading. A book written by a poor writer needs heavy editing.',
    features: ['Developmental Editing', 'Line Editing', 'Copy Editing', 'Proofreading'],
    cta: 'Select Tier',
  },
]

export function EditingTiers() {
  return (
    <section className="editing-tiers">
      <h2 className="editing-tiers__heading">Editing Packages</h2>

      <div className="editing-tiers__grid" id="editing-packages">
        <article className="editing-tiers__card" id={tiers[0].key}>
          <span className="editing-tiers__icon">{tiers[0].icon}</span>
          <h3 className="editing-tiers__title">{tiers[0].title}</h3>
          <span className="editing-tiers__eyebrow">{tiers[0].eyebrow}</span>
          <span className="editing-tiers__divider" aria-hidden="true" />
          <p className="editing-tiers__description">{tiers[0].description}</p>
          <ul className="editing-tiers__features">
            {tiers[0].features.map((feature) => (
              <li key={feature}>
                {listCheck}
                {feature}
              </li>
            ))}
          </ul>
          <Link className="editing-tiers__button" to="/contact?type=editing">
            {tiers[0].cta}
          </Link>
        </article>

        <article className="editing-tiers__card editing-tiers__card--featured" id="medium-editing">
          <span className="editing-tiers__icon">{mediumIcon}</span>
          <h3 className="editing-tiers__title">Medium Editing</h3>
          <span className="editing-tiers__eyebrow">Copy-Editing & Flow</span>
          <span className="editing-tiers__divider" aria-hidden="true" />
          <p className="editing-tiers__description">
            Our Medium editing service is more detailed than light editing. It combines line editing, copy editing and proofreading. This type of editing focuses on the clarity and style of the writing, sentence by sentence. A book written by an average writer will need medium editing.
          </p>
          <ul className="editing-tiers__features">
            {['Line Editing', 'Copy Editing', 'Proofreading', 'Style & Clarity'].map((feature) => (
              <li key={feature}>
                {listCheckHighlight}
                {feature}
              </li>
            ))}
          </ul>
          <Link className="editing-tiers__button editing-tiers__button--solid" to="/contact?type=editing">
            Request Quote
          </Link>
        </article>

        <article className="editing-tiers__card" id={tiers[1].key}>
          <span className="editing-tiers__icon">{tiers[1].icon}</span>
          <h3 className="editing-tiers__title">{tiers[1].title}</h3>
          <span className="editing-tiers__eyebrow">{tiers[1].eyebrow}</span>
          <span className="editing-tiers__divider" aria-hidden="true" />
          <p className="editing-tiers__description">{tiers[1].description}</p>
          <ul className="editing-tiers__features">
            {tiers[1].features.map((feature) => (
              <li key={feature}>
                {listCheck}
                {feature}
              </li>
            ))}
          </ul>
          <Link className="editing-tiers__button" to="/contact?type=editing">
            {tiers[1].cta}
          </Link>
        </article>
      </div>
    </section>
  )
}
