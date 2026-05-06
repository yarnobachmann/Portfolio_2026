import type { CollectionConfig } from 'payload'
import { isAdmin, publicRead } from '../access'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: publicRead,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  upload: {
    staticDir: 'public/media',
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
      { name: 'card', width: 768, height: 576, position: 'centre' },
      { name: 'large', width: 1920, height: 1440, position: 'centre' },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
  ],
}
