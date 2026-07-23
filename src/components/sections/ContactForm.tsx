import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { getContactType, type ContactTypeMeta } from '../../utils/contactTypes'
import './ContactForm.css'

interface ContactFormProps {
  type: ContactTypeMeta['id']
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
        fill="white"
      />
    </svg>
  )
}

const baseState = { name: '', email: '', phone: '', message: '' }

export function ContactForm({ type }: ContactFormProps) {
  const meta = getContactType(type)
  const [form, setForm] = useState<Record<string, string>>(baseState)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)



  const isValid =
    form.name.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    (meta.extraFields ?? [])
      .filter((f) => f.required)
      .every((f) => (form[f.name] ?? '').trim().length > 0)

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    setUploadedFile(event.target.files?.[0] ?? null)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="contact-form-card">
      <div className="contact-form-card__watermark" aria-hidden="true">
        <span>Wondrous</span>
      </div>
      <div className="contact-form-card__progress">
        <div className="contact-form-card__progress-fill" />
      </div>

      {isSubmitted ? (
        <div className="contact-form-card__success">
          <h2 className="contact-form-card__success-title">Request Received</h2>
          <p className="contact-form-card__success-text">
            Thank you, {form.name.split(' ')[0] || 'friend'}. A member of our {meta.short.toLowerCase()} team
            will reach out shortly to continue the conversation.
          </p>
          <button
            type="button"
            className="contact-form-card__reset-btn"
            onClick={() => {
              setForm(baseState)
              setIsSubmitted(false)
            }}
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__intro">
            <span className="contact-form__eyebrow">{meta.eyebrow}</span>
            <h2 className="contact-form__title">{meta.title}</h2>
            <p className="contact-form__description">{meta.description}</p>
          </div>

          <div className="contact-form__row">
            <label className="contact-form__field">
              <span className="contact-form__label">Full Name</span>
              <input
                className="contact-form__input"
                type="text"
                required
                placeholder="Enter your legal name"
                value={form.name}
                onChange={(event) => handleChange('name', event.target.value)}
              />
            </label>

            <label className="contact-form__field">
              <span className="contact-form__label">Email Address</span>
              <input
                className="contact-form__input"
                type="email"
                required
                placeholder="you@domain.com"
                value={form.email}
                onChange={(event) => handleChange('email', event.target.value)}
              />
            </label>
          </div>

          <div className="contact-form__row">
            <label className="contact-form__field">
              <span className="contact-form__label">Phone Number</span>
              <input
                className="contact-form__input"
                type="tel"
                inputMode="tel"
                placeholder="+254..."
                value={form.phone}
                onChange={(event) => handleChange('phone', event.target.value)}
              />
            </label>

            {meta.extraFields?.[0] && (
              <ExtraField
                field={meta.extraFields[0]}
                value={form[meta.extraFields[0].name] ?? ''}
                onChange={handleChange}
              />
            )}
          </div>

          {meta.extraFields && meta.extraFields.length > 1 && (
            <div className="contact-form__row">
              {meta.extraFields.slice(1, 3).map((field) => (
                <ExtraField
                  key={field.name}
                  field={field}
                  value={form[field.name] ?? ''}
                  onChange={handleChange}
                />
              ))}
            </div>
          )}

          <label className="contact-form__field contact-form__field--textarea">
            <span className="contact-form__label">
              {type === 'manuscript' ? 'Synopsis / Notes' : 'Tell us more'}
            </span>
            <textarea
              className="contact-form__input contact-form__textarea"
              rows={4}
              placeholder="Share a few details so we can prepare a thoughtful reply..."
              value={form.message}
              onChange={(event) => handleChange('message', event.target.value)}
            />
          </label>

          {meta.upload && (
            <div className="contact-form__upload">
              <div className="contact-form__upload-copy">
                <span className="contact-form__label">{meta.upload.label}</span>
                {meta.upload.hint && (
                  <span className="contact-form__upload-hint">{meta.upload.hint}</span>
                )}
              </div>
              <div className="contact-form__upload-controls">
                <button
                  type="button"
                  className="contact-form__upload-btn"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 14V4M10 4L6 8M10 4l4 4M4 16h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {uploadedFile ? 'Replace file' : 'Choose file'}
                </button>
                <span className="contact-form__upload-filename">
                  {uploadedFile ? uploadedFile.name : 'No file selected'}
                </span>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                className="contact-form__upload-input"
                accept={meta.upload.accept}
                onChange={handleFileChange}
                aria-label={meta.upload.label}
              />
            </div>
          )}

          <button type="submit" className="contact-form__submit-btn" disabled={!isValid}>
            {meta.submitLabel}
            <ArrowIcon />
          </button>
        </form>
      )}
    </div>
  )
}

interface ExtraFieldProps {
  field: NonNullable<ContactTypeMeta['extraFields']>[number]
  value: string
  onChange: (name: string, value: string) => void
}

function ExtraField({ field, value, onChange }: ExtraFieldProps) {
  return (
    <label className="contact-form__field">
      <span className="contact-form__label">
        {field.label}
        {field.required ? ' *' : ''}
      </span>
      {field.type === 'select' ? (
        <select
          className="contact-form__input contact-form__select"
          value={value}
          onChange={(event) => onChange(field.name, event.target.value)}
          required={field.required}
        >
          <option value="">Select...</option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="contact-form__input"
          type={field.type ?? 'text'}
          placeholder={field.placeholder}
          value={value}
          onChange={(event) => onChange(field.name, event.target.value)}
          required={field.required}
        />
      )}
    </label>
  )
}
