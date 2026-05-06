export const dynamic = 'force-dynamic'

import { notFound } from 'next/navigation'
import ProjectDetailWrapper from '@/components/ProjectDetailWrapper'
import { getProjectBySlug } from '@/lib/cms/projects'

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailWrapper initialData={project} />
}
