import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/layout/PageHero'
import CreatorCard from '../components/creators/CreatorCard'
import ActionButton from '../components/ui/ActionButton'
import Reveal from '../components/ui/Reveal'
import { Section, SectionHeading } from '../components/ui/Section'
import {
  ArrowRightIcon,
  SearchIcon,
  UserPlusIcon,
} from '../components/ui/Icons'
import { creatorCategories, creatorNetwork, formOptions, pages } from '../content/site'

const copy = pages.creators

const categoryOptions = creatorCategories.items.map((item) => ({
  value: item.slug,
  label: item.name,
}))

/** Country list is derived from the roster so a filter can never come up empty. */
const countryOptions = Array.from(
  new Set(creatorNetwork.items.map((item) => item.country)),
).map((country) => ({ value: country, label: country }))

const platformOptions = formOptions.platforms.map((platform) => ({
  value: platform,
  label: platform,
}))

function FilterSelect({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string
  label: string
  value: string
  options: readonly { value: string; label: string }[]
  onChange: (value: string) => void
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="field mt-2 appearance-none bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-11"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230A0A0B' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        }}
      >
        <option value="">{copy.filters.all}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default function Creators() {
  const [params, setParams] = useSearchParams()

  const category = params.get('category') ?? ''
  const country = params.get('country') ?? ''
  const platform = params.get('platform') ?? ''
  const hasFilters = Boolean(category || country || platform)

  const setFilter = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const clearFilters = () => setParams(new URLSearchParams(), { replace: true })

  const filtered = useMemo(() => {
    const categoryName = category
      ? creatorCategories.items.find((item) => item.slug === category)?.name
      : undefined

    return creatorNetwork.items.filter((item) => {
      // In production, hide placeholders from the filter results
      if (!import.meta.env.DEV && item.placeholder) return false
      
      if (categoryName && item.niche !== categoryName) return false
      if (country && item.country !== country) return false
      if (platform && item.platform !== platform) return false
      return true
    })
  }, [category, country, platform])

  const hasRealCreators = creatorNetwork.items.some((item) => !item.placeholder)

  return (
    <>
      <Seo
        title="Creator Network — Browse Creators by Category & Country"
        description="Browse vetted Instagram, YouTube and TikTok creators across India, the USA, UK and UAE. Filter by category, country and platform to build your campaign shortlist."
        path="/creators"
      />

      <PageHero eyebrow={copy.eyebrow} title={copy.h1} description={copy.paragraph}>
        <ActionButton
          to={copy.cta.to}
          variant="primary"
          event="cta_click"
          eventLabel={`Creators — ${copy.cta.label}`}
          icon={<ArrowRightIcon className="h-4 w-4" />}
          className="h-12 px-8"
        >
          {copy.cta.label}
        </ActionButton>
        <ActionButton
          to={copy.joinCta.to}
          variant="secondary"
          event="cta_click"
          eventLabel={`Creators — ${copy.joinCta.label}`}
          className="h-12 px-8"
        >
          {copy.joinCta.label}
        </ActionButton>
      </PageHero>

      <Section>
        {!hasRealCreators ? (
          <Reveal>
            <div className="rounded-panel border border-line bg-white p-8 sm:p-12 text-center shadow-soft max-w-4xl mx-auto">
              <h3 className="text-[24px] font-bold text-ink sm:text-[30px]">
                We shortlist vetted creators for every brief
              </h3>
              <p className="mt-4 text-[17px] leading-relaxed text-muted">
                Our full roster is managed privately to ensure quality and exclusivity. 
                Tell us about your brand and target market, and we will build a custom 
                shortlist of creators who fit your goals.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ActionButton
                  to={copy.cta.to}
                  variant="primary"
                  event="cta_click"
                  eventLabel="Request Shortlist"
                  icon={<ArrowRightIcon className="h-4 w-4" />}
                  className="h-12 px-8"
                >
                  Request a Creator Shortlist
                </ActionButton>
                <ActionButton
                  to={copy.joinCta.to}
                  variant="secondary"
                  event="cta_click"
                  eventLabel="Join Network"
                  className="h-12 px-8"
                >
                  Join Our Creator Network
                </ActionButton>
              </div>
            </div>
          </Reveal>
        ) : (
          <>
            {/* Filters */}
            <Reveal>
              <div className="rounded-panel border border-line bg-white p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.16em] text-muted">
                    <SearchIcon className="h-4 w-4 text-accent" />
                    {copy.filters.title}
                  </p>
                  <p aria-live="polite" className="text-[14px] text-muted">
                    <span className="font-bold text-ink">{filtered.length}</span>{' '}
                    {copy.filters.resultsLabel}
                  </p>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <FilterSelect
                    id="filter-category"
                    label={copy.filters.category}
                    value={category}
                    options={categoryOptions}
                    onChange={(value) => setFilter('category', value)}
                  />
                  <FilterSelect
                    id="filter-country"
                    label={copy.filters.country}
                    value={country}
                    options={countryOptions}
                    onChange={(value) => setFilter('country', value)}
                  />
                  <FilterSelect
                    id="filter-platform"
                    label={copy.filters.platform}
                    value={platform}
                    options={platformOptions}
                    onChange={(value) => setFilter('platform', value)}
                  />

                  <div className="flex items-end">
                    <button
                      type="button"
                      onClick={clearFilters}
                      disabled={!hasFilters}
                      className="btn-ghost w-full h-[52px] px-5 text-[14px] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      {copy.filters.clear}
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Results */}
            {filtered.length > 0 ? (
              <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                {filtered.map((creator, index) => (
                  <li key={creator.id}>
                    <Reveal delay={(index % 4) * 60} className="h-full">
                      <CreatorCard creator={creator} />
                    </Reveal>
                  </li>
                ))}
              </ul>
            ) : (
              <Reveal delay={60}>
                <div className="mt-12 rounded-panel border border-line bg-subtle p-12 text-center">
                  <SearchIcon className="mx-auto h-10 w-10 text-muted/30" />
                  <h3 className="mt-5 text-[20px] font-bold text-ink">
                    {copy.filters.noResults.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-muted">
                    {copy.filters.noResults.body}
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-6 font-bold text-accent hover:text-accent-hover"
                  >
                    Clear all filters
                  </button>
                </div>
              </Reveal>
            )}
          </>
        )}
      </Section>

      <Section tone="mist">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionHeading
              title="Are you a creator?"
              description="Join the network and get matched with brands in your category, in your market. We work with creators across Instagram, TikTok and YouTube."
            />
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-10 flex flex-wrap gap-4">
              <ActionButton
                to={copy.joinCta.to}
                variant="primary"
                event="cta_click"
                eventLabel={`Creators band — ${copy.joinCta.label}`}
                icon={<UserPlusIcon className="h-5 w-5" />}
                className="h-12 px-8"
              >
                {copy.joinCta.label}
              </ActionButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
