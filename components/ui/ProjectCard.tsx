'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { ProjectMeta } from '@/lib/projects'
import { getProjectTheme } from '@/lib/projectThemes'
import { cn } from '@/lib/cn'

type ProjectCardProps = {
  project: ProjectMeta
  className?: string
  featured?: boolean
}

const ease = [0.16, 1, 0.3, 1] as const

export function ProjectCard({
  project,
  className,
  featured = false,
}: ProjectCardProps) {
  const theme = getProjectTheme(project.slug)
  const reduce = useReducedMotion()

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, ease }}
      whileHover={reduce ? undefined : { y: -6 }}
      className={cn('group h-full', className)}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="surface-card flex h-full flex-col shadow-soft transition-shadow duration-500 group-hover:shadow-studio"
      >
        <div
          className={cn(
            'relative overflow-hidden border-b border-atelier-line bg-atelier-elevated',
            featured ? 'h-48 sm:h-56 md:h-72' : 'h-40 sm:h-44 md:h-52'
          )}
          style={
            project.image
              ? undefined
              : {
                  background: `linear-gradient(145deg, ${theme.from} 0%, ${theme.to} 72%)`,
                }
          }
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top transition-transform duration-700 ease-studio group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
          )}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute left-5 top-5 z-[1]">
            <span className="rounded-soft bg-black/55 px-3 py-1 font-mono text-micro uppercase tracking-wider text-white backdrop-blur-sm">
              {theme.label}
            </span>
          </div>
          <p className="absolute bottom-5 left-5 z-[1] font-display text-4xl font-bold text-white/40 sm:text-5xl">
            {String(project.order).padStart(2, '0')}
          </p>
          <span className="absolute bottom-5 right-5 z-[1] inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="relative z-[1] flex flex-1 flex-col p-5 sm:p-7">
          <h3 className="font-display text-lg font-semibold tracking-tight text-atelier-cream sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-small text-atelier-sand text-balance sm:mt-3">
            {project.summary}
          </p>
          {project.architecture && (
            <p className="mt-4 border-t border-atelier-line pt-4 font-mono text-small text-atelier-mute">
              {project.architecture}
            </p>
          )}
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((tech, i) => (
              <motion.li
                key={tech}
                initial={reduce ? false : { opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 + i * 0.05, ease }}
                className="rounded-soft border border-atelier-line bg-atelier-elevated/60 px-2.5 py-1 font-mono text-[11px] text-atelier-sand"
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.article>
  )
}

export const ProjectShowcase = ProjectCard
