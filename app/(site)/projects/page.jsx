'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects, projectCategories } from '@/content/projects'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Container } from '@/components/layout/Container'
import { MotionWrapper } from '@/components/motion/MotionWrapper'
import { Stagger } from '@/components/motion/Stagger'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <div className="pt-20 pb-20 min-h-screen bg-navy">
      <Container>
        <SectionHeader
          subtitle="Portfolio"
          title="Some Things I've Built"
          align="left"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded font-mono text-sm transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-accent/10 text-accent border border-accent/30'
                  : 'glass text-slate hover:text-accent hover:border-accent/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <MotionWrapper key={project.id}>
                <Card className="h-full flex flex-col group">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-navy-light border border-accent/10 group-hover:border-accent/30 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-navy-light flex items-center justify-center">
                    <span className="text-slate/50 text-sm font-mono">Project Image</span>
                  </div>
                </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-lighter group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="accent">{project.category}</Badge>
                  </div>
                  <p className="text-slate text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="default" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button
                          href={project.liveUrl}
                          variant="outline"
                          size="sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          Live
                        </Button>
                      )}
                      <Button
                        href={`/projects/${project.slug}`}
                        variant="primary"
                        size="sm"
                        className="flex-1"
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </MotionWrapper>
            ))}
          </Stagger>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </Container>
    </div>
  )
}
