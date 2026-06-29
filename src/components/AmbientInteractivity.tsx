'use client'

import { useEffect, useRef } from 'react'

export function AmbientInteractivity() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight * 0.38

    const updateGlow = () => {
      glow.style.setProperty('--cursor-x', `${x}px`)
      glow.style.setProperty('--cursor-y', `${y}px`)
      raf = 0
    }

    const moveGlow = (event: PointerEvent) => {
      x = event.clientX
      y = event.clientY
      if (!raf) raf = requestAnimationFrame(updateGlow)
    }

    window.addEventListener('pointermove', moveGlow, { passive: true })
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', moveGlow)
    }
  }, [])

  return (
    <>
      <div className="ambient-gradient" aria-hidden="true" />
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
    </>
  )
}
