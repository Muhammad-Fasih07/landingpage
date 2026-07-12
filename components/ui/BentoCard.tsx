import { cn } from '@/lib/cn'

type BentoCardProps = {
  children: React.ReactNode
  className?: string
  span?: string
}

/** Prefer SpotlightCard for interactive tiles - thin wrapper kept for API stability */
export function BentoCard({ children, className, span }: BentoCardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-card border border-white/10 bg-white/[0.04] p-6 shadow-glass backdrop-blur-md sm:p-7',
        span,
        className
      )}
    >
      {children}
    </div>
  )
}
