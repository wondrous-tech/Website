import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  bookCategories,
  bookSizes,
  copyCountOptions,
  countries,
  interiorOptions,
  manuscriptContentTypes,
} from '../../utils/quoteFormOptions'
import './GetAQuote.css'

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  country: '',
  bookTitle: '',
  category: '',
  pages: '',
  bookSize: 'A5',
  interiorOption: 'Black & White',
  manuscriptContent: 'Text Only',
  additionalNotes: '',
  copyCount: '500',
}

type FormState = typeof initialFormState

function calculateEstimate(form: FormState) {
  const pages = parseInt(form.pages, 10) || 100
  const copies = parseInt(form.copyCount, 10) || 500

  let baseRate = 1.5
  if (form.interiorOption === 'Full Colour') baseRate = 5.0
  if (form.bookSize === 'A4') baseRate *= 1.8
  if (form.bookSize === 'A6') baseRate *= 0.75

  let contentSurcharge = 1.0
  if (form.manuscriptContent === 'Images / Illustrations') contentSurcharge = 1.15
  if (form.manuscriptContent === 'Tables / Diagrams') contentSurcharge = 1.1

  const baseCostPerBook = pages * baseRate * contentSurcharge
  const printingSetupCost = 10000
  const totalKES = Math.round(baseCostPerBook * copies + printingSetupCost)
  const costPerBook = Math.round(totalKES / copies)
  const totalUSD = Math.round(totalKES / 130)

  return { totalKES, totalUSD, costPerBook }
}

function CalculatorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="1" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 4.5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M5 8.5H5.01M9 8.5H9.01M13 8.5H13.01M5 11.5H5.01M9 11.5H9.01M13 11.5H13.01M5 14.5H5.01M9 14.5H9.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="5.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 16C2.5 12.5 5.5 10.5 9 10.5C12.5 10.5 15.5 12.5 15.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 3.5C2 3.5 4 2.5 9 2.5C14 2.5 16 3.5 16 3.5V15C16 15 14 14 9 14C4 14 2 15 2 15V3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 2.5V14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function FileTextIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 1.5H11L15 5.5V16.5H4V1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6.5 9H12.5M6.5 12H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="14" fill="#12a45c" />
      <path d="M8 14.5L12 18.5L20 9.5" stroke="#FED65B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const steps = [
  { id: 1, label: 'Personal Information', icon: <UserIcon /> },
  { id: 2, label: 'Book Information & Spec', icon: <BookIcon /> },
  { id: 3, label: 'Additional Details', icon: <FileTextIcon /> },
]

