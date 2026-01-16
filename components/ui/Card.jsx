import { cn } from '@/lib/cn'

export function Card({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        'glass rounded-lg p-6 transition-all duration-300 relative group',
        hover &&
          'hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 hover:tech-glow',
        className
      )}
      {...props}
    >
      {children}
      {hover && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/5 via-primary-cyan/5 to-secondary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  )
}
