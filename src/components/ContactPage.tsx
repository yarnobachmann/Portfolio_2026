'use client'

import { useRef, useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, MapPin, GraduationCap, Github, Instagram, Linkedin, Send, Check } from 'lucide-react'
import type { CMSSiteSettings } from '@/lib/cms/site-settings'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type FormState = { name: string; email: string; subject: string; message: string }

const defaultSettings: CMSSiteSettings = {
  siteName: 'Yarno Bachmann',
  siteTitle: '',
  siteDescription: '',
  email: 'yarno@example.com',
  location: 'Netherlands, EU',
  education: 'HBO University',
  copyright: '© 2026 Yarno Bachmann',
}

export default function ContactPage({ settings = defaultSettings }: { settings?: CMSSiteSettings }) {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [focused, setFocused] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const { px } = useBreakpoint()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    background: focused === field ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
    border: `1px solid ${focused === field ? 'rgba(138,63,78,0.52)' : 'rgba(226,226,226,0.14)'}`,
    borderRadius: '8px', padding: '13px 16px',
    fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#faf9f6',
    outline: 'none', width: '100%',
    transition: 'border-color 0.18s ease, background 0.18s ease',
    boxShadow: focused === field ? '0 0 0 2.5px rgba(109,39,53,0.12)' : 'none',
  })

  useGSAP(() => {
    const tl = gsap.timeline()

    // Header
    tl.from('.contact-eyebrow', { x: -22, opacity: 0, duration: 0.68, ease: 'power3.out' }, 0.1)
    tl.from('.contact-heading', { y: 32, opacity: 0, duration: 0.82, ease: 'power4.out' }, 0.2)
    tl.from('.contact-sub', { y: 20, opacity: 0, duration: 0.62, ease: 'power3.out' }, 0.36)

    // Info column items slide from left
    gsap.from('.info-item', {
      x: -28,
      opacity: 0,
      stagger: 0.1,
      duration: 0.65,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-body', start: 'top 82%' },
    })

    gsap.from('.social-btn', {
      y: 16,
      opacity: 0,
      stagger: 0.08,
      duration: 0.55,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-body', start: 'top 80%' },
    })

    gsap.from('.response-box', {
      x: -20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.response-box', start: 'top 86%' },
    })

    // Form slides from right
    gsap.from('.form-col', {
      x: 32,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-body', start: 'top 82%' },
    })

    gsap.from('.form-field', {
      y: 18,
      opacity: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.form-col', start: 'top 82%' },
    })

  }, { scope: containerRef })

  // Success animation
  useGSAP(() => {
    if (!submitted) return
    gsap.from(successRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.55,
      ease: 'back.out(1.5)',
    })
  }, { scope: containerRef, dependencies: [submitted] })

  const infoItems = [
    { icon: Mail, title: 'Email', val: settings.email },
    ...(settings.location ? [{ icon: MapPin, title: 'Location', val: settings.location }] : []),
    ...(settings.education ? [{ icon: GraduationCap, title: 'Education', val: settings.education }] : []),
  ]

  const socials = [
    ...(settings.github ? [{ icon: Github, label: 'GitHub', href: settings.github }] : [{ icon: Github, label: 'GitHub', href: '#' }]),
    ...(settings.instagram ? [{ icon: Instagram, label: 'Instagram', href: settings.instagram }] : [{ icon: Instagram, label: 'Instagram', href: '#' }]),
    ...(settings.linkedin ? [{ icon: Linkedin, label: 'LinkedIn', href: settings.linkedin }] : [{ icon: Linkedin, label: 'LinkedIn', href: '#' }]),
  ]

  return (
    <div ref={containerRef} style={{ paddingTop: '68px', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ padding: `80px ${px} 60px`, borderBottom: '1px solid rgba(226,226,226,0.08)' }}>
        <div className="contact-eyebrow" style={{
          fontSize: '11px', letterSpacing: '2.4px', textTransform: 'uppercase',
          color: '#c96a78', fontFamily: 'DM Sans, sans-serif', marginBottom: '18px',
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <span style={{ width: '32px', height: '1px', background: '#c96a78', display: 'inline-block' }} />
          Let&apos;s talk
        </div>
        <h1 className="contact-heading" style={{
          fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#faf9f6',
          fontFamily: 'DM Sans, sans-serif', letterSpacing: '-2px', lineHeight: 1.0,
          marginBottom: '20px',
        }}>
          Get in touch
        </h1>
        <p className="contact-sub" style={{
          fontSize: '17px', color: '#868584', lineHeight: 1.65,
          fontFamily: 'DM Sans, sans-serif', maxWidth: '440px',
        }}>
          Open to photography commissions, development work, and collaborations.
        </p>
      </div>

      {/* Body */}
      <div className="contact-body" style={{
        padding: `64px ${px} 80px`,
        display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '72px',
        maxWidth: '1400px', margin: '0 auto',
      }}>

        {/* Info column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{
              fontSize: '11px', letterSpacing: '2.4px', textTransform: 'uppercase',
              color: '#c96a78', fontFamily: 'DM Sans, sans-serif',
            }}>
              Contact info
            </div>
            {infoItems.map(({ icon: Icon, title, val }, i) => (
              <div key={i} className="info-item" style={{
                display: 'flex', alignItems: 'flex-start', gap: '14px',
                padding: '18px 20px',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(226,226,226,0.1)',
                borderRadius: '10px',
              }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'rgba(109,39,53,0.15)',
                  border: '1px solid rgba(138,63,78,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={16} style={{ color: '#c96a78' }} strokeWidth={1.5} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <span style={{ fontSize: '13px', color: '#868584', letterSpacing: '0.5px', fontFamily: 'DM Sans, sans-serif' }}>
                    {title}
                  </span>
                  <span style={{ fontSize: '15px', color: '#faf9f6', fontFamily: 'DM Sans, sans-serif' }}>
                    {val}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              fontSize: '11px', letterSpacing: '2.4px', textTransform: 'uppercase',
              color: '#c96a78', fontFamily: 'DM Sans, sans-serif',
            }}>
              Socials
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map(({ icon: Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="social-btn"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(226,226,226,0.12)',
                    borderRadius: '8px', padding: '10px 16px',
                    fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#868584',
                    cursor: 'pointer', textDecoration: 'none',
                    transition: 'background 0.18s ease, color 0.18s ease, border-color 0.18s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = '#faf9f6'
                    e.currentTarget.style.borderColor = 'rgba(226,226,226,0.24)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.color = '#868584'
                    e.currentTarget.style.borderColor = 'rgba(226,226,226,0.12)'
                  }}
                >
                  <Icon size={14} strokeWidth={1.5} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Response time */}
          <div className="response-box" style={{
            padding: '24px',
            borderRadius: '12px',
            background: 'rgba(109,39,53,0.08)',
            border: '1px solid rgba(138,63,78,0.2)',
          }}>
            <div style={{
              fontSize: '11px', letterSpacing: '2.4px', textTransform: 'uppercase',
              color: '#c96a78', fontFamily: 'DM Sans, sans-serif', marginBottom: '10px',
            }}>
              Response time
            </div>
            <div style={{ fontSize: '14px', color: '#afaeac', lineHeight: 1.65, fontFamily: 'DM Sans, sans-serif' }}>
              I aim to reply within <span style={{ color: '#c96a78' }}>24–48 hours</span>. For urgent matters, reach out directly via email.
            </div>
          </div>
        </div>

        {/* Form column */}
        <div className="form-col">
          {submitted ? (
            <div ref={successRef} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: '20px', padding: '80px 40px',
              textAlign: 'center',
            }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%',
                background: 'rgba(109,39,53,0.2)',
                border: '1px solid rgba(138,63,78,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Check size={28} style={{ color: '#c96a78' }} strokeWidth={1.5} />
              </div>
              <div style={{ fontSize: '28px', fontWeight: 400, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.5px' }}>
                Message sent!
              </div>
              <p style={{ fontSize: '16px', color: '#868584', lineHeight: 1.65, fontFamily: 'DM Sans, sans-serif', maxWidth: '360px' }}>
                Thanks for reaching out. I&apos;ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#353534', color: '#afaeac', border: 'none',
                  borderRadius: '50px', padding: '14px 32px',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 500,
                  cursor: 'pointer', transition: 'background 0.18s ease, color 0.18s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#3f3e3d'; e.currentTarget.style.color = '#faf9f6' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#353534'; e.currentTarget.style.color = '#afaeac' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
              {/* Name + Email row */}
              <div className="form-field" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{
                    fontSize: '11px', color: '#868584', letterSpacing: '1.4px',
                    textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif',
                    marginBottom: '8px', display: 'block',
                  }}>Full name</label>
                  <input
                    style={inputStyle('name')}
                    placeholder="Yarno Bachmann"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
                <div>
                  <label style={{
                    fontSize: '11px', color: '#868584', letterSpacing: '1.4px',
                    textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif',
                    marginBottom: '8px', display: 'block',
                  }}>Email address</label>
                  <input
                    type="email"
                    style={inputStyle('email')}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="form-field">
                <label style={{
                  fontSize: '11px', color: '#868584', letterSpacing: '1.4px',
                  textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif',
                  marginBottom: '8px', display: 'block',
                }}>Subject</label>
                <input
                  style={inputStyle('subject')}
                  placeholder="Photography commission / Development project / Other"
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Message */}
              <div className="form-field">
                <label style={{
                  fontSize: '11px', color: '#868584', letterSpacing: '1.4px',
                  textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif',
                  marginBottom: '8px', display: 'block',
                }}>Message</label>
                <textarea
                  style={{ ...inputStyle('message'), minHeight: '180px', resize: 'vertical' }}
                  placeholder="Tell me about your project, timeline and budget..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                />
              </div>

              {/* Submit */}
              <div className="form-field">
                <button
                  type="submit"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    background: '#6d2735', color: '#faf9f6', border: 'none',
                    borderRadius: '50px', padding: '14px 32px',
                    fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 500,
                    cursor: 'pointer', transition: 'background 0.18s ease',
                    boxShadow: 'rgba(109,39,53,0.32) 0px 8px 28px',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#7a2f3f' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#6d2735' }}
                >
                  <Send size={15} strokeWidth={1.5} />
                  Send message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
