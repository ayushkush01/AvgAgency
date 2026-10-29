import Seo from '../components/Seo'
import JsonLd from '../components/JsonLd'
import { serviceSchema } from '../lib/schema'
import PageHero from '../components/layout/PageHero'
import CampaignProcess from '../components/home/CampaignProcess'
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
        >
          {copy.cta.label}
        </ActionButton>
        <ActionButton
          to={copy.secondaryCta.to}
          variant="secondary"
          event="cta_click"
          eventLabel={`Services — ${copy.secondaryCta.label}`}
        >
          {copy.secondaryCta.label}
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
                <article className="grid gap-8 rounded-panel border border-ink/10 bg-white p-7 sm:p-9 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:p-12">
                  <div>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="h-7 w-7" />
                    </span>

                    <h2 className="mt-7 text-[26px] leading-tight sm:text-[30px]">
                      {service.title}
                    </h2>

                    <p className="mt-2 text-[13px] font-bold uppercase tracking-[0.14em] text-accent">
                      {service.tagline}
                    </p>

                    <p className="mt-5 text-[15px] leading-relaxed text-ink/60 sm:text-[16px]">
                      {service.description}
                    </p>

                    <div className="mt-8">
                      <ActionButton
                        to={service.cta.to}
                        variant="text"
                        event="cta_click"
                        eventLabel={`Services — ${service.title} — ${service.cta.label}`}
                        icon={<ArrowRightIcon className="h-4 w-4" />}
                      >
                        {service.cta.label}
                      </ActionButton>
                    </div>
                  </div>

                  <div className="rounded-card border border-ink/10 bg-mist/60 p-6 sm:p-7">
                    <p className="flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.16em] text-ink/50">
                      <TargetIcon className="h-4 w-4 text-accent" />
                      {copy.includesTitle}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span className="text-[15px] text-ink/75">{feature}</span>
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

      <Section>
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-panel border border-ink/10 bg-mist/60 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h2 className="text-[22px] leading-tight sm:text-[26px]">
                {copy.closing.heading}
              </h2>
              <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-ink/60">
                {copy.closing.body}
              </p>
            </div>
            <ActionButton
              to={copy.cta.to}
              variant="primary"
              className="w-full shrink-0 sm:w-auto"
              event="cta_click"
              eventLabel={`Services closing — ${copy.cta.label}`}
              icon={<ArrowRightIcon className="h-4 w-4" />}
            >
              {copy.cta.label}
            </ActionButton>
          </div>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  )
}
