'use client'

import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number

    const resize = () => {
      const p = canvas.parentElement
      canvas.width  = p?.offsetWidth  ?? window.innerWidth
      canvas.height = p?.offsetHeight ?? window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    interface P {
      x: number; y: number
      vy: number             // upward speed
      r: number              // dot radius
      alpha: number          // current opacity
      maxAlpha: number       // peak opacity for this particle
      sway: number           // horizontal sway phase
      swayAmp: number        // how much it sways
      swaySpeed: number
    }

    const COUNT = 55

    const spawn = (anyY = false): P => ({
      x:         Math.random() * canvas.width,
      y:         anyY ? Math.random() * canvas.height : canvas.height + Math.random() * 80,
      vy:        0.06 + Math.random() * 0.16,           // very slow upward drift
      r:         0.6  + Math.random() * 1.8,            // 0.6–2.4 px
      alpha:     0,
      maxAlpha:  0.1  + Math.random() * 0.28,           // 0.1–0.38 peak
      sway:      Math.random() * Math.PI * 2,
      swayAmp:   0.06 + Math.random() * 0.14,           // gentle side-to-side
      swaySpeed: 0.003 + Math.random() * 0.005,
    })

    const ps: P[] = Array.from({ length: COUNT }, () => spawn(true))

    const frame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of ps) {
        // Move
        p.sway += p.swaySpeed
        p.x    += Math.sin(p.sway) * p.swayAmp
        p.y    -= p.vy

        // Fade in when entering from below, fade out near top
        const progress = 1 - p.y / canvas.height   // 0 = bottom, 1 = top
        const target =
          progress < 0.08 ? p.maxAlpha * (progress / 0.08)
          : progress > 0.82 ? p.maxAlpha * ((1 - progress) / 0.18)
          : p.maxAlpha
        p.alpha += (target - p.alpha) * 0.04   // smooth lerp toward target

        if (p.y < -10) Object.assign(p, spawn(false))

        // Soft warm-white glow
        ctx.shadowColor = `rgba(255, 235, 200, ${(p.alpha * 0.7).toFixed(3)})`
        ctx.shadowBlur  = p.r * 2.5
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 238, 210, ${p.alpha.toFixed(3)})`
        ctx.fill()
      }

      // Reset shadow so it doesn't bleed elsewhere
      ctx.shadowBlur  = 0
      ctx.shadowColor = 'transparent'

      raf = requestAnimationFrame(frame)
    }

    frame()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  )
}
