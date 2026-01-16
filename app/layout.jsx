import { Inter, Fira_Code } from 'next/font/google'
import { defaultSEO } from '@/lib/seo'
import '@/app/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  authors: [{ name: 'Fasih Shaukat' }],
  openGraph: {
    ...defaultSEO.openGraph,
    title: defaultSEO.title,
    description: defaultSEO.description,
  },
  twitter: defaultSEO.twitter,
  metadataBase: new URL('https://fasihshaukat.dev'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  )
}
