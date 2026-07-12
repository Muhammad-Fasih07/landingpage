import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import { getProjectBySlug, getProjectSlugs } from '@/lib/projects'
import { getProjectTheme } from '@/lib/projectThemes'
import { mdxComponents } from '@/components/mdx/MDXComponents'
import { Container } from '@/components/ui/Container'
import { ProjectScreenshotGallery } from '@/components/ui/ProjectScreenshotGallery'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'Project' }
  return { title: project.title, description: project.summary }
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()
  const theme = getProjectTheme(project.slug)
  const gallery =
    project.screenshots.length > 0
      ? project.screenshots
      : project.image
        ? [project.image]
        : []

  return (
    <article className="pb-section-sm pt-10 sm:pb-section sm:pt-14">
      <Container>
        <Link
          href="/work"
          className="text-small text-atelier-mute transition-colors hover:text-atelier-coral"
        >
          ← Work
        </Link>

        {project.image || gallery.length > 0 ? (
          <ProjectScreenshotGallery
            images={gallery}
            title={project.title}
            coverSrc={project.image}
          />
        ) : (
          <div
            className="relative mt-8 overflow-hidden rounded-studio border border-atelier-line"
            style={{
              background: `linear-gradient(145deg, ${theme.from} 0%, ${theme.to} 75%)`,
            }}
          >
            <div className="relative z-[1] px-6 py-14 sm:px-10 sm:py-20">
              <p className="font-mono text-micro uppercase tracking-wider text-white/70">
                {theme.label}
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-display text-white text-balance">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-body text-white/80 text-balance">
                {project.summary}
              </p>
            </div>
          </div>
        )}

        <div className="mx-auto mt-12 max-w-content">
          <p className="font-mono text-micro uppercase text-atelier-coral">
            {theme.label}
          </p>
          <h1 className="mt-3 font-display text-display text-atelier-cream text-balance">
            {project.title}
          </h1>
          <p className="mt-4 text-body text-atelier-sand text-balance">
            {project.summary}
          </p>
          <p className="mt-6 font-mono text-small text-atelier-mute">
            {project.stack.join(' · ')}
          </p>
          <div className="mt-4 flex flex-wrap gap-6 text-small">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-atelier-coral hover:underline"
              >
                Live site ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-atelier-coral hover:underline"
              >
                GitHub ↗
              </a>
            )}
          </div>

          <div className="mt-10 border-t border-atelier-line pt-10">
            <MDXRemote source={project.content} components={mdxComponents} />
          </div>
        </div>
      </Container>
    </article>
  )
}
