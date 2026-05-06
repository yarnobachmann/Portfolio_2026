'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import type { CMSProject } from '@/lib/cms/projects'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const FALLBACK_PROJECTS: CMSProject[] = [
  { id: '1', title: 'Personal Portfolio', slug: 'personal-portfolio', tag: 'Development', year: '2026', desc: 'This very website — a multi-page portfolio built with Next.js and GSAP, featuring photography gallery, project showcase and contact form.', tech: [{ label: 'Next.js' }, { label: 'TypeScript' }, { label: 'GSAP' }, { label: 'Payload CMS' }], accent: true, featured: true },
  { id: '2', title: 'Photo Gallery App', slug: 'photo-gallery-app', tag: 'Development', year: '2025', desc: 'A full-stack photo management web application. Supports upload, categorisation, filtering and fullscreen viewing.', tech: [{ label: 'Next.js' }, { label: 'Prisma' }, { label: 'PostgreSQL' }, { label: 'Cloudinary' }] },
  { id: '3', title: 'Urban Photography Series', slug: 'urban-photography-series', tag: 'Photography', year: '2025', desc: 'A 24-image documentary series on urban life in Dutch cities. Exhibited at the HBO student showcase.', tech: [{ label: 'Canon EOS' }, { label: 'Lightroom' }, { label: 'Film Emulation' }], accent: true },
  { id: '4', title: 'CLI Task Manager', slug: 'cli-task-manager', tag: 'Development', year: '2025', desc: 'A minimal command-line tool for managing tasks and projects. Built for personal use and shared open source.', tech: [{ label: 'Node.js' }, { label: 'TypeScript' }, { label: 'SQLite' }] },
  { id: '5', title: 'Design System', slug: 'design-system', tag: 'Design', year: '2024', desc: 'A warm, editorial dark-surface design system with a comprehensive token set, component library, and usage guidelines.', tech: [{ label: 'Figma' }, { label: 'CSS Custom Properties' }, { label: 'Storybook' }] },
  { id: '6', title: 'Landscape Portfolio', slug: 'landscape-portfolio', tag: 'Photography', year: '2024', desc: 'A curated selection of landscape photography from the Netherlands, Belgium and Germany over two years.', tech: [{ label: 'Sony A7C' }, { label: 'Capture One' }, { label: 'Fine Art Print' }] },
]

