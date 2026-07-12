import { cn } from '@/lib/cn'

export function BentoCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
  span?: string
}) {
  return <div className={cn('surface-card p-6', className)}>{children}</div>
}

export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
  beam?: boolean
}) {
  return <div className={className}>{children}</div>
}

export function AuroraBackdrop() {
  return null
}

export function MagneticButton({
  children,
  className,
  href,
  target,
  rel,
}: {
  children: React.ReactNode
  className?: string
  href?: string
  target?: string
  rel?: string
}) {
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={className}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={className}>
      {children}
    </button>
  )
}

export function TextReveal({
  text,
  as: Tag = 'h1',
  className,
}: {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
}) {
  return <Tag className={className}>{text}</Tag>
}

export function ArchitectureViz() {
  return null
}
