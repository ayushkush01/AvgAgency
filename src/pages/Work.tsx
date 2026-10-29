import Seo from '../components/Seo'
import PageHero from '../components/layout/PageHero'
import FinalCta from '../components/home/FinalCta'
import ActionButton from '../components/ui/ActionButton'
import Reveal from '../components/ui/Reveal'
import { PlaceholderNotice, Section, SectionHeading, Tag } from '../components/ui/Section'
import { ArrowRightIcon, ChartIcon, ShieldIcon } from '../components/ui/Icons'
import { pages, results } from '../content/site'

const copy = pages.work

export default function Work() {
  const hasRealMetrics = results.metrics.some((metric) => !metric.placeholder)
  const caseStudies = results.caseStudies

  return (
    <>
      <Seo
        title="Our Work — Influencer & UGC Campaign Case Studies"
        description="Client-approved influencer marketing and UGC campaign results. We publish only verified numbers — everything else stays as a clearly marked placeholder."
        path="/work"
      />

      <PageHero eyebrow={copy.eyebrow} title={copy.h1} description={copy.paragraph}>
        <ActionButton
          to={copy.cta.to}
          variant="primary"
          event="cta_click"
          eventLabel={`Work — ${copy.cta.label}`}
          icon={<ArrowRightIcon className="h-4 w-4" />}
        >
          {copy.cta.label}
        </ActionButton>
      </PageHero>

      {/* Performance snapshot */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={results.eyebrow}
            title={copy.metricsTitle}
            description={results.paragraph}
          />
        </Reveal>

        {!hasRealMetrics && (
          <Reveal delay={60}>
            <div className="mt-10">
              <PlaceholderNotice
                icon={<ShieldIcon className="h-5 w-5" />}
                title={results.emptyState.title}
                body={results.emptyState.body}
              />
            </div>
          </Reveal>
        )}

        <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {results.metrics.map((metric, index) => (
            <li key={metric.id}>
              <Reveal delay={index * 60} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-ink/10 bg-white p-6">
                  <p
                    className={`font-display text-[32px] font-bold leading-none sm:text-[38px] ${
                      metric.placeholder ? 'text-ink/20' : 'text-accent'
                    }`}
                  >
                    {metric.value || '—'}
                  </p>
                  <p className="mt-3 text-[15px] font-bold text-ink">{metric.label}</p>
                  <p className="mt-1 text-[13px] text-ink/50">{metric.note}</p>
                  {metric.placeholder && (
                    <p className="mt-3 inline-flex w-fit items-center rounded-full bg-mist px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-ink/40">
                      Awaiting data
                    </p>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Case studies */}
      <Section tone="mist">
        <Reveal>
          <SectionHeading
            title={copy.caseStudiesTitle}
            description={results.caseStudiesEmptyState.body}
          />
        </Reveal>

        {caseStudies.length > 0 ? (
          <ul className="mt-12 grid gap-5 lg:grid-cols-2">
            {caseStudies.map((study, index) => (
              <li key={study.id}>
                <Reveal delay={index * 80} className="h-full">
                  <article className="flex h-full flex-col rounded-panel border border-ink/10 bg-white p-7 sm:p-8">
                    <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-accent">
                      {study.category}
                    </p>
                    <h3 className="mt-3 text-[22px] leading-tight">{study.client}</h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
                      {study.summary}
                    </p>

                    {study.deliverables.length > 0 && (
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {study.deliverables.map((item) => (
                          <li key={item}>
                            <Tag>{item}</Tag>
                          </li>
                        ))}
                      </ul>
                    )}

                    <p className="mt-6 border-t border-ink/8 pt-6 text-[15px] font-bold text-ink">
                      {study.resultLine}
                    </p>

                    {study.href && (
                      <div className="mt-6">
                        <ActionButton
                          href={study.href}
                          variant="text"
                          event="cta_click"
                          eventLabel={`Case study — ${study.client}`}
                          icon={<ArrowRightIcon className="h-4 w-4" />}
                        >
                          Read the case study
                        </ActionButton>
                      </div>
                    )}
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        ) : (
          <Reveal delay={80}>
            <div className="mt-10 flex flex-col items-start gap-6 rounded-panel border border-dashed border-ink/20 bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist text-accent">
                  <ChartIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-[18px] font-bold text-ink">
                    {results.caseStudiesEmptyState.title}
                  </p>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-ink/55">
                    {results.caseStudiesEmptyState.body}
                  </p>
                </div>
              </div>

              <ActionButton
                to={copy.cta.to}
                variant="primary"
                className="w-full shrink-0 px-5 sm:w-auto"
                event="cta_click"
                eventLabel={`Work empty state — ${copy.cta.label}`}
                icon={<ArrowRightIcon className="h-4 w-4" />}
              >
                {copy.cta.label}
              </ActionButton>
            </div>
          </Reveal>
        )}

        <Reveal delay={100}>
          <div className="mt-14 flex flex-col items-start gap-6 rounded-panel border border-ink/10 bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
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
              eventLabel={`Work closing — ${copy.cta.label}`}
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
