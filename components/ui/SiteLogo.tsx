'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site'
import { cn } from '@/lib/cn'

const ease = [0.16, 1, 0.3, 1] as const

type Props = {
  href?: string
  className?: string
  onNavigate?: () => void
}

export function SiteLogo({ href = '/', className, onNavigate }: Props) {
  const reduce = useReducedMotion()
  const letters = site.shortName.split('')

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-label={`${site.shortName} home`}
      className={cn(
        'group inline-flex items-baseline font-display text-lg font-bold tracking-tight text-atelier-cream',
        className
      )}
    >
      <span className="inline-flex overflow-hidden">
        {letters.map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            initial={reduce ? false : { opacity: 0, y: '0.35em' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 0.45,
              delay: reduce ? 0 : 0.04 + i * 0.045,
              ease,
            }}
            className="inline-block transition-colors duration-300 group-hover:text-atelier-coral"
          >
            {letter}
          </motion.span>
        ))}
      </span>
      <motion.span
        aria-hidden
        initial={reduce ? false : { opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: reduce ? 0 : 0.4,
          delay: reduce ? 0 : 0.04 + letters.length * 0.045,
          ease,
        }}
        className="text-atelier-coral motion-safe:animate-eng-caret"
      >
        .
      </motion.span>
    </Link>
  )
}
