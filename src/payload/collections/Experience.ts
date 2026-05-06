import type { CollectionConfig } from 'payload'
import { isAdmin, publicRead } from '../access'

export const Experience: CollectionConfig = {
  slug: 'experience',
  access: {
    read: publicRead,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'role',
    defaultColumns: ['role', 'company', 'period'],
  },
  fields: [
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'period',
      type: 'text',
      required: true,
      admin: { description: 'e.g. "2024 — Present"' },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
