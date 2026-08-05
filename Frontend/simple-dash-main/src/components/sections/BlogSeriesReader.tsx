import { useState } from 'react'
import { howToWriteSeries } from '../../utils/blogPosts'
import './BlogSeriesReader.css'

export function BlogSeriesReader() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = howToWriteSeries[activeIndex]

  return (
    <section className="series-reader">
      <div className="series-reader__header">
        <div>
          <span className="series-reader__eyebrow">
            <span className="series-reader__eyebrow-rule" aria-hidden="true" />
            THE PATH TO PUBLICATION
          </span>
          <h2 className="series-reader__title">A definitive 5-part masterclass in authorship.</h2>
        </div>
        <a
          className="series-reader__view-all cursor-target"
          href="https://wondrouspublishing.blogspot.com/search/label/how%20to%20write%20a%20book"
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW FULL SERIES
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="currentColor" />
          </svg>
        </a>
      </div>

      <div className="series-reader__body">
        <nav className="series-reader__list" aria-label="Series chapters">
          {howToWriteSeries.map((post, i) => (
            <button
              key={post.part}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`series-reader__item cursor-target${i === activeIndex ? ' series-reader__item--active' : ''}`}
              aria-current={i === activeIndex}
            >
              <span className="series-reader__item-num">0{post.part}</span>
              <span className="series-reader__item-body">
                <span className="series-reader__item-badge">{post.badge}</span>
                <span className="series-reader__item-title">{post.title}</span>
                <span className="series-reader__item-meta">
                  {post.date} &middot; {post.readTime}
                </span>
              </span>
            </button>
          ))}
        </nav>

        <article key={active.part} className="series-reader__panel">
          <span className="series-reader__panel-badge">{active.badge}</span>
          <h3 className="series-reader__panel-title">{active.title}</h3>
          <div className="series-reader__panel-meta">
            <span>Part {active.part} of {howToWriteSeries.length}</span>
            <span aria-hidden="true">&bull;</span>
            <span>{active.date}</span>
            <span aria-hidden="true">&bull;</span>
            <span>{active.readTime}</span>
          </div>
          <p className="series-reader__panel-teaser">{active.teaser}</p>

          <div className="series-reader__panel-actions">
            <a
              className="series-reader__cta cursor-target"
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the full chapter
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 18C1.45 18 0.98 17.8 0.59 17.41C0.2 17.02 0 16.55 0 16V2C0 1.45 0.2 0.98 0.59 0.59C0.98 0.2 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8 17.02 17.41 17.41C17.02 17.8 16.55 18 16 18H2M6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z" fill="currentColor" />
              </svg>
            </a>

            <div className="series-reader__pager">
              <button
                type="button"
                className="series-reader__pager-btn"
                disabled={activeIndex === 0}
                onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="series-reader__pager-btn"
                disabled={activeIndex === howToWriteSeries.length - 1}
                onClick={() => setActiveIndex((i) => Math.min(howToWriteSeries.length - 1, i + 1))}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
