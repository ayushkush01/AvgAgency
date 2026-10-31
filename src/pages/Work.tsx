import Seo from '../components/Seo'
import PageHero from '../components/layout/PageHero'
import FinalCta from '../components/home/FinalCta'
import ActionButton from '../components/ui/ActionButton'
import Reveal from '../components/ui/Reveal'
import { Section, SectionHeading } from '../components/ui/Section'
import { ArrowRightIcon, ChartIcon, CheckIcon } from '../components/ui/Icons'
import { pages, results } from '../content/site'

const copy = pages.work

export default function Work() {
  return (
    <>
      <Seo
        title="Our Work — Influencer & UGC Campaign Case Studies"
        description="Client-approved influencer marketing and UGC campaign results. We publish only verified numbers and measure success through clear metrics."
        path="/work"
      />

      <PageHero eyebrow={copy.eyebrow} title={copy.h1} description={copy.paragraph}>
        <ActionButton
          to={copy.cta.to}
          variant="primary"
          event="cta_click"
          eventLabel={`Work — ${copy.cta.label}`}
          icon={<ArrowRightIcon className="h-4 w-4" />}
          className="h-12 px-8"
        >
          {copy.cta.label}
        </ActionButton>
      </PageHero>

      {/* How we measure success */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={results.eyebrow}
            title={copy.metricsTitle}
            description="We focus on metrics that drive business growth. Here is how we track and report on campaign performance."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.metrics.map((metric, index) => (
            <Reveal key={metric.id} delay={index * 100}>
              <div className="card group h-full p-8 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <ChartIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-[18px] font-bold text-ink">{metric.label}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-body/70">
                  {metric.note}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-accent">
                  <CheckIcon className="h-3.5 w-3.5" />
                  Verified Metric
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Case studies template */}
      <Section tone="mist">
        <div className="shell">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                title={copy.caseStudiesTitle}
                description="We are currently compiling client-approved case studies for our latest campaigns in the USA, UK, UAE and India. In the meantime, you can request our full campaign deck."
              />
              
              <div className="mt-10">
                <ActionButton
                  to={copy.caseStudyCta.to}
                  variant="primary"
                  event="cta_click"
                  eventLabel="Work — Request Deck"
                  icon={<ArrowRightIcon className="h-4 w-4" />}
                  className="h-12 px-8"
                >
                  {copy.caseStudyCta.label}
                </ActionButton>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative aspect-[4/3] rounded-panel overflow-hidden bg-ink shadow-lift">
                <div aria-hidden="true" className="line-grid-dark absolute inset-0 opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm mb-6">
                      <ChartIcon className="h-8 w-8" />
                    </div>
                    <p className="text-[18px] font-bold text-white">Full Campaign Deck</p>
                    <p className="mt-2 text-[14px] text-white/40">Includes strategy, creator selection, and deep-dive results.</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Category Specific CTA */}
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
                eventLabel="Work Closing CTA"
                className="h-14 px-10 text-[16px]"
                icon={<ArrowRightIcon className="h-5 w-5" />}
              >
                Start a Conversation
              </ActionButton>
            </div>
          </div>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  )
}
