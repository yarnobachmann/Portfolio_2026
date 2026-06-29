import { getPayload } from '../payload'

export type CMSGallerySettings = {
  heroImage?: string | null
  heroEyebrow?: string
  heroTitle?: string
  heroSubtitle?: string
  statLabel?: string
}

export async function getGallerySettings(): Promise<CMSGallerySettings> {
  try {
    const payload = await getPayload()
    const data = await payload.findGlobal({ slug: 'gallery-settings', depth: 1 })
    const img = data.heroImage
    return {
      heroImage: img && typeof img === 'object' && 'url' in img ? (img as { url: string }).url : null,
      heroEyebrow: typeof data.heroEyebrow === 'string' ? data.heroEyebrow : undefined,
      heroTitle: typeof data.heroTitle === 'string' ? data.heroTitle : undefined,
      heroSubtitle: typeof data.heroSubtitle === 'string' ? data.heroSubtitle : undefined,
      statLabel: typeof data.statLabel === 'string' ? data.statLabel : undefined,
    }
  } catch {
    return {}
  }
}
