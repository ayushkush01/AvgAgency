import Seo from '../components/Seo'
import JsonLd from '../components/JsonLd'
import { serviceSchema } from '../lib/schema'
import PageHero from '../components/layout/PageHero'
import CampaignProcess from '../components/home/CampaignProcess'
import Packages from '../components/home/Packages'
import FinalCta from '../components/home/FinalCta'
import ActionButton from '../components/ui/ActionButton'
import Reveal from '../components/ui/Reveal'
import { Section, SectionHeading } from '../components/ui/Section'
import {
  ArrowRightIcon,
  CheckIcon,
  TargetIcon,
  serviceIconMap,
} from '../components/ui/Icons'
import { pages, services } from '../content/site'

const copy = pages.services

export default function Services() {
  return (
    <>
      <Seo
        title="Influencer Marketing & UGC Content Creation Services"
        description="Influencer marketing and UGC content creation for brands in the USA, UK, UAE and India. Creator sourcing, campaign strategy, briefs, production and reporting — managed end to end."
        path="/services"
      />
      <JsonLd data={serviceSchema()} />

      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.h1}
        description={copy.paragraph}
      >
        <ActionButton
          to={copy.cta.to}
          variant="primary"
          event="cta_click"
          eventLabel={`Services — ${copy.cta.label}`}
          icon={<ArrowRightIcon className="h-4 w-4" />}
          className="h-12 px-8"
        >
          {copy.cta.label}
        </ActionButton>
      </PageHero>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={services.eyebrow}
            title={services.heading}
            description={services.paragraph}
          />
        </Reveal>

        <div className="mt-12 space-y-6 lg:mt-14">
          {services.items.map((service, index) => {
            const Icon = serviceIconMap[service.icon]

            return (
              <Reveal key={service.id} delay={index * 80}>
                <article className="grid gap-8 rounded-panel border border-line bg-white p-7 sm:p-9 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:p-12 shadow-soft hover:shadow-lift transition-shadow duration-300">
                  <div>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                      <Icon className="h-7 w-7" />
                    </span>

                    <h2 className="mt-7 text-[26px] font-bold leading-tight text-ink sm:text-[30px]">
                      {service.title}
                    </h2>

                    <p className="mt-2 text-[14px] font-bold uppercase tracking-[0.14em] text-accent">
                      {service.tagline}
                    </p>

                    <p className="mt-5 text-[16px] leading-relaxed text-body/70">
                      {service.description}
                    </p>

                    <div className="mt-8">
                      <ActionButton
                        to={service.cta.to}
                        variant="text"
                        event="cta_click"
                        eventLabel={`Services — ${service.title} — ${service.cta.label}`}
                        icon={<ArrowRightIcon className="h-4 w-4" />}
                        className="font-bold"
                      >
                        {service.cta.label}
                      </ActionButton>
                    </div>
                  </div>

                  <div className="rounded-card border border-line bg-subtle p-6 sm:p-10">
                    <p className="flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.16em] text-ink/50">
                      <TargetIcon className="h-4 w-4 text-accent" />
                      {copy.includesTitle}
                    </p>

                    <ul className="mt-6 space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                            <CheckIcon className="h-3 w-3" />
                          </div>
                          <span className="text-[15px] font-medium text-body/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <CampaignProcess />

      <Packages />

      <Section>
        <Reveal>
          <div className="rounded-panel border border-line bg-white p-8 sm:p-12 lg:p-16 shadow-soft">
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-[28px] font-bold leading-tight text-ink sm:text-[36px]">
                  {copy.closing.heading}
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-body/70 max-w-2xl">
                  {copy.closing.body}
                </p>
              </div>
              <ActionButton
                to={copy.cta.to}
                variant="primary"
                event="cta_click"
                eventLabel="Services Closing CTA"
                className="h-14 px-10 text-[16px]"
                icon={<ArrowRightIcon className="h-5 w-5" />}
              >
                Get a custom quote
              </ActionButton>
            </div>
          </div>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  )
}
