import { useState, type FormEvent } from 'react'
import './ScaleImpact.css'

const partnershipTypes = ['Distributor', 'Bookstore', 'Educational Institution', 'CSR / Foundation']

const features = [
  {
    title: 'Global Distribution',
    description: 'Reach 10+ countries through our established supply chain and digital platforms.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#12a45c" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#12a45c" strokeWidth="1.6" />
        <line x1="3" y1="12" x2="21" y2="12" stroke="#12a45c" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: 'Bookstore Programs',
    description: 'Exclusive stocking arrangements, author signing events, and marketing support.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 9C3 10.1 3.9 11 5 11C6.1 11 7 10.1 7 9C7 10.1 7.9 11 9 11C10.1 11 11 10.1 11 9C11 10.1 11.9 11 13 11C14.1 11 15 10.1 15 9C15 10.1 15.9 11 17 11C18.1 11 19 10.1 19 9C19 10.1 19.9 11 21 11"
          stroke="#12a45c"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path d="M3 9L4 4H20L21 9" stroke="#12a45c" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M4 9V20H20V9" stroke="#12a45c" strokeWidth="1.6" />
        <path d="M9 20V14H15V20" stroke="#12a45c" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: 'Institutional CSR',
    description: 'Collaborate on literacy foundations and talent development academies.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 20C12 20 3 14.5 3 8.5C3 5.5 5.5 3.5 8 3.5C9.7 3.5 11 4.3 12 5.6C13 4.3 14.3 3.5 16 3.5C18.5 3.5 21 5.5 21 8.5C21 14.5 12 20 12 20Z"
          stroke="#12a45c"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const initialFormState = {
  name: '',
  organization: '',
  type: partnershipTypes[0],
  message: '',
}

export function ScaleImpact() {
  const [form, setForm] = useState(initialFormState)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange(field: keyof typeof initialFormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="scale-impact" id="partnership-inquiry">
      <div className="scale-impact__container">
        <div className="scale-impact__intro">
          <h2 className="scale-impact__title">
            Scale the Impact
            <br />
            Together
          </h2>

          <p className="scale-impact__description">
            We are actively seeking strategic alliances with organizations that share our
            commitment to literacy, transformation, and African authorship. Whether you are a
            distributor, a bookstore, or an educational institution, we have a framework for you.
          </p>

          <ul className="scale-impact__features">
            {features.map((feature) => (
              <li className="scale-impact__feature" key={feature.title}>
                <span className="scale-impact__feature-icon" aria-hidden="true">
                  {feature.icon}
                </span>
                <div className="scale-impact__feature-text">
                  <h3 className="scale-impact__feature-title">{feature.title}</h3>
                  <p className="scale-impact__feature-description">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="scale-impact__form-panel">
          <h3 className="scale-impact__form-title">Partnership Inquiry</h3>

          {isSubmitted ? (
            <div className="scale-impact__success">
              <p className="scale-impact__success-text">
                Thank you, {form.name.split(' ')[0] || 'there'}. Our partnerships team will be in
                touch within two business days.
              </p>
              <button
                type="button"
                className="scale-impact__reset-btn"
                onClick={() => {
                  setForm(initialFormState)
                  setIsSubmitted(false)
                }}
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form className="scale-impact__form" onSubmit={handleSubmit} noValidate>
              <div className="scale-impact__row">
                <label className="scale-impact__field">
                  <span className="scale-impact__label">Contact Name</span>
                  <input
                    className="scale-impact__input"
                    type="text"
                    required
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(event) => handleChange('name', event.target.value)}
                  />
                </label>

                <label className="scale-impact__field">
                  <span className="scale-impact__label">Organization</span>
                  <input
                    className="scale-impact__input"
                    type="text"
                    required
                    placeholder="Company/Org Name"
                    value={form.organization}
                    onChange={(event) => handleChange('organization', event.target.value)}
                  />
                </label>
              </div>

              <label className="scale-impact__field">
                <span className="scale-impact__label">Partnership Type</span>
                <select
                  className="scale-impact__input scale-impact__select"
                  value={form.type}
                  onChange={(event) => handleChange('type', event.target.value)}
                >
                  {partnershipTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="scale-impact__field">
                <span className="scale-impact__label">Message</span>
                <textarea
                  className="scale-impact__input scale-impact__textarea"
                  rows={3}
                  placeholder="How can we collaborate?"
                  value={form.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                />
              </label>

              <button type="submit" className="scale-impact__submit-btn">
                Submit Proposal
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
