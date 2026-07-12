'use client'

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type SyntheticEvent,
} from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { cn } from '@/lib/cn'

const AUTOPLAY_MS = 2000
const EASE = [0.16, 1, 0.3, 1] as const

type Props = {
  images: string[]
  title: string
}

type AspectMode = 'portrait' | 'landscape'

export function ProjectScreenshotGallery({ images, title }: Props) {
  const gallery = images
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [paused, setPaused] = useState(false)
  const [aspect, setAspect] = useState<AspectMode>('landscape')
  const stageRef = useRef<HTMLDivElement>(null)

  const multi = gallery.length > 1
  const current = gallery[index]

  const goTo = useCallback(
    (i: number) => {
      if (gallery.length === 0) return
      setIndex(((i % gallery.length) + gallery.length) % gallery.length)
    },
    [gallery.length]
  )

  const prev = useCallback(() => {
    goTo(index - 1)
  }, [goTo, index])

  const next = useCallback(() => {
    goTo(index + 1)
  }, [goTo, index])

  const openLightbox = useCallback(() => setOpen(true), [])
  const closeLightbox = useCallback(() => setOpen(false), [])

  const onImageLoad = useCallback(
    (e: SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget
      if (!img.naturalWidth || !img.naturalHeight) return
      setAspect(img.naturalHeight > img.naturalWidth ? 'portrait' : 'landscape')
    },
    []
  )

  // Autoplay — pause on hover/focus, lightbox, or reduced motion
  useEffect(() => {
    if (!multi || paused || open || reduce) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % gallery.length)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [multi, paused, open, reduce, gallery.length, index])

  // Lightbox keyboard + body scroll lock
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, closeLightbox, prev, next])

  const onStageKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (!multi) return
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    }
  }

  if (gallery.length === 0) return null

  const isPortrait = aspect === 'portrait'

  return (
    <>
      <div
        ref={stageRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} screenshots`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(e) => {
          if (!stageRef.current?.contains(e.relatedTarget as Node)) {
            setPaused(false)
          }
        }}
        onKeyDown={onStageKeyDown}
        className="overflow-hidden relative mt-8 border outline-none rounded-studio border-atelier-line bg-atelier-raised focus-visible:ring-2 focus-visible:ring-atelier-coral/40"
      >
        <div
          className={cn(
            'relative w-full bg-atelier-elevated/40 transition-[height] duration-500 ease-studio',
            isPortrait
              ? 'h-[min(72vh,680px)] sm:h-[min(78vh,760px)]'
              : 'h-[min(48vh,420px)] sm:h-[min(56vh,520px)]'
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
              className="absolute inset-0 flex items-center justify-center p-3 sm:p-5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current}
                alt={`${title} screenshot ${index + 1}`}
                onLoad={onImageLoad}
                className={cn(
                  'object-contain shadow-studio',
                  isPortrait
                    ? 'h-full w-auto max-w-[min(58%,340px)] rounded-[1.1rem] border border-atelier-line bg-atelier-bg'
                    : 'h-full w-full max-h-full max-w-full rounded-soft'
                )}
              />
            </motion.div>
          </AnimatePresence>

          <p className="pointer-events-none absolute left-3 top-3 z-[2] font-mono text-micro text-white/70 sm:left-4 sm:top-4">
            <span className="px-2 py-1 backdrop-blur-sm rounded-soft bg-black/50">
              {index + 1} / {gallery.length}
            </span>
          </p>

          {multi && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-2 top-1/2 z-[2] inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70 sm:left-3 sm:h-11 sm:w-11"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-2 top-1/2 z-[2] inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70 sm:right-3 sm:h-11 sm:w-11"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="absolute bottom-3 left-0 right-0 z-[2] flex items-end justify-between gap-3 px-3 sm:bottom-4 sm:px-4">
            <div className="flex min-h-[28px] flex-1 items-center justify-center gap-1.5">
              {multi &&
                gallery.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to screenshot ${i + 1}`}
                    aria-current={i === index ? 'true' : undefined}
                    className={cn(
                      'h-1.5 rounded-full transition-all duration-300',
                      i === index
                        ? 'w-5 bg-atelier-coral'
                        : 'w-1.5 bg-atelier-mute/70 hover:bg-atelier-sand'
                    )}
                  />
                ))}
            </div>

            <button
              type="button"
              onClick={openLightbox}
              className="inline-flex shrink-0 items-center gap-2 rounded-soft border border-white/20 bg-black/50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-black/70"
              aria-label="Open fullscreen"
            >
              <Expand className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Full screen</span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot viewer`}
        >
          <button
            type="button"
            aria-label="Close fullscreen"
            className="absolute inset-0 cursor-zoom-out"
            onClick={closeLightbox}
          />

          <div className="relative z-[1] flex max-h-full w-full max-w-6xl flex-col">
            <div className="flex gap-3 justify-between items-center mb-3">
              <p className="font-mono text-micro text-white/70">
                {index + 1} / {gallery.length}
              </p>
              <button
                type="button"
                onClick={closeLightbox}
                className="inline-flex justify-center items-center w-10 h-10 text-white border transition-colors rounded-soft border-white/20 bg-white/10 hover:bg-white/20"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex relative flex-1 justify-center items-center min-h-0">
              {multi && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    prev()
                  }}
                  className="absolute left-0 z-[2] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70 sm:left-2"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current}
                alt={`${title} fullscreen ${index + 1}`}
                className="max-h-[min(82vh,900px)] w-auto max-w-full rounded-soft object-contain shadow-studio"
                onClick={(e) => e.stopPropagation()}
              />

              {multi && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    next()
                  }}
                  className="absolute right-0 z-[2] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70 sm:right-2"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
