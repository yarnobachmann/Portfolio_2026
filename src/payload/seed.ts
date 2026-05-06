import { getPayload } from 'payload'
import config from '../../payload.config'

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding database...')

  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      siteName: 'Yarno Bachmann',
      siteTitle: 'Yarno Bachmann — Photographer & Developer',
      siteDescription: 'Based in the Netherlands. Photographer and developer with a passion for clean design and compelling visuals.',
      email: 'yarno@example.com',
      location: 'Netherlands, EU',
      education: 'HBO University',
      copyright: '© 2026 Yarno Bachmann',
    },
  })
  console.log('✓ Site settings seeded')

  await payload.updateGlobal({
    slug: 'navigation',
    data: {
      items: [
        { label: 'Home', href: '/' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Projects', href: '/projects' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  })
  console.log('✓ Navigation seeded')

  await payload.updateGlobal({
    slug: 'homepage',
    data: {
      heroEyebrow: 'Available for work · HBO Student',
      heroLine1: 'photographer',
      heroLine2: '& developer.',
      heroSubtitle: 'Photographer & Developer',
      heroBody: 'Based in the Netherlands — creating visual work and building digital products.',
      services: [
        { title: 'Photography', description: 'Landscape, portrait and documentary photography. Every frame considered, every light moment captured.' },
        { title: 'Web Development', description: 'Full-stack web applications built with modern tools. Clean code, thoughtful architecture, excellent UX.' },
        { title: 'Portrait Sessions', description: 'Professional portrait photography for individuals and brands. Natural light and studio environments.' },
        { title: 'UI & Design', description: 'Interfaces crafted with care — dark-surface, editorial and calm. From concept to pixel-perfect delivery.' },
      ],
      stats: [
        { value: 3, suffix: '+', label: 'Years shooting' },
        { value: 200, suffix: '+', label: 'Photos taken' },
        { value: 12, suffix: '', label: 'Projects built' },
        { value: 4, suffix: '', label: 'Photo series' },
      ],
      aboutTitle: 'About me',
      aboutBody: "I'm a photographer and web developer based in the Netherlands, studying at HBO. I create visual work and build digital products.",
    },
  })
  console.log('✓ Homepage seeded')

  const projectsData = [
    {
      title: 'Personal Portfolio',
      slug: 'personal-portfolio',
      tag: 'Development',
      year: '2026',
      desc: 'This very website — a multi-page portfolio built with Next.js and GSAP, featuring photography gallery, project showcase and contact form.',
      tech: [{ label: 'Next.js' }, { label: 'TypeScript' }, { label: 'GSAP' }, { label: 'Payload CMS' }],
      accent: true,
      featured: true,
      _status: 'published',
    },
    {
      title: 'Photo Gallery App',
      slug: 'photo-gallery-app',
      tag: 'Development',
      year: '2025',
      desc: 'A full-stack photo management web application. Supports upload, categorisation, filtering and fullscreen viewing.',
      tech: [{ label: 'Next.js' }, { label: 'Prisma' }, { label: 'PostgreSQL' }, { label: 'Cloudinary' }],
      featured: false,
      _status: 'published',
    },
    {
      title: 'Urban Photography Series',
      slug: 'urban-photography-series',
      tag: 'Photography',
      year: '2025',
      desc: 'A 24-image documentary series on urban life in Dutch cities. Exhibited at the HBO student showcase.',
      tech: [{ label: 'Canon EOS' }, { label: 'Lightroom' }, { label: 'Film Emulation' }],
      accent: true,
      featured: true,
      _status: 'published',
    },
    {
      title: 'CLI Task Manager',
      slug: 'cli-task-manager',
      tag: 'Development',
      year: '2025',
      desc: 'A minimal command-line tool for managing tasks and projects. Built for personal use and shared open source.',
      tech: [{ label: 'Node.js' }, { label: 'TypeScript' }, { label: 'SQLite' }],
      _status: 'published',
    },
    {
      title: 'Design System',
      slug: 'design-system',
      tag: 'Design',
      year: '2024',
      desc: 'A warm, editorial dark-surface design system with a comprehensive token set, component library, and usage guidelines.',
      tech: [{ label: 'Figma' }, { label: 'CSS Custom Properties' }, { label: 'Storybook' }],
      _status: 'published',
    },
    {
      title: 'Landscape Portfolio',
      slug: 'landscape-portfolio',
      tag: 'Photography',
      year: '2024',
      desc: 'A curated selection of landscape photography from the Netherlands, Belgium and Germany over two years.',
      tech: [{ label: 'Sony A7C' }, { label: 'Capture One' }, { label: 'Fine Art Print' }],
      _status: 'published',
    },
  ]

  for (const project of projectsData) {
    await payload.create({ collection: 'projects', data: project })
  }
  console.log(`✓ ${projectsData.length} projects seeded`)

  console.log('\nSeeding complete!')
  process.exit(0)
}

seed().catch(err => {
  console.error(err)
  process.exit(1)
})