export function GetAQuote() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormState>(initialFormState)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [reference] = useState(() => `WP-2026-${Math.floor(Math.random() * 10000)}`)

  const estimate = calculateEstimate(form)

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleChoice(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleNext() {
    if (step === 1 && (!form.name || !form.email || !form.phone || !form.country)) {
      return
    }
    if (step === 2 && (!form.category || !form.pages)) {
      return
    }
    setStep((prev) => prev + 1)
  }

  function handlePrev() {
    setStep((prev) => prev - 1)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  function handleReset() {
    setForm(initialFormState)
    setStep(1)
    setIsSubmitted(false)
  }

  return (
    <section className="get-a-quote" id="get-a-quote">
      <div className="get-a-quote__intro">
        <h2 className="get-a-quote__title">Request A Printing Quote</h2>
        <p className="get-a-quote__description">
          Unlock high-impact printing. Customize your book specifications below to receive a live
          estimated cost structure instantly.
        </p>
      </div>

      <div className="get-a-quote__wizard">
        <aside className="get-a-quote__estimate">
          <span className="get-a-quote__estimate-eyebrow">
            <CalculatorIcon />
            Estimate
          </span>

          <p className="get-a-quote__estimate-copy">
            Our calculator estimates printing costs based on paper grades, ink volume, and setup
            fees. Adjust your inputs to fine-tune your budget.
          </p>

          <label className="get-a-quote__estimate-field">
            <span className="get-a-quote__estimate-label">Print Order Quantity</span>
            <select
              name="copyCount"
              value={form.copyCount}
              onChange={handleChange}
              className="get-a-quote__estimate-select"
            >
              {copyCountOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <div className="get-a-quote__estimate-divider" />

          <div className="get-a-quote__estimate-rows">
            <div className="get-a-quote__estimate-row">
              <span>Size &amp; Option:</span>
              <strong>
                {form.bookSize} | {form.interiorOption}
              </strong>
            </div>
            <div className="get-a-quote__estimate-row">
              <span>Pages:</span>
              <strong>{form.pages || '100'} pgs</strong>
            </div>
            <div className="get-a-quote__estimate-row">
              <span>Unit Cost (Est):</span>
              <strong>KES {estimate.costPerBook.toLocaleString()}</strong>
            </div>
          </div>

          <div className="get-a-quote__estimate-divider" />

          <div className="get-a-quote__estimate-total">
            <span className="get-a-quote__estimate-total-label">Estimated Total Budget</span>
            <strong className="get-a-quote__estimate-total-value">
              KES {estimate.totalKES.toLocaleString()}
            </strong>
            <span className="get-a-quote__estimate-total-usd">
              ~ USD ${estimate.totalUSD.toLocaleString()}
            </span>
          </div>

          <p className="get-a-quote__estimate-note">
            This is an analytical estimation. Final invoices will include bulk shipping and
            literary rights adjustments.
          </p>
        </aside>

        <div className="get-a-quote__panel">
          {isSubmitted ? (
            <div className="get-a-quote__success">
              <CheckCircleIcon />
              <h3 className="get-a-quote__success-title">Quotation Sent Successfully!</h3>
              <p className="get-a-quote__success-text">
                Thank you, <strong>{form.name}</strong>. A formalized PDF quotation has been
                dispatched to <strong>{form.email}</strong>.
              </p>

              <div className="get-a-quote__success-summary">
                <p>
                  <span>Reference:</span> <strong>{reference}</strong>
                </p>
                <p>
                  <span>Title:</span> {form.bookTitle || 'Untitled destiny work'}
                </p>
                <p>
                  <span>Pages:</span> {form.pages} pgs ({form.bookSize})
                </p>
                <p>
                  <span>Interior Style:</span> {form.interiorOption}
                </p>
                <p>
                  <span>Estimated Budget:</span> KES {estimate.totalKES.toLocaleString()} / USD $
                  {estimate.totalUSD.toLocaleString()}
                </p>
              </div>

              <div className="get-a-quote__success-actions">
                <button type="button" className="get-a-quote__reset-btn" onClick={handleReset}>
                  Request Another Quote
                </button>
                <a
                  className="get-a-quote__whatsapp-btn"
                  href={`https://wa.me/254798872998?text=${encodeURIComponent(
                    `Hello Wondrous Publishing, I just submitted a printing quote for my book "${form.bookTitle || 'My Manuscript'}"`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Confirm on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form className="get-a-quote__form" onSubmit={handleSubmit} noValidate>
              <div className="get-a-quote__steps">
                <div className="get-a-quote__step-dots">
                  {steps.map((item) => (
                    <span
                      key={item.id}
                      className={`get-a-quote__step-dot${step === item.id ? ' get-a-quote__step-dot--active' : ''}${step > item.id ? ' get-a-quote__step-dot--done' : ''}`}
                    >
                      {item.id}
                    </span>
                  ))}
                </div>
                <span className="get-a-quote__step-label">Step {step} of 3</span>
              </div>

              {step === 1 && (
                <div className="get-a-quote__step-content">
                  <h3 className="get-a-quote__step-heading">
                    <UserIcon />
                    Personal Information
                  </h3>
                  <p className="get-a-quote__step-copy">
                    Share your primary contact points so we can deliver a formalized quotation.
                  </p>

                  <div className="get-a-quote__row">
                    <label className="get-a-quote__field">
                      <span className="get-a-quote__label">Full Name *</span>
                      <input
                        className="get-a-quote__input"
                        type="text"
                        name="name"
                        required
                        placeholder="Jane Adeyemi"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </label>

                    <label className="get-a-quote__field">
                      <span className="get-a-quote__label">Email Address *</span>
                      <input
                        className="get-a-quote__input"
                        type="email"
                        name="email"
                        required
                        placeholder="jane@email.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </label>
                  </div>

                  <div className="get-a-quote__row">
                    <label className="get-a-quote__field">
                      <span className="get-a-quote__label">Phone Number *</span>
                      <input
                        className="get-a-quote__input"
                        type="tel"
                        name="phone"
                        required
                        placeholder="+254 798 872 998"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </label>

                    <label className="get-a-quote__field">
                      <span className="get-a-quote__label">Country of Residence *</span>
                      <select
                        className="get-a-quote__input get-a-quote__select"
                        name="country"
                        required
                        value={form.country}
                        onChange={handleChange}
                      >
                        <option value="">Select your country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="get-a-quote__step-content">
                  <h3 className="get-a-quote__step-heading">
                    <BookIcon />
                    Book Information &amp; Spec
                  </h3>
                  <p className="get-a-quote__step-copy">
                    Set your parameters below — pricing updates in real time on the left.
                  </p>

                  <div className="get-a-quote__row">
                    <label className="get-a-quote__field">
                      <span className="get-a-quote__label">Book Title (Optional)</span>
                      <input
                        className="get-a-quote__input"
                        type="text"
                        name="bookTitle"
                        placeholder="e.g. Rising Leaders"
                        value={form.bookTitle}
                        onChange={handleChange}
                      />
                    </label>

                    <label className="get-a-quote__field">
                      <span className="get-a-quote__label">Book Category *</span>
                      <select
                        className="get-a-quote__input get-a-quote__select"
                        name="category"
                        required
                        value={form.category}
                        onChange={handleChange}
                      >
                        <option value="">Select a category</option>
                        {bookCategories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="get-a-quote__row">
                    <label className="get-a-quote__field">
                      <span className="get-a-quote__label">Number of Pages *</span>
                      <input
                        className="get-a-quote__input"
                        type="number"
                        name="pages"
                        required
                        min="10"
                        max="2000"
                        placeholder="Enter the total pages"
                        value={form.pages}
                        onChange={handleChange}
                      />
                    </label>

                    <div className="get-a-quote__field">
                      <span className="get-a-quote__label">Book Size *</span>
                      <div className="get-a-quote__choice-grid">
                        {bookSizes.map((size) => (
                          <button
                            key={size.value}
                            type="button"
                            className={`get-a-quote__choice-btn${form.bookSize === size.value ? ' get-a-quote__choice-btn--active' : ''}`}
                            onClick={() => handleChoice('bookSize', size.value)}
                          >
                            {size.value}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="get-a-quote__row">
                    <div className="get-a-quote__field">
                      <span className="get-a-quote__label">Interior Print Option *</span>
                      <div className="get-a-quote__choice-grid">
                        {interiorOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            className={`get-a-quote__choice-btn${form.interiorOption === option ? ' get-a-quote__choice-btn--active' : ''}`}
                            onClick={() => handleChoice('interiorOption', option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <label className="get-a-quote__field">
                      <span className="get-a-quote__label">Manuscript Content *</span>
                      <select
                        className="get-a-quote__input get-a-quote__select"
                        name="manuscriptContent"
                        value={form.manuscriptContent}
                        onChange={handleChange}
                      >
                        {manuscriptContentTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="get-a-quote__step-content">
                  <h3 className="get-a-quote__step-heading">
                    <FileTextIcon />
                    Additional Details
                  </h3>
                  <p className="get-a-quote__step-copy">
                    Share layout styling, paper weight requirements, or custom finishing needs.
                  </p>

                  <label className="get-a-quote__field">
                    <span className="get-a-quote__label">Additional Notes or Special Requests</span>
                    <textarea
                      className="get-a-quote__input get-a-quote__textarea"
                      name="additionalNotes"
                      rows={4}
                      placeholder="e.g. I require a high-gloss spot UV finish on my cover, and 80gsm cream woodfree book paper for the interior pages..."
                      value={form.additionalNotes}
                      onChange={handleChange}
                    />
                  </label>

                  <div className="get-a-quote__bonuses">
                    <h4 className="get-a-quote__bonuses-title">
                      Included Free Bonuses (Wondrous Guarantee)
                    </h4>
                    <div className="get-a-quote__bonuses-grid">
                      <span>Professional Book Layout &amp; Graphic Design</span>
                      <span>Global ISBN Secure Issuance</span>
                      <span>National Copyright Legal Registration</span>
                      <span>Afrisite &amp; Somaflex Store Upload</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="get-a-quote__nav">
                {step > 1 ? (
                  <button type="button" className="get-a-quote__back-btn" onClick={handlePrev}>
                    Back
                  </button>
                ) : (
                  <span />
                )}

                {step < 3 ? (
                  <button type="button" className="get-a-quote__next-btn" onClick={handleNext}>
                    Next Step
                  </button>
                ) : (
                  <button type="submit" className="get-a-quote__submit-btn">
                    Submit Quotation Request
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.4 15L0 13.6L11.6 2H5V0H15V10H13V3.4L1.4 15Z" fill="currentColor" />
                    </svg>
                  </button>
                )}
              </div>

              <p className="get-a-quote__disclaimer">
                No spam, ever. Just a thoughtful response from our editorial team.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
