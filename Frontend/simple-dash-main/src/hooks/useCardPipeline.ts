import { useCallback, useEffect, useRef, useState } from 'react'

export type PipelineSlot = 'first' | 'second' | 'main' | 'exiting'

export interface PipelineToken {
  id: number
  slideIndex: number
  slot: PipelineSlot
}

const EXIT_MS = 550
type PipelineSpeed = 'normal' | 'fast'

function createInitialTokens(length: number): PipelineToken[] {
  return [
    { id: 0, slideIndex: 0 % length, slot: 'first' },
    { id: 1, slideIndex: 1 % length, slot: 'second' },
    { id: 2, slideIndex: 2 % length, slot: 'main' },
  ]
}

export function useCardPipeline(length: number, intervalMs: number, fastStepMs: number) {
  const idRef = useRef(3)
  const queueRef = useRef(3 % length)
  const busyRef = useRef(false)
  const pausedRef = useRef(false)
  const speedRef = useRef<PipelineSpeed>('normal')
  const tokensRef = useRef<PipelineToken[]>(createInitialTokens(length))
  const [snapshot, setSnapshot] = useState(() => ({
    tokens: createInitialTokens(length),
    isPaused: false,
    speed: 'normal' as PipelineSpeed,
  }))

  const publish = useCallback(() => {
    setSnapshot({
      tokens: [...tokensRef.current],
      isPaused: pausedRef.current,
      speed: speedRef.current,
    })
  }, [])

  const step = useCallback(() => {
    const prev = tokensRef.current
    const first = prev.find((t) => t.slot === 'first')!
    const second = prev.find((t) => t.slot === 'second')!
    const main = prev.find((t) => t.slot === 'main')!
    const nextIdx = queueRef.current
    queueRef.current = (queueRef.current + 1) % length
    const entering: PipelineToken = { id: idRef.current++, slideIndex: nextIdx, slot: 'first' }

    tokensRef.current = [
      entering,
      { ...first, slot: 'second' },
      { ...second, slot: 'main' },
      { ...main, slot: 'exiting' },
    ]
    publish()

    window.setTimeout(() => {
      tokensRef.current = tokensRef.current.filter((t) => t.id !== main.id)
      publish()
    }, EXIT_MS)
  }, [length, publish])

  useEffect(() => {
    if (length <= 1) return
    const timer = window.setInterval(() => {
      if (!pausedRef.current) step()
    }, intervalMs)
    return () => window.clearInterval(timer)
  }, [intervalMs, step, length])

  const runSteps = useCallback(
    (steps: number) => {
      if (busyRef.current || steps <= 0) return
      busyRef.current = true
      speedRef.current = 'fast'
      pausedRef.current = true

      let remaining = steps
      const run = () => {
        step()
        remaining -= 1
        if (remaining > 0) {
          window.setTimeout(run, fastStepMs)
        } else {
          window.setTimeout(() => {
            busyRef.current = false
            speedRef.current = 'normal'
            pausedRef.current = false
            publish()
          }, fastStepMs)
        }
      }
      run()
    },
    [step, fastStepMs, publish],
  )

  const fastForwardSlot = useCallback(
    (slot: 'first' | 'second') => {
      runSteps(slot === 'second' ? 1 : 2)
    },
    [runSteps],
  )

  const jumpToSlide = useCallback(
    (slideIndex: number) => {
      const current = tokensRef.current
      const mainToken = current.find((t) => t.slot === 'main')
      if (!mainToken || mainToken.slideIndex === slideIndex) return

      const secondToken = current.find((t) => t.slot === 'second')
      const firstToken = current.find((t) => t.slot === 'first')
      const upcoming: number[] = []
      if (secondToken) upcoming.push(secondToken.slideIndex)
      if (firstToken) upcoming.push(firstToken.slideIndex)

      let q = queueRef.current
      for (let i = 0; i < length; i++) {
        upcoming.push(q)
        q = (q + 1) % length
      }

      const pos = upcoming.indexOf(slideIndex)
      runSteps(pos === -1 ? length : pos + 1)
    },
    [length, runSteps],
  )

  const pause = useCallback(() => {
    pausedRef.current = true
    publish()
  }, [publish])

  const resume = useCallback(() => {
    if (!busyRef.current) {
      pausedRef.current = false
      publish()
    }
  }, [publish])

  return {
    tokens: snapshot.tokens,
    fastForwardSlot,
    jumpToSlide,
    pause,
    resume,
    isPaused: snapshot.isPaused,
    speed: snapshot.speed,
  }
}
