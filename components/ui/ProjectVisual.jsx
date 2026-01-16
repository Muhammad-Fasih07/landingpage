'use client'

import { motion } from 'framer-motion'

const techIcons = {
  'React': '⚛️',
  'Next.js': '▲',
  'Node.js': '🟢',
  'Express': '🚂',
  'MongoDB': '🍃',
  'MySQL': '🗄️',
  'PHP': '🐘',
  'WordPress': 'W',
  'JavaScript': 'JS',
  'TypeScript': 'TS',
  'Tailwind CSS': 'TW',
  'HTML5': 'HTML',
  'CSS3': 'CSS',
  'Python': '🐍',
  'jQuery': 'jQ',
}

const getProjectColors = (stack) => {
  const colorSchemes = [
    { primary: '#64ffda', secondary: '#0a192f', accent: '#112240' },
    { primary: '#7c3aed', secondary: '#1e1b4b', accent: '#312e81' },
    { primary: '#f59e0b', secondary: '#78350f', accent: '#92400e' },
    { primary: '#10b981', secondary: '#064e3b', accent: '#065f46' },
    { primary: '#ef4444', secondary: '#7f1d1d', accent: '#991b1b' },
    { primary: '#3b82f6', secondary: '#1e3a8a', accent: '#1e40af' },
  ]
  
  // Use project title hash to get consistent colors
  const hash = stack.join('').length
  return colorSchemes[hash % colorSchemes.length]
}

export function ProjectVisual({ project, className = '' }) {
  const colors = getProjectColors(project.stack)
  const displayStack = project.stack.slice(0, 6)

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 50%, ${colors.secondary} 100%)`,
        }}
        animate={{
          background: [
            `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 50%, ${colors.secondary} 100%)`,
            `linear-gradient(225deg, ${colors.accent} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`,
            `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 50%, ${colors.secondary} 100%)`,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(${colors.primary}33 1px, transparent 1px),
            linear-gradient(90deg, ${colors.primary}33 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Animated Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-2xl"
        style={{ backgroundColor: colors.primary }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full blur-xl"
        style={{ backgroundColor: colors.primary }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Tech Stack Icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 p-4 sm:p-6 md:p-8">
          {displayStack.map((tech, index) => {
            const icon = techIcons[tech] || tech.substring(0, 2).toUpperCase()
            return (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="flex flex-col items-center justify-center"
              >
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-[10px] sm:text-xs font-mono font-bold mb-1 sm:mb-2 backdrop-blur-sm border"
                  style={{
                    backgroundColor: `${colors.primary}20`,
                    borderColor: `${colors.primary}40`,
                    color: colors.primary,
                  }}
                >
                  {icon}
                </div>
                <span
                  className="text-[10px] sm:text-xs font-mono text-center px-1"
                  style={{ color: colors.primary }}
                >
                  {tech.length > 6 ? tech.substring(0, 6) : tech}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Project Title Overlay (subtle) */}
      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
        <div
          className="text-[10px] sm:text-xs font-mono opacity-30 truncate"
          style={{ color: colors.primary }}
        >
          {project.title}
        </div>
      </div>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{
          transform: 'skewX(-20deg)',
        }}
        animate={{
          x: ['-200%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
