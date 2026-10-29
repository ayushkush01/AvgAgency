import { Link } from 'react-router-dom'
import { cookieConsent } from '../../content/site'
import { useConsent } from '../../context/ConsentProvider'
import { CookieIcon } from '../ui/Icons'

/**
 * Consent banner. Nothing analytics-related loads until "Accept" is chosen —
 * see ConsentProvider.
 */
export default function CookieConsent() {
  const { bannerVisible, accept, decline } = useConsent()

  if (!bannerVisible) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="animate-fade-in-up rounded-panel border border-ink/10 bg-white p-4 shadow-lift sm:flex sm:items-center sm:gap-5 sm:p-5">
          <div className="flex items-start gap-3.5 sm:flex-1">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist text-accent">
              <CookieIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-[15px] font-bold text-ink">
                {cookieConsent.title}
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-ink/60">
                {cookieConsent.body}{' '}
                <Link
                  to={cookieConsent.policyLink.to}
                  className="font-semibold text-accent underline underline-offset-2 hover:text-accent-hover"
                >
                  {cookieConsent.policyLink.label}
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-4 flex gap-3 sm:mt-0 sm:shrink-0">
            <button
              type="button"
              onClick={decline}
              className="btn-ghost flex-1 px-5 text-[14px] sm:flex-none"
            >
              {cookieConsent.decline}
            </button>
            <button
              type="button"
              onClick={accept}
              className="btn-accent flex-1 px-6 text-[14px] sm:flex-none"
            >
              {cookieConsent.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
