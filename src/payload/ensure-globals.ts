import { getPayload } from 'payload'
import config from '../../payload.config'

const globals = [
  {
    slug: 'site-settings',
    data: {
      siteName: 'Yarno Bachmann',
      siteTitle: 'Yarno Bachmann - Photographer & Developer',
      siteDescription: 'Based in the Netherlands. Photographer and developer with a passion for clean design and compelling visuals.',
      email: 'yarno@example.com',
      location: 'Netherlands, EU',
      education: 'HBO University',
      copyright: '2026 Yarno Bachmann',
    },
  },
  {
    slug: 'homepage',
    data: {
      heroEyebrow: 'Available for work - HBO Student',
      heroLine1: 'photographer',
      heroLine2: '& developer.',
      heroSubtitle: 'Photographer & Developer',
      heroBody: 'Based in the Netherlands - creating visual work and building digital products.',
      heroShowParticles: true,
      heroPrimaryLabel: 'View gallery',
      heroPrimaryHref: '/gallery',
      heroSecondaryLabel: 'Get in touch',
      heroSecondaryHref: '/contact',
      heroSidePanelEnabled: true,
      heroSidePanelEyebrow: 'Available now',
      heroSidePanelTitle: 'NL',
      heroSidePanelText: 'Based in the Netherlands',
      heroBottomLeft: 'Photographer & Developer',
      heroBottomRight: 'Scroll to explore',
      servicesEyebrow: 'What I do',
      servicesTitle: 'This is what I do',
      services: [
        { title: 'Photography', description: 'Landscape, portrait and documentary photography.' },
        { title: 'Web Development', description: 'Full-stack web applications built with modern tools.' },
      ],
      stats: [
        { value: 3, suffix: '+', label: 'Years shooting' },
        { value: 12, suffix: '', label: 'Projects built' },
      ],
      aboutTitle: 'About me',
      aboutBody: "I'm a photographer and web developer based in the Netherlands. I create visual work and build digital products.",
    },
  },
  {
    slug: 'navigation',
    data: {
      items: [
        { label: 'Work', href: '/projects' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  },
  {
    slug: 'gallery-settings',
    data: {
      heroEyebrow: 'Photography',
      heroTitle: 'Gallery',
      heroSubtitle: 'Landscapes, portraits and moments from the Netherlands and beyond.',
      statLabel: 'Total photos',
    },
  },
  {
    slug: 'projects-settings',
    data: {
      heroEyebrow: 'My work',
      heroTitle: 'Projects',
      heroSubtitle: 'Development work, photography projects and design explorations.',
      statLabel: 'Total projects',
      ctaEyebrow: 'Collaborate',
      ctaTitle: 'Want to work together?',
      ctaButtonLabel: 'Get in touch',
    },
  },
]

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function ensureGlobals() {
  if (!process.env.DATABASE_URL) {
    console.log('Skipping global bootstrap: DATABASE_URL is not set.')
    return
  }

  let payload: Awaited<ReturnType<typeof getPayload>> | undefined

  for (let attempt = 1; attempt <= 10; attempt += 1) {
    try {
      payload = await getPayload({ config })
      break
    } catch (err) {
      if (attempt === 10) {
        throw err
      }

      console.log(`Waiting for database before global bootstrap (${attempt}/10)...`)
      await wait(1500)
    }
  }

  if (!payload) {
    throw new Error('Payload did not initialize.')
  }

  for (const global of globals) {
    const existing = await payload.findGlobal({
      slug: global.slug,
      depth: 0,
      overrideAccess: true,
      disableErrors: true,
    } as never)

    if (existing) {
      continue
    }

    await payload.updateGlobal({
      slug: global.slug,
      data: global.data,
      overrideAccess: true,
    } as never)

    console.log(`Created missing global: ${global.slug}`)
  }
}

ensureGlobals()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Failed to bootstrap globals:', err)
    process.exit(1)
  })
