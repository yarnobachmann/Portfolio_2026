'use client'

import { useRef } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Github, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import type { CMSSiteSettings } from '@/lib/cms/site-settings'
import type { CMSNavItem } from '@/lib/cms/navigation'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const defaultSettings: CMSSiteSettings = {
  siteName: 'Yarno Bachmann',
  siteTitle: 'Yarno Bachmann — Photographer & Developer',
  siteDescription: '',
  email: 'yarno@example.com',
  location: 'Netherlands, EU',
  education: 'HBO University',
  copyright: '© 2026 Yarno Bachmann',
}

const defaultNav: CMSNavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export function Footer({
  settings = defaultSettings,
  navItems = defaultNav,
}: {
  settings?: CMSSiteSettings
  navItems?: CMSNavItem[]
}) {
  const router = useRouter()
  const footerRef = useRef<HTMLElement>(null)
  const { isMobile, isTablet, px } = useBreakpoint()

  useGSAP(() => {
    gsap.from('.footer-col', {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 90%',
      },
    })
  }, { scope: footerRef })

  const socials = [
    { icon: Github, href: settings.github || '#' },
    { icon: Instagram, href: settings.instagram || '#' },
    { icon: Linkedin, href: settings.linkedin || '#' },
  ]

  const linkStyle: React.CSSProperties = {
    fontSize: '14px', color: '#aaa7a3', cursor: 'pointer',
    fontFamily: 'DM Sans, sans-serif', textDecoration: 'none',
    transition: 'color 0.15s ease', display: 'block',
  }

  return (
    <footer ref={footerRef} style={{ borderTop: '1px solid rgba(226,226,226,0.12)', background: 'rgba(255,255,255,0.025)' }}>
      <div style={{
        padding: `64px ${px} 48px`,
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr 1fr', gap: isMobile ? '40px' : '64px',
      }}>
        {/* Brand */}
        <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/assets/logo-wolf.png" style={{ width: '28px', height: '36px', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.88 }} alt="YB" />
            <span style={{ fontSize: '16px', fontWeight: 500, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.2px' }}>
              {settings.siteName}
            </span>
          </div>
          <div style={{ fontSize: '14px', color: '#8d8780', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6, maxWidth: '280px' }}>
            Photographer &amp; developer student. Capturing light and building things that matter.
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.065)',
                  border: '1px solid rgba(226,226,226,0.16)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'background 0.18s ease, border-color 0.18s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                  e.currentTarget.style.borderColor = 'rgba(226,226,226,0.22)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.065)'
                  e.currentTarget.style.borderColor = 'rgba(226,226,226,0.16)'
                }}
              >
                <Icon size={15} style={{ color: '#aaa7a3' }} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <span style={{
            fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
            color: '#c96a78', fontFamily: 'DM Sans, sans-serif',
            marginBottom: '20px', display: 'block',
          }}>Navigation</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {navItems.map(p => (
              <a
                key={p.href}
                style={linkStyle}
                onClick={() => router.push(p.href)}
                onMouseEnter={e => { e.currentTarget.style.color = '#faf9f6' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#aaa7a3' }}
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <span style={{
            fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
            color: '#c96a78', fontFamily: 'DM Sans, sans-serif',
            marginBottom: '20px', display: 'block',
          }}>Contact</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ ...linkStyle, cursor: 'default' }}>{settings.email}</span>
            {settings.location && <span style={{ ...linkStyle, cursor: 'default' }}>{settings.location}</span>}
            {settings.education && <span style={{ ...linkStyle, cursor: 'default' }}>{settings.education}</span>}
            <a
              style={{ ...linkStyle, color: '#c96a78', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}
              onClick={() => router.push('/contact')}
              onMouseEnter={e => { e.currentTarget.style.color = '#faf9f6' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#c96a78' }}
            >
              Send a message
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(226,226,226,0.1)',
        padding: `24px ${px}`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontSize: '12px', color: '#7c7771', fontFamily: 'DM Sans, sans-serif' }}>
          {settings.copyright}. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy', 'Terms'].map(label => (
            <a
              key={label}
              style={{ fontSize: '12px', color: '#7c7771', fontFamily: 'DM Sans, sans-serif', cursor: 'pointer', transition: 'color 0.15s ease' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#aaa7a3' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#7c7771' }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
