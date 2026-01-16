import { cn } from '@/lib/cn'

export function Container({ children, className, size = 'default' }) {
  const sizes = {
    default: 'max-w-7xl',
    sm: 'max-w-4xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
  }

  return (
    <div className={cn('mx-auto px-4 sm:px-5 md:px-6 lg:px-8', sizes[size], className)}>
      {children}
    </div>
  )
}
