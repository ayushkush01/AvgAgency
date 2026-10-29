import { creatorCategories, creatorNetwork } from '../../content/site'
import ActionButton from '../ui/ActionButton'
import Reveal from '../ui/Reveal'
import { Section, SectionHeading } from '../ui/Section'
import { ArrowRightIcon, ArrowUpRightIcon, categoryIconMap } from '../ui/Icons'
import CreatorCard from '../creators/CreatorCard'
import { Link } from 'react-router-dom'
import { trackEvent } from '../../lib/analytics'

export default function CreatorNetworkPreview() {
  const hasRealCreators = creatorNetwork.items.some((item) => !item.placeholder)
  const preview = creatorNetwork.items.slice(0, 8)

  return (
    <Section id="creators" tone="mist">
      <Reveal>
        <SectionHeading
          eyebrow={creatorNetwork.eyebrow}
          title={creatorNetwork.heading}
          description={creatorNetwork.paragraph}
          action={
            <ActionButton
              to={creatorNetwork.cta.to}
              variant="text"
              event="cta_click"
              eventLabel={creatorNetwork.cta.label}
              icon={<ArrowRightIcon className="h-4 w-4" />}
            >
              {creatorNetwork.cta.label}
            </ActionButton>
          }
        />
      </Reveal>

      {!hasRealCreators ? (
        <Reveal delay={60}>
          <div className="mt-12 rounded-panel border border-line bg-white p-8 sm:p-12 text-center shadow-soft">
            <h3 className="text-[24px] font-bold text-ink sm:text-[28px]">
              We shortlist vetted creators for every brief
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-muted">
              Our full roster is managed privately to ensure quality and exclusivity. 
              Tell us about your brand and target market, and we will build a custom 
              shortlist of creators who fit your goals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ActionButton
                to={creatorNetwork.cta.to}
                variant="primary"
                event="cta_click"
                eventLabel="Request Shortlist"
                icon={<ArrowRightIcon className="h-4 w-4" />}
                className="px-8"
              >
                Request a Creator Shortlist
              </ActionButton>
              <ActionButton
                to={creatorNetwork.overviewCta.to}
                variant="secondary"
                event="cta_click"
                eventLabel={creatorNetwork.overviewCta.label}
                className="px-8"
              >
                {creatorNetwork.overviewCta.label}
              </ActionButton>
            </div>
          </div>
        </Reveal>
      ) : (
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {preview.map((creator, index) => (
            <li key={creator.id}>
              <Reveal delay={(index % 4) * 60} className="h-full">
                <CreatorCard creator={creator} />
              </Reveal>
            </li>
          ))}
        </ul>
      )}

      {/* Category tiles */}
      <div className="mt-20">
        <Reveal>
          <h3 className="text-[20px] font-bold text-ink">Browse by Category</h3>
        </Reveal>
        
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {creatorCategories.items.map((category, index) => {
            const Icon = categoryIconMap[category.icon]

            return (
              <li key={category.slug}>
                <Reveal delay={(index % 4) * 60} className="h-full">
                  <Link
                    to={`/creators?category=${category.slug}`}
                    onClick={() =>
                      trackEvent('cta_click', {
                        label: `category:${category.name}`,
                      })
                    }
                    className="group flex h-full flex-col rounded-card border border-line bg-white p-6 transition duration-250 ease-out hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift"
                  >
                    <span className="icon-tile group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="mt-5 flex items-center gap-1.5 font-display text-[17px] font-bold text-ink">
                      {category.name}
                      <ArrowUpRightIcon className="h-4 w-4 text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </span>

                    <span className="mt-1.5 text-[13px] leading-relaxed text-muted">
                      {category.blurb}
                    </span>
                  </Link>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
