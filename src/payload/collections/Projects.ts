import type { CollectionConfig } from 'payload'
import { isAdmin, isAdminOrPublished } from '../access'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: isAdminOrPublished,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'tag', 'year', '_status'],
    livePreview: {
      url: ({ data }) =>
        `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/projects/${data.slug}?preview=true`,
    },
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
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier, e.g. "personal-portfolio"',
      },
    },
    {
      name: 'tag',
      type: 'select',
      required: true,
      options: [
        { label: 'Development', value: 'Development' },
        { label: 'Photography', value: 'Photography' },
        { label: 'Design', value: 'Design' },
      ],
    },
    {
      name: 'year',
      type: 'text',
      required: true,
    },
    {
      name: 'desc',
      type: 'textarea',
      required: true,
    },
    {
      name: 'tech',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'accent',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Highlight this project with the accent color',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show on homepage featured section',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        description: 'Live project URL',
      },
    },
    {
      name: 'github',
      type: 'text',
      admin: {
        description: 'GitHub repository URL',
      },
    },
    {
      name: 'content',
      type: 'richText',
      admin: {
        description: 'Full project description for detail page',
      },
    },
  ],
}
