import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center py-section">
      <Container className="max-w-content">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-display text-atelier-cream">
          Page not found
        </h1>
        <Link
          href="/"
          className="mt-8 inline-block text-small text-atelier-coral hover:underline"
        >
          ← Back home
        </Link>
      </Container>
    </div>
  )
}
