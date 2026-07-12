'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ExperienceItem as ExperienceItemType } from '@/content/experience'
import { cn } from '@/lib/cn'
import { FadeIn } from '@/components/ui/FadeIn'

const ease = [0.16, 1, 0.3, 1] as const

export function TimelineItem({
  item,
  index,
  className,
}: {
  item: ExperienceItemType
  index: number
  className?: string
}) {
  const reduce = useReducedMotion()

  return (
    <FadeIn delay={index * 0.06} className={cn('h-full', className)}>
      <article className="surface-card group h-full p-6 transition-transform duration-500 hover:-translate-y-1 hover:shadow-studio sm:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <motion.span
            initial={reduce ? false : { opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 + index * 0.04, ease }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-soft border border-atelier-line bg-atelier-elevated font-mono text-small text-atelier-coral"
          >
            {String(index + 1).padStart(2, '0')}
          </motion.span>
          <p className="text-right font-mono text-small text-atelier-mute">
            {item.period}
            {item.location && (
              <>
                <br />
                <span className="text-atelier-mute/80">{item.location}</span>
              </>
            )}
          </p>
        </div>
        <h3 className="font-display text-title text-atelier-cream">{item.role}</h3>
        <p className="mt-1 text-small text-atelier-coral">{item.company}</p>
        <div className="relative mt-5 border-t border-atelier-line pt-5">
          <motion.span
            aria-hidden
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 + index * 0.04, ease }}
            className="absolute left-0 top-0 h-px w-16 origin-left bg-atelier-coral/70"
          />
          <ul className="space-y-2.5">
            {item.highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={reduce ? false : { opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.18 + index * 0.03 + i * 0.05,
                  ease,
                }}
                className="relative pl-4 text-small text-atelier-sand before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-atelier-coral/80"
              >
                {h}
              </motion.li>
            ))}
          </ul>
        </div>
      </article>
    </FadeIn>
  )
}

export function GlowingTimelineTrack({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
