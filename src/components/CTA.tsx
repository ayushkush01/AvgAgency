import { cta } from '../data/content'
import { ArrowRightIcon } from './ui/Icons'
import Reveal from './ui/Reveal'

export default function CTA({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      {/* Large tilted peach shape anchored to the right edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-1/2 hidden h-[360px] w-[400px] -translate-y-1/2 rotate-[18deg] rounded-[72px] bg-peach lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-6 h-44 w-44 rotate-12 rounded-[48px] bg-peach/70 lg:hidden"
      />

      <div className="shell relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{cta.eyebrow}</p>
          <h2 className="mt-4 font-display text-[34px] font-bold leading-[1.1] tracking-[-0.025em] sm:text-[42px] lg:text-[50px]">
            {cta.heading}
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink/65 sm:text-[17px]">
            {cta.paragraph}
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <button onClick={onContactClick} className="btn-accent">
              {cta.button.label}
              <ArrowRightIcon className="h-4 w-4" />
            </button>
            <a
              href={`mailto:${cta.email}`}
              className="text-[15px] font-semibold text-ink/70 underline-offset-4 transition-colors duration-200 hover:text-accent hover:underline sm:text-[16px]"
            >
              {cta.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
