import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { FinishingHero } from '../components/sections/FinishingHero'
import { FinishingStats } from '../components/sections/FinishingStats'
import { FinishingFinalities } from '../components/sections/FinishingFinalities'
import { FinishingMaterials } from '../components/sections/FinishingMaterials'
import { FinishingBookBuild } from '../components/sections/FinishingBookBuild'
import { FinishingCta } from '../components/sections/FinishingCta'

export function FinishingServices() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <FinishingHero />
        <FinishingStats />
        <FinishingFinalities />
        <FinishingMaterials />
        <FinishingBookBuild />
        <FinishingCta />
      </main>
      <Footer />
    </>
  )
}
