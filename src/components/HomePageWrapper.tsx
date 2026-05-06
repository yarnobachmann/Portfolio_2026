'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import HomePage from './HomePage'
import type { CMSHomepage } from '@/lib/cms/homepage'
import type { CMSProject } from '@/lib/cms/projects'
import type { CMSPhoto } from '@/lib/cms/gallery'

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export default function HomePageWrapper({
  initialData,
  featuredProjects,
  featuredPhotos,
}: {
  initialData: CMSHomepage
  featuredProjects: CMSProject[]
  featuredPhotos: CMSPhoto[]
}) {
  const { data } = useLivePreview<CMSHomepage>({
    initialData,
    serverURL: SERVER_URL,
    depth: 1,
  })

  return <HomePage homepage={data} featuredProjects={featuredProjects} featuredPhotos={featuredPhotos} />
}
