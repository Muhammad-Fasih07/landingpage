import Link from 'next/link'
import { cn } from '@/lib/cn'

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-navy disabled:opacity-50 disabled:cursor-not-allowed font-mono text-sm'

  const variants = {
    primary:
      'bg-transparent text-accent border-2 border-accent hover:bg-accent/10 hover:border-accent-hover focus:ring-accent relative overflow-hidden group transition-all duration-300 hover:tech-glow',
    secondary:
      'bg-navy-light text-slate-light hover:text-primary-cyan focus:ring-primary-cyan border border-slate/20 hover:border-primary-cyan/50 hover:tech-glow-blue transition-all duration-300',
    outline:
      'bg-transparent text-slate-light border-2 border-slate/30 hover:border-accent hover:text-accent focus:ring-accent transition-all duration-300 hover:tech-glow',
    ghost: 'bg-transparent text-slate hover:text-accent hover:bg-navy-light/50 focus:ring-accent transition-all duration-300',
  }

  const sizes = {
    sm: 'px-4 py-2.5 text-sm rounded-lg min-h-[44px]',
    md: 'px-6 py-3 text-base rounded-lg min-h-[44px]',
    lg: 'px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg rounded-xl min-h-[48px] sm:min-h-[56px]',
  }

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )

  if (href && !disabled) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}
