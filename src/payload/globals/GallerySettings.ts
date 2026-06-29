import type { GlobalConfig } from 'payload'
import { isAdmin, publicRead } from '../access'

export const GallerySettings: GlobalConfig = {
  slug: 'gallery-settings',
  label: 'Gallery Page',
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
          admin: { description: 'Background image shown at the top of the Gallery page' },
        },
        {
          name: 'heroEyebrow',
          label: 'Hero Eyebrow',
          type: 'text',
          defaultValue: 'Photography',
        },
        {
          name: 'heroTitle',
          label: 'Hero Title',
          type: 'text',
          defaultValue: 'Gallery',
        },
        {
          name: 'heroSubtitle',
          label: 'Hero Subtitle',
          type: 'textarea',
          defaultValue: 'Landscapes, portraits and moments from the Netherlands and beyond.',
        },
        {
          name: 'statLabel',
          label: 'Stat Label',
          type: 'text',
          defaultValue: 'Total photos',
        },
      ],
    },
  ],
}
