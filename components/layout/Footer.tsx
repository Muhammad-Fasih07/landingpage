'use client'

import Link from 'next/link'
import { site } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { GitHubPicker } from '@/components/ui/GitHubPicker'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-atelier-line py-10">
      <Container className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <p className="text-small text-atelier-mute">
          © {year} {site.name}
        </p>
        <div className="flex flex-wrap gap-6 text-small">
          <a href={`mailto:${site.email}`} className="text-atelier-mute hover:text-atelier-coral">
            Email
          </a>
          <GitHubPicker variant="link" />
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-atelier-mute hover:text-atelier-coral"
          >
            LinkedIn
          </a>
          <Link href="/work" className="text-atelier-mute hover:text-atelier-coral">
            Work
          </Link>
        </div>
      </Container>
    </footer>
  )
}
