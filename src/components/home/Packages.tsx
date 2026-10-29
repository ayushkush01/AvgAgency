import { packages } from '../../content/site'
import ActionButton from '../ui/ActionButton'
import Reveal from '../ui/Reveal'
import { Section, SectionHeading } from '../ui/Section'
import { ArrowRightIcon, CheckIcon } from '../ui/Icons'

export default function Packages() {
  return (
    <Section id="packages">
      <Reveal>
        <SectionHeading
          eyebrow={packages.eyebrow}
          title={packages.heading}
          description={packages.paragraph}
        />
      </Reveal>

      <ul className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
        {packages.items.map((tier, index) => (
          <li key={tier.id}>
            <Reveal delay={index * 80} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-panel border p-8 transition duration-250 ease-out hover:-translate-y-1 hover:shadow-lift ${
                  tier.highlighted
                    ? 'border-accent bg-accent/[0.02] shadow-soft'
                    : 'border-line bg-white'
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-accent px-4 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-white">
                    Recommended
                  </span>
                )}

                <h3 className="text-[24px] font-bold leading-tight text-ink">{tier.name}</h3>

                <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.12em] text-muted">
                  {tier.audience}
                </p>

                <p className="mt-5 text-[15px] leading-relaxed text-muted">
                  {tier.summary}
                </p>

                <div className="mt-7 border-t border-line pt-7">
                  <p className="text-[14px] font-bold text-ink">
                    {packages.priceLabel}
                  </p>
                </div>

                <ul className="mt-7 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-[15px] text-body/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <ActionButton
                    to={packages.primaryCta.to}
                    variant={tier.highlighted ? 'primary' : 'secondary'}
                    className="w-full h-12"
                    event="cta_click"
                    eventLabel={`${tier.name} — ${packages.primaryCta.label}`}
                    icon={<ArrowRightIcon className="h-4 w-4" />}
                  >
                    {packages.primaryCta.label}
                  </ActionButton>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
