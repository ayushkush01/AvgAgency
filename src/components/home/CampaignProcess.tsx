import { process } from '../../content/site'
import Reveal from '../ui/Reveal'
import { Section, SectionHeading } from '../ui/Section'

export default function CampaignProcess() {
  const lastIndex = process.steps.length - 1

  return (
    <section id="process" className="on-dark bg-ink py-24 lg:py-32 overflow-hidden relative">
      {/* Grid background texture */}
      <div aria-hidden="true" className="line-grid-dark absolute inset-0 opacity-4" />
      
      <div className="shell relative">
        <Reveal>
          <SectionHeading
            eyebrow={process.eyebrow}
            title={process.heading}
            description={process.paragraph}
            tone="dark"
          />
        </Reveal>

        <ol className="relative mt-20 grid gap-12 lg:grid-cols-5 lg:gap-8">
          {/* Desktop connector line */}
          <div
            aria-hidden="true"
            className="absolute left-[5%] right-[5%] top-7 hidden h-px bg-white/20 lg:block"
          />

          {process.steps.map((step, index) => (
            <li key={step.number} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent font-display text-[18px] font-bold text-white shadow-[0_0_20px_rgba(37,99,255,0.3)]">
                  {step.number}
                </span>
                {index < lastIndex && (
                  <div
                    aria-hidden="true"
                    className="mt-4 h-12 w-px bg-white/20 lg:hidden"
                  />
                )}
              </div>

              <Reveal delay={index * 80} className="mt-6">
                <h3 className="text-[20px] font-bold text-white leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60 max-w-[280px] lg:max-w-none">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
