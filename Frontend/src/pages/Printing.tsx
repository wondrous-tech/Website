import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { PrintingHero } from '../components/sections/PrintingHero'
import { PrintingServices } from '../components/sections/PrintingServices'
import { PrintingQuality } from '../components/sections/PrintingQuality'
import { PrintingCta } from '../components/sections/PrintingCta'

export function Printing() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PrintingHero />
        <PrintingServices />
        <PrintingQuality />
        <PrintingCta />
      </main>
      <Footer />
    </>
  )
}
