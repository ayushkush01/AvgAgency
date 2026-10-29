import Seo from '../components/Seo'
import PageHero from '../components/layout/PageHero'
import BrandInquiryForm from '../components/forms/BrandInquiryForm'
import Reveal from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'
import {
  GlobeIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
} from '../components/ui/Icons'
import { FlagIcon } from '../components/ui/FlagIcon'
import { contact, pages } from '../content/site'
import { trackEvent } from '../lib/analytics'
import {
  getInstagramUrl,
  getLinkedInUrl,
  getMailtoUrl,
  getWhatsAppUrl,
} from '../lib/links'

const copy = pages.contact

function DetailRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent-soft">
        {icon}
      </span>
      <div className="min-w-0">
        <span className="block text-[11px] font-bold uppercase tracking-[0.15em] text-white/30">
          {label}
        </span>
        <div className="mt-1 text-[15px] leading-relaxed text-white/80">
          {children}
        </div>
      </div>
    </li>
  )
}

export default function Contact() {
  const whatsappUrl = getWhatsAppUrl()
  const instagramUrl = getInstagramUrl()
  const linkedinUrl = getLinkedInUrl()

  return (
    <>
      <Seo
        title="Start a Campaign — Contact AVG Agency"
        description="Tell us about your brand, market and goals. Send a campaign enquiry for influencer marketing or UGC and we will reply within one business day."
        path="/contact"
      />

      <PageHero eyebrow={copy.eyebrow} title={copy.h1} description={copy.paragraph} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <Reveal>
            <BrandInquiryForm />
          </Reveal>

          <Reveal delay={80}>
            <aside className="lg:sticky lg:top-32 h-fit rounded-panel bg-ink p-8 text-white sm:p-10 relative overflow-hidden">
              {/* Background texture */}
              <div aria-hidden="true" className="line-grid-dark absolute inset-0 opacity-4" />
              
              <div className="relative">
                <h2 className="text-[24px] font-bold leading-tight text-white">
                  {copy.detailsTitle}
                </h2>

                <ul className="mt-10 space-y-8">
                  <DetailRow icon={<MailIcon className="h-5 w-5" />} label="Email">
                    <a
                      href={getMailtoUrl()}
                      onClick={() =>
                        trackEvent('email_click', {
                          label: contact.email,
                          location: 'contact_page',
                        })
                      }
                      className="break-all underline underline-offset-4 transition-colors hover:text-white"
                    >
                      {contact.email}
                    </a>
                  </DetailRow>

                  {whatsappUrl && (
                    <DetailRow
                      icon={<WhatsAppIcon className="h-5 w-5" />}
                      label="WhatsApp"
                    >
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackEvent('whatsapp_click', { location: 'contact_page' })
                        }
                        className="underline underline-offset-4 transition-colors hover:text-white"
                      >
                        Chat with us
                      </a>
                    </DetailRow>
                  )}

                  {instagramUrl && (
                    <DetailRow
                      icon={<InstagramIcon className="h-5 w-5" />}
                      label="Instagram"
                    >
                      <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackEvent('outbound_social_click', {
                            label: 'instagram',
                            location: 'contact_page',
                          })
                        }
                        className="underline underline-offset-4 transition-colors hover:text-white"
                      >
                        {contact.instagram.handle}
                      </a>
                    </DetailRow>
                  )}

                  {linkedinUrl && (
                    <DetailRow
                      icon={<LinkedInIcon className="h-5 w-5" />}
                      label="LinkedIn"
                    >
                      <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackEvent('outbound_social_click', {
                            label: 'linkedin',
                            location: 'contact_page',
                          })
                        }
                        className="underline underline-offset-4 transition-colors hover:text-white"
                      >
                        {contact.linkedin.label}
                      </a>
                    </DetailRow>
                  )}

                  <DetailRow icon={<MapPinIcon className="h-5 w-5" />} label="Location">
                    {contact.basedIn}
                  </DetailRow>

                  <DetailRow icon={<GlobeIcon className="h-5 w-5" />} label="Target Markets">
                    <div className="flex flex-wrap items-center gap-y-3 gap-x-4">
                      <span className="inline-flex items-center gap-2">
                        <FlagIcon country="USA" className="h-3 w-auto rounded-sm" /> USA
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <FlagIcon country="UK" className="h-3 w-auto rounded-sm" /> UK
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <FlagIcon country="UAE" className="h-3 w-auto rounded-sm" /> UAE
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <FlagIcon country="India" className="h-3 w-auto rounded-sm" /> India
                      </span>
                    </div>
                  </DetailRow>
                </ul>

                <div className="mt-10 border-t border-white/10 pt-8 text-[14px] leading-relaxed text-white/40">
                  <p>{contact.responseTime}</p>
                  <p className="mt-1">{copy.expectation}</p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
