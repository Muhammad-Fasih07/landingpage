'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from 'react'
import { CheckCircle2, Send, X } from 'lucide-react'
import { site } from '@/content/site'
import { cn } from '@/lib/cn'

type HireMeContextValue = {
  open: boolean
  openHireMe: () => void
  closeHireMe: () => void
}

const HireMeContext = createContext<HireMeContextValue | null>(null)

export function useHireMe() {
  const ctx = useContext(HireMeContext)
  if (!ctx) throw new Error('useHireMe must be used within HireMeProvider')
  return ctx
}

export function HireMeProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const openHireMe = useCallback(() => setOpen(true), [])
  const closeHireMe = useCallback(() => setOpen(false), [])

  return (
    <HireMeContext.Provider value={{ open, openHireMe, closeHireMe }}>
      {children}
      <HireMeModal open={open} onClose={closeHireMe} />
    </HireMeContext.Provider>
  )
}

type FormState = {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
}

const initial: FormState = {
  name: '',
  email: '',
  company: '',
  projectType: 'Full-time role',
  budget: '',
  message: '',
}

function HireMeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const titleId = useId()
  const [form, setForm] = useState<FormState>(initial)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      setSent(false)
      setError('')
      setSending(false)
    }
  }, [open])

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in name, email, and a short message.')
      return
    }

    setSending(true)

    const subject = encodeURIComponent(
      `Hire inquiry - ${form.projectType}${form.company ? ` · ${form.company}` : ''}`
    )
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.company ? `Company: ${form.company}` : null,
        `Project type: ${form.projectType}`,
        form.budget ? `Budget / range: ${form.budget}` : null,
        '',
        form.message,
      ]
        .filter(Boolean)
        .join('\n')
    )

    // Prefer native mail client; still show success UI for polish
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`

    window.setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm(initial)
    }, 400)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[110] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close hire form"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[1] flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-studio border border-atelier-line bg-atelier-raised shadow-studio sm:max-h-[90vh] sm:rounded-studio"
      >
        <div className="relative overflow-hidden border-b border-atelier-line px-5 pb-5 pt-5 sm:px-7 sm:pt-6">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-atelier-coral/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-8 h-32 w-32 rounded-full bg-atelier-sage/20 blur-3xl" />

          <div className="relative flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="eyebrow">Let’s work together</p>
              <h2
                id={titleId}
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-atelier-cream sm:text-3xl"
              >
                Hire {site.shortName}
              </h2>
              <p className="mt-2 text-small text-atelier-sand">
                Tell me about the role or project - I’ll reply within a day.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-soft border border-atelier-line text-atelier-mute transition-colors hover:text-atelier-cream"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          {sent ? (
            <div className="flex flex-col items-center py-10 text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-atelier-sage/40 bg-atelier-sage/15 text-atelier-sage">
                <CheckCircle2 className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-atelier-cream">
                Message ready
              </h3>
              <p className="mt-2 max-w-sm text-small text-atelier-sand">
                Your mail client should open with the details filled in. If it
                didn’t, email me directly at{' '}
                <a
                  href={`mailto:${site.email}`}
                  className="text-atelier-coral underline-offset-2 hover:underline"
                >
                  {site.email}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-8 inline-flex h-11 items-center rounded-soft bg-atelier-coral px-6 text-small font-semibold text-atelier-bg"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" required>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Your name"
                    className={fieldClass}
                    autoComplete="name"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="you@company.com"
                    className={fieldClass}
                    autoComplete="email"
                  />
                </Field>
              </div>

              <Field label="Company / team">
                <input
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  placeholder="Optional"
                  className={fieldClass}
                  autoComplete="organization"
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="I’m looking for">
                  <select
                    value={form.projectType}
                    onChange={(e) => update('projectType', e.target.value)}
                    className={cn(fieldClass, 'appearance-none')}
                  >
                    <option>Full-time role</option>
                    <option>Contract / freelance</option>
                    <option>Web app / portal</option>
                    <option>Mobile app</option>
                    <option>Website rebuild</option>
                    <option>Something else</option>
                  </select>
                </Field>
                <Field label="Budget / range">
                  <input
                    value={form.budget}
                    onChange={(e) => update('budget', e.target.value)}
                    placeholder="Optional"
                    className={fieldClass}
                  />
                </Field>
              </div>

              <Field label="Message" required>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Role details, timeline, or what you need built…"
                  className={cn(fieldClass, 'resize-y min-h-[110px]')}
                />
              </Field>

              {error && (
                <p className="text-small text-atelier-coral" role="alert">
                  {error}
                </p>
              )}

              <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-micro text-atelier-mute sm:max-w-[14rem]">
                  Opens your email app with this inquiry prefilled.
                </p>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-soft bg-atelier-coral px-6 text-small font-semibold text-atelier-bg transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
                >
                  {sending ? 'Preparing…' : 'Send inquiry'}
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-micro text-atelier-mute">
        {label}
        {required ? <span className="text-atelier-coral"> *</span> : null}
      </span>
      {children}
    </label>
  )
}

const fieldClass =
  'w-full rounded-soft border border-atelier-line bg-atelier-bg/70 px-3.5 py-3 text-small text-atelier-cream placeholder:text-atelier-mute transition-colors focus:border-atelier-coral/50 focus:outline-none focus:ring-1 focus:ring-atelier-coral/40'
