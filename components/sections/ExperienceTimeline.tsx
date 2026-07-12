'use client'

import { experience } from '@/content/experience'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TimelineItem } from '@/components/ui/TimelineItem'
import { FadeIn } from '@/components/ui/FadeIn'

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-24 py-section-sm sm:py-section">
      <Container>
        <FadeIn>
          <SectionHeading
            index="01 - Experience"
            title="Career chapters"
            description="Roles across full-stack delivery, frontend systems, project leadership, and quality."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {experience.map((item, index) => (
            <TimelineItem
              key={`${item.company}-${item.period}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
