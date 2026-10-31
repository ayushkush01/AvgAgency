import { finalCta, contact } from '../../content/site'
import Reveal from '../ui/Reveal'
import ActionButton from '../ui/ActionButton'
import { ArrowRightIcon, WhatsAppIcon } from '../ui/Icons'
import { getWhatsAppUrl } from '../../lib/links'

export default function FinalCta() {
  const whatsappUrl = getWhatsAppUrl()

  return (
    <section className="on-dark relative overflow-hidden bg-ink py-24 lg:py-32">
      {/* Grid background texture */}
      <div aria-hidden="true" className="line-grid-dark absolute inset-0 opacity-4" />
      
      <div className="shell relative text-center">
        <Reveal>
          <div className="mx-auto flex flex-col items-center max-w-[800px]">
            <span className="eyebrow eyebrow-on-dark mb-6">
              <span aria-hidden="true" className="eyebrow-dot" />
              {finalCta.eyebrow}
            </span>
            <h2 className="text-[32px] font-bold leading-tight text-white sm:text-[48px] lg:text-[56px]">
              {finalCta.heading}
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-white/60 sm:text-[19px]">
              {finalCta.paragraph}
            </p>
            
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <ActionButton
                to={finalCta.primaryCta.to}
                variant="primary"
                className="h-[56px] px-10 text-[16px]"
                event="cta_click"
                eventLabel={finalCta.primaryCta.label}
                icon={<ArrowRightIcon className="h-5 w-5" />}
              >
                {finalCta.primaryCta.label}
              </ActionButton>

              {whatsappUrl && (
                <ActionButton
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="onDark"
                  className="h-[56px] px-10 text-[16px]"
                  event="cta_click"
                  eventLabel="whatsapp_cta"
                  icon={<WhatsAppIcon className="h-5 w-5" />}
                >
                  {finalCta.whatsappLabel}
                </ActionButton>
              )}
            </div>

            <p className="mt-8 text-[13px] font-medium uppercase tracking-[0.1em] text-white/30">
              Or email us at{' '}
              <a
                href={`mailto:${contact.email}`}
                className="text-white/60 transition-colors hover:text-accent-soft underline underline-offset-4"
              >
                {contact.email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
