import { Link } from 'react-router-dom'
import { contact, footer, nav } from '../../content/site'
import { trackEvent } from '../../lib/analytics'
import {
  getInstagramUrl,
  getLinkedInUrl,
  getMailtoUrl,
  getWhatsAppUrl,
} from '../../lib/links'
import ActionButton from '../ui/ActionButton'
import Logo from '../ui/Logo'
import {
  ArrowRightIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from '../ui/Icons'

export default function Footer() {
  const instagramUrl = getInstagramUrl()
  const linkedinUrl = getLinkedInUrl()
  const whatsappUrl = getWhatsAppUrl()

  return (
    <footer className="on-dark bg-ink text-white pt-20 pb-10 relative overflow-hidden">
      {/* Grid background texture */}
      <div aria-hidden="true" className="line-grid-dark absolute inset-0 opacity-4" />
      
      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr] lg:gap-20">
          {/* Brand Column */}
          <div className="max-w-sm">
            <Logo tone="dark" />
            <p className="mt-6 text-[15px] leading-relaxed text-white/50">
              {footer.description}
            </p>
            <div className="mt-8 flex items-center gap-4">
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition-colors hover:text-accent-soft"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition-colors hover:text-accent-soft"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              )}
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition-colors hover:text-accent-soft"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-white/30">
              {footer.quickLinksTitle}
            </h4>
            <ul className="mt-6 space-y-4">
              {nav.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[15px] text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-white/30">
              {footer.contactTitle}
            </h4>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={getMailtoUrl()}
                  className="group flex flex-col gap-1"
                  onClick={() => trackEvent('email_click', { label: contact.email, location: 'footer' })}
                >
                  <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/20">Email</span>
                  <span className="text-[15px] text-white/70 transition-colors group-hover:text-white break-all">
                    {contact.email}
                  </span>
                </a>
              </li>
              {whatsappUrl && (
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-1"
                  >
                    <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/20">WhatsApp</span>
                    <span className="text-[15px] text-white/70 transition-colors group-hover:text-white">
                      Chat with us
                    </span>
                  </a>
                </li>
              )}
            </ul>
            <div className="mt-8">
              <ActionButton
                to={footer.cta.to}
                variant="primary"
                className="h-10 px-5 text-[13px]"
                event="cta_click"
                eventLabel={footer.cta.label}
                icon={<ArrowRightIcon className="h-4 w-4" />}
              >
                {footer.cta.label}
              </ActionButton>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-10 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
            <p className="text-[13px] text-white/30">{footer.copyright}</p>
            <ul className="flex items-center gap-6">
              {footer.legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[13px] text-white/30 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {footer.credit.name && (
            <div className="flex flex-col items-center gap-1 sm:items-end">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
                {footer.credit.prefix}
              </p>
              <a
                href={footer.credit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center"
              >
                <span className="font-display text-[16px] font-bold tracking-tight text-white/80 transition-colors group-hover:text-white">
                  {footer.credit.name.replace(/X$/, '')}
                  <span className="text-[#A3E635] [text-shadow:0_0_12px_rgba(163,230,53,0.5)]">X</span>
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
