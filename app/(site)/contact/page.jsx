'use client'

import { useState } from 'react'
import { siteConfig } from '@/content/site'
import { socialLinks } from '@/content/social'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Container } from '@/components/layout/Container'
import { MotionWrapper } from '@/components/motion/MotionWrapper'

export default function ContactPage() {
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
    <div className="pt-20 pb-20 min-h-screen bg-navy">
      <Container size="sm">
        <SectionHeader
          subtitle="Get In Touch"
          title="Contact Me"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <MotionWrapper>
            <Card>
              <h3 className="text-2xl font-bold text-slate-lighter mb-6">
                Let's Connect
              </h3>
              <p className="text-slate-light mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                through any of the channels below.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-lighter mb-2 font-mono">
                    Email
                  </h4>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-accent hover:text-accent-hover transition-colors font-mono text-sm relative group inline-block"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-lighter mb-2 font-mono">
                    Location
                  </h4>
                  <p className="text-slate-light">{siteConfig.location}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-lighter mb-4 font-mono">
                    Social Links
                  </h4>
                  <div className="flex flex-col gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-light hover:text-accent transition-colors font-mono text-sm relative group inline-block"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </MotionWrapper>

          {/* Contact Form */}
          <MotionWrapper delay={0.1}>
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
                    ✗ Something went wrong. Please try again or contact me directly
                    via email.
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </MotionWrapper>
        </div>
      </Container>
    </div>
  )
}
