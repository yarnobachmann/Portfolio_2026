import { getPayload } from '../payload'

export type CMSTechnology = {
  id: string | number
  name: string
  category: string
}

export async function getTechnologies(): Promise<CMSTechnology[]> {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'technologies',
      limit: 100,
      sort: 'name',
    })
    return result.docs as unknown as CMSTechnology[]
  } catch {
    return []
  }
}
