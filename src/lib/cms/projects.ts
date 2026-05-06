import { getPayload } from '../payload'

export type CMSProject = {
  id: string | number
  title: string
  slug: string
  tag: string
  year: string
  desc: string
  tech: { label: string }[]
  accent?: boolean
  featured?: boolean
  url?: string
  github?: string
}

export async function getProjects(): Promise<CMSProject[]> {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'projects',
      where: { _status: { equals: 'published' } },
      sort: '-year',
      limit: 100,
    })
    return result.docs as unknown as CMSProject[]
  } catch {
    return []
  }
}

export async function getFeaturedProjects(): Promise<CMSProject[]> {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'projects',
      where: {
        and: [
          { _status: { equals: 'published' } },
          { featured: { equals: true } },
        ],
      },
      limit: 3,
    })
    return result.docs as unknown as CMSProject[]
  } catch {
    return []
  }
}

export async function getProjectBySlug(slug: string): Promise<CMSProject | null> {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'projects',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 1,
    })
    if (!result.docs.length) return null
    return result.docs[0] as unknown as CMSProject
  } catch {
    return null
  }
}

export async function getProjectSlugs(): Promise<string[]> {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'projects',
      where: { _status: { equals: 'published' } },
      limit: 100,
      select: { slug: true } as Record<string, true>,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return result.docs.map((d: any) => (d.slug as string) ?? '')
  } catch {
    return []
  }
}
