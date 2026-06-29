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
          defaultValue: 'Available for work - HBO Student',
          admin: { description: 'Small badge text above the headline.' },
        },
        {
          name: 'heroLine1',
          type: 'text',
          defaultValue: 'photographer',
          admin: { description: 'Highlighted hero title line.' },
        },
        {
          name: 'heroLine2',
          type: 'text',
          defaultValue: '& developer.',
          admin: { description: 'Second hero title line.' },
        },
        {
          name: 'heroSubtitle',
          type: 'text',
          defaultValue: 'Photographer & Developer',
        },
        {
          name: 'heroBody',
          type: 'textarea',
          defaultValue: 'Based in the Netherlands - creating visual work and building digital products.',
        },
        {
          name: 'heroShowParticles',
          label: 'Show Floating Code / Photo Text',
          type: 'checkbox',
          defaultValue: true,
          admin: { description: 'Toggle the floating code and photography words in the hero.' },
        },
        {
          name: 'heroPrimaryLabel',
          label: 'Primary Button Label',
          type: 'text',
          defaultValue: 'View gallery',
        },
        {
          name: 'heroPrimaryHref',
          label: 'Primary Button Link',
          type: 'text',
          defaultValue: '/gallery',
          admin: { description: 'Use an internal path like /gallery or a full URL.' },
        },
        {
          name: 'heroSecondaryLabel',
          label: 'Secondary Button Label',
          type: 'text',
          defaultValue: 'Get in touch',
        },
        {
          name: 'heroSecondaryHref',
          label: 'Secondary Button Link',
          type: 'text',
          defaultValue: '/contact',
          admin: { description: 'Use an internal path like /contact or a full URL.' },
        },
      ],
    },
    {
      label: 'Hero Side Panel',
      type: 'collapsible',
      fields: [
        {
          name: 'heroSidePanelEnabled',
          label: 'Show Side Panel',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'heroSidePanelEyebrow',
          label: 'Side Panel Eyebrow',
          type: 'text',
          defaultValue: 'Available now',
        },
        {
          name: 'heroSidePanelTitle',
          label: 'Side Panel Title',
          type: 'text',
          defaultValue: 'NL',
        },
        {
          name: 'heroSidePanelText',
          label: 'Side Panel Text',
          type: 'text',
          defaultValue: 'Based in the Netherlands',
        },
        {
          name: 'heroBottomLeft',
          label: 'Bottom Left Text',
          type: 'text',
          defaultValue: 'Photographer & Developer',
        },
        {
          name: 'heroBottomRight',
          label: 'Bottom Right Text',
          type: 'text',
          defaultValue: 'Scroll to explore',
        },
      ],
    },
    {
      label: 'Services',
      type: 'collapsible',
      fields: [
        {
          name: 'servicesEyebrow',
          label: 'Section Eyebrow',
          type: 'text',
          defaultValue: 'What I do',
        },
        {
          name: 'servicesTitle',
          label: 'Section Title',
          type: 'text',
          defaultValue: 'This is what I do',
        },
        {
          name: 'services',
          type: 'array',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea' },
            {
              name: 'linkUrl',
              label: 'Optional Link',
              type: 'text',
              admin: { description: 'Leave empty to keep this card non-clickable. Use /projects, /gallery, /contact, or a full URL.' },
            },
            {
              name: 'linkLabel',
              label: 'Link Label',
              type: 'text',
              defaultValue: 'View more',
            },
            {
              name: 'openInNewTab',
              label: 'Open Link in New Tab',
              type: 'checkbox',
              defaultValue: false,
            },
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
          defaultValue: "I'm a photographer and web developer based in the Netherlands. I create visual work and build digital products.",
        },
      ],
    },
  ],
}
