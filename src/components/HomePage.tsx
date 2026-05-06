'use client'

import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Camera, Code2, Aperture, Layers,
  Image as ImageIcon, ArrowRight, ArrowUpRight, Send,
  type LucideIcon,
} from 'lucide-react'
import type { CMSHomepage } from '@/lib/cms/homepage'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import type { CMSProject } from '@/lib/cms/projects'
import type { CMSPhoto } from '@/lib/cms/gallery'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const SERVICE_ICONS = [Camera, Code2, Aperture, Layers]

const THUMB_GRADIENTS = [
  'linear-gradient(135deg, #1a1510 0%, #2d2018 50%, #1a1510 100%)',
  'linear-gradient(135deg, #0e1510 0%, #142010 50%, #0e1510 100%)',
  'linear-gradient(135deg, #100e14 0%, #1c1520 50%, #100e14 100%)',
]

function ServiceCard({ icon: Icon, title, desc }: {
  icon: LucideIcon; title: string; desc: string
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="service-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.025)',
        border: `1px solid ${hovered ? 'rgba(226,226,226,0.22)' : 'rgba(226,226,226,0.12)'}`,
        borderRadius: '12px', padding: '28px',
        display: 'flex', flexDirection: 'column', gap: '14px',
        transition: 'background 0.22s ease, border-color 0.22s ease, transform 0.22s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        willChange: 'transform',
      }}
    >
      <div style={{
        width: '44px', height: '44px', borderRadius: '8px',
        background: 'rgba(109,39,53,0.15)',
        border: '1px solid rgba(138,63,78,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon size={20} style={{ color: '#c96a78' }} strokeWidth={1.5} />
      </div>
      <div style={{ fontSize: '18px', fontWeight: 500, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.2px' }}>
        {title}
      </div>
      <div style={{ fontSize: '14px', color: '#868584', lineHeight: 1.65, fontFamily: 'DM Sans, sans-serif' }}>
        {desc}
      </div>
    </div>
  )
}

function ProjectThumb({ label, category, year, gradient, onClick }: {
  label: string; category: string; year: string; gradient: string; onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="project-thumb"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        position: 'relative', borderRadius: '10px', overflow: 'hidden',
        aspectRatio: '4/5', cursor: 'pointer',
        background: gradient,
        border: `1px solid ${hovered ? 'rgba(226,226,226,0.24)' : 'rgba(226,226,226,0.12)'}`,
        transition: 'transform 0.28s ease, border-color 0.22s ease',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        willChange: 'transform',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(14,13,12,0.88) 0%, transparent 55%)',
      }} />
      <div style={{
        position: 'absolute', top: '16px', right: '16px',
        width: '32px', height: '32px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.2s ease',
      }}>
        <ArrowUpRight size={14} style={{ color: '#faf9f6' }} />
      </div>
      <div style={{ position: 'absolute', bottom: '18px', left: '18px', right: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontSize: '10px', letterSpacing: '1.8px', textTransform: 'uppercase', color: '#c96a78', fontFamily: 'DM Sans, sans-serif' }}>
          {category}
        </span>
        <span style={{ fontSize: '16px', fontWeight: 500, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.2px' }}>
          {label}
        </span>
        <span style={{ fontSize: '11px', color: '#868584', fontFamily: 'DM Sans, sans-serif' }}>{year}</span>
      </div>
    </div>
  )
}

// ─── Hero particles ──────────────────────────────────────────────────────────

type PoolItem = { text: string; mono: boolean; accent: boolean }

const PARTICLE_POOL: PoolItem[] = [
  // pure code
  { text: '</>',                  mono: true,  accent: false },
  { text: '() =>',               mono: true,  accent: false },
  { text: 'useEffect()',          mono: true,  accent: false },
  { text: 'useState()',           mono: true,  accent: false },
  { text: 'useRef()',             mono: true,  accent: false },
  { text: 'async/await',         mono: true,  accent: false },
  { text: 'import React',        mono: true,  accent: false },
  { text: 'export default',      mono: true,  accent: false },
  { text: 'interface Props',     mono: true,  accent: false },
  { text: 'type Record<K,V>',    mono: true,  accent: false },
  { text: 'Promise<void>',       mono: true,  accent: false },
  { text: 'null ?? default',     mono: true,  accent: false },
  { text: '?.property',          mono: true,  accent: false },
  { text: '{ ...spread }',       mono: true,  accent: false },
  { text: 'map().filter()',      mono: true,  accent: false },
  { text: 'try { } catch { }',   mono: true,  accent: false },
  { text: 'npm run dev',         mono: true,  accent: false },
  { text: 'git push origin',     mono: true,  accent: false },
  { text: 'git commit -m',       mono: true,  accent: false },
  { text: '@media (max-width)',  mono: true,  accent: false },
  { text: 'flex: 1 0 auto',      mono: true,  accent: false },
  { text: 'grid-template',       mono: true,  accent: false },
  { text: '===',                 mono: true,  accent: false },
  { text: '&&',                  mono: true,  accent: false },
  { text: '||',                  mono: true,  accent: false },
  { text: 'return null',         mono: true,  accent: false },
  { text: 'const fn = () =>',    mono: true,  accent: false },
  // pure photography
  { text: 'RAW',                 mono: false, accent: true  },
  { text: 'bokeh',               mono: false, accent: true  },
  { text: 'aperture',            mono: false, accent: true  },
  { text: 'golden hour',         mono: false, accent: true  },
  { text: '35mm',                mono: false, accent: true  },
  { text: '50mm',                mono: false, accent: true  },
  { text: '85mm',                mono: false, accent: true  },
  { text: 'depth of field',      mono: false, accent: true  },
  { text: 'ISO 800',             mono: false, accent: true  },
  { text: 'ISO 3200',            mono: false, accent: true  },
  { text: 'f / 1.4',             mono: false, accent: true  },
  { text: 'f / 2.8',             mono: false, accent: false },
  { text: '1/500s',              mono: false, accent: true  },
  { text: '1/1000s',             mono: false, accent: false },
  { text: 'exposure',            mono: false, accent: false },
  { text: 'shutter',             mono: false, accent: false },
  { text: 'portrait',            mono: false, accent: true  },
  { text: 'landscape',           mono: false, accent: false },
  { text: 'compose',             mono: false, accent: true  },
  { text: 'white balance',       mono: false, accent: false },
  { text: 'fine art',            mono: false, accent: false },
  { text: 'histogram',           mono: false, accent: false },
  { text: 'long exposure',       mono: false, accent: true  },
  { text: 'prime lens',          mono: false, accent: false },
  { text: 'color grade',         mono: false, accent: true  },
  // hybrid — code syntax + photo concept
  { text: 'const shoot = () =>', mono: true,  accent: false },
  { text: 'import { bokeh }',    mono: true,  accent: false },
  { text: 'async expose()',      mono: true,  accent: true  },
  { text: '// golden hour',      mono: true,  accent: false },
  { text: 'type Aperture = f',   mono: true,  accent: false },
  { text: 'render(<Scene />)',   mono: true,  accent: false },
  { text: 'shutter: 1/500s',     mono: true,  accent: true  },
  { text: 'focus.current',       mono: true,  accent: false },
  { text: 'depth: "shallow"',    mono: true,  accent: false },
  { text: 'export { frames }',   mono: true,  accent: false },
  { text: 'Promise<Light>',      mono: true,  accent: true  },
  { text: 'compose()',           mono: true,  accent: true  },
  { text: 'shoot()',             mono: true,  accent: true  },
  { text: '// snap',             mono: true,  accent: false },
  { text: 'git commit --snap',   mono: true,  accent: false },
  { text: 'npm run shoot',       mono: true,  accent: false },
  { text: 'useFrame(camera)',    mono: true,  accent: false },
  { text: 'type ISO = number',   mono: true,  accent: false },
  { text: 'async capture()',     mono: true,  accent: true  },
  { text: 'const [iso, setIso]', mono: true,  accent: false },
  { text: 'interface Lens {}',   mono: true,  accent: false },
  { text: 'RAW | undefined',     mono: true,  accent: true  },
  { text: '// TODO: add light',  mono: true,  accent: false },
  { text: 'expose(scene)',       mono: true,  accent: true  },
  { text: 'frame.compose()',     mono: true,  accent: true  },
  { text: 'new Lens(50)',        mono: true,  accent: false },
  { text: 'Flash.trigger()',     mono: true,  accent: true  },
  { text: '{ focus }',           mono: true,  accent: true  },
  { text: 'Shutter.open()',      mono: true,  accent: true  },
  { text: 'type Light = warm',   mono: true,  accent: false },
  { text: 'capture(frame)',      mono: true,  accent: true  },
  { text: 'const raw = true',    mono: true,  accent: false },
  { text: 'lens.focus(near)',    mono: true,  accent: true  },
  { text: 'scene.render()',      mono: true,  accent: false },
  { text: 'f_stop: number',      mono: true,  accent: false },
]

type ParticleItem = PoolItem & { x: string; y: string; sz: number; dur: number; delay: number }

// Estimate pixel bounding box for a particle given viewport dimensions
function particleRect(text: string, sz: number, mono: boolean, xPct: number, yPct: number, vw: number, vh: number) {
  const charW = mono ? sz * 0.62 : sz * 0.55
  return {
    x: xPct / 100 * vw,
    y: yPct / 100 * vh,
    w: text.length * charW + 6,
    h: sz * 1.55,
  }
}

function overlaps(a: ReturnType<typeof particleRect>, b: ReturnType<typeof particleRect>, gap: number) {
  return !(a.x + a.w + gap < b.x || b.x + b.w + gap < a.x ||
           a.y + a.h + gap < b.y || b.y + b.h + gap < a.y)
}

function buildParticles(count: number, vw: number, vh: number): ParticleItem[] {
  const shuffled = [...PARTICLE_POOL].sort(() => Math.random() - 0.5)
  const result: ParticleItem[] = []
  const placed: ReturnType<typeof particleRect>[] = []
  const GAP = 18      // minimum pixel gap between any two particles
  const MAX_TRIES = 120

  for (const item of shuffled) {
    if (result.length >= count) break

    const roll = Math.random()
    const sz = roll < 0.6  ? 9  + Math.floor(Math.random() * 3)
             : roll < 0.85 ? 12 + Math.floor(Math.random() * 3)
             : 15 + Math.floor(Math.random() * 4)

    for (let t = 0; t < MAX_TRIES; t++) {
      let xPct: number, yPct: number
      // Avoid bottom-left quadrant where the hero title lives
      do {
        xPct = 3  + Math.random() * 91
        yPct = 5  + Math.random() * 88
      } while (yPct > 62 && xPct < 44)

      const rect = particleRect(item.text, sz, item.mono, xPct, yPct, vw, vh)

      // Skip if the particle would overflow the right edge
      if (rect.x + rect.w > vw * 0.97) continue

      if (!placed.some(r => overlaps(r, rect, GAP))) {
        result.push({
          ...item,
          x:     `${xPct.toFixed(1)}%`,
          y:     `${yPct.toFixed(1)}%`,
          sz,
          dur:   3.8 + Math.random() * 2.4,
          delay: Math.random() * 5.0,
        })
        placed.push(rect)
        break
      }
    }
    // If no valid spot found after MAX_TRIES, skip this item
  }

  return result
}

const PARTICLE_COUNT = 30

function HeroParticles() {
  const [items, setItems] = useState<ParticleItem[]>([])

  // Randomise client-side with actual viewport dimensions to drive collision detection
  useEffect(() => {
    setItems(buildParticles(PARTICLE_COUNT, window.innerWidth, window.innerHeight))
  }, [])

  return (
    <div
      className="hero-wolf"
      style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}
    >
      {items.map(({ text, x, y, sz, accent, mono, dur, delay }, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: x,
            top: y,
            animation: `${accent ? 'hpFloatAccent' : 'hpFloat'} ${dur.toFixed(2)}s ease-in-out infinite`,
            animationDelay: `${delay.toFixed(2)}s`,
            animationFillMode: 'backwards',
            pointerEvents: 'auto',
            cursor: 'default',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget
            el.style.animationPlayState = 'paused'
            el.style.opacity = '1'
            el.style.transform = 'scale(1.28) translateY(-3px)'
            el.style.textShadow = accent
              ? '0 0 16px rgba(201,106,120,0.95), 0 0 32px rgba(201,106,120,0.4)'
              : '0 0 14px rgba(250,249,246,0.7), 0 0 28px rgba(250,249,246,0.22)'
            el.style.zIndex = '8'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget
            el.style.opacity = ''
            el.style.transform = ''
            el.style.textShadow = ''
            el.style.zIndex = ''
            el.style.animationPlayState = ''
          }}
        >
          <span style={{
            fontSize: `${sz}px`,
            fontFamily: mono ? "'Geist Mono','Courier New',monospace" : "'DM Sans',sans-serif",
            color: accent ? '#c96a78' : '#faf9f6',
            letterSpacing: mono ? '-0.3px' : '0px',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            display: 'inline-block',
          }}>
            {text}
          </span>
        </span>
      ))}
    </div>
  )
}