function ProjectCard({ title, desc, tag, year, tech, accent, slug }: CMSProject) {
  const [hovered, setHovered] = useState(false)
  const router = useRouter()
  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => router.push(`/projects/${slug}`)}
      style={{
        borderRadius: '12px', padding: '28px 28px 24px',
        background: hovered
          ? (accent ? 'rgba(109,39,53,0.13)' : 'rgba(255,255,255,0.05)')
          : (accent ? 'rgba(109,39,53,0.07)' : 'rgba(255,255,255,0.025)'),
        border: `1px solid ${accent
          ? (hovered ? 'rgba(138,63,78,0.58)' : 'rgba(138,63,78,0.3)')
          : (hovered ? 'rgba(226,226,226,0.22)' : 'rgba(226,226,226,0.1)')}`,
        cursor: 'pointer',
        transition: 'background 0.22s ease, border-color 0.22s ease, transform 0.22s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        display: 'flex', flexDirection: 'column',
        willChange: 'transform',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <span style={{
          fontSize: '10px', letterSpacing: '1.8px', textTransform: 'uppercase',
          background: accent ? 'rgba(109,39,53,0.22)' : 'rgba(255,255,255,0.07)',
          color: accent ? '#c96a78' : '#868584',
          border: `1px solid ${accent ? 'rgba(138,63,78,0.42)' : 'rgba(226,226,226,0.14)'}`,
          borderRadius: '4px', padding: '3px 8px',
          fontFamily: 'DM Sans, sans-serif',
        }}>
          {tag}
        </span>
        <span style={{ fontSize: '11px', color: '#454545', fontFamily: 'DM Sans, sans-serif' }}>{year}</span>
      </div>

      <div style={{ fontSize: '20px', fontWeight: 500, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.3px', lineHeight: 1.2, marginBottom: '10px' }}>
        {title}
      </div>
      <div style={{ fontSize: '14px', color: '#868584', lineHeight: 1.65, fontFamily: 'DM Sans, sans-serif', marginBottom: '20px', flex: 1 }}>
        {desc}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
        {tech?.map((t, i) => (
          <span key={i} style={{
            fontSize: '11px', color: '#868584',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(226,226,226,0.1)',
            borderRadius: '4px', padding: '3px 8px',
            fontFamily: 'Geist Mono, monospace', letterSpacing: '-0.2px',
          }}>{t.label}</span>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid rgba(226,226,226,0.07)', paddingTop: '16px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: accent ? '#c96a78' : '#454545', fontFamily: 'DM Sans, sans-serif', transition: 'color 0.15s ease' }}>
          View project
          <ArrowUpRight size={14} strokeWidth={1.5} style={{ color: accent ? '#c96a78' : '#454545' }} />
        </span>
      </div>
    </div>
  )
}

export default function ProjectsPage({ projects: cmsProjets, heroImage }: { projects?: CMSProject[]; heroImage?: string | null }) {
  const [activeTab, setActiveTab] = useState('All')
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const { isMobile, px } = useBreakpoint()
  const tabs = ['All', 'Development', 'Photography', 'Design']
  const heroBg = heroImage || '/uploads/projecthero.png'

  const projects = cmsProjets && cmsProjets.length > 0 ? cmsProjets : FALLBACK_PROJECTS
  const filtered = activeTab === 'All' ? projects : projects.filter(p => p.tag === activeTab)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('.proj-eyebrow', { x: -22, opacity: 0, duration: 0.68, ease: 'power3.out' }, 0.1)
    tl.from('.proj-heading', { y: 32, opacity: 0, duration: 0.82, ease: 'power4.out' }, 0.2)
    tl.from('.proj-sub', { y: 20, opacity: 0, duration: 0.62, ease: 'power3.out' }, 0.35)
    tl.from('.proj-stat-box', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0.25)
    tl.from('.proj-tab-btn', { x: -14, opacity: 0, stagger: 0.07, duration: 0.5, ease: 'power2.out' }, 0.42)

    gsap.from('.proj-cta', { y: 28, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.proj-cta', start: 'top 86%' } })
  }, { scope: containerRef })

  useGSAP(() => {
    gsap.fromTo('.project-card',
      { y: 36, opacity: 0, scale: 0.965 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.09, duration: 0.7, ease: 'power3.out' }
    )
  }, { scope: containerRef, dependencies: [activeTab] })

  return (
    <div ref={containerRef} style={{ paddingTop: '68px', minHeight: '100vh' }}>

      {/* Hero header */}
      <div style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(226,226,226,0.08)', minHeight: '340px', display: 'flex', alignItems: 'flex-end' }}>
        <Image src={heroBg} alt="" fill priority style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(14,13,12,0.45) 0%, rgba(14,13,12,0.62) 50%, rgba(14,13,12,0.93) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(109,39,53,0.11)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: `80px ${px} 52px`, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px', width: '100%' }}>
          <div>
            <div className="proj-eyebrow" style={{ fontSize: '11px', letterSpacing: '2.4px', textTransform: 'uppercase', color: '#c96a78', fontFamily: 'DM Sans, sans-serif', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '32px', height: '1px', background: '#c96a78', display: 'inline-block' }} />
              My work
            </div>
            <h1 className="proj-heading" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-2px', lineHeight: 1.0, marginBottom: '20px' }}>
              Projects
            </h1>
            <p className="proj-sub" style={{ fontSize: '17px', color: '#afaeac', lineHeight: 1.65, fontFamily: 'DM Sans, sans-serif', maxWidth: '460px' }}>
              Development work, photography projects and design explorations.
            </p>
          </div>
          {!isMobile && (
            <div className="proj-stat-box" style={{ flexShrink: 0, background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(226,226,226,0.14)', borderRadius: '12px', padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '160px' }}>
              <span style={{ fontSize: '36px', fontWeight: 400, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-1.5px', lineHeight: 1 }}>
                {projects.length}
              </span>
              <span style={{ fontSize: '11px', color: '#afaeac', letterSpacing: '1.4px', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>
                Total projects
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ padding: `24px ${px}`, display: 'flex', gap: '8px', alignItems: 'center', borderBottom: '1px solid rgba(226,226,226,0.06)' }}>
        {tabs.map(t => (
          <button
            key={t}
            className="proj-tab-btn"
            onClick={() => setActiveTab(t)}
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: activeTab === t ? 500 : 400, borderRadius: '50px', padding: '7px 18px', cursor: 'pointer', background: activeTab === t ? '#6d2735' : 'rgba(255,255,255,0.05)', color: activeTab === t ? '#faf9f6' : '#868584', border: activeTab === t ? 'none' : '1px solid rgba(226,226,226,0.12)', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { if (activeTab !== t) e.currentTarget.style.color = '#afaeac' }}
            onMouseLeave={e => { if (activeTab !== t) e.currentTarget.style.color = '#868584' }}
          >
            {t}
          </button>
        ))}
        <span style={{ fontSize: '12px', color: '#454545', letterSpacing: '1.4px', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', marginLeft: 'auto' }}>
          {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
        </span>
      </div>

      {/* Grid */}
      <div className="grid-3" style={{ padding: `40px ${px} 80px` }}>
        {filtered.map((p, i) => (
          <ProjectCard key={`${activeTab}-${i}`} {...p} />
        ))}
      </div>

      {/* CTA */}
      <div className="proj-cta" style={{ margin: '0 72px 80px', borderTop: '1px solid rgba(226,226,226,0.08)', paddingTop: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '2.4px', textTransform: 'uppercase', color: '#c96a78', fontFamily: 'DM Sans, sans-serif', marginBottom: '10px' }}>Collaborate</div>
          <div style={{ fontSize: '28px', fontWeight: 400, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.5px' }}>
            Want to work together?
          </div>
        </div>
        <button
          onClick={() => router.push('/contact')}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#353534', color: '#afaeac', border: 'none', borderRadius: '50px', padding: '12px 28px', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 500, cursor: 'pointer', transition: 'background 0.18s ease, color 0.18s ease' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#3f3e3d'; e.currentTarget.style.color = '#faf9f6' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#353534'; e.currentTarget.style.color = '#afaeac' }}
        >
          Get in touch
          <ArrowRight size={15} strokeWidth={1.5} />
        </button>
      </div>

    </div>
  )
}
