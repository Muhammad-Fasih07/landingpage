'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { cn } from '@/lib/cn'

type Props = {
  images: string[]
  title: string
  /** Hero / cover image shown above the case study */
  coverSrc?: string
}

export function ProjectScreenshotGallery({ images, title, coverSrc }: Props) {
  const gallery = images.length > 0 ? images : coverSrc ? [coverSrc] : []
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = useCallback((i: number) => {
    setIndex(i)
    setOpen(true)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + gallery.length) % gallery.length)
  }, [gallery.length])

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % gallery.length)
  }, [gallery.length])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
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
  }, [open, close, prev, next])

  if (gallery.length === 0) return null

  const coverIndex = coverSrc
    ? Math.max(0, gallery.indexOf(coverSrc))
    : 0

  return (
    <>
      {coverSrc && (
        <button
          type="button"
          onClick={() => openAt(coverIndex >= 0 ? coverIndex : 0)}
          className="group relative mt-8 block w-full overflow-hidden rounded-studio border border-atelier-line text-left"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={coverSrc}
            alt={`${title} screenshot`}
            className="max-h-[480px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01] sm:max-h-[560px]"
          />
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-soft bg-black/55 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
            <Expand className="h-3.5 w-3.5" />
            Full screen
          </span>
        </button>
      )}

      {gallery.length > 1 && (
        <div className="mt-10 border-t border-atelier-line pt-10">
          <h2 className="font-display text-title text-atelier-cream">
            Screenshots
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {gallery.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => openAt(i)}
                className="group relative overflow-hidden rounded-soft border border-atelier-line bg-atelier-raised text-left transition-colors hover:border-atelier-coral/40"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${title} UI ${i + 1}`}
                  className="h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/25">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <Expand className="h-4 w-4" />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

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
            onClick={close}
          />

          <div className="relative z-[1] flex max-h-full w-full max-w-6xl flex-col">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="font-mono text-micro text-white/70">
                {index + 1} / {gallery.length}
              </p>
              <button
                type="button"
                onClick={close}
                className="inline-flex h-10 w-10 items-center justify-center rounded-soft border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center">
              {gallery.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    prev()
                  }}
                  className="absolute left-0 z-[2] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70 sm:left-2"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={gallery[index]}
                alt={`${title} fullscreen ${index + 1}`}
                className={cn(
                  'max-h-[min(82vh,900px)] w-auto max-w-full rounded-soft object-contain shadow-studio'
                )}
                onClick={(e) => e.stopPropagation()}
              />

              {gallery.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    next()
                  }}
                  className="absolute right-0 z-[2] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70 sm:right-2"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
