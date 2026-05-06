import { getPayload } from '../payload'

export type CMSPhoto = {
  id: string | number
  title: string
  filter: string
  order: number
  featured?: boolean
  image: {
    url: string
    alt: string
    width?: number
    height?: number
  } | null
}

export async function getGallery(): Promise<CMSPhoto[]> {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'gallery',
      where: { _status: { equals: 'published' } },
      sort: 'order',
      limit: 100,
      depth: 1,
    })
    return result.docs as unknown as CMSPhoto[]
  } catch {
    return []
  }
}

export async function getFeaturedPhotos(): Promise<CMSPhoto[]> {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'gallery',
      where: {
        and: [
          { _status: { equals: 'published' } },
          { featured: { equals: true } },
        ],
      },
      sort: 'order',
      limit: 6,
      depth: 1,
    })
    return result.docs as unknown as CMSPhoto[]
  } catch {
    return []
  }
}
