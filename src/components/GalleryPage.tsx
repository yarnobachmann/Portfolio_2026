'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Expand, X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { CMSPhoto } from '@/lib/cms/gallery'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const FALLBACK_GRADIENTS = [
  'linear-gradient(135deg, #1a1208 0%, #2d2010 40%, #3d2808 70%, #1a1208 100%)',
  'linear-gradient(135deg, #0a110a 0%, #0d180d 50%, #0a110a 100%)',
  'linear-gradient(135deg, #0e0d14 0%, #141018 50%, #0e0d14 100%)',
  'linear-gradient(135deg, #100e0c 0%, #1a1510 50%, #100e0c 100%)',
  'linear-gradient(135deg, #0e1018 0%, #12141e 50%, #0e1018 100%)',
  'linear-gradient(135deg, #080e10 0%, #0d1618 50%, #080e10 100%)',
  'linear-gradient(135deg, #081008 0%, #0c1a0c 40%, #101e10 70%, #081008 100%)',
  'linear-gradient(135deg, #12100e 0%, #1c1810 50%, #12100e 100%)',
  'linear-gradient(135deg, #180e0a 0%, #241408 50%, #180e0a 100%)',
]

const FALLBACK_PHOTOS = [
  { id: '1', title: 'Golden Hour Ridge', filter: 'Landscape', featured: true, order: 0, image: null },
  { id: '2', title: 'Mist in the Pines', filter: 'Nature', order: 1, image: null },
  { id: '3', title: 'City in Rain', filter: 'Urban', order: 2, image: null },
  { id: '4', title: 'Lone Figure', filter: 'Portrait', order: 3, image: null },
  { id: '5', title: 'Winter Dunes', filter: 'Landscape', order: 4, image: null },
  { id: '6', title: 'Canal at Dusk', filter: 'Urban', order: 5, image: null },
  { id: '7', title: 'Forest Path', filter: 'Nature', featured: true, order: 6, image: null },
  { id: '8', title: 'Market Square', filter: 'Urban', order: 7, image: null },
  { id: '9', title: 'Autumn Portrait', filter: 'Portrait', order: 8, image: null },
] as CMSPhoto[]

