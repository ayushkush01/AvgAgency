import Seo from '../components/Seo'
import PageHero from '../components/layout/PageHero'
import CampaignProcess from '../components/home/CampaignProcess'
import FinalCta from '../components/home/FinalCta'
import ActionButton from '../components/ui/ActionButton'
import Reveal from '../components/ui/Reveal'
import { Section, SectionHeading } from '../components/ui/Section'
import { ArrowRightIcon, CheckIcon, GlobeIcon } from '../components/ui/Icons'
import { markets, pages } from '../content/site'

const copy = pages.about

export default function About() {
  return (
    <>
      <Seo
        title="About Us — Influencer Marketing & UGC Agency"
        description="AVG Agency connects brands with creators who drive results across the USA, UK, UAE and India. Client-approved numbers only, audience fit before follower count."
        path="/about"
      />

      <PageHero eyebrow={copy.eyebrow} title={copy.h1} description={copy.paragraph}>
        <ActionButton
          to={copy.cta.to}
          variant="primary"
          event="cta_click"
          eventLabel={`About — ${copy.cta.label}`}
          icon={<ArrowRightIcon className="h-4 w-4" />}
        >
          {copy.cta.label}
        </ActionButton>
      </PageHero>

      {/* How we operate */}
      <Section>
        <Reveal>
          <SectionHeading title={copy.valuesTitle} />
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {copy.values.map((value, index) => (
            <li key={value.title}>
              <Reveal delay={index * 70} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-ink/10 bg-white p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[19px] leading-tight">{value.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Markets */}
      <Section tone="mist">
        <Reveal>
          <SectionHeading
            title={copy.networkTitle}
            description={markets.label}
          />
        </Reveal>

        <Reveal delay={60}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {markets.regions.map((region) => (
              <li key={region.name}>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-white px-5 py-3 text-[14px] font-bold text-ink shadow-soft">
                  <GlobeIcon className="h-4 w-4 text-accent" />
                  <span aria-hidden="true">{region.flag}</span>
                  {region.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
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
              eventLabel={`About closing — ${copy.cta.label}`}
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
