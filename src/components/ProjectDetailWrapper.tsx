'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import ProjectDetail from './ProjectDetail'
import type { CMSProject } from '@/lib/cms/projects'

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export default function ProjectDetailWrapper({
  initialData,
}: {
  initialData: CMSProject
}) {
  const { data } = useLivePreview<CMSProject>({
    initialData,
    serverURL: SERVER_URL,
    depth: 1,
  })

  return <ProjectDetail project={data} />
}
