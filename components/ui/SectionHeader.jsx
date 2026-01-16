'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

export function SectionHeader({
  title,
  subtitle,
  className,
  align = 'left',
}) {
  return (
    <div
      className={cn(
        'mb-6 sm:mb-8 md:mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent text-xs sm:text-sm md:text-base font-mono font-medium mb-2 sm:mb-3 md:mb-4 relative inline-block"
        >
          <span className="relative z-10">{subtitle}</span>
          <span className="absolute inset-0 blur-sm opacity-30 text-accent">{subtitle}</span>
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-lighter break-words font-mono leading-tight"
      >
        {title}
      </motion.h2>
    </div>
  )
}
