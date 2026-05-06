import type { CollectionConfig } from 'payload'
import { isAdmin, publicRead } from '../access'

export const Technologies: CollectionConfig = {
  slug: 'technologies',
  access: {
    read: publicRead,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Frontend', value: 'frontend' },
        { label: 'Backend', value: 'backend' },
        { label: 'Database', value: 'database' },
        { label: 'Tools', value: 'tools' },
        { label: 'Photography', value: 'photography' },
        { label: 'Design', value: 'design' },
      ],
    },
  ],
}
