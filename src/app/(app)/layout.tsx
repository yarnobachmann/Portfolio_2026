import type { Metadata } from 'next'
import '../globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { getSiteSettings } from '@/lib/cms/site-settings'
import { getNavigation } from '@/lib/cms/navigation'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  return {
    title: settings.siteTitle,
    description: settings.siteDescription,
    icons: {
      icon: '/assets/logo-wolf.png',
      apple: '/assets/logo-wolf.png',
    },
  }
}

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const [settings, navItems] = await Promise.all([
    getSiteSettings(),
    getNavigation(),
  ])

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Geist+Mono:wght@400;500&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav items={navItems} />
        {children}
        <Footer settings={settings} navItems={navItems} />
      </body>
    </html>
  )
}
