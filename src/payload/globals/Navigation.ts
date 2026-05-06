import type { GlobalConfig } from 'payload'
import { isAdmin, publicRead } from '../access'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  access: {
    read: publicRead,
    update: isAdmin,
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { label: 'Work', href: '/projects' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ],
}
