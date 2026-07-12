'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site'
import { cn } from '@/lib/cn'

const NODES = ['Client', 'API', 'DB'] as const

const STATUS_TICKS = [
  'auth: ok',
  'build: pass',
  'api: healthy',
  'deploy: live',
] as const

const ease = [0.16, 1, 0.3, 1] as const

export function EngineeringPanel({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  const [activeHop, setActiveHop] = useState(0)
  const [statusIdx, setStatusIdx] = useState(0)

  useEffect(() => {
    if (reduce) return
    const hop = window.setInterval(() => {
      setActiveHop((i) => (i + 1) % NODES.length)
    }, 2400)
    const status = window.setInterval(() => {
      setStatusIdx((i) => (i + 1) % STATUS_TICKS.length)
    }, 3000)
    return () => {
      window.clearInterval(hop)
      window.clearInterval(status)
    }
  }, [reduce])

  const hop = reduce ? 2 : activeHop
  const status = reduce ? STATUS_TICKS[3] : STATUS_TICKS[statusIdx]

  return (
    <div
      className={cn(
        'surface-card relative mx-auto w-full max-w-md overflow-visible p-5 shadow-studio sm:max-w-none sm:p-7',
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-studio opacity-[0.3] eng-blueprint-grid"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-atelier-coral/18 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-14 -left-8 h-44 w-44 rounded-full bg-atelier-sage/12 blur-3xl"
      />

      <div className="relative z-[1] flex flex-col gap-5">
        <div>
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-micro uppercase text-atelier-mute">
              Systems
            </p>
            <motion.span
              key={status}
              initial={reduce ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease }}
              className="font-mono text-[10px] uppercase tracking-wider text-atelier-sage"
            >
              {status}
            </motion.span>
          </div>

          <p className="mt-3 font-display text-3xl font-bold leading-tight text-atelier-cream sm:text-4xl">
            Frontend.
            <br />
            Backend.
            <br />
            <span className="text-atelier-coral">Full stack.</span>
          </p>
        </div>

        <div className="rounded-soft border border-atelier-line bg-atelier-bg/45 p-3 sm:p-4">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-atelier-mute">
            Request path
          </p>
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            {NODES.map((node, i) => (
              <div key={node} className="flex flex-1 items-center gap-1 sm:gap-2">
                <motion.div
                  animate={
                    reduce
                      ? undefined
                      : {
                          borderColor:
                            hop === i
                              ? 'rgb(var(--coral) / 0.7)'
                              : 'rgb(var(--line) / 1)',
                          backgroundColor:
                            hop === i
                              ? 'rgb(var(--coral) / 0.12)'
                              : 'rgb(var(--elevated) / 0.55)',
                        }
                  }
                  transition={{ duration: 0.45, ease }}
                  className={cn(
                    'flex w-full flex-col items-center rounded-soft border px-1.5 py-2 sm:px-2 sm:py-2.5',
                    hop === i
                      ? 'border-atelier-coral/70 bg-atelier-coral/10'
                      : 'border-atelier-line bg-atelier-elevated/55'
                  )}
                >
                  <span
                    className={cn(
                      'mb-1 h-1.5 w-1.5 rounded-full',
                      hop === i
                        ? 'bg-atelier-coral motion-safe:animate-eng-pulse'
                        : 'bg-atelier-mute/60'
                    )}
                  />
                  <span
                    className={cn(
                      'font-mono text-[10px] uppercase tracking-wide sm:text-[11px]',
                      hop === i ? 'text-atelier-coral' : 'text-atelier-sand'
                    )}
                  >
                    {node}
                  </span>
                </motion.div>
                {i < NODES.length - 1 && (
                  <div className="relative h-px w-2 shrink-0 overflow-hidden sm:w-3">
                    <div className="absolute inset-0 bg-atelier-line" />
                    {!reduce && hop === i && (
                      <motion.div
                        className="absolute inset-y-0 w-full bg-atelier-coral/80"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                          duration: 0.9,
                          ease: 'easeInOut',
                          repeat: Infinity,
                          repeatDelay: 0.5,
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {site.coreStack.slice(0, 4).map((item, i) => (
            <motion.div
              key={item}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 + i * 0.06, ease }}
              className="rounded-soft border border-atelier-line bg-atelier-bg/50 px-3 py-2.5 sm:py-3"
            >
              <p className="font-mono text-[10px] uppercase text-atelier-mute">
                Stack
              </p>
              <p className="mt-1 text-small font-medium text-atelier-cream">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
