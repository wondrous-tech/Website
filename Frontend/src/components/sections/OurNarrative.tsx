import './OurNarrative.css'

export function OurNarrative() {
  return (
    <section className="our-narrative">
      <div className="our-narrative__container">
        <div className="our-narrative__intro-block">
          <span className="our-narrative__eyebrow">Our Story</span>
          <h2 className="our-narrative__heading">
            Publishing <em className="our-narrative__heading-accent">Futures</em>, One Destiny at a Time
          </h2>
          <div className="our-narrative__underline" aria-hidden="true" />

          <p className="our-narrative__intro">
            Founded with a passion for impact, Wondrous Publishing provides a platform for emerging
            and established African authors to share their stories, insights, and convictions with the
            world. Whether it's school books, personal growth, spiritual depth, or purpose-driven
            living, our mission is to ignite change — one book, one reader, one destiny at a time.
            At Wondrous Publishing, we don't just print books — we publish futures.
          </p>
          <p className="our-narrative__intro">
            We specialize in self-development and destiny-shaping books that empower individuals to
            unlock their potential, embrace purpose, and rise into leadership in every sphere of life.
            Our catalogue features works that speak to the soul of Africa — rooted in wisdom, rich in
            truth, and relevant to the challenges and aspirations of a new generation.
          </p>
        </div>

        <div className="our-narrative__quote-card">
          <span className="our-narrative__quote-glyph" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote className="our-narrative__quote">
            We believe books are not just ink on paper; they are seeds of destiny. Our calling is to plant them across Africa and watch lives bloom.
          </blockquote>
          <div className="our-narrative__cite-row">
            <span className="our-narrative__cite-line" aria-hidden="true" />
            <cite className="our-narrative__cite">MK Cyprian, Founder, Wondrous Publishing</cite>
          </div>
        </div>

        <div className="our-narrative__columns">
          <div className="our-narrative__column">
            <span className="our-narrative__column-tag">01 — Vision</span>
            <svg
              className="our-narrative__icon"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="14" cy="14" r="13" stroke="#12a45c" strokeWidth="1.6" />
              <circle cx="14" cy="14" r="7.5" stroke="#12a45c" strokeWidth="1.6" />
              <circle cx="14" cy="14" r="2.5" fill="#12a45c" />
            </svg>
            <h3 className="our-narrative__column-heading">Our Vision</h3>
            <p className="our-narrative__column-text">
              To be Africa's leading publisher of transformational books that shape minds, ignite purpose, and empower individuals to live fulfilled and impactful lives.
            </p>
          </div>

          <div className="our-narrative__column">
            <span className="our-narrative__column-tag">02 — Mission</span>
            <svg
              className="our-narrative__icon"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 14C1 14 6 4 14 4C22 4 27 14 27 14C27 14 22 24 14 24C6 24 1 14 1 14Z"
                stroke="#12a45c"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <circle cx="14" cy="14" r="4.5" stroke="#12a45c" strokeWidth="1.6" />
            </svg>
            <h3 className="our-narrative__column-heading">Our Mission</h3>
            <p className="our-narrative__column-text">
              To discover, publish, and promote high-impact destiny-focused works that inspire personal growth, unlock human potential, and influence generations. We are committed to providing authors with a platform to share life-changing wisdom and to equipping readers with knowledge that drives lasting transformation.
            </p>
          </div>
        </div>

        <div className="our-narrative__experience" aria-label="Our track record">
          <div className="our-narrative__experience-item">
            <span className="our-narrative__experience-num">100+</span>
            <span className="our-narrative__experience-label">Titles Published</span>
          </div>
          <span className="our-narrative__experience-divider" aria-hidden="true" />
          <div className="our-narrative__experience-item">
            <span className="our-narrative__experience-num">5y</span>
            <span className="our-narrative__experience-label">Editorial Craft</span>
          </div>
          <span className="our-narrative__experience-divider" aria-hidden="true" />
          <div className="our-narrative__experience-item">
            <span className="our-narrative__experience-num">Pan-African</span>
            <span className="our-narrative__experience-label">Reach &amp; Voice</span>
          </div>
        </div>
      </div>
    </section>
  )
}
