import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './PageTransition.css'

/**
 * Route transitions:
 *  - First page load: a bright, subtle wash slides off to the right,
 *    revealing the page underneath.
 *  - Subsequent navigations: a soft light panel sweeps across the viewport,
 *    signalling arrival without stalling the user.
 */
export function PageTransition() {
  const location = useLocation()
  const [firstLoad, setFirstLoad] = useState(true)
  const [phase, setPhase] = useState<'visible' | 'leaving' | 'gone'>('visible')

  useEffect(() => {
    const leave = window.setTimeout(() => setPhase('leaving'), 80)
    const unmount = window.setTimeout(() => {
      setPhase('gone')
      setFirstLoad(false)
    }, 400)
    return () => {
      window.clearTimeout(leave)
      window.clearTimeout(unmount)
    }
  }, [])

  const transitionClass = [
    'page-transition',
    phase === 'visible' ? 'page-transition--visible' : '',
    phase === 'leaving' ? 'page-transition--leaving' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      {phase !== 'gone' && (
        <div className={transitionClass} aria-hidden={phase !== 'visible'} role="presentation">
          <div className="page-transition__sheet" />
          <div className="page-transition__mark">
            <span className="page-transition__rule" />
            <span className="page-transition__monogram">W</span>
            <span className="page-transition__rule" />
          </div>
        </div>
      )}

      {!firstLoad && (
        <div key={location.pathname} className="page-slide" aria-hidden="true" role="presentation">
          <span className="page-slide__panel" />
        </div>
      )}
    </>
  )
}
