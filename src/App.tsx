import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useScrollToHash } from './hooks/useScrollToHash'
import { useSectionReveal } from './hooks/useSectionReveal'
import { PageTransition } from './components/common/PageTransition'
import { Home } from './pages/Home'

const AboutUs = lazy(() => import('./pages/AboutUs').then((m) => ({ default: m.AboutUs })))
const Jobs = lazy(() => import('./pages/Jobs').then((m) => ({ default: m.Jobs })))
const Blog = lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })))
const Testimonials = lazy(() => import('./pages/Testimonials').then((m) => ({ default: m.Testimonials })))
const Partners = lazy(() => import('./pages/Partners').then((m) => ({ default: m.Partners })))
const SelfPublishing = lazy(() => import('./pages/SelfPublishing').then((m) => ({ default: m.SelfPublishing })))
const Printing = lazy(() => import('./pages/Printing').then((m) => ({ default: m.Printing })))
const Branding = lazy(() => import('./pages/Branding').then((m) => ({ default: m.Branding })))
const FinishingServices = lazy(() =>
  import('./pages/FinishingServices').then((m) => ({ default: m.FinishingServices })),
)
const EducationalPublishing = lazy(() =>
  import('./pages/EducationalPublishing').then((m) => ({ default: m.EducationalPublishing })),
)
const Editing = lazy(() => import('./pages/Editing').then((m) => ({ default: m.Editing })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))
const Faq = lazy(() => import('./pages/Faq').then((m) => ({ default: m.Faq })))
const Marketplace = lazy(() => import('./pages/Marketplace').then((m) => ({ default: m.Marketplace })))

function App() {
  useScrollToHash()
  useSectionReveal()
  const location = useLocation()

  return (
    <>
      <PageTransition />
      <Suspense fallback={null}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/solutions/self-publishing" element={<SelfPublishing />} />
          <Route path="/solutions/printing" element={<Printing />} />
          <Route path="/solutions/branding" element={<Branding />} />
          <Route path="/solutions/finishing-services" element={<FinishingServices />} />
          <Route path="/solutions/educational-publishing" element={<EducationalPublishing />} />
          <Route path="/editing" element={<Editing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
