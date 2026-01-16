import { cn } from '@/lib/cn'

export function Textarea({
  label,
  error,
  className,
  id,
  ...props
}) {
  const inputId = id || `textarea-${label?.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-mono font-medium text-slate-light mb-2"
        >
          {label}
          {props.required && <span className="text-terminal-red ml-1">*</span>}
        </label>
      )}
      <textarea
        id={inputId}
        rows={4}
        className={cn(
          'w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-navy-light/50 border border-slate/20 rounded text-slate-light placeholder-slate/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 resize-none font-mono text-sm sm:text-base hover:border-accent/30',
          error && 'border-secondary-red focus:ring-secondary-red',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-terminal-red">{error}</p>
      )}
    </div>
  )
}
