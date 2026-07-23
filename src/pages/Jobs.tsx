import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { JobsHero } from '../components/sections/JobsHero'
import { JobsList } from '../components/sections/JobsList'

export function Jobs() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <JobsHero />
        <JobsList />
      </main>
      <Footer />
    </>
  )
}
