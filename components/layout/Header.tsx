'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { useHireMe } from '@/components/ui/HireMeModal'
import { SiteLogo } from '@/components/ui/SiteLogo'
import { cn } from '@/lib/cn'

const links = [
  { href: '/#experience', label: 'Experience' },
  { href: '/work', label: 'Work' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#contact', label: 'Contact' },
]

export function Header() {
  const { openHireMe } = useHireMe()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-40 border-b border-atelier-line/80 bg-atelier-bg/80 backdrop-blur-xl">
      <Container className="flex h-14 items-center justify-between gap-3 sm:h-16">
        <SiteLogo onNavigate={() => setMenuOpen(false)} />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-small text-atelier-mute transition-colors hover:text-atelier-cream after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-atelier-coral after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={openHireMe}
            className="inline-flex h-9 items-center rounded-soft border border-atelier-line px-3 text-small text-atelier-sand transition-colors hover:border-atelier-coral/40 hover:text-atelier-cream"
          >
            Hire me
          </button>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-soft border border-atelier-line text-atelier-sand md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          'border-t border-atelier-line bg-atelier-bg md:hidden',
          menuOpen ? 'block' : 'hidden'
        )}
      >
        <Container className="flex flex-col gap-1 py-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-soft px-3 py-3 text-small text-atelier-sand transition-colors hover:bg-atelier-raised hover:text-atelier-cream"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false)
              openHireMe()
            }}
            className="mt-1 rounded-soft bg-atelier-coral px-3 py-3 text-left text-small font-semibold text-atelier-bg"
          >
            Hire me - send inquiry
          </button>
        </Container>
      </div>
    </header>
  )
}
