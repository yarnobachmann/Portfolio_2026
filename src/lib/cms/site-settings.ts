import { getPayload } from '../payload'

export type CMSSiteSettings = {
  siteName: string
  siteTitle: string
  siteDescription: string
  email: string
  location: string
  education: string
  github?: string
  instagram?: string
  linkedin?: string
  copyright: string
}

const defaults: CMSSiteSettings = {
  siteName: 'Yarno Bachmann',
  siteTitle: 'Yarno Bachmann — Photographer & Developer',
  siteDescription: 'Based in the Netherlands. Photographer and developer with a passion for clean design.',
  email: 'yarno@example.com',
  location: 'Netherlands, EU',
  education: 'HBO University',
  copyright: '© 2026 Yarno Bachmann',
}

export async function getSiteSettings(): Promise<CMSSiteSettings> {
  try {
    const payload = await getPayload()
    const result = await payload.findGlobal({ slug: 'site-settings' })
    return (result as unknown as CMSSiteSettings) ?? defaults
  } catch {
    return defaults
  }
}
