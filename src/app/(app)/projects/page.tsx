export const dynamic = 'force-dynamic'

import ProjectsPage from '@/components/ProjectsPage'
import { getProjects } from '@/lib/cms/projects'
import { getProjectsSettings } from '@/lib/cms/projects-settings'

export default async function Projects() {
  const [projects, settings] = await Promise.all([getProjects(), getProjectsSettings()])
  return <ProjectsPage projects={projects} settings={settings} />
}
