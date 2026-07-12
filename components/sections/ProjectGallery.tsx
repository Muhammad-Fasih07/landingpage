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
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              index={index}
              title={title}
              description={description}
              className="mb-0"
            />
            {showViewAll && (
              <Link
                href="/work"
                className="inline-flex shrink-0 items-center gap-2 text-small font-medium text-atelier-coral transition-colors hover:text-atelier-cream"
              >
                View all work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </FadeIn>

        {featured && (
          <div className="mb-4 mt-10 sm:mb-5 sm:mt-12">
            <ProjectCard project={featured} featured className="w-full" />
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
