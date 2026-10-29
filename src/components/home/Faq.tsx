import { faq } from '../../content/site'
import Reveal from '../ui/Reveal'
import { PlusIcon } from '../ui/Icons'
import { Section, SectionHeading } from '../ui/Section'

/**
 * Homepage FAQ. Native <details>/<summary> keeps it keyboard-accessible and
 * ships zero extra JavaScript. The same content is emitted as FAQPage JSON-LD.
 */
export default function Faq() {
  return (
    <Section id="faq" tone="mist">
      <Reveal>
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.heading}
        />
      </Reveal>

      <div className="mx-auto mt-10 max-w-3xl space-y-3 lg:mt-12">
        {faq.items.map((item, index) => (
          <Reveal key={item.question} delay={index * 50}>
            <details className="group rounded-card border border-ink/10 bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6">
                <span className="font-display text-[16px] font-bold text-ink sm:text-[17px]">
                  {item.question}
                </span>
                <PlusIcon className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45" />
              </summary>

              <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink/60 sm:px-6 sm:pb-6">
                {item.answer}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
