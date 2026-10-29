import { Link } from 'react-router-dom'
import { creatorCategories } from '../../content/site'
import { trackEvent } from '../../lib/analytics'
import Reveal from '../ui/Reveal'
import { Section, SectionHeading } from '../ui/Section'
import { ArrowUpRightIcon, categoryIconMap } from '../ui/Icons'

export default function CreatorCategories() {
  return (
    <Section id="categories">
      <Reveal>
        <SectionHeading
          eyebrow={creatorCategories.eyebrow}
          title={creatorCategories.heading}
        />
      </Reveal>

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
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
                  className="group flex h-full flex-col rounded-card border border-ink/10 bg-white p-5 transition duration-250 ease-out hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift sm:p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-250 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>

                  <span className="mt-5 flex items-center gap-1.5 font-display text-[17px] font-bold text-ink">
                    {category.name}
                    <ArrowUpRightIcon className="h-4 w-4 text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </span>

                  <span className="mt-1.5 text-[13px] leading-relaxed text-ink/55">
                    {category.blurb}
                  </span>
                </Link>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
