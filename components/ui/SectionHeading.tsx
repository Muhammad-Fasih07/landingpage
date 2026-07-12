import { cn } from '@/lib/cn'

export function SectionHeading({
  index,
  title,
  description,
  className,
}: {
  index?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn('mb-8 max-w-2xl sm:mb-14', className)}>
      {index && <p className="eyebrow mb-3 sm:mb-4">{index}</p>}
      <h2 className="font-display text-display text-atelier-cream text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-body text-atelier-sand text-balance sm:mt-4">{description}</p>
      )}
    </div>
  )
}
