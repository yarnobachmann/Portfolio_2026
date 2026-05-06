import { getPayload } from '../payload'

export type CMSService = { title: string; description?: string }
export type CMSStat = { value: number; suffix?: string; label: string }

export type CMSHomepage = {
  heroImage?: { url: string; alt?: string } | null
  heroEyebrow: string
  heroLine1: string
  heroLine2: string
  heroSubtitle: string
  heroBody: string
  services: CMSService[]
  stats: CMSStat[]
  aboutTitle: string
  aboutBody: string
}

const defaults: CMSHomepage = {
  heroEyebrow: 'Available for work',
  heroLine1: 'Yarno',
  heroLine2: 'Bachmann',
  heroSubtitle: 'Photographer & Developer',
  heroBody: 'Based in the Netherlands — creating visual work and building digital products.',
  services: [
    { title: 'Photography', description: 'Commercial, portrait and documentary' },
    { title: 'Web Development', description: 'Full-stack applications and websites' },
    { title: 'Design', description: 'UI/UX and design systems' },
    { title: 'Consulting', description: 'Visual strategy and brand identity' },
  ],
  stats: [
    { value: 3, suffix: '+', label: 'Years experience' },
    { value: 24, label: 'Photo series' },
    { value: 12, label: 'Projects shipped' },
    { value: 8, label: 'Clients' },
  ],
  aboutTitle: 'About me',
  aboutBody: 'I\'m a photographer and web developer based in the Netherlands.',
}

export async function getHomepage(): Promise<CMSHomepage> {
  try {
    const payload = await getPayload()
    const result = await payload.findGlobal({ slug: 'homepage', depth: 1 })
    return (result as unknown as CMSHomepage) ?? defaults
  } catch {
    return defaults
  }
}
