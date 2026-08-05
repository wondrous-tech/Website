import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On every route change, tag direct children of <main> as reveal targets
 * and progressively unveil them with directional variants + staggered
 * child animations. Above-the-fold sections play immediately; the rest
 * unlock via IntersectionObserver.
 */
export function useSectionReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const main = document.getElementById('main-content')
    if (!main) return

    const sections = Array.from(main.querySelectorAll<HTMLElement>(':scope > *'))
    if (!sections.length) return

    // Alternate between subtle "up" rise and "scale" bloom.
    // Horizontal section-level slides are avoided to prevent
    // page-width overflow at any viewport.
    const directions = ['up', 'up', 'scale', 'up'] as const

    sections.forEach((el, i) => {
      el.classList.add('reveal')
      el.classList.remove('reveal--in')
      const dir = directions[i % directions.length]
      if (dir !== 'up') el.setAttribute('data-reveal', dir)

      // Tag first-level meaningful children for stagger animation
      const children = Array.from(
        el.querySelectorAll<HTMLElement>(
          ':scope > div > *, :scope > section > *, :scope > .container > *, :scope > ul > li, :scope > ol > li'
        )
      )
      const staggerable = children.filter(
        (c) => c.offsetParent !== null && !c.hasAttribute('data-reveal-skip')
      )
      if (staggerable.length >= 2 && staggerable.length <= 12) {
        el.setAttribute('data-reveal-children', '')
        staggerable.forEach((child, idx) => {
          child.style.setProperty('--child-index', String(idx))
          // Portrait/card-like children: alternate side slide-in
          const rect = child.getBoundingClientRect()
          const isPortrait = rect.height > rect.width * 1.05
          const looksLikeCard = /card|item|tier|pillar|value|feature|article|resource|material/i.test(
            child.className || ''
          )
          if (isPortrait || looksLikeCard) {
            child.setAttribute('data-reveal-child', idx % 2 === 0 ? 'left' : 'right')
          }
        })
      }

    })

    const viewportH = window.innerHeight
    let staggerIndex = 0

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.setProperty('--reveal-delay', '0ms')
            el.classList.add('reveal--in')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    sections.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < viewportH * 0.9) {
        el.style.setProperty('--reveal-delay', `${staggerIndex * 70}ms`)
        void el.offsetWidth
        el.classList.add('reveal--in')
        staggerIndex += 1
      } else {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [pathname])
}
