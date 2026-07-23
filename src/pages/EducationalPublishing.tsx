import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { EducationalHero } from '../components/sections/EducationalHero'
import { EducationalResources } from '../components/sections/EducationalResources'
import { EducationalCustomSolutions } from '../components/sections/EducationalCustomSolutions'
import { EducationalCta } from '../components/sections/EducationalCta'

export function EducationalPublishing() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <EducationalHero />
        <EducationalResources />
        <EducationalCustomSolutions />
        <EducationalCta />
      </main>
      <Footer />
    </>
  )
}
