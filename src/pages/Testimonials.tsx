import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { TestimonialsHero } from '../components/sections/TestimonialsHero'
import { Testimonials as TestimonialsGrid } from '../components/sections/Testimonials'
import { ManuscriptCallout } from '../components/sections/ManuscriptCallout'

export function Testimonials() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <TestimonialsHero />
        <TestimonialsGrid />
        <ManuscriptCallout />
      </main>
      <Footer />
    </>
  )
}
