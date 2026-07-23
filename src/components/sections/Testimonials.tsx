import { InitialsAvatar } from '../common/InitialsAvatar'
import './Testimonials.css'

const testimonials = [
  {
    quote:
      'Publishing my first book with Wondrous was seamless from start to finish. The team guided me through editing, design, and printing — my dream became reality.',
    name: 'Grace M.',
    role: 'NAIROBI',
  },
  {
    quote:
      'Our school received beautifully printed learning materials ahead of schedule. The quality and service exceeded expectations — truly professional.',
    name: 'Mr. Hassan A.',
    role: 'GARISSA',
  },
  {
    quote:
      "Wondrous Publishing captured our brand vision perfectly. The print materials and corporate gifts were top-tier — we'll definitely work with them again.",
    name: 'Linet O.',
    role: 'KISUMU',
  },
]

export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <div className="testimonials__intro">
            <span className="testimonials__eyebrow">Success Stories</span>
            <h2 className="testimonials__title">The Author's Journey</h2>
          </div>

          <svg
            className="testimonials__quote-mark"
            width="43"
            height="30"
            viewBox="0 0 43 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4.25 30L10 20V20V20C7.25 20 4.89583 19.0208 2.9375 17.0625C0.979167 15.1042 0 12.75 0 10C0 7.25 0.979167 4.89583 2.9375 2.9375C4.89583 0.979167 7.25 0 10 0C12.75 0 15.1042 0.979167 17.0625 2.9375C19.0208 4.89583 20 7.25 20 10C20 10.9583 19.8854 11.8438 19.6562 12.6562C19.4271 13.4688 19.0833 14.25 18.625 15L10 30H4.25V30M26.75 30L32.5 20V20V20C29.75 20 27.3958 19.0208 25.4375 17.0625C23.4792 15.1042 22.5 12.75 22.5 10C22.5 7.25 23.4792 4.89583 25.4375 2.9375C27.3958 0.979167 29.75 0 32.5 0C35.25 0 37.6042 0.979167 39.5625 2.9375C41.5208 4.89583 42.5 7.25 42.5 10C42.5 10.9583 42.3854 11.8438 42.1562 12.6562C41.9271 13.4688 41.5833 14.25 41.125 15L32.5 30H26.75V30M10 13.75C11.0417 13.75 11.9271 13.3854 12.6562 12.6562C13.3854 11.9271 13.75 11.0417 13.75 10C13.75 8.95833 13.3854 8.07292 12.6562 7.34375C11.9271 6.61458 11.0417 6.25 10 6.25C8.95833 6.25 8.07292 6.61458 7.34375 7.34375C6.61458 8.07292 6.25 8.95833 6.25 10C6.25 11.0417 6.61458 11.9271 7.34375 12.6562C8.07292 13.3854 8.95833 13.75 10 13.75V13.75M32.5 13.75C33.5417 13.75 34.4271 13.3854 35.1562 12.6562C35.8854 11.9271 36.25 11.0417 36.25 10C36.25 8.95833 35.8854 8.07292 35.1562 7.34375C34.4271 6.61458 33.5417 6.25 32.5 6.25C31.4583 6.25 30.5729 6.61458 29.8438 7.34375C29.1146 8.07292 28.75 8.95833 28.75 10C28.75 11.0417 29.1146 11.9271 29.8438 12.6562C30.5729 13.3854 31.4583 13.75 32.5 13.75V13.75"
              fill="#C0C8C3"
            />
          </svg>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article className="testimonials__card" key={testimonial.name}>
              <blockquote className="testimonials__quote">"{testimonial.quote}"</blockquote>

              <div className="testimonials__author">
                <InitialsAvatar name={testimonial.name} className="testimonials__avatar" />
                <div className="testimonials__author-info">
                  <span className="testimonials__author-name">{testimonial.name}</span>
                  <span className="testimonials__author-role">{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
