import type { Metadata } from 'next'
import { ProjectGallery } from '@/components/sections/ProjectGallery'
import { getAllProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Full project showcase - product platforms, internal tools, and client websites.',
}

export default function WorkPage() {
  const projects = getAllProjects()

  return (
    <div className="pt-6 sm:pt-10">
      <ProjectGallery
        projects={projects}
        index="Work archive"
        title="All projects"
        description="Product platforms, internal tools, and client websites - open any card for the full case study."
        bordered={false}
      />
    </div>
  )
}
