import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './src/payload/collections/Users.ts'
import { Media } from './src/payload/collections/Media.ts'
import { Projects } from './src/payload/collections/Projects.ts'
import { Gallery } from './src/payload/collections/Gallery.ts'
import { Technologies } from './src/payload/collections/Technologies.ts'
import { Experience } from './src/payload/collections/Experience.ts'
import { SiteSettings } from './src/payload/globals/SiteSettings.ts'
import { Homepage } from './src/payload/globals/Homepage.ts'
import { Navigation } from './src/payload/globals/Navigation.ts'
import { GallerySettings } from './src/payload/globals/GallerySettings.ts'
import { ProjectsSettings } from './src/payload/globals/ProjectsSettings.ts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  collections: [Users, Media, Projects, Gallery, Technologies, Experience],
  globals: [SiteSettings, Homepage, Navigation, GallerySettings, ProjectsSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-me-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  upload: {
    limits: {
      fileSize: 10000000,
    },
  },
  plugins: [],
  sharp,
})
