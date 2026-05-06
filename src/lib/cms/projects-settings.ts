import { getPayload } from '../payload'

export type CMSProjectsSettings = {
  heroImage?: string | null
}

export async function getProjectsSettings(): Promise<CMSProjectsSettings> {
  try {
    const payload = await getPayload()
    const data = await payload.findGlobal({ slug: 'projects-settings', depth: 1 })
    const img = data.heroImage
    return {
      heroImage: img && typeof img === 'object' && 'url' in img ? (img as { url: string }).url : null,
    }
  } catch {
    return {}
  }
}