import HeroCanvas from './HeroCanvas'

const PHOTO_GRADIENTS = [
  'linear-gradient(135deg, #0e1208 0%, #152008 50%, #0e1208 100%)',
  'linear-gradient(135deg, #0a0e16 0%, #0e1420 50%, #0a0e16 100%)',
  'linear-gradient(135deg, #160e0a 0%, #221408 50%, #160e0a 100%)',
]


const defaultHomepage: CMSHomepage = {
  heroEyebrow: 'Available for work · HBO Student',
  heroLine1: 'photographer',
  heroLine2: '& developer.',
  heroSubtitle: 'Photographer & Developer',
  heroBody: 'Based in the Netherlands — creating visual work and building digital products.',
  services: [
    { title: 'Photography', description: 'Landscape, portrait and documentary photography. Every frame considered.' },
    { title: 'Web development', description: 'Full-stack web applications built with modern tools. Clean code, excellent UX.' },
    { title: 'Portrait sessions', description: 'Professional portrait photography for individuals and brands.' },
    { title: 'UI & design', description: 'Interfaces crafted with care — dark-surface, editorial and calm.' },
  ],
  stats: [
    { value: 3, suffix: '+', label: 'Years shooting' },
    { value: 200, suffix: '+', label: 'Photos taken' },
    { value: 12, suffix: '', label: 'Projects built' },
    { value: 4, suffix: '', label: 'Photo series' },
  ],
  aboutTitle: 'About me',
  aboutBody: '',
}

