'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Code2, Database, LayoutTemplate, Server, Wrench } from 'lucide-react'
import { skills } from '@/content/skills'
import { site } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeIn } from '@/components/ui/FadeIn'

const icons = {
  Frontend: LayoutTemplate,
  Backend: Server,
  'Databases & Tools': Wrench,
  Databases: Database,
} as const

const ease = [0.16, 1, 0.3, 1] as const

export function SkillsBento() {
  const reduce = useReducedMotion()

  return (
    <section id="skills" className="scroll-mt-24 py-section-sm sm:py-section">
      <Container>
        <FadeIn>
          <SectionHeading
            index="03 - Skills"
            title="Tech stack"
            description="Frontend, backend, and data tools I use to ship production software."
          />
        </FadeIn>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-6">
          <FadeIn className="md:col-span-4">
            <div className="surface-card h-full p-7 sm:p-8">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-soft border border-atelier-line bg-atelier-elevated text-atelier-coral">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-atelier-cream">
                About {site.shortName}
              </h3>
              <p className="mt-4 max-w-2xl text-body text-atelier-sand text-balance">
                {site.summary}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-soft border border-atelier-line bg-atelier-bg/40 p-4">
                  <p className="font-mono text-micro text-atelier-mute">Education</p>
                  <p className="mt-2 text-small text-atelier-cream">
                    {site.education.degree}
                  </p>
                  <p className="text-small text-atelier-mute">
                    {site.education.school}
                  </p>
                </div>
                <div className="rounded-soft border border-atelier-line bg-atelier-bg/40 p-4">
                  <p className="font-mono text-micro text-atelier-mute">Location</p>
                  <p className="mt-2 text-small text-atelier-cream">{site.location}</p>
                  <p className="text-small text-atelier-mute">{site.experience}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.06} className="md:col-span-2">
            <div className="surface-card relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden p-7">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-atelier-sage/20 blur-2xl motion-safe:animate-floaty" />
              <p className="eyebrow relative">Focus</p>
              <p className="relative font-display text-3xl font-bold leading-tight text-atelier-cream">
                Full-stack
                <br />
                products
                <br />
                <span className="text-atelier-coral">that scale.</span>
              </p>
            </div>
          </FadeIn>

          {skills.map((group, i) => {
            const Icon = icons[group.category as keyof typeof icons] ?? Code2
            const spans = ['md:col-span-2', 'md:col-span-2', 'md:col-span-2']
            return (
              <FadeIn key={group.category} delay={0.04 * (i + 1)} className={spans[i]}>
                <div className="surface-card h-full p-6 transition-transform duration-500 hover:-translate-y-1 hover:shadow-studio sm:p-7">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-soft border border-atelier-line bg-atelier-elevated text-atelier-coral">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-title text-atelier-cream">
                    {group.category}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item, j) => (
                      <motion.li
                        key={item}
                        initial={reduce ? false : { opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: 0.05 + j * 0.035,
                          ease,
                        }}
                        className="rounded-soft border border-atelier-line bg-atelier-bg/50 px-2.5 py-1 text-small text-atelier-sand transition-colors hover:border-atelier-coral/40 hover:text-atelier-cream"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
