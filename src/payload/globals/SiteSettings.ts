import type { GlobalConfig } from 'payload'
import { isAdmin, publicRead } from '../access'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: publicRead,
    update: isAdmin,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'Yarno Bachmann',
    },
    {
      name: 'siteTitle',
      type: 'text',
      required: true,
      defaultValue: 'Yarno Bachmann — Photographer & Developer',
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      required: true,
      defaultValue: 'Based in the Netherlands. Photographer and developer with a passion for clean design and compelling visuals.',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      defaultValue: 'yarno@example.com',
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Netherlands, EU',
    },
    {
      name: 'education',
      type: 'text',
      defaultValue: 'HBO University',
    },
    {
      name: 'github',
      type: 'text',
    },
    {
      name: 'instagram',
      type: 'text',
    },
    {
      name: 'linkedin',
      type: 'text',
    },
    {
      name: 'copyright',
      type: 'text',
      defaultValue: '© 2026 Yarno Bachmann',
    },
  ],
}
