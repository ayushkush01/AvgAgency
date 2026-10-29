import { getWhatsAppUrl } from '../../lib/links'
import { trackEvent } from '../../lib/analytics'
import { useConsent } from '../../context/ConsentProvider'
import { WhatsAppIcon } from '../ui/Icons'

/**
 * Floating WhatsApp CTA, present on every page and pinned above the mobile
 * safe area. Rendered only if a number is configured.
 */
export default function WhatsAppButton() {
  const { bannerVisible } = useConsent()
  const url = getWhatsAppUrl()

  // Hide while the cookie banner is visible or if no number is set.
  if (bannerVisible || !url) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block">
        <div className="relative rounded-lg bg-ink px-3 py-1.5 text-[12px] font-bold text-white shadow-lift whitespace-nowrap">
          Chat on WhatsApp
          <div className="absolute top-full right-5 -mt-1 h-2 w-2 rotate-45 bg-ink" />
        </div>
      </div>
      
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('whatsapp_click', { location: 'floating' })}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition duration-200 hover:-translate-y-1 hover:shadow-glow"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  )
}
