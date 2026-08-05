import { useCallback, useEffect, useRef, useState } from 'react'

export function useSlideshow(length: number, intervalMs: number) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (isPaused || length <= 1) return

    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % length)
    }, intervalMs)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, length, intervalMs, index])

  const goTo = useCallback((next: number) => {
    setIndex(((next % length) + length) % length)
  }, [length])

  const pause = useCallback(() => setIsPaused(true), [])
  const resume = useCallback(() => setIsPaused(false), [])

  return { index, goTo, pause, resume, isPaused }
}
