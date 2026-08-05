import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { BlogSidebar } from '../components/layout/BlogSidebar'
import { BlogHero } from '../components/sections/BlogHero'
import { BlogLatestReflections } from '../components/sections/BlogLatestReflections'
import { BlogNewsletter } from '../components/sections/BlogNewsletter'
import './Blog.css'

export function Blog() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <div className="blog-page">
          <BlogSidebar />
          <div className="blog-page__content">
            <BlogHero />
            <BlogLatestReflections />
            <BlogNewsletter />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

