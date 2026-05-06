import { getPayload } from '../payload'

export type CMSGallerySettings = {
  heroImage?: string | null
}

export async function getGallerySettings(): Promise<CMSGallerySettings> {
  try {
    const payload = await getPayload()
    const data = await payload.findGlobal({ slug: 'gallery-settings', depth: 1 })
    const img = data.heroImage
    return {
      heroImage: img && typeof img === 'object' && 'url' in img ? (img as { url: string }).url : null,
    }
  } catch {
    return {}
  }
}
