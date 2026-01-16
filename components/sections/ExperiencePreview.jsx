'use client'

import { motion } from 'framer-motion'
import { experience } from '@/content/experience'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Container } from '@/components/layout/Container'
import { MotionWrapper } from '@/components/motion/MotionWrapper'
import { Stagger } from '@/components/motion/Stagger'

export function ExperiencePreview() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-navy-light/30">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-light/20 via-navy-light/40 to-navy-light/20"></div>
        <motion.div
          className="absolute top-1/2 left-1/4 w-80 h-80 bg-secondary-green/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/6 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
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
            subtitle="Background"
            title="Professional Experience"
            align="center"
          />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary-cyan to-secondary-green hidden md:block"></div>

            <Stagger className="space-y-6 sm:space-y-8 md:space-y-10">
              {experience.map((exp, index) => (
                <MotionWrapper key={index} delay={index * 0.1}>
                  <div className="relative flex gap-6 md:gap-8">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-1">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-8 h-8 rounded-full bg-navy border-4 border-accent flex items-center justify-center relative z-10 tech-glow"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 rounded-full bg-accent"
                        ></motion.div>
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex-1 min-w-0"
                    >
                      <Card className="p-4 sm:p-6 md:p-8 hover:border-accent/50 hover:tech-glow transition-all duration-300 group">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-lighter mb-2 font-mono break-words">
                              {exp.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                              <p className="text-accent font-semibold text-sm sm:text-base md:text-lg font-mono break-words">
                                {exp.company}
                              </p>
                              <span className="text-slate/50 hidden sm:inline">•</span>
                              <p className="text-slate-light text-xs sm:text-sm md:text-base font-mono break-words">
                                {exp.location}
                              </p>
                            </div>
                          </div>
                          <Badge variant="accent" className="text-xs sm:text-sm font-mono whitespace-nowrap self-start sm:self-center w-fit flex-shrink-0">
                            {exp.period}
                          </Badge>
                        </div>

                        {/* Description */}
                        <p className="text-slate-light text-sm sm:text-base leading-relaxed mb-5">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="border-t border-slate/20 pt-4 sm:pt-5">
                          <h4 className="text-xs font-semibold text-slate-lighter uppercase tracking-wider font-mono mb-3 sm:mb-4">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2.5 sm:space-y-3">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 sm:gap-3 text-slate-light text-xs sm:text-sm md:text-base leading-relaxed">
                                <span className="text-accent mt-1 sm:mt-1.5 flex-shrink-0">
                                  <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </span>
                                <span className="break-words">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                </MotionWrapper>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  )
}
