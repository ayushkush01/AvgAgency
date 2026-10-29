import Seo from '../components/Seo'
import PageHero from '../components/layout/PageHero'
import Reveal from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'
import { pages } from '../content/site'

const copy = pages.privacy

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How AVG Agency collects, uses and protects the information you submit through this site, including cookies, analytics and your right to request deletion."
        path="/privacy"
      />

      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.h1}
        description={copy.intro}
        meta={copy.lastUpdated}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          {copy.sections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 40}>
              <section className="border-b border-ink/10 py-8 first:pt-0 last:border-b-0">
                <h2 className="text-[20px] leading-tight sm:text-[22px]">
                  {section.heading}
                </h2>

                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[15px] leading-relaxed text-ink/65"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