function GalleryPhoto({
  photo,
  gradient,
  featured,
  onOpen,
}: {
  photo: CMSPhoto
  gradient: string
  featured?: boolean
  onOpen: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const isFeature = featured ?? photo.featured

  return (
    <div
      className="gallery-photo"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
      style={{
        position: 'relative', borderRadius: '10px', overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: isFeature ? '2/1' : '4/3',
        border: `1px solid ${hovered ? 'rgba(226,226,226,0.22)' : 'rgba(226,226,226,0.1)'}`,
        transition: 'transform 0.3s ease, border-color 0.22s ease, box-shadow 0.3s ease',
        transform: hovered ? 'scale(1.014)' : 'scale(1)',
        boxShadow: hovered ? 'rgba(0,0,0,0.4) 0px 14px 36px' : 'rgba(0,0,0,0.15) 0px 4px 14px',
        gridColumn: isFeature ? 'span 2' : 'span 1',
        willChange: 'transform',
        background: gradient,
      }}
    >
      {photo.image?.url && (
        <img
          src={photo.image.url}
          alt={photo.image.alt || photo.title}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}

      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(14,13,12,0.94) 0%, rgba(14,13,12,0.2) 58%, transparent 100%)'
          : 'linear-gradient(to top, rgba(14,13,12,0.78) 0%, transparent 56%)',
        transition: 'background 0.28s ease',
      }} />

      {isFeature && (
        <div style={{ position: 'absolute', top: '16px', left: '16px', fontSize: '10px', letterSpacing: '1.8px', textTransform: 'uppercase', color: '#c96a78', background: 'rgba(109,39,53,0.28)', border: '1px solid rgba(138,63,78,0.42)', borderRadius: '4px', padding: '3px 8px', fontFamily: 'DM Sans, sans-serif' }}>
          Featured
        </div>
      )}

      <div style={{ position: 'absolute', bottom: '18px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', opacity: hovered ? 1 : 0.88, transition: 'opacity 0.22s ease' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '10px', letterSpacing: '1.8px', textTransform: 'uppercase', color: '#c96a78', fontFamily: 'DM Sans, sans-serif' }}>
            {photo.filter}
          </span>
          <span style={{ fontSize: '16px', fontWeight: 500, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.2px' }}>
            {photo.title}
          </span>
          {photo.image?.alt && (
            <span style={{ fontSize: '12px', color: '#868584', fontFamily: 'DM Sans, sans-serif', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={10} style={{ color: '#868584', flexShrink: 0 }} />
              {photo.image.alt}
            </span>
          )}
        </div>
        <div
          style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.13)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: hovered ? 1 : 0, transition: 'opacity 0.22s ease', border: '1px solid rgba(255,255,255,0.16)', flexShrink: 0 }}
          onClick={(e) => { e.stopPropagation(); onOpen() }}
        >
          <Expand size={15} style={{ color: '#faf9f6' }} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}

export default function GalleryPage({ photos: cmsPhotos, heroImage }: { photos?: CMSPhoto[]; heroImage?: string | null }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxPhoto, setLightboxPhoto] = useState<CMSPhoto | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { isMobile, px } = useBreakpoint()
  const filters = ['All', 'Landscape', 'Portrait', 'Urban', 'Nature']
  const heroBg = heroImage || '/uploads/galleryhero.png'

  const photos = cmsPhotos && cmsPhotos.length > 0 ? cmsPhotos : FALLBACK_PHOTOS
  const filtered = activeFilter === 'All' ? photos : photos.filter(p => p.filter === activeFilter)

  // Keep a ref so keyboard handlers always see the latest filtered list
  const filteredRef = useRef(filtered)
  filteredRef.current = filtered

  const lbIndex = lightboxPhoto ? filtered.findIndex(p => p.id === lightboxPhoto.id) : -1

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxPhoto) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setLightboxPhoto(null); return }
      const idx  = filteredRef.current.findIndex(p => p.id === lightboxPhoto.id)
      const list = filteredRef.current
      if (e.key === 'ArrowLeft' && idx > 0) setLightboxPhoto(list[idx - 1])
      if (e.key === 'ArrowRight' && idx < list.length - 1) setLightboxPhoto(list[idx + 1])
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxPhoto])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxPhoto ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxPhoto])

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('.gallery-eyebrow', { x: -22, opacity: 0, duration: 0.68, ease: 'power3.out' }, 0.1)
    tl.from('.gallery-heading', { y: 32, opacity: 0, duration: 0.82, ease: 'power4.out' }, 0.2)
    tl.from('.gallery-sub', { y: 20, opacity: 0, duration: 0.62, ease: 'power3.out' }, 0.36)
    tl.from('.filter-btn', { x: -14, opacity: 0, stagger: 0.07, duration: 0.5, ease: 'power2.out' }, 0.42)
  }, { scope: containerRef })

  useGSAP(() => {
    gsap.fromTo('.gallery-photo',
      { y: 38, opacity: 0, scale: 0.955 },
      { y: 0, opacity: 1, scale: 1, stagger: { each: 0.07, from: 'start' }, duration: 0.68, ease: 'power3.out' }
    )
  }, { scope: containerRef, dependencies: [activeFilter] })

  const iconBtn: React.CSSProperties = {
    width: '40px', height: '40px', borderRadius: '50%',
    background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.16)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', color: '#faf9f6', flexShrink: 0,
    transition: 'background 0.18s ease',
  }

  return (
    <div ref={containerRef} style={{ paddingTop: '68px', minHeight: '100vh' }}>

      {/* Hero header */}
      <div style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(226,226,226,0.08)', minHeight: '340px', display: 'flex', alignItems: 'flex-end' }}>
        <Image src={heroBg} alt="" fill priority style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(14,13,12,0.45) 0%, rgba(14,13,12,0.62) 50%, rgba(14,13,12,0.93) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(109,39,53,0.11)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: `80px ${px} 52px`, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px', width: '100%' }}>
          <div>
            <div className="gallery-eyebrow" style={{ fontSize: '11px', letterSpacing: '2.4px', textTransform: 'uppercase', color: '#c96a78', fontFamily: 'DM Sans, sans-serif', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '32px', height: '1px', background: '#c96a78', display: 'inline-block' }} />
              Photography
            </div>
            <h1 className="gallery-heading" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-2px', lineHeight: 1.0, marginBottom: '20px' }}>
              Gallery
            </h1>
            <p className="gallery-sub" style={{ fontSize: '17px', color: '#afaeac', lineHeight: 1.65, fontFamily: 'DM Sans, sans-serif', maxWidth: '480px' }}>
              Landscapes, portraits and moments from the Netherlands and beyond.
            </p>
          </div>
          {!isMobile && (
            <div className="gallery-eyebrow" style={{ flexShrink: 0, background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(226,226,226,0.14)', borderRadius: '12px', padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '160px' }}>
              <span style={{ fontSize: '36px', fontWeight: 400, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-1.5px', lineHeight: 1 }}>
                {photos.length}
              </span>
              <span style={{ fontSize: '11px', color: '#afaeac', letterSpacing: '1.4px', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>
                Total photos
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Filters */}
      <div style={{ padding: `28px ${px}`, display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(226,226,226,0.06)' }}>
        {filters.map(f => (
          <button
            key={f}
            className="filter-btn"
            onClick={() => setActiveFilter(f)}
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: activeFilter === f ? 500 : 400, borderRadius: '50px', padding: '7px 18px', cursor: 'pointer', background: activeFilter === f ? '#6d2735' : 'rgba(255,255,255,0.05)', color: activeFilter === f ? '#faf9f6' : '#868584', border: activeFilter === f ? 'none' : '1px solid rgba(226,226,226,0.12)', transition: 'all 0.2s ease' }}
            onMouseEnter={e => { if (activeFilter !== f) e.currentTarget.style.color = '#afaeac' }}
            onMouseLeave={e => { if (activeFilter !== f) e.currentTarget.style.color = '#868584' }}
          >
            {f}
          </button>
        ))}
        <span style={{ fontSize: '12px', color: '#454545', letterSpacing: '1.4px', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', marginLeft: 'auto' }}>
          {filtered.length} {filtered.length === 1 ? 'photo' : 'photos'}
        </span>
      </div>

      {/* Grid */}
      <div style={{ padding: `40px ${px} 80px` }}>
        <div className="gallery-grid grid-3">
          {filtered.map((photo, i) => (
            <GalleryPhoto
              key={`${activeFilter}-${photo.id}`}
              photo={photo}
              gradient={FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length]}
              featured={photo.featured}
              onOpen={() => setLightboxPhoto(photo)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(6,5,5,0.94)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer',
          }}
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            style={{ position: 'relative', cursor: 'default', maxWidth: '92vw', maxHeight: '92vh' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              style={{ ...iconBtn, position: 'absolute', top: '-52px', right: '0' }}
              onClick={() => setLightboxPhoto(null)}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.16)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)' }}
            >
              <X size={17} strokeWidth={1.5} />
            </button>

            {/* Prev */}
            {lbIndex > 0 && (
              <button
                style={{ ...iconBtn, position: 'absolute', top: '50%', left: '-56px', transform: 'translateY(-50%)' }}
                onClick={() => setLightboxPhoto(filtered[lbIndex - 1])}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.16)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)' }}
              >
                <ChevronLeft size={18} strokeWidth={1.5} />
              </button>
            )}

            {/* Next */}
            {lbIndex < filtered.length - 1 && (
              <button
                style={{ ...iconBtn, position: 'absolute', top: '50%', right: '-56px', transform: 'translateY(-50%)' }}
                onClick={() => setLightboxPhoto(filtered[lbIndex + 1])}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.16)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)' }}
              >
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
            )}

            {/* Image */}
            {lightboxPhoto.image?.url ? (
              <img
                src={lightboxPhoto.image.url}
                alt={lightboxPhoto.title}
                style={{ display: 'block', maxWidth: '88vw', maxHeight: '78vh', objectFit: 'contain', borderRadius: '10px' }}
              />
            ) : (
              <div style={{
                width: 'min(680px, 88vw)', height: 'min(520px, 60vh)',
                background: FALLBACK_GRADIENTS[lbIndex % FALLBACK_GRADIENTS.length],
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: '13px', color: '#454545', fontFamily: 'DM Sans, sans-serif' }}>No image uploaded</span>
              </div>
            )}

            {/* Info bar */}
            <div style={{ padding: '16px 4px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <span style={{ fontSize: '10px', letterSpacing: '1.8px', textTransform: 'uppercase', color: '#c96a78', fontFamily: 'DM Sans, sans-serif' }}>
                  {lightboxPhoto.filter}
                </span>
                <span style={{ fontSize: '18px', fontWeight: 500, color: '#faf9f6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.3px' }}>
                  {lightboxPhoto.title}
                </span>
              </div>
              <span style={{ fontSize: '12px', color: '#454545', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.5px' }}>
                {lbIndex + 1} / {filtered.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
