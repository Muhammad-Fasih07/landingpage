'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function GlitchText({ children, className = '' }) {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 200)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={glitch ? {
        x: [0, -2, 2, -2, 2, 0],
        textShadow: [
          '0 0 0 transparent',
          '2px 0 0 #ff0080, -2px 0 0 #00ffff',
          '-2px 0 0 #ff0080, 2px 0 0 #00ffff',
          '0 0 0 transparent',
        ],
      } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
      {glitch && (
        <>
          <span
            className="absolute inset-0 text-red-500 opacity-50"
            style={{ clipPath: 'inset(40% 0 60% 0)' }}
          >
            {children}
          </span>
          <span
            className="absolute inset-0 text-cyan-500 opacity-50"
            style={{ clipPath: 'inset(60% 0 40% 0)' }}
          >
            {children}
          </span>
        </>
      )}
    </motion.span>
  )
}
