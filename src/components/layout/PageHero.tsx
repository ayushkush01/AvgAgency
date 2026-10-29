import type { ReactNode } from 'react'

/**
 * Standard page header. Renders the page's single <h1>, its eyebrow and
 * supporting line, plus any call-to-action buttons passed as children.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  meta,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  /** Small line under the description, e.g. a "last updated" date. */
  meta?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-white pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20">
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-52 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <div className="shell relative">
        <p className="eyebrow">
          <span aria-hidden="true" className="eyebrow-dot" />
          {eyebrow}
        </p>

        <h1 className="mt-6 max-w-4xl text-[32px] leading-[1.1] tracking-[-0.02em] sm:text-[42px] lg:text-[50px]">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-ink/60 sm:text-[17px]">
          {description}
        </p>

        {meta && (
          <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/40">
            {meta}
          </p>
        )}

        {children && (
          <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>
        )}
      </div>
    </section>
  )
}
