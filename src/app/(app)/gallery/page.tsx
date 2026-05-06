import GalleryPage from '@/components/GalleryPage'
import { getGallery } from '@/lib/cms/gallery'
import { getGallerySettings } from '@/lib/cms/gallery-settings'

export default async function Gallery() {
  const [photos, settings] = await Promise.all([getGallery(), getGallerySettings()])
  return <GalleryPage photos={photos} heroImage={settings.heroImage} />
}
