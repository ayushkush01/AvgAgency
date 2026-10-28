import { process } from '../data/content'
import Reveal from './ui/Reveal'

export default function HowWeWork() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{process.eyebrow}</p>
          <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[38px] lg:text-[44px]">
            {process.heading}
          </h2>
        </Reveal>

        <div className="relative mt-10 sm:mt-12">
          {/* Thin pink connector running behind the numbered circles */}
          <div
            aria-hidden="true"
            className="absolute left-[6%] right-[6%] top-[28px] hidden h-[1px] rounded-full bg-peachdeep lg:block"
          />

          <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.steps.map((step, index) => (
              <li key={step.number} className="h-full">
                <Reveal delay={index * 90} className="h-full">
                  <div className="card flex h-full flex-col bg-white p-6 transition-[transform,box-shadow] duration-250 ease-out hover:-translate-y-1.5 hover:shadow-lift lg:p-8">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent font-display text-[19px] font-bold text-white shadow-[0_4px_12px_rgba(255,77,46,0.3)]">
                      {step.number}
                    </span>
                    <h3 className="mt-7 font-display text-[21px] font-bold tracking-[-0.01em] sm:text-[22px]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
