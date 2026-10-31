import { whyAvg } from '../../content/site'
import Reveal from '../ui/Reveal'
import { SectionHeading } from '../ui/Section'
import { CheckIcon } from '../ui/Icons'

export default function WhyAvg() {
  return (
    <section className="bg-subtle py-24 lg:py-32">
      <div className="shell">
        <Reveal>
        <SectionHeading
          eyebrow={whyAvg.eyebrow}
          title={whyAvg.heading}
        />
      </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {whyAvg.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="card h-full p-8 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-[18px] font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-body/70">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
