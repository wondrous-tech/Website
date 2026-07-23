import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { AboutHero } from '../components/sections/AboutHero'
import { OurNarrative } from '../components/sections/OurNarrative'
import { CoreValues } from '../components/sections/CoreValues'

export function AboutUs() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <AboutHero />
        <OurNarrative />
        <CoreValues />
      </main>
      <Footer />
    </>
  )
}
