import Seo from '../components/Seo'
import PageHero from '../components/layout/PageHero'
import CreatorApplicationForm from '../components/forms/CreatorApplicationForm'
import ActionButton from '../components/ui/ActionButton'
import Reveal from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'
import { ArrowRightIcon, CheckIcon } from '../components/ui/Icons'
import { forms, pages } from '../content/site'

const copy = pages.join

export default function Join() {
  return (
    <>
      <Seo
        title="Join Our Creator Network — Apply as a Creator"
        description="Apply to join the AVG Agency creator network. We work with Instagram, YouTube and TikTok creators across India and international markets on paid campaigns and UGC."
        path="/join"
      />

      <PageHero eyebrow={copy.eyebrow} title={copy.h1} description={copy.paragraph} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.55fr] lg:gap-10">
          <Reveal>
            <aside className="h-full rounded-panel border border-ink/10 bg-mist/60 p-7 sm:p-8">
              <h2 className="text-[22px] leading-tight">{copy.benefitsTitle}</h2>

              <ul className="mt-6 space-y-3.5">
                {copy.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-[15px] leading-relaxed text-ink/70">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-ink/10 pt-6">
                <ul className="space-y-2.5">
                  {forms.creator.notes.map((note) => (
                    <li
                      key={note}
                      className="text-[13.5px] leading-relaxed text-ink/50"
                    >
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={80}>
            <CreatorApplicationForm />
          </Reveal>
        </div>
      </Section>

      <Section tone="mist">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-panel border border-ink/10 bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h2 className="text-[22px] leading-tight sm:text-[26px]">
                {copy.closing.heading}
              </h2>
              <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-ink/60">
                {copy.closing.body}
              </p>
            </div>
            <ActionButton
              to="/contact"
              variant="primary"
              className="w-full shrink-0 sm:w-auto"
              event="cta_click"
              eventLabel="Join closing — Start a Campaign"
              icon={<ArrowRightIcon className="h-4 w-4" />}
            >
              Start a Campaign
            </ActionButton>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
