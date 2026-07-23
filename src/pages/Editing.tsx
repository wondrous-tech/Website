import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { EditingHero } from '../components/sections/EditingHero'
import { EditingIntro } from '../components/sections/EditingIntro'
import { EditingTiers } from '../components/sections/EditingTiers'
import { EditingIncluded } from '../components/sections/EditingIncluded'
import { EditingGhostwriting } from '../components/sections/EditingGhostwriting'

export function Editing() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <EditingHero />
        <EditingIntro />
        <EditingTiers />
        <EditingIncluded />
        <EditingGhostwriting />
      </main>
      <Footer />
    </>
  )
}
