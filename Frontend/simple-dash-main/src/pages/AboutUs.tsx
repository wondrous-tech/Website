import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { AboutHero } from '../components/sections/AboutHero'
import { OurNarrative } from '../components/sections/OurNarrative'
import { CoreValues } from '../components/sections/CoreValues'
import './AboutUs.css'

export function AboutUs() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="about-page">
        <div className="about-page__stage about-page__stage--1"><AboutHero /></div>
        <div className="about-page__stage about-page__stage--2"><OurNarrative /></div>
        <div className="about-page__stage about-page__stage--3"><CoreValues /></div>
      </main>
      <Footer />
    </>
  )
}
