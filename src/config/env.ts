/**
 * Environment configuration.
 *
 * Every external ID lives here and is read once. Nothing in this file throws
 * when a value is missing — features degrade gracefully instead, so the site
 * always builds and runs before the IDs are supplied.
 *
 * See README.md for the full list and where to set each one.
 */

const read = (value: unknown): string =>
  typeof value === 'string' ? value.trim() : ''

export const env = {
  /** Canonical origin, used for canonical URLs, OG tags and the sitemap. */
  siteUrl: read(import.meta.env.VITE_SITE_URL) || 'https://creatoravgagency.in',

  emailjs: {
    serviceId: read(import.meta.env.VITE_EMAILJS_SERVICE_ID),
    publicKey: read(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
    /**
     * One template pair per form. `templateId` notifies the agency inbox,
     * `autoReplyTemplateId` confirms receipt to the submitter.
     * The legacy `VITE_EMAILJS_TEMPLATE_ID` is honoured as a fallback so an
     * existing single-template setup keeps working.
     */
    brand: {
      templateId:
        read(import.meta.env.VITE_EMAILJS_BRAND_TEMPLATE_ID) ||
        read(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
      autoReplyTemplateId:
        read(import.meta.env.VITE_EMAILJS_BRAND_AUTOREPLY_TEMPLATE_ID) ||
        read(import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID),
    },
    creator: {
      templateId: read(import.meta.env.VITE_EMAILJS_CREATOR_TEMPLATE_ID),
      autoReplyTemplateId: read(
        import.meta.env.VITE_EMAILJS_CREATOR_AUTOREPLY_TEMPLATE_ID,
      ),
    },
  },

  /** Falls back to the number in content/site.ts when unset. */
  whatsappNumber: read(import.meta.env.VITE_WHATSAPP_NUMBER),

  analytics: {
    /** Google Analytics 4 measurement ID, e.g. 'G-XXXXXXXXXX'. */
    ga4Id: read(import.meta.env.VITE_GA4_ID),
    /** Meta (Facebook) Pixel ID. */
    metaPixelId: read(import.meta.env.VITE_META_PIXEL_ID),
  },
} as const

/** True when the given form's EmailJS templates are fully configured. */
export function isFormConfigured(which: 'brand' | 'creator'): boolean {
  const { serviceId, publicKey } = env.emailjs
  const tpl = env.emailjs[which]
  return Boolean(serviceId && publicKey && tpl.templateId)
}

/** True when analytics can actually load (both consent and an ID are present). */
export function hasAnalytics() {
  return Boolean(env.analytics.ga4Id || env.analytics.metaPixelId)
}
