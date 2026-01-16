'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/content/site'
import { socialLinks } from '@/content/social'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Container } from '@/components/layout/Container'
import { MotionWrapper } from '@/components/motion/MotionWrapper'

export function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mjggkzbw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // The message has been sent to your email via Formspree
        setFormData({ name: '', email: '', subject: '', message: '' })
        setErrors({})
      } else {
        const data = await response.json()
        console.error('Formspree error:', data)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-navy-light/30 to-navy">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-light/20 via-navy-light/40 to-navy-light/20"></div>
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary-blue/6 rounded-full blur-3xl"
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
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary-green/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        />
      </div>
      <Container className="relative z-10">
        <SectionHeader
          subtitle="What's Next?"
          title="Get In Touch"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-8 sm:mb-12"
        >
          <p className="text-base sm:text-lg text-slate mb-6 sm:mb-8 px-4">
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <MotionWrapper>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-lighter mb-4 sm:mb-6 font-mono">
                Let's Connect
              </h3>
              <p className="text-slate-light mb-6 sm:mb-8 text-sm sm:text-base">
                Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-lighter mb-1 sm:mb-2 font-mono">
                    Email
                  </h4>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-accent hover:text-accent-hover transition-colors font-mono text-xs sm:text-sm break-all relative group inline-block"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-lighter mb-1 sm:mb-2 font-mono">
                    WhatsApp
                  </h4>
                  <a
                    href={`https://wa.me/923482841265`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover transition-colors font-mono text-xs sm:text-sm flex items-center gap-2"
                  >
                    <span>+92 348 2841265</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-lighter mb-1 sm:mb-2 font-mono">
                    Location
                  </h4>
                  <p className="text-slate-light text-sm sm:text-base">{siteConfig.location}</p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-lighter mb-3 sm:mb-4 font-mono">
                    Social Links
                  </h4>
                  <div className="flex flex-col gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-light hover:text-accent transition-colors font-mono text-xs sm:text-sm relative group inline-block"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
            </motion.div>
          </MotionWrapper>

          {/* Contact Form */}
          <MotionWrapper delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                  placeholder="Your name"
                />

                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                  placeholder="your.email@example.com"
                />

                <Input
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  required
                  placeholder="What's this about?"
                />

                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                  placeholder="Tell me about your project or idea..."
                />

                {submitStatus === 'success' && (
                  <div className="p-4 bg-terminal-green/20 border border-terminal-green/40 rounded-lg text-terminal-green text-sm font-mono">
                    ✓ Thank you! Your message has been sent successfully. I'll get
                    back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-terminal-red/20 border border-terminal-red/40 rounded-lg text-terminal-red text-sm font-mono">
                    ✗ Something went wrong. Please try again or contact me directly via email.
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate/20"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-navy-light px-2 text-slate/50">Or</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/923482841265?text=${encodeURIComponent(`Hi, I'm interested in your services.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Message on WhatsApp
                    </Button>
                  </a>
                </div>
              </form>
            </Card>
            </motion.div>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  )
}
