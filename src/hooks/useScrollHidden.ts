import { useEffect, useState } from 'react'

export function useScrollHidden(threshold: number) {
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsHidden(window.scrollY > threshold)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isHidden
}
