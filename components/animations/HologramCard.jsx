'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function HologramCard({ children, className = '' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={isHovered ? {
        rotateY: (mousePosition.x / 20) - 10,
        rotateX: -(mousePosition.y / 20) + 10,
      } : {
        rotateY: 0,
        rotateX: 0,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="relative">
        {children}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 255, 218, 0.1), transparent 50%)`,
            }}
          />
        )}
      </div>
    </motion.div>
  )
}
