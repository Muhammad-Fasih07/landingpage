'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { site } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { GitHubPicker } from '@/components/ui/GitHubPicker'
import { EngineeringPanel } from '@/components/ui/EngineeringPanel'
import { useHireMe } from '@/components/ui/HireMeModal'

export function CinematicHero() {
  const reduce = useReducedMotion()
  const { openHireMe } = useHireMe()

  return (
    <section className="relative overflow-hidden border-b border-atelier-line pb-12 pt-10 sm:pb-24 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 eng-hero-atmosphere opacity-35 motion-reduce:hidden max-sm:opacity-20"
      />

      <Container className="relative z-[1]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1"
            >
              <span className="inline-flex items-center gap-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-atelier-sage motion-safe:animate-eng-dot" />
                Available for hire
              </span>
              <span className="text-atelier-mute">·</span>
              <span>
                {site.location} · {site.experience}
              </span>
            </motion.p>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-hero text-atelier-cream"
            >
              Mohammad
              <br />
              Fasih
              <span className="text-atelier-coral">.</span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-md font-display text-xl font-semibold text-atelier-sand sm:text-2xl"
            >
              {site.title}
            </motion.p>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-5 max-w-md text-body text-atelier-mute text-balance"
            >
              {site.summary}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <Link
                href="/work"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-soft bg-atelier-coral px-7 text-small font-semibold text-atelier-bg transition-transform hover:scale-[1.02] sm:w-auto"
              >
                View projects
                <ArrowDownRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={openHireMe}
                className="inline-flex h-12 w-full items-center justify-center rounded-soft border border-atelier-coral/35 bg-atelier-coral/10 px-5 text-small font-medium text-atelier-coral transition-colors hover:border-atelier-coral/60 hover:bg-atelier-coral/15 sm:w-auto"
              >
                Hire me
              </button>
              <div className="grid grid-cols-2 gap-3 sm:flex sm:w-auto">
                <GitHubPicker className="w-full justify-center sm:w-auto" />
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center rounded-soft border border-atelier-line bg-atelier-raised px-5 text-small text-atelier-sand transition-colors hover:border-atelier-coral/50 hover:text-atelier-cream sm:w-auto"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-w-0"
          >
            <EngineeringPanel className="eng-panel-ring relative" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
