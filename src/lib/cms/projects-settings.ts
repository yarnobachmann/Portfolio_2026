import { getPayload } from '../payload'

export type CMSProjectsSettings = {
  heroImage?: string | null
  heroEyebrow?: string
  heroTitle?: string
  heroSubtitle?: string
  statLabel?: string
  ctaEyebrow?: string
  ctaTitle?: string
  ctaButtonLabel?: string
}

export async function getProjectsSettings(): Promise<CMSProjectsSettings> {
  try {
    const payload = await getPayload()
    const data = await payload.findGlobal({ slug: 'projects-settings', depth: 1 })
    const img = data.heroImage
    return {
      heroImage: img && typeof img === 'object' && 'url' in img ? (img as { url: string }).url : null,
      heroEyebrow: typeof data.heroEyebrow === 'string' ? data.heroEyebrow : undefined,
      heroTitle: typeof data.heroTitle === 'string' ? data.heroTitle : undefined,
      heroSubtitle: typeof data.heroSubtitle === 'string' ? data.heroSubtitle : undefined,
      statLabel: typeof data.statLabel === 'string' ? data.statLabel : undefined,
      ctaEyebrow: typeof data.ctaEyebrow === 'string' ? data.ctaEyebrow : undefined,
      ctaTitle: typeof data.ctaTitle === 'string' ? data.ctaTitle : undefined,
      ctaButtonLabel: typeof data.ctaButtonLabel === 'string' ? data.ctaButtonLabel : undefined,
    }
  } catch {
    return {}
  }
}
