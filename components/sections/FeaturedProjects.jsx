'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/content/projects'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Container } from '@/components/layout/Container'
import { MotionWrapper } from '@/components/motion/MotionWrapper'
import { ProjectVisual } from '@/components/ui/ProjectVisual'

const featuredProjects = projects.filter(
  (project) => project.id === 'ecelinkup' || project.id === 'gds-attendance'
)

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-navy-light/30">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-light/20 via-navy-light/40 to-navy-light/20"></div>
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            subtitle="Portfolio"
            title="Some Things I've Built"
            align="left"
          />
        </motion.div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {featuredProjects.map((project, index) => (
            <MotionWrapper key={project.id} delay={index * 0.15}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="p-0 overflow-hidden hover:border-accent/40 hover:tech-glow transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
                    <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 rounded-lg overflow-hidden border border-accent/20 tech-border group"
                      >
                        <ProjectVisual project={project} className="h-full" />
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary-cyan/5 to-secondary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </motion.div>
                    </div>
                    <div className={`lg:col-span-5 p-4 sm:p-6 lg:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="text-left">
                      <p className="text-accent text-xs sm:text-sm font-mono mb-2 sm:mb-3">Featured Project</p>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-lighter mb-3 sm:mb-4 break-words">
                        {project.title}
                      </h3>
                      <p className="text-slate-light text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.slice(0, 5).map((tech) => (
                          <Badge key={tech} variant="default" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        {project.liveUrl && (
                          <Button
                            href={project.liveUrl}
                            variant="primary"
                            size="sm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                          >
                            Live Site
                          </Button>
                        )}
                        <Button
                          href={`/projects/${project.slug}`}
                          variant="outline"
                          size="sm"
                          className="w-full sm:w-auto"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              </motion.div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  )
}
