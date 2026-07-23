import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { Gallery } from '../components/sections/Gallery'
import { Philosophy } from '../components/sections/Philosophy'
import { Services } from '../components/sections/Services'
import { PneumaAwards } from '../components/sections/PneumaAwards'
import { TestimonialSpotlight } from '../components/sections/TestimonialSpotlight'

export function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Gallery />
        <Philosophy />
        <Services />
        <TestimonialSpotlight />
        <PneumaAwards />

      </main>
      <Footer />
    </>
  )
}
