'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

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
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
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
      {isDark ? (
        <Sun className="relative h-4 w-4 transition-transform duration-500 ease-studio group-hover:rotate-[40deg] group-hover:scale-110" />
      ) : (
        <Moon className="relative h-4 w-4 transition-transform duration-500 ease-studio group-hover:-rotate-12 group-hover:scale-110" />
      )}
    </button>
  )
}
