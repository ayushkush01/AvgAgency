/**
 * Analytics + lead tracking.
 *
 * Design rules:
 *  - Nothing is loaded or sent until the visitor accepts cookies.
 *  - With no GA4 / Meta Pixel IDs set, every call here is a silent no-op, so
 *    the site behaves identically before analytics is configured.
 *  - UTM parameters are captured once per session and attached to form
 *    submissions.
 */

import { env } from '../config/env'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    _fbq?: unknown
  }
}

/** The canonical lead events we report on. */
export type AnalyticsEventName =
  | 'cta_click'
  | 'brand_inquiry_submit'
  | 'creator_application_submit'
  | 'whatsapp_click'
  | 'email_click'
  | 'outbound_social_click'
  | 'form_error'

type EventParams = Record<string, string | number | boolean | undefined>

let allowed = false
let initialised = false

/* -------------------------------------------------------------------------- *
 * Consent gate
 * -------------------------------------------------------------------------- */
export function setAnalyticsAllowed(value: boolean) {
  allowed = value
}

export function isAnalyticsAllowed() {
  return allowed
}

/* -------------------------------------------------------------------------- *
 * Loading
 * -------------------------------------------------------------------------- */
/** Injects GA4 and Meta Pixel. Idempotent, and only runs after consent. */
export function initAnalytics() {
  if (initialised || !allowed) return
  initialised = true

  const { ga4Id, metaPixelId } = env.analytics

  if (ga4Id) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', ga4Id, { send_page_view: false })
  }

  if (metaPixelId) {
    /* eslint-disable */
    ;(function (f: any, b: Document, e: string, v: string) {
      if (f.fbq) return
      const n: any = (f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      })
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = true
      n.version = '2.0'
      n.queue = []
      const t = b.createElement(e) as HTMLScriptElement
      t.async = true
      t.src = v
      const s = b.getElementsByTagName(e)[0]
      s.parentNode?.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
    /* eslint-enable */
    window.fbq?.('init', metaPixelId)
  }
}

/* -------------------------------------------------------------------------- *
 * Events
 * -------------------------------------------------------------------------- */
export function trackEvent(name: AnalyticsEventName, params: EventParams = {}) {
  if (!allowed) return

  const payload = { ...params, page_path: window.location.pathname }

  try {
    window.gtag?.('event', name, payload)
    window.fbq?.('trackCustom', name, payload)
  } catch {
    /* Never let analytics break the UI */
  }
}

/** Fires a GA4 page_view — needed because we disable automatic page views. */
export function trackPageView(path: string, title: string) {
  if (!allowed) return
  try {
    window.gtag?.('event', 'page_view', { page_path: path, page_title: title })
    window.fbq?.('track', 'PageView')
  } catch {
    /* no-op */
  }
}

/* -------------------------------------------------------------------------- *
 * UTM capture
 * -------------------------------------------------------------------------- */
const UTM_STORAGE_KEY = 'avg.utm'
const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
] as const

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>

/**
 * Reads UTM parameters from the current URL and remembers the first set seen
 * this session. Call once on boot.
 */
export function captureUtm(): void {
  try {
    const params = new URLSearchParams(window.location.search)
    const found: UtmParams = {}
    let hasValue = false

    for (const key of UTM_KEYS) {
      const value = params.get(key)
      if (value) {
        found[key] = value
        hasValue = true
      }
    }

    // First-touch attribution: don't overwrite an earlier referral.
    if (hasValue && !window.sessionStorage.getItem(UTM_STORAGE_KEY)) {
      window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(found))
    }
  } catch {
    /* sessionStorage can be unavailable in private mode */
  }
}

/** Returns the stored first-touch UTM values, flattened into a form payload. */
export function getUtmParams(): Record<string, string> {
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as UtmParams
    const flat: Record<string, string> = {}
    for (const [key, value] of Object.entries(parsed)) {
      if (value) flat[key] = value
    }
    flat.landing_page = window.location.pathname
    return flat
  } catch {
    return {}
  }
}

/** Human-readable UTM summary, handy for the email template. */
export function getUtmSummary(): string {
  const utm = getUtmParams()
  const entries = Object.entries(utm)
  if (entries.length === 0) return 'Direct / unknown'
  return entries.map(([key, value]) => `${key}=${value}`).join(' | ')
}
