import { useState } from 'react'
import './BlogNewsletter.css'

export function BlogNewsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
    <section className="blog-newsletter">
      <h2 className="blog-newsletter__title">Begin your transformation.</h2>

      <p className="blog-newsletter__text">
        Join 5,000+ authors receiving our weekly 'Chronicles of Destiny' directly in their inbox.
        Literary insights, industry shifts, and wisdom for the journey.
      </p>

      <form className="blog-newsletter__form" onSubmit={handleSubmit}>
        <input
          className="blog-newsletter__input"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-label="Email address"
          required
        />
        <button type="submit" className="blog-newsletter__submit cursor-target">
          SUBSCRIBE
        </button>
      </form>

      <p className="blog-newsletter__disclaimer">Respecting your privacy. Unsubscribe at any time.</p>
    </section>
  )
}
