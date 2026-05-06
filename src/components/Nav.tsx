'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Mail, Menu, X } from 'lucide-react'
import type { CMSNavItem } from '@/lib/cms/navigation'
import { useBreakpoint } from '@/hooks/useBreakpoint'

gsap.registerPlugin(useGSAP)

const defaultItems: CMSNavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export function Nav({ items }: { items?: CMSNavItem[] }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const navRef = useRef<HTMLElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const { isMobile } = useBreakpoint()

  const pages = items?.length ? items : defaultItems

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close drawer on pathname change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Animate drawer open/close
  useEffect(() => {
    const drawer = drawerRef.current
    if (!drawer) return
    if (menuOpen) {
      gsap.set(drawer, { display: 'flex' })
      gsap.fromTo(drawer, { x: '100%' }, { x: 0, duration: 0.38, ease: 'power3.out' })
    } else {
      gsap.to(drawer, {
        x: '100%', duration: 0.32, ease: 'power3.in',
        onComplete: () => { gsap.set(drawer, { display: 'none' }) },
      })
    }
  }, [menuOpen])

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -90,
      opacity: 0,
      duration: 1.0,
      ease: 'power3.out',
      delay: 0.05,
    })
  }, { scope: navRef })

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 48px', height: '68px',
          background: scrolled ? 'rgba(14,13,12,0.94)' : 'rgba(14,13,12,0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(226,226,226,0.1)' : '1px solid transparent',
          transition: 'background 0.35s ease, border-color 0.35s ease',
        }}
      >
        {/* Brand */}
        <button
          onClick={() => router.push('/')}
          style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            flexShrink: 0,
          }}
        >
          <img
            src="/assets/logo-wolf.png"
            style={{ width: '28px', height: '36px', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.88 }}
            alt="YB"
          />
          <span style={{
            fontSize: '16px', fontWeight: 500, color: '#faf9f6',
            letterSpacing: '-0.2px', fontFamily: 'DM Sans, sans-serif',
          }}>
            Yarno Bachmann
          </span>
        </button>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
            {pages.map(p => (
              <button
                key={p.href}
                onClick={() => router.push(p.href)}
                style={{
                  fontSize: '15px', fontWeight: 400,
                  background: 'none', border: 'none',
                  color: isActive(p.href) ? '#faf9f6' : '#868584',
                  cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
                  transition: 'color 0.15s ease',
                  paddingBottom: '2px',
                  borderBottom: isActive(p.href) ? '1px solid #6d2735' : '1px solid transparent',
                }}
                onMouseEnter={e => {
                  if (!isActive(p.href)) e.currentTarget.style.color = '#afaeac'
                }}
                onMouseLeave={e => {
                  if (!isActive(p.href)) e.currentTarget.style.color = '#868584'
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <button
            onClick={() => router.push('/contact')}
            style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500,
              borderRadius: '50px', padding: '9px 22px', cursor: 'pointer',
              background: '#6d2735', color: '#faf9f6', border: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              transition: 'background 0.18s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#7a2f3f' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#6d2735' }}
          >
            <Mail size={14} />
            Get in touch
          </button>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#faf9f6', display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '6px',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </nav>

      {/* Mobile drawer — rendered outside nav so it doesn't share stacking context */}
      <div
        ref={drawerRef}
        style={{
          display: 'none',
          position: 'fixed', inset: 0, zIndex: 150,
          background: 'rgba(14,13,12,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'absolute', top: '20px', right: '20px',
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#faf9f6', display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '6px',
          }}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        {/* Drawer nav links */}
        {pages.map(p => (
          <button
            key={p.href}
            onClick={() => { router.push(p.href); setMenuOpen(false) }}
            style={{
              fontSize: '32px', fontWeight: 400,
              background: 'none', border: 'none',
              color: isActive(p.href) ? '#faf9f6' : '#868584',
              cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
              letterSpacing: '-0.5px',
              transition: 'color 0.15s ease',
              borderBottom: isActive(p.href) ? '1px solid #6d2735' : '1px solid transparent',
              paddingBottom: '4px',
            }}
          >
            {p.label}
          </button>
        ))}

        {/* Drawer CTA */}
        <button
          onClick={() => { router.push('/contact'); setMenuOpen(false) }}
          style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 500,
            borderRadius: '50px', padding: '12px 28px', cursor: 'pointer',
            background: '#6d2735', color: '#faf9f6', border: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            transition: 'background 0.18s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#7a2f3f' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#6d2735' }}
        >
          <Mail size={16} />
          Get in touch
        </button>
      </div>
    </>
  )
}
