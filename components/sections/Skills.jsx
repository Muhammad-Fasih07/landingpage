'use client'

import { motion } from 'framer-motion'
import { skills } from '@/content/skills'
import { Badge } from '@/components/ui/Badge'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Container } from '@/components/layout/Container'
import { MotionWrapper } from '@/components/motion/MotionWrapper'
import { Stagger } from '@/components/motion/Stagger'

export function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-navy">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/30 to-navy"></div>
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/8 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary-blue/6 rounded-full blur-3xl"
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
            subtitle="Skills"
            title="Technologies I Work With"
            align="left"
          />
        </motion.div>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {skills.map((category, index) => (
            <MotionWrapper key={category.category} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-lg p-4 sm:p-6 hover:border-accent/40 hover:tech-glow transition-all duration-300 h-full group"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-lighter mb-3 sm:mb-4 font-mono group-hover:text-accent transition-colors">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 + skillIndex * 0.02 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Badge variant="accent" className="cursor-default">
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </MotionWrapper>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
