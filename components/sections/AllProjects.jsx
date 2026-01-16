'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, projectCategories } from '@/content/projects'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Container } from '@/components/layout/Container'
import { MotionWrapper } from '@/components/motion/MotionWrapper'
import { Stagger } from '@/components/motion/Stagger'
import { ProjectVisual } from '@/components/ui/ProjectVisual'

export function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="all-projects" className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-navy">
        <div className="absolute inset-0 grid-pattern opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/20 to-navy"></div>
        <motion.div
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-blue/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
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
            subtitle="All Projects"
            title="Complete Portfolio"
            align="left"
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-8 sm:mb-12 justify-center sm:justify-start"
        >
          {projectCategories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded font-mono text-sm transition-all duration-200 min-h-[44px] ${
                selectedCategory === category
                  ? 'bg-accent/12 text-accent border border-accent/30 tech-glow'
                  : 'glass text-slate hover:text-accent hover:border-accent/30 hover:tech-glow'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <MotionWrapper key={project.id}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full flex flex-col group">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-40 sm:h-48 mb-3 sm:mb-4 rounded-lg overflow-hidden border border-accent/20 group-hover:border-accent/40 transition-all tech-border"
                    >
                      <ProjectVisual project={project} className="h-full" />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary-cyan/5 to-secondary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </motion.div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-lighter group-hover:text-accent transition-colors flex-1 break-words">
                        {project.title}
                      </h3>
                      <Badge variant="accent" className="text-xs flex-shrink-0">{project.category}</Badge>
                    </div>
                    <p className="text-slate text-sm sm:text-base mb-3 sm:mb-4 flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.stack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="default" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      {project.liveUrl && (
                        <Button
                          href={project.liveUrl}
                          variant="outline"
                          size="sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          View Live
                        </Button>
                      )}
                      <Button
                        href={`/projects/${project.slug}`}
                        variant="primary"
                        size="sm"
                        className="w-full"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
                </motion.div>
              </MotionWrapper>
            ))}
          </Stagger>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12 sm:py-16"
          >
            <p className="text-slate text-sm sm:text-base">No projects found in this category.</p>
          </motion.div>
        )}
      </Container>
    </section>
  )
}
