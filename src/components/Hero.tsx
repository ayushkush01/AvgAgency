import { hero } from '../data/content'
import { ArrowRightIcon } from './ui/Icons'

export default function Hero() {
  return (
    <section
      id="home"
      className="dot-grid relative overflow-hidden bg-white pb-20 pt-14 sm:pb-24 lg:pb-28 lg:pt-20"
    >
      {/* Softens the dotted texture toward the edges of the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white"
      />

      <div className="shell relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* ---------------- Copy ---------------- */}
        <div>
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 font-display text-[38px] font-bold leading-[1.06] tracking-[-0.025em] sm:text-[52px] lg:text-[62px]">
            <span className="block text-ink">{hero.headingLine1}</span>
            <span className="relative isolate mt-1 inline-block text-accent highlight-underline">
              {hero.headingLine2}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink/65 sm:text-[17px]">
            {hero.paragraph}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a href={hero.primaryCta.href} className="btn-accent">
              {hero.primaryCta.label}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a href={hero.secondaryCta.href} className="btn-ghost">
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="mt-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40 sm:text-[12px]">
              {hero.trustLabel}
            </p>
            <ul className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4">
              {hero.brands.map((name) => (
                <li
                  key={name}
                  className="text-[15px] font-semibold text-ink/25 transition-colors duration-200 hover:text-ink/60 sm:text-base"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------------- Visual ---------------- */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-peach sm:h-80 sm:w-80 lg:-right-12 lg:-top-12"
          />

          <div className="relative">
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              width={1200}
              height={900}
              loading="eager"
              decoding="async"
              className="aspect-[4/3] w-full rounded-[32px] object-cover shadow-soft"
            />

            {/* Orange badge, top-left of the photo */}
            <div className="absolute left-6 top-6 rounded-[20px] bg-accent px-5 py-3.5 text-white shadow-lift sm:left-7 sm:top-7 sm:px-6">
              <p className="font-display text-[18px] font-bold leading-none sm:text-[20px]">
                {hero.badge.value}
              </p>
              <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/85 sm:text-[12px]">
                {hero.badge.label}
              </p>
            </div>

            {/* White floating stat card, bottom-right */}
            <div className="absolute -bottom-6 right-6 rounded-[20px] bg-white px-6 py-5 shadow-float sm:right-8">
              <p className="font-display text-[24px] font-bold leading-none text-ink sm:text-[28px]">
                {hero.floatCard.value}
              </p>
              <p className="mt-2 text-[12px] font-medium text-ink/55 sm:text-[13px]">
                {hero.floatCard.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
