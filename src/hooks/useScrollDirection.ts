import { useEffect, useState } from 'react'

export type HeaderPhase = 'top' | 'hiding' | 'stuck'

interface ScrollState {
  direction: 'up' | 'down'
  scrolled: boolean
  /**
   * Header lifecycle:
   *  - 'top'    → at the very top, utility bar visible, no shadow
   *  - 'hiding' → user just started scrolling: nav tucks away for a beat
   *  - 'stuck'  → nav has returned and locks visible for the rest of the page
   */
  phase: HeaderPhase
}

/**
 * Drives the professional "tuck, return, stick" header behavior.
 *
 *  0 .. hideStart          → 'top'      (full header on screen)
 *  hideStart .. stuckAt    → 'hiding'   (nav slides up out of view)
 *  >= stuckAt              → 'stuck'    (nav slides back in and stays)
 *
 * Once we hit 'stuck' we never go back to 'hiding' — the header is locked
 * visible for the rest of the session on the page, only returning to 'top'
 * if the user scrolls all the way back to y ≤ 4.
 */
export function useScrollDirection(_hideStart = 40, stuckAt = 40): ScrollState {
  const [state, setState] = useState<ScrollState>({
    direction: 'up',
    scrolled: false,
    phase: 'top',
  })

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const update = () => {
      const y = window.scrollY
      const diff = y - lastY
      const direction: 'up' | 'down' = diff >= 0 ? 'down' : 'up'

      // Simplified, stable two-state header: at the very top vs. scrolled.
      // No hide/return dance — the nav stays put and only the utility bar
      // collapses. This removes the flicker users experienced when scrolling
      // near the threshold.
      const phase: HeaderPhase = y >= stuckAt ? 'stuck' : 'top'
      const scrolled = phase !== 'top'

      setState((prev) => {
        if (
          prev.phase === phase &&
          prev.scrolled === scrolled &&
          prev.direction === direction
        ) {
          return prev
        }
        return { direction, scrolled, phase }
      })

      lastY = y
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [_hideStart, stuckAt])

  return state
}
