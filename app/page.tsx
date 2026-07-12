import { CinematicHero } from '@/components/sections/CinematicHero'
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline'
import { ProjectGallery } from '@/components/sections/ProjectGallery'
import { SkillsBento } from '@/components/sections/SkillsBento'
import { ContactBand } from '@/components/sections/ContactBand'
import { getFeaturedProjects } from '@/lib/projects'

export default function HomePage() {
  const projects = getFeaturedProjects()

  return (
    <>
      <CinematicHero />
      <ExperienceTimeline />
      <ProjectGallery
        projects={projects}
        index="02 - Selected work"
        title="Featured projects"
        description="Core product work - platforms and tools I built end to end."
        showViewAll
      />
      <SkillsBento />
      <ContactBand />
    </>
  )
}
