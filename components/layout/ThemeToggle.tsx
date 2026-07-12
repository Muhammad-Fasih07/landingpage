'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

const THEME_TRANSITION_MS = 420

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => setMounted(true), [])

  const toggleTheme = useCallback(() => {
    const next = resolvedTheme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement

    if (reduce) {
      setTheme(next)
      return
    }

    root.classList.add('theme-animating')
    setTheme(next)
    window.setTimeout(() => {
      root.classList.remove('theme-animating')
    }, THEME_TRANSITION_MS)
  }, [reduce, resolvedTheme, setTheme])

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="h-9 w-9 rounded-soft border border-atelier-line"
      />
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
      className={cn(
        'group relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-soft border border-atelier-line text-atelier-mute',
        'transition-all duration-300 hover:border-atelier-coral/50 hover:text-atelier-coral hover:shadow-[0_0_0_3px_rgb(var(--coral)/0.12)]',
        'active:scale-95'
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 scale-0 rounded-soft bg-atelier-coral/10 transition-transform duration-300 ease-studio group-hover:scale-100"
      />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'sun' : 'moon'}
          initial={reduce ? false : { opacity: 0, rotate: isDark ? -40 : 40, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={reduce ? undefined : { opacity: 0, rotate: isDark ? 40 : -40, scale: 0.7 }}
          transition={{ duration: reduce ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-flex"
        >
          {isDark ? (
            <Sun className="h-4 w-4 transition-transform duration-500 ease-studio group-hover:rotate-[40deg] group-hover:scale-110" />
          ) : (
            <Moon className="h-4 w-4 transition-transform duration-500 ease-studio group-hover:-rotate-12 group-hover:scale-110" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
