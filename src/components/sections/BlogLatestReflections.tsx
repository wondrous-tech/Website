import { Link } from 'react-router-dom'
import { howToWriteSeries } from '../../utils/blogPosts'
import './BlogLatestReflections.css'

const part4 = howToWriteSeries[3]
const part5 = howToWriteSeries[4]

export function BlogLatestReflections() {
  return (
    <section className="blog-reflections">
      <h2 className="blog-reflections__title">Latest Reflections</h2>

      <div className="blog-reflections__grid">
        <article className="blog-reflections__card blog-reflections__card--split">
          <div className="blog-reflections__card-image-wrap">
            <img
              className="blog-reflections__card-image"
              src="https://api.builder.io/api/v1/image/assets/TEMP/6daf01f9b3c2117d35bee4e8549d6b4264fa5ca1?width=491"
              alt="Savanna landscape at sunset"
              loading="lazy"
            />
          </div>
          <div className="blog-reflections__split-body">
            <span className="blog-reflections__eyebrow blog-reflections__eyebrow--green">
              TRANSFORMATION
            </span>
            <h3 className="blog-reflections__card-title">
              Writing as a Spiritual Practice in Modern Africa
            </h3>
            <p className="blog-reflections__card-text">
              Exploring the intersection of indigenous oral traditions and the modern digital
              publishing revolution.
            </p>
            <Link className="blog-reflections__outline-btn cursor-target" to="/blog">
              Full Article
            </Link>
          </div>
        </article>

        <article className="blog-reflections__card blog-reflections__card--dark">
          <div className="blog-reflections__dark-top">
            <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.5 29.25C15.3 28.3 14 27.5625 12.6 27.0375C11.2 26.5125 9.75 26.25 8.25 26.25C7.2 26.25 6.16875 26.3875 5.15625 26.6625C4.14375 26.9375 3.175 27.325 2.25 27.825C1.725 28.1 1.21875 28.0875 0.73125 27.7875C0.24375 27.4875 0 27.05 0 26.475V8.4C0 8.125 0.06875 7.8625 0.20625 7.6125C0.34375 7.3625 0.55 7.175 0.825 7.05C1.975 6.45 3.175 6 4.425 5.7C5.675 5.4 6.95 5.25 8.25 5.25C9.7 5.25 11.1188 5.4375 12.5063 5.8125C13.8938 6.1875 15.225 6.75 16.5 7.5V25.65C17.775 24.85 19.1125 24.25 20.5125 23.85C21.9125 23.45 23.325 23.25 24.75 23.25C25.65 23.25 26.5312 23.325 27.3937 23.475C28.2562 23.625 29.125 23.85 30 24.15V6.15C30.375 6.275 30.7438 6.40625 31.1063 6.54375C31.4688 6.68125 31.825 6.85 32.175 7.05C32.45 7.175 32.6563 7.3625 32.7938 7.6125C32.9313 7.8625 33 8.125 33 8.4V26.475C33 27.05 32.7562 27.4875 32.2687 27.7875C31.7812 28.0875 31.275 28.1 30.75 27.825C29.825 27.325 28.8563 26.9375 27.8438 26.6625C26.8312 26.3875 25.8 26.25 24.75 26.25C23.25 26.25 21.8 26.5125 20.4 27.0375C19 27.5625 17.7 28.3 16.5 29.25M19.5 21.75V7.5L27 0V15L19.5 21.75Z"
                fill="white"
              />
            </svg>
            <h3 className="blog-reflections__dark-title">
              The Author's Mindset: Overcoming the Fear of the Void.
            </h3>
            <p className="blog-reflections__dark-text">
              Destiny is not found in the comfortable; it is written into existence through the
              struggle of the first draft.
            </p>
          </div>
          <div className="blog-reflections__dark-footer">
            <span>8 MIN READ</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white" />
            </svg>
          </div>
        </article>

        <a
          className="blog-reflections__card blog-reflections__card--light cursor-target"
          href={part4.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="blog-reflections__tags">
            <span className="blog-reflections__tag">How to Write</span>
            <span className="blog-reflections__tag">{part4.readTime}</span>
          </div>
          <h3 className="blog-reflections__card-title">{part4.title}</h3>
          <p className="blog-reflections__card-text">{part4.teaser}</p>
          <div className="blog-reflections__author">
            <span className="blog-reflections__avatar">TC</span>
            <div className="blog-reflections__author-meta">
              <span className="blog-reflections__author-name">Teacher Cyprian</span>
              <span className="blog-reflections__author-date">Published {part4.date}</span>
            </div>
          </div>
        </a>

        <a
          className="blog-reflections__card blog-reflections__card--wide cursor-target"
          href={part5.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="blog-reflections__eyebrow">{part5.badge.toUpperCase()}</span>
          <h3 className="blog-reflections__card-title">{part5.title}</h3>
          <p className="blog-reflections__card-text">{part5.teaser}</p>
          <span className="blog-reflections__underline-link">Read final part</span>
        </a>
      </div>
    </section>
  )
}
