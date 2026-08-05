import { howToWriteSeries } from '../../utils/blogPosts'
import './BlogSidebar.css'

export function BlogSidebar() {
  return (
    <aside className="blog-sidebar">
      <div className="blog-sidebar__top">
        <div className="blog-sidebar__brand-wrap">
          <span className="blog-sidebar__kicker">The Series</span>
          <h2 className="blog-sidebar__brand">How to Write &amp; Publish a Book</h2>
          <p className="blog-sidebar__tagline">
            A five-part chronicle by Teacher Cyprian on craft, structure, and legacy.
          </p>
        </div>

        <ol className="blog-sidebar__list" aria-label="Series contents">
          {howToWriteSeries.map((post, i) => (
            <li key={post.part} className="blog-sidebar__item">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`blog-sidebar__post cursor-target${i === 0 ? ' blog-sidebar__post--active' : ''}`}
              >
                <span className="blog-sidebar__num">{String(post.part).padStart(2, '0')}</span>
                <span className="blog-sidebar__post-body">
                  <span className="blog-sidebar__post-title">{post.title.replace(/\.$/, '')}</span>
                  <span className="blog-sidebar__post-meta">
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div className="blog-sidebar__bottom">
        <div className="blog-sidebar__note">
          <span className="blog-sidebar__note-label">Editor's Note</span>
          <p className="blog-sidebar__note-text">
            Read the parts in order. Each chapter builds on the discipline established in the last.
          </p>
        </div>
        <a className="blog-sidebar__cta cursor-target" href="#newsletter">
          Subscribe to the Journal
        </a>
      </div>
    </aside>
  )
}
