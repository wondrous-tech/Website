import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { BrandingHero } from '../components/sections/BrandingHero'
import { BrandingIntro } from '../components/sections/BrandingIntro'
import { BrandingPillars } from '../components/sections/BrandingPillars'
import { BrandingGallery } from '../components/sections/BrandingGallery'
import { BrandingPhilosophy } from '../components/sections/BrandingPhilosophy'
import { BrandingCta } from '../components/sections/BrandingCta'

export function Branding() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <BrandingHero />
        <BrandingIntro />
        <BrandingPillars />
        <BrandingGallery />
        <BrandingPhilosophy />
        <BrandingCta />
      </main>
      <Footer />
    </>
  )
}
