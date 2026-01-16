'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const codeSnippets = [
  `const developer = {
  name: "Fasih Shaukat",
  role: "Software Engineer",
  skills: ["React", "Next.js", "Node.js"],
  passion: "Building amazing things"
}`,
  `function buildPortfolio() {
  return {
    tech: "Next.js + React",
    design: "Modern & Clean",
    animations: "Smooth & Techy"
  }
}`,
  `class SoftwareEngineer {
  constructor() {
    this.stack = "MERN + Next.js";
    this.location = "Islamabad";
    this.ready = true;
  }
  
  code() {
    return "Clean, scalable code";
  }
}`,
]

export function TypingCode() {
  const [currentCode, setCurrentCode] = useState(0)
  const [displayedCode, setDisplayedCode] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const code = codeSnippets[currentCode]
    let timeout

    if (!isDeleting && displayedCode.length < code.length) {
      timeout = setTimeout(() => {
        setDisplayedCode(code.slice(0, displayedCode.length + 1))
      }, 50)
    } else if (!isDeleting && displayedCode.length === code.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (isDeleting && displayedCode.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedCode(code.slice(0, displayedCode.length - 1))
      }, 30)
    } else if (isDeleting && displayedCode.length === 0) {
      setIsDeleting(false)
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length)
    }

    return () => clearTimeout(timeout)
  }, [displayedCode, isDeleting, currentCode])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-navy-light/50 border border-accent/20 rounded-lg p-6 overflow-hidden"
    >
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="text-xs md:text-sm font-mono text-slate-light overflow-x-auto">
        <code>
          {displayedCode}
          <span className="text-accent animate-pulse">_</span>
        </code>
      </pre>
    </motion.div>
  )
}
