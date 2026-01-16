import { cn } from '@/lib/cn'

export function Badge({ children, variant = 'default', className, ...props }) {
  const variants = {
    default: 'bg-navy-light text-slate-light border border-slate/20',
    accent: 'bg-accent/12 text-accent border border-accent/30 hover:bg-accent/18 hover:border-accent/50 transition-all',
    primary: 'bg-primary-cyan/12 text-primary-cyan border border-primary-cyan/30 hover:bg-primary-cyan/18 hover:border-primary-cyan/50 transition-all',
    success: 'bg-secondary-green/12 text-secondary-green border border-secondary-green/30 hover:bg-secondary-green/18 hover:border-secondary-green/50 transition-all',
    warning: 'bg-accent/12 text-accent border border-accent/30 hover:bg-accent/18 hover:border-accent/50 transition-all',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded text-xs font-mono font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