export default function HomePage({
  homepage = defaultHomepage,
  featuredProjects = [],
  featuredPhotos = [],
}: {
  homepage?: CMSHomepage
  featuredProjects?: CMSProject[]
  featuredPhotos?: CMSPhoto[]
}) {
  const router = useRouter()
  const { isMobile, px, sectionPy } = useBreakpoint()
  const containerRef = useRef<HTMLDivElement>(null)
  const statRefs = useRef<(HTMLSpanElement | null)[]>([])
  const heroBg = homepage.heroImage?.url || '/uploads/hero.png'

  const services = homepage.services?.length ? homepage.services : defaultHomepage.services
  const stats = homepage.stats?.length ? homepage.stats : defaultHomepage.stats

  // Use CMS featured projects or fall back to placeholder thumbnails
  const projectThumbs = featuredProjects.length > 0
    ? featuredProjects.slice(0, 3).map((p, i) => ({
        label: p.title,
        category: p.tag,
        year: p.year,
        gradient: THUMB_GRADIENTS[i % THUMB_GRADIENTS.length],
        slug: p.slug,
      }))
    : [
        { label: 'Urban Frames', category: 'Photography', year: '2025', gradient: THUMB_GRADIENTS[0], slug: null },
        { label: 'Forest Light', category: 'Landscape', year: '2025', gradient: THUMB_GRADIENTS[1], slug: null },
        { label: 'Terminal UI', category: 'Development', year: '2024', gradient: THUMB_GRADIENTS[2], slug: null },
      ]

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from('.hero-bg-wrap img', { scale: 1.07, duration: 2.6, ease: 'power2.out' }, 0)
    tl.from('.hero-accent-wash', { opacity: 0, duration: 1.4 }, 0)
    tl.from('.eyebrow-line', { scaleX: 0, transformOrigin: 'left center', duration: 0.65, ease: 'power3.out' }, 0.28)
    tl.from('.eyebrow-text', { x: -18, opacity: 0, duration: 0.55, ease: 'power3.out' }, 0.5)
    tl.from('.hero-line', { y: '110%', duration: 0.92, stagger: 0.1, ease: 'power4.out' }, 0.42)
    tl.from('.hero-sub', { y: 22, opacity: 0, duration: 0.72, ease: 'power3.out' }, 1.16)
    tl.from('.hero-btn', { y: 16, opacity: 0, stagger: 0.12, duration: 0.52, ease: 'power3.out' }, 1.36)

    tl.from('.hero-wolf', { opacity: 0, scale: 1.07, duration: 1.6, ease: 'power2.out' }, 0.78)
    tl.from('.scroll-indicator', { opacity: 0, duration: 0.6 }, 1.72)

    gsap.to('.scroll-line', {
      scaleY: 0, transformOrigin: 'top center', ease: 'power2.inOut',
      duration: 1.2, repeat: -1, repeatDelay: 0.4, delay: 1.95,
    })

    gsap.to('.hero-bg-wrap img', {
      yPercent: 18, ease: 'none',
      scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: true },
    })

    gsap.from('.stat-item', {
      y: 32, opacity: 0, stagger: 0.1, duration: 0.72, ease: 'power3.out',
      scrollTrigger: { trigger: '.stat-bar', start: 'top 88%' },
    })

    statRefs.current.forEach((el, i) => {
      const s = stats[i]
      if (!el || !s) return
      const obj = { val: 0 }
      gsap.to(obj, {
        val: s.value,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        onUpdate() { if (el) el.textContent = String(Math.round(obj.val)) + (s.suffix || '') },
      })
    })

    gsap.from('.services-eyebrow', { x: -22, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: '.services-section', start: 'top 84%' } })
    gsap.from('.services-heading', { y: 28, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.services-section', start: 'top 82%' } })
    gsap.from('.service-card', { y: 45, opacity: 0, scale: 0.97, stagger: 0.1, duration: 0.72, ease: 'power3.out', scrollTrigger: { trigger: '.services-grid', start: 'top 85%' } })
    gsap.from('.proj-section-eyebrow', { x: -22, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: '.projects-section', start: 'top 84%' } })
    gsap.from('.proj-section-heading', { y: 26, opacity: 0, duration: 0.72, ease: 'power3.out', scrollTrigger: { trigger: '.projects-section', start: 'top 82%' } })
    gsap.from('.project-thumb', { y: 36, opacity: 0, scale: 0.96, stagger: 0.13, duration: 0.72, ease: 'power3.out', scrollTrigger: { trigger: '.projects-grid', start: 'top 85%' } })
    gsap.from('.cta-strip', { y: 38, opacity: 0, scale: 0.985, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.cta-strip', start: 'top 86%' } })
    gsap.from('.cta-inner-text', { x: -20, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: '.cta-strip', start: 'top 84%' } })
    gsap.from('.cta-inner-btn', { x: 20, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: '.cta-strip', start: 'top 84%' } })
    gsap.from('.photo-section-eyebrow', { x: -22, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: '.photo-section', start: 'top 84%' } })
    gsap.from('.photo-section-heading', { y: 26, opacity: 0, duration: 0.72, ease: 'power3.out', scrollTrigger: { trigger: '.photo-section', start: 'top 82%' } })
    gsap.from('.photo-thumb', { y: 36, opacity: 0, scale: 0.96, stagger: 0.13, duration: 0.72, ease: 'power3.out', scrollTrigger: { trigger: '.photos-grid', start: 'top 85%' } })

  }, { scope: containerRef })

  return (
    <div ref={containerRef}>

      {/* HERO */}
      <section className="hero-section" style={{
        minHeight: '100vh', position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: `0 ${px} 80px`,
      }}>
        <div className="hero-bg-wrap" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          <Image src={heroBg} alt="" fill priority quality={90} style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(14,13,12,0.42) 0%, rgba(14,13,12,0.52) 38%, rgba(14,13,12,0.92) 74%, rgba(14,13,12,1) 100%)' }} />
        <div className="hero-accent-wash" style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'rgba(109,39,53,0.13)', pointerEvents: 'none' }} />
        <HeroCanvas />
        <div style={{ position: 'relative', zIndex: 4, maxWidth: '800px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '2.4px', textTransform: 'uppercase', color: '#c96a78', fontFamily: 'DM Sans, sans-serif', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="eyebrow-line" style={{ width: '32px', height: '1px', background: '#c96a78', display: 'inline-block', flexShrink: 0 }} />
            <span className="eyebrow-text">{homepage.heroEyebrow}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 400, color: '#faf9f6', lineHeight: 1.0, letterSpacing: '-3px', fontFamily: 'DM Sans, sans-serif', marginBottom: '28px' }}>
            <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em' }}>
              <span className="hero-line">I&apos;m a</span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em' }}>
              <span className="hero-line" style={{ color: '#c96a78' }}>{homepage.heroLine1}</span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em' }}>
              <span className="hero-line">{homepage.heroLine2}</span>
            </span>
          </h1>

          <p className="hero-sub" style={{ fontSize: '18px', color: '#afaeac', lineHeight: 1.65, fontFamily: 'DM Sans, sans-serif', maxWidth: '480px', marginBottom: '40px' }}>
            {homepage.heroBody}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              className="hero-btn"
              onClick={() => router.push('/gallery')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#faf9f6', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px', padding: '13px 28px', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 500, cursor: 'pointer', transition: 'background 0.18s ease, border-color 0.18s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.16)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.36)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
            >
              <ImageIcon size={16} strokeWidth={1.5} />
              View gallery
            </button>
            <button
              className="hero-btn"
              onClick={() => router.push('/contact')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#6d2735', color: '#faf9f6', border: 'none', borderRadius: '50px', padding: '13px 28px', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 500, cursor: 'pointer', transition: 'background 0.18s ease', boxShadow: 'rgba(109,39,53,0.32) 0px 8px 28px' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#7a2f3f' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#6d2735' }}
            >
              Get in touch
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <HeroParticles />

        <div className="scroll-indicator" style={{ position: 'absolute', bottom: '36px', right: '72px', zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#454545', fontFamily: 'DM Sans, sans-serif', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Scroll</span>
          <div className="scroll-line" style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, #454545, transparent)' }} />
        </div>
      </section>

      {/* STAT BAR */}
      <div className="stat-bar" style={{ borderTop: '1px solid rgba(226,226,226,0.08)', borderBottom: '1px solid rgba(226,226,226,0.08)', background: 'rgba(255,255,255,0.018)', padding: `32px ${px}`, display: 'flex', flexWrap: 'wrap' }}>
        {stats.map((stat, i) => (
          <div key={i} className="stat-item" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', borderRight: i < stats.length - 1 ? '1px solid rgba(226,226,226,0.08)' : 'none', padding: i === 0 ? '0 40px 0 0' : (i === stats.length - 1 ? '0 0 0 40px' : '0 40px') }}>
            <span
              ref={el => { statRefs.current[i] = el }}
              style={{ fontSize: '40px', fontWeight: 400, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-1.5px', lineHeight: 1 }}
            >
              {`0${stat.suffix || ''}`}
            </span>
            <span style={{ fontSize: '12px', color: '#868584', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section className="services-section" style={{ padding: `${sectionPy} ${px}`, maxWidth: '1400px', margin: '0 auto' }}>
        <div className="services-eyebrow" style={{ fontSize: '11px', letterSpacing: '2.4px', textTransform: 'uppercase', color: '#c96a78', fontFamily: 'DM Sans, sans-serif', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ width: '32px', height: '1px', background: '#c96a78', display: 'inline-block' }} />
          What I do
        </div>
        <h2 className="services-heading" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 400, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.72px', lineHeight: 1.1, marginBottom: '48px' }}>
          This is what I do
        </h2>
        <div className="services-grid grid-2">
          {services.map((svc, i) => (
            <ServiceCard key={i} icon={SERVICE_ICONS[i % SERVICE_ICONS.length]} title={svc.title} desc={svc.description || ''} />
          ))}
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="projects-section" style={{ padding: `0 ${px} ${sectionPy}`, maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <div>
            <div className="proj-section-eyebrow" style={{ fontSize: '11px', letterSpacing: '2.4px', textTransform: 'uppercase', color: '#c96a78', fontFamily: 'DM Sans, sans-serif', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '32px', height: '1px', background: '#c96a78', display: 'inline-block' }} />
              Selected work
            </div>
            <h2 className="proj-section-heading" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 400, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.72px', lineHeight: 1.1 }}>
              Recent projects
            </h2>
          </div>
          <button
            onClick={() => router.push('/projects')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#c96a78', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', transition: 'color 0.15s ease' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#faf9f6' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#c96a78' }}
          >
            View all projects
            <ArrowUpRight size={14} />
          </button>
        </div>
        <div className="projects-grid grid-3">
          {projectThumbs.map((p, i) => (
            <ProjectThumb
              key={i}
              label={p.label}
              category={p.category}
              year={p.year}
              gradient={p.gradient}
              onClick={() => router.push(p.slug ? `/projects/${p.slug}` : '/projects')}
            />
          ))}
        </div>
      </section>

      {/* FEATURED PHOTOGRAPHY */}
      {(featuredPhotos.length > 0) && (
        <section className="photo-section" style={{ padding: `0 ${px} ${sectionPy}`, maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
            <div>
              <div className="photo-section-eyebrow" style={{ fontSize: '11px', letterSpacing: '2.4px', textTransform: 'uppercase', color: '#c96a78', fontFamily: 'DM Sans, sans-serif', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '32px', height: '1px', background: '#c96a78', display: 'inline-block' }} />
                Photography
              </div>
              <h2 className="photo-section-heading" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 400, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.72px', lineHeight: 1.1 }}>
                Selected frames
              </h2>
            </div>
            <button
              onClick={() => router.push('/gallery')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#c96a78', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', transition: 'color 0.15s ease' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#faf9f6' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#c96a78' }}
            >
              View gallery
              <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="photos-grid grid-3">
            {featuredPhotos.slice(0, 3).map((photo, i) => (
              <div
                key={photo.id}
                className="photo-thumb"
                onClick={() => router.push('/gallery')}
                style={{
                  position: 'relative', borderRadius: '10px', overflow: 'hidden',
                  aspectRatio: '3/4', cursor: 'pointer',
                  background: photo.image?.url
                    ? `url(${photo.image.url}) center/cover no-repeat`
                    : PHOTO_GRADIENTS[i % PHOTO_GRADIENTS.length],
                  border: '1px solid rgba(226,226,226,0.1)',
                  transition: 'transform 0.28s ease, border-color 0.22s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(226,226,226,0.22)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(226,226,226,0.1)' }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,13,12,0.82) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                  <span style={{ fontSize: '10px', letterSpacing: '1.8px', textTransform: 'uppercase', color: '#c96a78', fontFamily: 'DM Sans, sans-serif', display: 'block', marginBottom: '4px' }}>
                    {photo.filter}
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: 500, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.2px' }}>
                    {photo.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA STRIP */}
      <div className="cta-strip" style={{ margin: `0 ${px} ${sectionPy}`, background: 'rgba(109,39,53,0.1)', border: '1px solid rgba(138,63,78,0.25)', borderRadius: '16px', padding: isMobile ? '36px 24px' : '56px 64px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '28px' : '40px' }}>
        <div className="cta-inner-text" style={{ maxWidth: isMobile ? '100%' : '540px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '2.4px', textTransform: 'uppercase', color: '#c96a78', fontFamily: 'DM Sans, sans-serif', marginBottom: '14px' }}>
            Let&apos;s collaborate
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.72px', lineHeight: 1.15, marginBottom: '16px' }}>
            Have a project in mind?
          </h2>
          <p style={{ fontSize: '16px', color: '#868584', lineHeight: 1.65, fontFamily: 'DM Sans, sans-serif' }}>
            Whether it&apos;s a photo shoot, a web application, or something in between — I&apos;d love to hear about it.
          </p>
        </div>
        <button
          className="cta-inner-btn"
          onClick={() => router.push('/contact')}
          style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#6d2735', color: '#faf9f6', border: 'none', borderRadius: '50px', padding: '16px 36px', fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 500, cursor: 'pointer', transition: 'background 0.18s ease', boxShadow: 'rgba(109,39,53,0.38) 0px 12px 36px' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#7a2f3f' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#6d2735' }}
        >
          Get in touch
          <Send size={16} strokeWidth={1.5} />
        </button>
      </div>

    </div>
  )
}
