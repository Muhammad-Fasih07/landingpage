import { Hero } from '@/components/sections/Hero'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { AllProjects } from '@/components/sections/AllProjects'
import { Skills } from '@/components/sections/Skills'
import { ExperiencePreview } from '@/components/sections/ExperiencePreview'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperiencePreview />
      <Skills />
      <FeaturedProjects />
      <AllProjects />
      <CTA />
    </>
  )
}
