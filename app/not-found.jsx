import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-navy">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-accent mb-4 font-mono">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-lighter mb-4">
            Page Not Found
          </h2>
          <p className="text-slate mb-6 sm:mb-8 text-sm sm:text-base">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button href="/" variant="primary" size="lg">
            Go Back Home
          </Button>
        </div>
      </Container>
    </div>
  )
}
