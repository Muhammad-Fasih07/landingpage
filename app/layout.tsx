import type { Metadata } from 'next'
import { Syne, Manrope, IBM_Plex_Mono } from 'next/font/google'
import { site } from '@/content/site'
import { Providers } from '@/app/providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import '@/app/globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} - ${site.title}`,
    template: `%s - ${site.name}`,
  },
  description: site.summary,
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} - ${site.title}`,
    description: site.summary,
    type: 'website',
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} - ${site.title}`,
    description: site.summary,
  },
  metadataBase: new URL(site.url),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${manrope.variable} ${plexMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans">
        <Providers>
          <Header />
          <main className="relative flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
