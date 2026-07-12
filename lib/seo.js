import { siteConfig } from '@/content/site'

export const defaultSEO = {
  title: `${siteConfig.name} - ${siteConfig.role}`,
  description: siteConfig.bio,
  keywords: [
    'Software Engineer',
    'Full-Stack Developer',
    'MERN Stack',
    'Next.js',
    'React',
    'React Native',
    'Node.js',
    'JavaScript',
    'Web Development',
    'Mobile Development',
    'Islamabad',
    'Pakistan',
  ].join(', '),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mfasih.vercel.app',
    siteName: siteConfig.name,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.role}`,
    description: siteConfig.bio,
    images: ['/og.png'],
  },
}
