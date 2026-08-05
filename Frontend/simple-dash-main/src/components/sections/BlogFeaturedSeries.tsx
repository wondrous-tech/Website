import { howToWriteSeries } from '../../utils/blogPosts'
import './BlogFeaturedSeries.css'

const [heroPost, ...sidebarPosts] = howToWriteSeries
const sidebarAccents = ['green', 'orange']

export function BlogFeaturedSeries() {
  return (
    <section className="blog-featured">
      <div className="blog-featured__header">
        <div className="blog-featured__intro">
          <h2 className="blog-featured__title">The Path to Publication</h2>
          <p className="blog-featured__subtitle">A definitive 5-part masterclass in authorship.</p>
        </div>

        <a
          className="blog-featured__view-all cursor-target"
          href="https://wondrouspublishing.blogspot.com/search/label/how%20to%20write%20a%20book"
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW SERIES
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#735C00" />
          </svg>
        </a>
      </div>

      <div className="blog-featured__series-track" aria-hidden="true">
        {howToWriteSeries.map((post, index) => (
          <span
            key={post.part}
            className={`blog-featured__series-dot${index === 0 ? ' blog-featured__series-dot--active' : ''}`}
          />
        ))}
        <span className="blog-featured__series-caption">Part 1 of {howToWriteSeries.length}</span>
      </div>

      <div className="blog-featured__grid">
        <article className="blog-featured__hero-card">
          <img
            className="blog-featured__hero-image"
            src="https://api.builder.io/api/v1/image/assets/TEMP/d26e6a53089d49105e9d5fe66d03a3aed354bab9?width=1169"
            alt="Vintage typewriter on a desk"
            loading="lazy"
          />
          <div className="blog-featured__hero-scrim" aria-hidden="true" />
          <div className="blog-featured__hero-content">
            <span className="blog-featured__badge">{heroPost.badge}</span>
            <h3 className="blog-featured__hero-title">{heroPost.title}</h3>
            <p className="blog-featured__hero-teaser">{heroPost.teaser}</p>
            <a
              className="blog-featured__hero-link cursor-target"
              href={heroPost.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              READ ON BLOGSPOT
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2M6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </article>

        <div className="blog-featured__sidebar">
          {sidebarPosts.slice(0, 2).map((post, index) => (
            <article
              className={`blog-featured__sidebar-card blog-featured__sidebar-card--${sidebarAccents[index]}`}
              key={post.part}
            >
              <span className="blog-featured__sidebar-label">{post.badge}</span>
              <h4 className="blog-featured__sidebar-title">{post.title}</h4>
              <p className="blog-featured__sidebar-text">{post.teaser}</p>
              <a
                className="blog-featured__sidebar-link cursor-target"
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Part {post.part}
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.816667 7.58333L0 6.76667L5.6 1.16667H0.583333V0H7.58333V7H6.41667V1.98333L0.816667 7.58333Z"
                    fill="#12a45c"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
