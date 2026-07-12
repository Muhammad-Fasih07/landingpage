'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { GitBranch, X } from 'lucide-react'
import { site } from '@/content/site'
import { cn } from '@/lib/cn'

type GitHubPickerProps = {
  className?: string
  label?: string
  /** Contact-card style vs button style */
  variant?: 'button' | 'link' | 'card'
  cardValue?: string
}

export function GitHubPicker({
  className,
  label = 'GitHub',
  variant = 'button',
  cardValue = 'Choose profile',
}: GitHubPickerProps) {
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  const trigger =
    variant === 'card' ? (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          'w-full rounded-soft border border-atelier-line bg-atelier-bg/45 p-4 text-left backdrop-blur-sm transition-colors hover:border-atelier-coral/40',
          className
        )}
      >
        <p className="font-mono text-micro text-atelier-mute">{label}</p>
        <p className="mt-2 text-small text-atelier-cream transition-colors group-hover:text-atelier-coral">
          {cardValue}
        </p>
      </button>
    ) : variant === 'link' ? (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          'text-atelier-mute transition-colors hover:text-atelier-coral',
          className
        )}
      >
        {label}
      </button>
    ) : (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          'inline-flex h-12 items-center rounded-soft border border-atelier-line bg-atelier-raised px-5 text-small text-atelier-sand transition-colors hover:border-atelier-coral/50 hover:text-atelier-cream',
          className
        )}
      >
        {label}
      </button>
    )

  return (
    <>
      {trigger}

      {open && (
        <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
        className="relative z-[1] flex max-h-[92dvh] w-full max-w-md flex-col overflow-hidden rounded-t-studio border border-atelier-line bg-atelier-raised p-5 shadow-studio sm:max-h-[90vh] sm:rounded-studio sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">GitHub</p>
                <h2
                  id={titleId}
                  className="mt-2 font-display text-xl font-semibold text-atelier-cream sm:text-2xl"
                >
                  Which profile?
                </h2>
                <p className="mt-2 text-small text-atelier-sand">
                  I keep work across two GitHub accounts - pick one to open.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-soft border border-atelier-line text-atelier-mute transition-colors hover:text-atelier-cream"
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <ul className="mt-6 grid gap-3">
              {site.githubProfiles.map((profile) => (
                <li key={profile.handle}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-4 rounded-soft border border-atelier-line bg-atelier-bg/50 p-4 transition-colors hover:border-atelier-coral/45 hover:bg-atelier-elevated/60"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-soft border border-atelier-line bg-atelier-elevated text-atelier-coral">
                      <GitBranch className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-small text-atelier-cream group-hover:text-atelier-coral">
                        @{profile.handle}
                      </span>
                      <span className="mt-0.5 block text-micro text-atelier-mute">
                        {profile.label}
                      </span>
                    </span>
                    <span className="text-small text-atelier-mute group-hover:text-atelier-coral">
                      Open �-
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
