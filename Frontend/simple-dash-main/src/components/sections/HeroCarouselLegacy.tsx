import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { useCardPipeline, type PipelineSlot } from '../../hooks/useCardPipeline'
import { heroSlides } from '../../utils/heroSlides'
import './HeroCarouselLegacy.css'

const AUTOPLAY_MS = 6000
const FAST_STEP_MS = 320

interface Rect {
  top: number
  left: number
  width: number
  height: number
}

type FrameRects = Record<'first' | 'second' | 'main', Rect>

export function HeroCarouselLegacy() {
  const { tokens, fastForwardSlot, jumpToSlide, pause, resume, isPaused, speed } = useCardPipeline(
    heroSlides.length,
    AUTOPLAY_MS,
    FAST_STEP_MS,
  )
  const mainToken = tokens.find((t) => t.slot === 'main')
  const activeIndex = mainToken?.slideIndex ?? 0

  const containerRef = useRef<HTMLDivElement>(null)
  const firstFrameRef = useRef<HTMLDivElement>(null)
  const secondFrameRef = useRef<HTMLDivElement>(null)
  const mainFrameRef = useRef<HTMLDivElement>(null)
  const [rects, setRects] = useState<FrameRects | null>(null)
  const [revealedIds, setRevealedIds] = useState<Set<number>>(new Set())

  useLayoutEffect(() => {
    const container = containerRef.current
    const firstEl = firstFrameRef.current
    const secondEl = secondFrameRef.current
    const mainEl = mainFrameRef.current
    if (!container || !firstEl || !secondEl || !mainEl) return

    function measure() {
      const containerRect = container!.getBoundingClientRect()
      const toRect = (el: HTMLDivElement): Rect => {
        const r = el.getBoundingClientRect()
        return {
          top: r.top - containerRect.top,
          left: r.left - containerRect.left,
          width: r.width,
          height: r.height,
        }
      }

      setRects({ first: toRect(firstEl!), second: toRect(secondEl!), main: toRect(mainEl!) })
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const newIds = tokens.map((t) => t.id).filter((id) => !revealedIds.has(id))
    if (newIds.length === 0) return
    const raf = requestAnimationFrame(() => {
      setRevealedIds((prev) => {
        const next = new Set(prev)
        newIds.forEach((id) => next.add(id))
        return next
      })
    })
    return () => cancelAnimationFrame(raf)
  }, [tokens, revealedIds])

  const handleSlotClick = (slot: PipelineSlot) => {
    if (slot === 'first' || slot === 'second') fastForwardSlot(slot)
  }

  return (
    <div className="hero__visual" onMouseEnter={pause} onMouseLeave={resume}>
      <div className="hero__visual-frame" ref={containerRef}>
        <div className="hero__visual-slot hero__visual-slot--main" ref={mainFrameRef} />
        <div className="hero__visual-slot hero__visual-slot--small" ref={secondFrameRef} />
        <div className="hero__visual-slot hero__visual-slot--small" ref={firstFrameRef} />

        {rects &&
          tokens.map((token) => {
            const isExiting = token.slot === 'exiting'
            const isNew = !revealedIds.has(token.id)
            const isClickable = token.slot === 'first' || token.slot === 'second'
            const rect = isExiting ? rects.main : rects[token.slot as 'first' | 'second' | 'main']

            const style: CSSProperties = {
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
              opacity: isExiting || isNew ? 0 : 1,
              transform: isExiting ? 'scale(0.94)' : isNew ? 'scale(0.92)' : 'scale(1)',
              transitionDuration: isExiting ? '0.5s' : speed === 'fast' ? '0.32s' : '0.75s',
              zIndex: token.slot === 'main' ? 3 : isExiting ? 1 : 2,
            }

            return (
              <img
                key={token.id}
                src={heroSlides[token.slideIndex].image}
                alt={heroSlides[token.slideIndex].titleLine1}
                className={`hero__pipeline-image hero__pipeline-image--${token.slot}${
                  isClickable ? ' hero__pipeline-image--clickable' : ''
                }`}
                style={style}
                onClick={isClickable ? () => handleSlotClick(token.slot) : undefined}
                onKeyDown={
                  isClickable
                    ? (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleSlotClick(token.slot)
                        }
                      }
                    : undefined
                }
                tabIndex={isClickable ? 0 : undefined}
                role={isClickable ? 'button' : undefined}
                aria-label={isClickable ? `Bring ${heroSlides[token.slideIndex].titleLine1} forward` : undefined}
              />
            )
          })}
      </div>

      <div className="hero__dots" role="tablist" aria-label="Hero slides">
        {heroSlides.map((item, i) => (
          <button
            key={item.image}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Show slide ${i + 1}: ${item.titleLine1}`}
            className={`hero__dot${i === activeIndex ? ' hero__dot--active' : ''}`}
            onClick={() => jumpToSlide(i)}
          >
            <span
              key={`${i}-${activeIndex}-${isPaused}`}
              className="hero__dot-fill"
              style={i === activeIndex && !isPaused ? { animationDuration: `${AUTOPLAY_MS}ms` } : undefined}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
