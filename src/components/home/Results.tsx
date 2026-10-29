import { results } from '../../content/site'
import ActionButton from '../ui/ActionButton'
import Reveal from '../ui/Reveal'
import { PlaceholderNotice, Section, SectionHeading } from '../ui/Section'
import { ArrowRightIcon, ChartIcon, ShieldIcon } from '../ui/Icons'

export default function Results() {
  const hasRealMetrics = results.metrics.some((metric) => !metric.placeholder)
  const hasCaseStudies = results.caseStudies.length > 0

  return (
    <Section id="results" tone="mist">
      <Reveal>
        <SectionHeading
          eyebrow={results.eyebrow}
          title={results.heading}
          description={results.paragraph}
        />
      </Reveal>

      {/* Metrics */}
      <div className="mt-12">
        <h3 className="eyebrow !tracking-[0.18em] text-ink/45">
          {results.metricsLabel}
        </h3>

        {!hasRealMetrics && (
          <Reveal delay={60}>
            <div className="mt-5">
              <PlaceholderNotice
                icon={<ShieldIcon className="h-5 w-5" />}
                title={results.emptyState.title}
                body={results.emptyState.body}
              />
            </div>
          </Reveal>
        )}

        <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {results.metrics.map((metric, index) => {
            // In production, hide placeholder metrics
            if (!import.meta.env.DEV && metric.placeholder) return null
            
            return (
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
                    <p className="mt-3 text-[15px] font-bold text-ink">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-[13px] text-ink/50">{metric.note}</p>
                    {metric.placeholder && import.meta.env.DEV && (
                      <p className="mt-3 inline-flex w-fit items-center rounded-full bg-mist px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-ink/40">
                        Dev hint: Add in site.ts
                      </p>
                    )}
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Case studies */}
      <div className="mt-14">
        <h3 className="eyebrow !tracking-[0.18em] text-ink/45">
          {results.caseStudiesLabel}
        </h3>

        {hasCaseStudies ? (
          <p className="mt-5 text-[15px] text-ink/55">
            {results.caseStudies.length} published.
          </p>
        ) : (
          <Reveal delay={80}>
            <div className="mt-5 flex flex-col items-start gap-6 rounded-panel border border-dashed border-ink/20 bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
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
                to={results.cta.to}
                variant="primary"
                className="w-full shrink-0 px-5 sm:w-auto"
                event="cta_click"
                eventLabel={results.cta.label}
                icon={<ArrowRightIcon className="h-4 w-4" />}
              >
                {results.cta.label}
              </ActionButton>
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  )
}
