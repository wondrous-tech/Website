import './BlogHero.css'

const topics = [
  'Writing Craft',
  'Publishing Path',
  'Editing & Revision',
  'Author Business',
  'African Voices',
  'Faith & Purpose',
]

export function BlogHero() {
  return (
    <section className="blog-hero">
      <div className="blog-hero__container">
        <div className="blog-hero__eyebrow-row">
          <span className="blog-hero__divider" aria-hidden="true" />
          <span className="blog-hero__eyebrow">CHRONICLES OF DESTINY</span>
        </div>

        <h1 className="blog-hero__heading">
          The Archive of <em className="blog-hero__heading-accent">Informed Transformation</em>.
        </h1>

        <p className="blog-hero__subtext">
          Journey through the wisdom of literary craftsmanship and personal evolution. Our blog
          serves as a bridge between the blank page and your actualized purpose.
        </p>

        <ul className="blog-hero__topics" aria-label="Editorial topics">
          {topics.map((t, i) => (
            <li key={t} className={`blog-hero__topic${i === 0 ? ' blog-hero__topic--active' : ''}`}>
              <span className="blog-hero__topic-dot" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
