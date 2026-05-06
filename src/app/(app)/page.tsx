import HomePageWrapper from '@/components/HomePageWrapper'
import { getHomepage } from '@/lib/cms/homepage'
import { getFeaturedProjects } from '@/lib/cms/projects'
import { getFeaturedPhotos } from '@/lib/cms/gallery'

export default async function Home() {
  const [homepage, featuredProjects, featuredPhotos] = await Promise.all([
    getHomepage(),
    getFeaturedProjects(),
    getFeaturedPhotos(),
  ])
  return <HomePageWrapper initialData={homepage} featuredProjects={featuredProjects} featuredPhotos={featuredPhotos} />
}
