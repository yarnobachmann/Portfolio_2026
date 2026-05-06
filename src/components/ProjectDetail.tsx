'use client'

import { useRef } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'
import type { CMSProject } from '@/lib/cms/projects'

gsap.registerPlugin(useGSAP)

export default function ProjectDetail({ project }: { project: CMSProject }) {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const { isMobile, px } = useBreakpoint()

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('.detail-back', { x: -18, opacity: 0, duration: 0.5, ease: 'power3.out' }, 0.1)
    tl.from('.detail-tag', { x: -14, opacity: 0, duration: 0.5, ease: 'power3.out' }, 0.18)
    tl.from('.detail-title', { y: 32, opacity: 0, duration: 0.82, ease: 'power4.out' }, 0.24)
    tl.from('.detail-meta', { y: 16, opacity: 0, stagger: 0.08, duration: 0.55, ease: 'power3.out' }, 0.44)
    tl.from('.detail-tech', { y: 12, opacity: 0, stagger: 0.05, duration: 0.45, ease: 'power3.out' }, 0.56)
    tl.from('.detail-actions', { y: 16, opacity: 0, duration: 0.5, ease: 'power3.out' }, 0.72)
    tl.from('.detail-content', { y: 24, opacity: 0, duration: 0.7, ease: 'power3.out' }, 0.6)
  }, { scope: containerRef })

  return (
    <div ref={containerRef} style={{ paddingTop: '68px', minHeight: '100vh' }}>
      <div style={{ padding: `64px ${px} 100px`, maxWidth: '900px', margin: '0 auto' }}>

        {/* Back */}
        <button
          className="detail-back"
          onClick={() => router.push('/projects')}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', color: '#868584', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', marginBottom: '40px', transition: 'color 0.15s ease' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#faf9f6' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#868584' }}
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back to projects
        </button>

        {/* Tag */}
        <div className="detail-tag" style={{ marginBottom: '18px' }}>
          <span style={{ fontSize: '10px', letterSpacing: '1.8px', textTransform: 'uppercase', background: project.accent ? 'rgba(109,39,53,0.22)' : 'rgba(255,255,255,0.07)', color: project.accent ? '#c96a78' : '#868584', border: `1px solid ${project.accent ? 'rgba(138,63,78,0.42)' : 'rgba(226,226,226,0.14)'}`, borderRadius: '4px', padding: '4px 10px', fontFamily: 'DM Sans, sans-serif' }}>
            {project.tag}
          </span>
        </div>

        {/* Title */}
        <h1 className="detail-title" style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 400, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-2px', lineHeight: 1.05, marginBottom: '28px' }}>
          {project.title}
        </h1>

        {/* Meta */}
        <div style={{ display: 'flex', gap: isMobile ? '16px' : '32px', marginBottom: '28px' }}>
          <div className="detail-meta" style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <span style={{ fontSize: '11px', color: '#454545', letterSpacing: '1.4px', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>Year</span>
            <span style={{ fontSize: '15px', color: '#faf9f6', fontFamily: 'DM Sans, sans-serif' }}>{project.year}</span>
          </div>
          <div className="detail-meta" style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <span style={{ fontSize: '11px', color: '#454545', letterSpacing: '1.4px', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>Category</span>
            <span style={{ fontSize: '15px', color: '#faf9f6', fontFamily: 'DM Sans, sans-serif' }}>{project.tag}</span>
          </div>
        </div>

        {/* Tech stack */}
        {project.tech?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '32px' }}>
            {project.tech.map((t, i) => (
              <span key={i} className="detail-tech" style={{ fontSize: '12px', color: '#868584', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(226,226,226,0.1)', borderRadius: '4px', padding: '4px 10px', fontFamily: 'Geist Mono, monospace', letterSpacing: '-0.2px' }}>
                {t.label}
              </span>
            ))}
          </div>
        )}

        {/* Action links */}
        {(project.url || project.github) && (
          <div className="detail-actions" style={{ display: 'flex', gap: '10px', marginBottom: '48px' }}>
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#6d2735', color: '#faf9f6', border: 'none', borderRadius: '50px', padding: '11px 24px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500, textDecoration: 'none', transition: 'background 0.18s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#7a2f3f' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#6d2735' }}
              >
                View live
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.06)', color: '#afaeac', border: '1px solid rgba(226,226,226,0.14)', borderRadius: '50px', padding: '11px 24px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500, textDecoration: 'none', transition: 'background 0.18s ease, color 0.18s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#faf9f6' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#afaeac' }}
              >
                <Github size={14} strokeWidth={1.5} />
                View code
              </a>
            )}
          </div>
        )}

        {/* Description / content */}
        <div className="detail-content" style={{ borderTop: '1px solid rgba(226,226,226,0.08)', paddingTop: '40px' }}>
          <p style={{ fontSize: '17px', color: '#afaeac', lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif' }}>
            {project.desc}
          </p>
        </div>

      </div>
    </div>
  )
}
