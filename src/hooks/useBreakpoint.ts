'use client'
import { useState, useEffect } from 'react'

export function useBreakpoint() {
  const [w, setW] = useState(0)
  useEffect(() => {
    const update = () => setW(window.innerWidth)
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])
  const isMobile = w > 0 && w < 768
  const isTablet = w >= 768 && w < 1024
  return {
    isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet,
    px: isMobile ? '20px' : isTablet ? '40px' : '72px',
    sectionPy: isMobile ? '60px' : isTablet ? '80px' : '100px',
  }
}
