'use client'

import { siteConfig } from '@/content/site'
import { skills } from '@/content/skills'
import { experience } from '@/content/experience'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Container } from '@/components/layout/Container'
import { MotionWrapper } from '@/components/motion/MotionWrapper'
import { Stagger } from '@/components/motion/Stagger'

export default function AboutPage() {
  const allSkills = skills.flatMap((category) => category.items)

  return (
    <div className="pt-20 pb-20 min-h-screen bg-navy">
      <Container>
        <SectionHeader
          subtitle="About Me"
          title="Professional Summary"
          align="center"
        />

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Professional Summary */}
          <MotionWrapper>
            <Card>
              <h3 className="text-2xl font-bold text-slate-lighter mb-4">
                Who I Am
              </h3>
              <p className="text-slate-light leading-relaxed mb-4">
                {siteConfig.bio}
              </p>
              <p className="text-slate-light leading-relaxed">
                I specialize in building scalable web applications using modern
                technologies. With expertise in both frontend and backend
                development, I bring a comprehensive approach to every project.
                My background in QA/testing ensures that I deliver high-quality,
                well-tested code that meets both functional and performance
                requirements.
              </p>
            </Card>
          </MotionWrapper>

          {/* Strengths */}
          <MotionWrapper delay={0.1}>
            <Card>
              <h3 className="text-2xl font-bold text-slate-lighter mb-6 font-mono">Strengths</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-accent mb-2 font-mono">
                    Full-Stack Expertise
                  </h4>
                  <p className="text-slate-light text-sm">
                    Proficient in both frontend and backend development, enabling
                    me to build complete solutions from concept to deployment.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-accent mb-2 font-mono">
                    Modern Technologies
                  </h4>
                  <p className="text-slate-light text-sm">
                    Up-to-date with the latest frameworks and tools, including
                    Next.js, React, Node.js, and modern database solutions.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary-green mb-2 font-mono">
                    Quality Focus
                  </h4>
                  <p className="text-slate-light text-sm">
                    Strong background in QA/testing ensures reliable,
                    well-tested applications that perform under pressure.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-accent mb-2 font-mono">
                    Problem Solving
                  </h4>
                  <p className="text-slate-light text-sm">
                    Analytical approach to identifying issues and implementing
                    effective, scalable solutions.
                  </p>
                </div>
              </div>
            </Card>
          </MotionWrapper>

          {/* How I Work */}
          <MotionWrapper delay={0.2}>
            <Card>
              <h3 className="text-2xl font-bold text-slate-lighter mb-6 font-mono">
                How I Work
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-lighter mb-2 font-mono">
                    Quality First
                  </h4>
                  <p className="text-slate-light text-sm">
                    Every line of code is written with quality in mind. I follow
                    best practices, write clean, maintainable code, and ensure
                    thorough testing before deployment.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-accent mb-2 font-mono">
                    Performance Optimized
                  </h4>
                  <p className="text-slate-light text-sm">
                    Applications are built with performance as a priority,
                    ensuring fast load times, efficient database queries, and
                    optimal user experience.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary-green mb-2 font-mono">
                    Security Conscious
                  </h4>
                  <p className="text-slate-light text-sm">
                    Security is integrated into every aspect of development, from
                    authentication and authorization to data protection and API
                    security.
                  </p>
                </div>
              </div>
            </Card>
          </MotionWrapper>

          {/* Experience Timeline */}
          <MotionWrapper delay={0.3}>
            <SectionHeader
              subtitle="Career"
              title="Experience Timeline"
              align="left"
            />
            <Stagger className="space-y-6">
              {experience.map((exp, index) => (
                <MotionWrapper key={index}>
                  <Card>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-lighter mb-1 font-mono">
                          {exp.title}
                        </h3>
                        <p className="text-accent font-medium mb-2 font-mono">
                          {exp.company} • {exp.location}
                        </p>
                        <p className="text-slate text-sm mb-3 font-mono">{exp.period}</p>
                        <p className="text-slate-light mb-4">{exp.description}</p>
                        <ul className="list-disc list-inside space-y-1 text-slate text-sm">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </MotionWrapper>
              ))}
            </Stagger>
          </MotionWrapper>

          {/* Tools & Stack */}
          <MotionWrapper delay={0.4}>
            <Card>
              <h3 className="text-2xl font-bold text-slate-lighter mb-6 font-mono">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {allSkills.map((skill) => (
                  <Badge key={skill.name} variant="default">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>
          </MotionWrapper>

          {/* Resume Download */}
          <MotionWrapper delay={0.5}>
            <div className="text-center">
              <Button
                href={siteConfig.resume}
                variant="primary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </div>
  )
}
