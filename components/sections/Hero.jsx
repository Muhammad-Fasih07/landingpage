'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { siteConfig } from '@/content/site'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { Particles } from '@/components/animations/Particles'
import { CodeMatrix } from '@/components/animations/CodeMatrix'
import { TypingCode } from '@/components/animations/TypingCode'
import { GlitchText } from '@/components/animations/GlitchText'

const greetings = ['Hi, my name is', 'Hello, I am', "Hey, I'm", 'const name =']

export function Hero() {
  const [greeting, setGreeting] = useState(greetings[0])
  const [displayedName, setDisplayedName] = useState('')
  const fullName = siteConfig.name

  useEffect(() => {
    // Rotate greetings
    const greetingInterval = setInterval(() => {
      setGreeting((prev) => {
        const currentIndex = greetings.indexOf(prev)
        return greetings[(currentIndex + 1) % greetings.length]
      })
    }, 3000)

    // Typewriter effect for name
    let currentIndex = 0
    let typeInterval
    
    const startTypewriter = setTimeout(() => {
      typeInterval = setInterval(() => {
        if (currentIndex < fullName.length) {
          setDisplayedName(fullName.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          if (typeInterval) clearInterval(typeInterval)
        }
      }, 100)
    }, 500)

    return () => {
      clearInterval(greetingInterval)
      if (typeInterval) clearInterval(typeInterval)
      clearTimeout(startTypewriter)
    }
  }, [fullName])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-navy">
        <CodeMatrix />
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/50 to-navy"></div>
        <Particles />
        {/* Animated gradient orbs with professional tech aesthetic */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/12 rounded-full blur-3xl tech-glow"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-blue/8 rounded-full blur-3xl tech-glow-blue"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary-green/6 rounded-full blur-3xl tech-glow-green"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-accent font-mono text-sm sm:text-base mb-3 sm:mb-4 relative inline-block"
              >
                <span className="relative z-10">{greeting}</span>
                <span className="absolute inset-0 blur-sm opacity-50 text-accent">{greeting}</span>
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-lighter mb-3 sm:mb-4 leading-[1.1] break-words sm:whitespace-nowrap"
              >
                <GlitchText>
                  {displayedName || fullName}
                  {displayedName.length > 0 && displayedName.length < fullName.length && (
                    <span className="text-accent animate-pulse">_</span>
                  )}
                </GlitchText>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate mb-4 sm:mb-6 leading-tight"
              >
                {siteConfig.role}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm sm:text-base md:text-lg text-slate-light mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                {siteConfig.bio}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              >
                <Button href="#projects" variant="primary" size="lg" className="w-full sm:w-auto">
                  View Projects
                </Button>
                <Button href="#contact" variant="outline" size="lg" className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden lg:block"
          >
            <TypingCode />
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2 tech-glow relative"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-accent rounded-full tech-glow"
          />
        </motion.div>
      </motion.a>
    </section>
  )
}
