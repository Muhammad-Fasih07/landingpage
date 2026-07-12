'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { GitHubPicker } from '@/components/ui/GitHubPicker'
import { useHireMe } from '@/components/ui/HireMeModal'

const ease = [0.16, 1, 0.3, 1] as const

export function ContactBand() {
  const { openHireMe } = useHireMe()
  const reduce = useReducedMotion()

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-atelier-line py-section-sm sm:py-section"
    >
      <Container>
        <FadeIn>
          <div className="surface-card relative overflow-hidden p-6 sm:p-12 lg:p-14">
            <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-atelier-coral/20 blur-3xl motion-safe:animate-floaty" />
            <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-atelier-sage/15 blur-3xl" />

            <div className="relative z-[1] grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
              <div>
                <p className="eyebrow">04 - Contact</p>
                <h2 className="mt-4 max-w-lg font-display text-display text-atelier-cream text-balance">
                  Ready when you are
                </h2>
                <p className="mt-4 max-w-md text-body text-atelier-sand">
                  Open to full-time roles and select freelance work. Send a note
                  and I’ll reply within a day.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    onClick={openHireMe}
                    className="inline-flex h-12 items-center justify-center rounded-soft bg-atelier-coral px-7 text-small font-semibold text-atelier-bg transition-transform hover:scale-[1.02] motion-safe:animate-eng-cta"
                  >
                    Hire me
                  </button>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex h-12 items-center justify-center break-all rounded-soft border border-atelier-line px-5 text-small text-atelier-sand transition-colors hover:border-atelier-coral/40 hover:text-atelier-cream"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    key: 'phone',
                    node: (
                      <div className="rounded-soft border border-atelier-line bg-atelier-bg/45 p-4 backdrop-blur-sm">
                        <p className="font-mono text-micro text-atelier-mute">Phone</p>
                        <a
                          href={`tel:${site.phone}`}
                          className="mt-2 block break-all text-small text-atelier-cream transition-colors hover:text-atelier-coral"
                        >
                          {site.phoneDisplay}
                        </a>
                      </div>
                    ),
                  },
                  {
                    key: 'github',
                    node: <GitHubPicker variant="card" cardValue="Both profiles" />,
                  },
                  {
                    key: 'linkedin',
                    node: (
                      <div className="rounded-soft border border-atelier-line bg-atelier-bg/45 p-4 backdrop-blur-sm">
                        <p className="font-mono text-micro text-atelier-mute">LinkedIn</p>
                        <a
                          href={site.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 block text-small text-atelier-cream transition-colors hover:text-atelier-coral"
                        >
                          mohammad-fasih
                        </a>
                      </div>
                    ),
                  },
                  {
                    key: 'location',
                    node: (
                      <div className="rounded-soft border border-atelier-line bg-atelier-bg/45 p-4 backdrop-blur-sm">
                        <p className="font-mono text-micro text-atelier-mute">Location</p>
                        <p className="mt-2 text-small text-atelier-cream">{site.location}</p>
                      </div>
                    ),
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.key}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.06 * i, ease }}
                  >
                    {item.node}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
