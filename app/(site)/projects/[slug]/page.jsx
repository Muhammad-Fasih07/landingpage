import { notFound } from 'next/navigation'
import { projects } from '@/content/projects'
import { ProjectDetail } from '@/components/projects/ProjectDetail'
import { defaultSEO } from '@/lib/seo'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export const dynamicParams = false

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return defaultSEO
  }

  return {
    title: `${project.title} - ${defaultSEO.title}`,
    description: project.description,
    openGraph: {
      ...defaultSEO.openGraph,
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : defaultSEO.openGraph.images,
    },
    twitter: {
      ...defaultSEO.twitter,
      title: project.title,
      description: project.description,
    },
  }
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
