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
          'p-4 w-full text-left border backdrop-blur-sm transition-colors rounded-soft border-atelier-line bg-atelier-bg/45 hover:border-atelier-coral/40',
          className
        )}
      >
        <p className="font-mono text-micro text-atelier-mute">{label}</p>
        <p className="mt-2 transition-colors text-small text-atelier-cream group-hover:text-atelier-coral">
          {cardValue}
        </p>
      </button>
    ) : variant === 'link' ? (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          'transition-colors text-atelier-mute hover:text-atelier-coral',
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
          'inline-flex items-center px-5 h-12 border transition-colors rounded-soft border-atelier-line bg-atelier-raised text-small text-atelier-sand hover:border-atelier-coral/50 hover:text-atelier-cream',
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
            className="absolute inset-0 backdrop-blur-sm bg-black/55"
            onClick={() => setOpen(false)}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
        className="relative z-[1] flex max-h-[92dvh] w-full max-w-md flex-col overflow-hidden rounded-t-studio border border-atelier-line bg-atelier-raised p-5 shadow-studio sm:max-h-[90vh] sm:rounded-studio sm:p-7"
          >
            <div className="flex gap-4 justify-between items-start">
              <div>
                <p className="eyebrow">GitHub</p>
                <h2
                  id={titleId}
                  className="mt-2 text-xl font-semibold font-display text-atelier-cream sm:text-2xl"
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
                className="inline-flex justify-center items-center w-9 h-9 border transition-colors shrink-0 rounded-soft border-atelier-line text-atelier-mute hover:text-atelier-cream"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <ul className="grid gap-3 mt-6">
              {site.githubProfiles.map((profile) => (
                <li key={profile.handle}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex gap-4 items-center p-4 border transition-colors group rounded-soft border-atelier-line bg-atelier-bg/50 hover:border-atelier-coral/45 hover:bg-atelier-elevated/60"
                  >
                    <span className="inline-flex justify-center items-center w-10 h-10 border rounded-soft border-atelier-line bg-atelier-elevated text-atelier-coral">
                      <GitBranch className="w-4 h-4" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-mono text-small text-atelier-cream group-hover:text-atelier-coral">
                        @{profile.handle}
                      </span>
                      <span className="mt-0.5 block text-micro text-atelier-mute">
                        {profile.label}
                      </span>
                    </span>
                    <span className="text-small text-atelier-mute group-hover:text-atelier-coral">
                      Open
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
