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
        {
          name: 'heroEyebrow',
          label: 'Hero Eyebrow',
          type: 'text',
          defaultValue: 'My work',
        },
        {
          name: 'heroTitle',
          label: 'Hero Title',
          type: 'text',
          defaultValue: 'Projects',
        },
        {
          name: 'heroSubtitle',
          label: 'Hero Subtitle',
          type: 'textarea',
          defaultValue: 'Development work, photography projects and design explorations.',
        },
        {
          name: 'statLabel',
          label: 'Stat Label',
          type: 'text',
          defaultValue: 'Total projects',
        },
      ],
    },
    {
      label: 'Call to Action',
      type: 'collapsible',
      fields: [
        {
          name: 'ctaEyebrow',
          label: 'CTA Eyebrow',
          type: 'text',
          defaultValue: 'Collaborate',
        },
        {
          name: 'ctaTitle',
          label: 'CTA Title',
          type: 'text',
          defaultValue: 'Want to work together?',
        },
        {
          name: 'ctaButtonLabel',
          label: 'CTA Button Label',
          type: 'text',
          defaultValue: 'Get in touch',
        },
      ],
    },
  ],
}
