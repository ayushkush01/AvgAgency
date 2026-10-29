import { contact, finalCta } from '../../content/site'
import ActionButton from '../ui/ActionButton'
import Reveal from '../ui/Reveal'
import { ArrowRightIcon, MailIcon } from '../ui/Icons'
import { getMailtoUrl } from '../../lib/links'
import { trackEvent } from '../../lib/analytics'

export default function FinalCta() {
  return (
    <section className="on-dark bg-ink py-24 lg:py-32 relative overflow-hidden">
      {/* Grid background texture */}
      <div aria-hidden="true" className="line-grid-dark absolute inset-0 opacity-4" />
      
      <div className="shell relative text-center">
        <Reveal>
          <p className="eyebrow eyebrow-on-dark justify-center">
            <span aria-hidden="true" className="eyebrow-dot bg-accent-soft" />
            {finalCta.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="mt-6 text-[36px] font-bold leading-tight text-white sm:text-[48px] lg:text-[56px]">
            {finalCta.heading}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-prose text-[17px] leading-relaxed text-white/60 sm:text-[19px]">
            {finalCta.paragraph}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ActionButton
              to={finalCta.primaryCta.to}
              variant="primary"
              className="h-[52px] px-8"
              event="cta_click"
              eventLabel={finalCta.primaryCta.label}
              icon={<ArrowRightIcon className="h-4 w-4" />}
            >
              {finalCta.primaryCta.label}
            </ActionButton>

            <ActionButton
              to="/creators"
              variant="onDark"
              className="h-[52px] px-8"
              event="cta_click"
              eventLabel="Hire Creators"
            >
              Hire Creators
            </ActionButton>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href={getMailtoUrl('New campaign enquiry')}
              onClick={() => trackEvent('email_click', { label: contact.email, location: 'final_cta' })}
              className="group flex items-center gap-3 text-[16px] font-bold text-white transition-colors hover:text-accent-soft"
            >
              <MailIcon className="h-5 w-5 text-accent-soft" />
              {contact.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
