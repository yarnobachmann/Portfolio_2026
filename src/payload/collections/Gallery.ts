import type { CollectionConfig } from 'payload'
import { isAdmin, isAdminOrPublished } from '../access'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  access: {
    read: isAdminOrPublished,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'filter', 'featured', 'order', '_status'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'filter',
      type: 'select',
      required: true,
      options: [
        { label: 'Landscape', value: 'Landscape' },
        { label: 'Portrait', value: 'Portrait' },
        { label: 'Urban', value: 'Urban' },
        { label: 'Nature', value: 'Nature' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show this photo in the homepage featured section',
        position: 'sidebar',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order (lower = first)',
        position: 'sidebar',
      },
    },
  ],
}
