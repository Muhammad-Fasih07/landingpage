'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { ProjectMeta } from '@/lib/projects'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { FadeIn } from '@/components/ui/FadeIn'

type Props = {
  projects: ProjectMeta[]
  index?: string
  title?: string
  description?: string
  showViewAll?: boolean
  bordered?: boolean
}

export function ProjectGallery({
  projects,
  index = '02 - Selected work',
  title = 'Project showcase',
  description = 'Product platforms and client websites - live demos, architecture notes, and case study writeups.',
  showViewAll = false,
  bordered = true,
}: Props) {
  const [featured, ...rest] = projects

  return (
    <section
      id="projects"
      className={
        bordered
          ? 'scroll-mt-24 border-y border-atelier-line bg-atelier-raised/40 py-section-sm sm:py-section'
          : 'scroll-mt-24 py-section-sm sm:py-section'
      }
    >
      <Container>
        <FadeIn>
          <SectionHeading
            index={index}
            title={title}
            description={description}
          />
        </FadeIn>

        {featured && (
          <div className="mb-4 sm:mb-5">
            <ProjectCard project={featured} featured className="w-full" />
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {showViewAll && (
          <FadeIn delay={0.08}>
            <div className="mt-10 flex justify-center sm:mt-12">
              <Link
                href="/work"
                className="group inline-flex h-12 items-center gap-2 rounded-soft border border-atelier-line bg-atelier-raised px-7 text-small font-medium text-atelier-cream transition-all hover:border-atelier-coral/45 hover:bg-atelier-elevated"
              >
                View more projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </FadeIn>
        )}
      </Container>
    </section>
  )
}
