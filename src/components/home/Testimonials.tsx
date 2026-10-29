import { testimonials } from '../../content/site'
import Reveal from '../ui/Reveal'
import { Section, SectionHeading } from '../ui/Section'
import { QuoteIcon } from '../ui/Icons'

/**
 * Renders only real, approved testimonials. When none exist the whole section
 * is omitted — we never fall back to invented quotes.
 */
export default function Testimonials() {
  const published = testimonials.items.filter(
    (item) => !item.placeholder && item.quote.trim().length > 0,
  )

  if (published.length === 0) return null

  return (
    <Section id="testimonials">
      <Reveal>
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.heading}
        />
      </Reveal>

      <ul className="mt-12 grid gap-5 lg:grid-cols-3">
        {published.map((item, index) => {
          const initials = item.name
            .split(' ')
            .map((part) => part[0])
            .filter(Boolean)
            .slice(0, 2)
            .join('')
            .toUpperCase()

          return (
            <li key={item.id}>
              <Reveal delay={index * 80} className="h-full">
                <figure className="flex h-full flex-col rounded-card border border-ink/10 bg-white p-7 transition duration-250 ease-out hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift">
                  <QuoteIcon className="h-7 w-7 text-accent" />

                  <blockquote className="mt-5 text-[16px] leading-relaxed text-ink/75">
                    {item.quote}
                  </blockquote>

                  <figcaption className="mt-auto flex items-center gap-3.5 border-t border-ink/8 pt-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 font-display text-[15px] font-bold text-accent">
                      {initials}
                    </span>
                    <span>
                      <span className="block font-display text-[15px] font-bold text-ink">
                        {item.name}
                      </span>
                      <span className="block text-[13px] text-ink/55">
                        {item.role}
                        {item.company ? `, ${item.company}` : ''}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
