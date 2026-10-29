import type { ReactNode } from 'react'

export type SectionTone = 'light' | 'mist' | 'dark'

const toneClass: Record<SectionTone, string> = {
  light: 'bg-white text-ink',
  mist: 'bg-subtle text-ink',
  dark: 'on-dark bg-ink text-white',
}

/** Vertical rhythm wrapper used by every page section (96px desktop / 56px mobile). */
export function Section({
  id,
  tone = 'light',
  className = '',
  innerClassName = '',
  children,
}: {
  id?: string
  tone?: SectionTone
  className?: string
  innerClassName?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={`${toneClass[tone]} py-14 lg:py-24 ${className}`}
    >
      <div className={`shell ${innerClassName}`}>{children}</div>
    </section>
  )
}

/** Small pill used for deliverable / metadata chips. */
export function Tag({
  children,
  tone = 'light',
}: {
  children: ReactNode
  tone?: 'light' | 'dark'
}) {
  const classes =
    tone === 'dark'
      ? 'border-white/15 bg-white/5 text-white/75'
      : 'border-line bg-subtle text-muted'
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[12px] font-medium ${classes}`}
    >
      {children}
    </span>
  )
}

/**
 * The standard section header used by every section: left-aligned eyebrow,
 * H2, optional supporting line, and an optional action that sits right-aligned
 * on desktop. One alignment style across the whole site.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  tone = 'light',
  headingId,
  as: Heading = 'h2',
  className = '',
}: {
  eyebrow?: string
  title: string
  description?: string
  action?: ReactNode
  tone?: 'light' | 'dark'
  headingId?: string
  as?: 'h1' | 'h2'
  className?: string
}) {
  const isDark = tone === 'dark'

  return (
    <div
      className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${className}`}
    >
      <div className="max-w-2xl">
        {eyebrow && (
          <p className={isDark ? 'eyebrow eyebrow-on-dark' : 'eyebrow'}>
            <span
              aria-hidden="true"
              className={isDark ? 'eyebrow-dot bg-accent-soft' : 'eyebrow-dot'}
            />
            {eyebrow}
          </p>
        )}
        <Heading
          id={headingId}
          className={`mt-4 text-[28px] leading-[1.15] sm:text-[34px] lg:text-[40px] ${
            isDark ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </Heading>
        {description && (
          <p
            className={`mt-4 max-w-prose text-[16px] leading-relaxed ${
              isDark ? 'text-white/65' : 'text-muted'
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

/**
 * Deliberate, self-describing empty state. Used wherever real data has not
 * been supplied yet, so placeholder sections never read as fake claims.
 */
export function PlaceholderNotice({
  title,
  body,
  icon,
  tone = 'light',
  className = '',
  compact = false,
}: {
  title: string
  body?: string
  icon?: ReactNode
  tone?: 'light' | 'dark'
  className?: string
  compact?: boolean
}) {
  const isDark = tone === 'dark'
  return (
    <div
      className={`flex items-start gap-4 rounded-card border ${
        isDark ? 'border-white/12 bg-white/[0.03]' : 'border-line bg-subtle'
      } ${compact ? 'p-5' : 'p-6 sm:p-7'} ${className}`}
    >
      {icon && (
        <span
          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            isDark ? 'bg-white/5 text-accent-soft' : 'bg-accent-soft text-accent'
          }`}
        >
          {icon}
        </span>
      )}
      <div>
        <p
          className={`font-display text-[17px] font-semibold ${
            isDark ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </p>
        {body && (
          <p
            className={`mt-2 text-[14px] leading-relaxed ${
              isDark ? 'text-white/55' : 'text-muted'
            }`}
          >
            {body}
          </p>
        )}
      </div>
    </div>
  )
}
