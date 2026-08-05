import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { PartnersHero } from '../components/sections/PartnersHero'
import { PartnershipStats } from '../components/sections/PartnershipStats'
import { ScaleImpact } from '../components/sections/ScaleImpact'

export function Partners() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PartnersHero />
        <PartnershipStats />
        <ScaleImpact />
      </main>
      <Footer />
    </>
  )
}
