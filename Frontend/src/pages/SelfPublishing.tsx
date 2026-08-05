import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { SelfPublishingHero } from '../components/sections/SelfPublishingHero'
import { ServiceLifecycle } from '../components/sections/ServiceLifecycle'
import { WhyChooseUs } from '../components/sections/WhyChooseUs'
import { SelfPublishingCta } from '../components/sections/SelfPublishingCta'

export function SelfPublishing() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <SelfPublishingHero />
        <ServiceLifecycle />
        <WhyChooseUs />
        <SelfPublishingCta />
      </main>
      <Footer />
    </>
  )
}
