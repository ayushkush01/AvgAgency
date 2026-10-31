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
  CheckIcon,
} from '../components/ui/Icons'
import { pages } from '../content/site'
import { creators, creatorFilters } from '../content/creators'
import CreatorApplicationForm from '../components/forms/CreatorApplicationForm'

const copy = pages.creators

function FilterChips({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string
  options: readonly string[]
  onChange: (value: string) => void
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-muted">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = value === (option === 'All' ? '' : option)
          return (
            <button
              key={option}
              onClick={() => onChange(option === 'All' ? '' : option)}
              className={`rounded-full px-4 py-1.5 text-[13px] font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-accent text-white shadow-soft'
                  : 'bg-white text-ink/60 border border-line hover:border-ink/20 hover:text-ink'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
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
    return creators.filter((item) => {
      if (category && item.niche !== category) return false
      if (country && item.country !== country) return false
      if (platform && !item.platforms.includes(platform as any)) return false
      return true
    })
  }, [category, country, platform])

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
          to="#apply"
          variant="secondary"
          event="cta_click"
          eventLabel="Creators — Apply to join"
          className="h-12 px-8"
        >
          Join Our Creator Network
        </ActionButton>
      </PageHero>

      <Section>
        <div className="shell">
          {/* Filters Panel */}
          <Reveal>
            <div className="rounded-panel border border-line bg-subtle/50 p-6 sm:p-10">
              <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between border-b border-line pb-6">
                  <p className="flex items-center gap-2.5 font-display text-[14px] font-bold uppercase tracking-[0.16em] text-ink">
                    <SearchIcon className="h-5 w-5 text-accent" />
                    {copy.filters.title}
                  </p>
                  {hasFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-[13px] font-bold text-accent hover:text-accent-hover underline underline-offset-4"
                    >
                      {copy.filters.clear}
                    </button>
                  )}
                </div>

                <div className="grid gap-10">
                  <FilterChips
                    label={copy.filters.category}
                    value={category}
                    options={creatorFilters.categories}
                    onChange={(val) => setFilter('category', val)}
                  />
                  <FilterChips
                    label={copy.filters.country}
                    value={country}
                    options={creatorFilters.countries}
                    onChange={(val) => setFilter('country', val)}
                  />
                  <FilterChips
                    label={copy.filters.platform}
                    value={platform}
                    options={creatorFilters.platforms}
                    onChange={(val) => setFilter('platform', val)}
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Results Summary */}
          <Reveal delay={100} className="mt-12 flex items-center justify-between">
            <p aria-live="polite" className="text-[15px] text-body/70">
              Showing <span className="font-bold text-ink">{filtered.length}</span>{' '}
              {copy.filters.resultsLabel}
            </p>
          </Reveal>

          {/* Grid */}
          {filtered.length > 0 ? (
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
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
              <div className="mt-12 rounded-panel border border-line bg-white p-16 text-center shadow-soft">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-subtle text-ink/20">
                  <SearchIcon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-[22px] font-bold text-ink">
                  {copy.filters.noResults.title}
                </h3>
                <p className="mt-3 text-[16px] text-body/70 max-w-md mx-auto">
                  {copy.filters.noResults.body}
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <ActionButton
                    variant="ghost"
                    onClick={clearFilters}
                    className="h-11 px-6"
                  >
                    Clear all filters
                  </ActionButton>
                  <ActionButton
                    to={copy.cta.to}
                    variant="primary"
                    className="h-11 px-6"
                  >
                    Tell us who you need
                  </ActionButton>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </Section>

      {/* Why Join Section */}
      <Section tone="mist">
        <div className="shell">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="For Creators"
                title={copy.whyJoin.title}
              />
              <ul className="mt-10 space-y-5">
                {copy.whyJoin.items.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-soft">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-[16px] font-medium text-body/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100} className="relative">
              <div className="aspect-square rounded-panel overflow-hidden bg-ink p-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-accent text-white shadow-glow animate-float">
                    <UserPlusIcon className="h-10 w-10" />
                  </div>
                  <h4 className="mt-8 text-[24px] font-bold text-white">
                    Start your application
                  </h4>
                  <p className="mt-4 text-[15px] text-white/60">
                    Takes less than 2 minutes to join the roster.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Application Form */}
      <Section id="apply">
        <div className="shell max-w-4xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-[32px] font-bold text-ink sm:text-[40px]">
                Apply to the network
              </h2>
              <p className="mt-4 text-[17px] text-body/70">
                Join creators working with brands in the USA, UK, UAE, and India.
              </p>
            </div>
            <CreatorApplicationForm />
          </Reveal>
        </div>
      </Section>
    </>
  )
}
