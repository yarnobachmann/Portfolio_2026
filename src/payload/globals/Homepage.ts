import type { GlobalConfig } from 'payload'
import { isAdmin, publicRead } from '../access'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  access: {
    read: publicRead,
    update: isAdmin,
  },
  admin: {
    livePreview: {
      url: () => `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/?preview=true`,
    },
  },
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
          admin: { description: 'Background photo shown in the homepage hero section' },
        },
        {
          name: 'heroEyebrow',
          type: 'text',
          defaultValue: 'Available for work · HBO Student',
          admin: { description: 'Small badge text above the headline (e.g. "Available for work · HBO Student")' },
        },
        {
          name: 'heroLine1',
          type: 'text',
          defaultValue: 'photographer',
          admin: { description: 'First highlighted line of the hero title (accent colour)' },
        },
        {
          name: 'heroLine2',
          type: 'text',
          defaultValue: '& developer.',
          admin: { description: 'Second line of the hero title' },
        },
        {
          name: 'heroSubtitle',
          type: 'text',
          defaultValue: 'Photographer & Developer',
        },
        {
          name: 'heroBody',
          type: 'textarea',
          defaultValue: 'Based in the Netherlands — creating visual work and building digital products.',
        },
      ],
    },
    {
      label: 'Services',
      type: 'collapsible',
      fields: [
        {
          name: 'services',
          type: 'array',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea' },
          ],
        },
      ],
    },
    {
      label: 'Stats',
      type: 'collapsible',
      fields: [
        {
          name: 'stats',
          type: 'array',
          fields: [
            { name: 'value', type: 'number', required: true },
            { name: 'suffix', type: 'text' },
            { name: 'label', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      label: 'About',
      type: 'collapsible',
      fields: [
        {
          name: 'aboutTitle',
          type: 'text',
          defaultValue: 'About me',
        },
        {
          name: 'aboutBody',
          type: 'textarea',
          defaultValue: 'I\'m a photographer and web developer based in the Netherlands. I create visual work and build digital products.',
        },
      ],
    },
  ],
}
