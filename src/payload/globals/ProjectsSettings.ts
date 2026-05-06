import type { GlobalConfig } from 'payload'
import { isAdmin, publicRead } from '../access'

export const ProjectsSettings: GlobalConfig = {
  slug: 'projects-settings',
  label: 'Projects Page',
  access: { read: publicRead, update: isAdmin },
  admin: { group: 'Pages' },
  fields: [
    {
      label: 'Hero',
      type: 'collapsible',
      fields: [
        {
          name: 'heroImage',
          label: 'Hero Background Image',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Background image shown at the top of the Projects page' },
        },
      ],
    },
  ],
}
