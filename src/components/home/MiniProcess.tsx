import { miniProcess } from '../../content/site'
import Reveal from '../ui/Reveal'
import { SectionHeading } from '../ui/Section'

export default function MiniProcess() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="shell">
        <Reveal>
        <SectionHeading
          eyebrow={miniProcess.eyebrow}
          title={miniProcess.heading}
        />
      </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-12">
          {miniProcess.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 100} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink font-display text-[20px] font-bold text-white shadow-lift">
                  0{index + 1}
                </div>
                
                {index < miniProcess.steps.length - 1 && (
                  <div className="absolute left-[calc(50%+40px)] top-8 hidden h-px w-[calc(100%-80px)] bg-line lg:block" aria-hidden="true" />
                )}

                <h3 className="mt-8 text-[20px] font-bold text-ink">{step.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-body/70 max-w-[280px]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
