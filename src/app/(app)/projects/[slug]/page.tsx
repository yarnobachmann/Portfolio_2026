import { notFound } from 'next/navigation'
import ProjectDetailWrapper from '@/components/ProjectDetailWrapper'
import { getProjectBySlug, getProjectSlugs } from '@/lib/cms/projects'

export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

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
