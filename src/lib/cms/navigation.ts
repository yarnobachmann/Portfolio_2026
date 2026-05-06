import { getPayload } from '../payload'

export type CMSNavItem = { label: string; href: string }

const defaults: CMSNavItem[] = [
  { label: 'Work', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export async function getNavigation(): Promise<CMSNavItem[]> {
  try {
    const payload = await getPayload()
    const result = await payload.findGlobal({ slug: 'navigation' })
    const items = (result as unknown as { items: CMSNavItem[] })?.items
    return items?.length ? items : defaults
  } catch {
    return defaults
  }
}
