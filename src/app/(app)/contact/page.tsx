import ContactPage from '@/components/ContactPage'
import { getSiteSettings } from '@/lib/cms/site-settings'

export default async function Contact() {
  const settings = await getSiteSettings()
  return <ContactPage settings={settings} />
}
