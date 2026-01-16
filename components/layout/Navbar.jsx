'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MobileMenu } from './MobileMenu'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-slate/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="group relative flex items-baseline gap-1.5 hover:gap-2 transition-all duration-300"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-accent group-hover:text-accent-hover transition-all duration-300 tracking-tight group-hover:tracking-wide relative">
              Fasih
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate/70 group-hover:text-accent/60 transition-all duration-300 inline-block">.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate hover:text-accent transition-colors font-mono text-sm relative group flex items-center h-10"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Button href="#contact" variant="primary" size="sm" className="ml-2 h-10 flex items-center">
              Get In Touch
            </Button>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </motion.nav>
  )
}
