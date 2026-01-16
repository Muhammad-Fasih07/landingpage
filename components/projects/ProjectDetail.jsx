'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { MotionWrapper } from '@/components/motion/MotionWrapper'

export function ProjectDetail({ project }) {
  if (!project) {
    return null
  }

  return (
    <div className="pt-20 pb-20 min-h-screen bg-navy">
      <Container size="sm">
        <MotionWrapper>
          <Link
            href="/projects"
            className="inline-flex items-center text-slate hover:text-accent transition-colors mb-8 font-mono text-sm relative group"
          >
            ← Back to Projects
          </Link>
        </MotionWrapper>

        <MotionWrapper delay={0.1}>
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="accent">{project.category}</Badge>
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  variant="outline"
                  size="sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  variant="ghost"
                  size="sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-lighter mb-4 break-words">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-light">{project.longDescription}</p>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.2}>
          <div className="relative w-full h-48 sm:h-64 md:h-96 mb-8 sm:mb-12 rounded-xl overflow-hidden bg-navy-light border border-accent/20 tech-border">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary-cyan/5 to-navy-light flex items-center justify-center">
              <span className="text-slate/50 font-mono">Project Screenshot</span>
            </div>
          </div>
        </MotionWrapper>

        <div className="space-y-8 sm:space-y-12">
          <MotionWrapper delay={0.3}>
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-lighter mb-3 sm:mb-4 font-mono">Overview</h2>
              <p className="text-slate-light leading-relaxed text-sm sm:text-base">
                {project.longDescription}
              </p>
            </section>
          </MotionWrapper>

          <MotionWrapper delay={0.4}>
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-lighter mb-3 sm:mb-4 font-mono">Problem</h2>
              <p className="text-slate-light leading-relaxed text-sm sm:text-base">{project.problem}</p>
            </section>
          </MotionWrapper>

          <MotionWrapper delay={0.5}>
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-lighter mb-3 sm:mb-4 font-mono">Solution</h2>
              <p className="text-slate-light leading-relaxed text-sm sm:text-base">
                {project.solution}
              </p>
            </section>
          </MotionWrapper>

          <MotionWrapper delay={0.6}>
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-lighter mb-3 sm:mb-4 font-mono">
                Key Features
              </h2>
              <ul className="list-disc list-inside space-y-2 text-slate-light text-sm sm:text-base">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          </MotionWrapper>

          <MotionWrapper delay={0.7}>
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-lighter mb-3 sm:mb-4 font-mono">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="accent">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>
          </MotionWrapper>

          <MotionWrapper delay={0.8}>
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-lighter mb-3 sm:mb-4 font-mono">Results</h2>
              <p className="text-slate-light leading-relaxed text-sm sm:text-base">{project.results}</p>
            </section>
          </MotionWrapper>

          {project.screenshots && project.screenshots.length > 0 && (
            <MotionWrapper delay={0.9}>
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-lighter mb-3 sm:mb-4 font-mono">
                  Screenshots
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden bg-navy-light border border-accent/20 tech-border group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary-cyan/5 to-navy-light flex items-center justify-center group-hover:from-accent/15 group-hover:via-primary-cyan/10 transition-all duration-300">
                        <span className="text-slate/50 text-xs sm:text-sm font-mono">
                          Screenshot {index + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </MotionWrapper>
          )}
        </div>
      </Container>
    </div>
  )
}
