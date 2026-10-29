/**
 * ============================================================================
 *  EMAILJS TEMPLATE VARIABLE NAMES — single source of truth.
 * ============================================================================
 *
 *  Every string here is the exact `{{variable}}` name you reference inside the
 *  matching EmailJS template. Change it in this one place and it changes
 *  everywhere the site sends it.
 *
 *  The same mapping is documented in README.md so the templates in the EmailJS
 *  dashboard can be matched to the forms field-for-field.
 */

/** Identifies which form a submission came from (sent as `form_name`). */
export const FORM_NAME = {
  brand: 'Brand Inquiry',
  creator: 'Creator Application',
} as const

/**
 * EmailJS variable names, grouped so the two templates stay easy to compare.
 *
 * `shared` is sent with both forms; the remaining groups are form-specific.
 */
export const EMAILJS_VARS = {
  /** Sent with every submission. */
  shared: {
    brandName: 'brand_name',
    formName: 'form_name',
    submittedAt: 'time',
    /** Set as the template's "To" address on the auto-reply template. */
    replyTo: 'reply_to',
    pageUrl: 'page_url',
    utmSummary: 'utm_summary',
  },

  /** Brand Inquiry form (contact page). */
  brand: {
    companyName: 'company',
    contactName: 'name',
    contactEmail: 'email',
    website: 'website',
    budget: 'budget',
    targetCountry: 'market',
    marketingGoals: 'goals',
    creatorCategories: 'categories',
  },

  /** Creator Recruitment form (/join). */
  creator: {
    fullName: 'name',
    email: 'email',
    location: 'location',
    instagram: 'instagram',
    tiktok: 'tiktok',
    youtube: 'youtube',
    niche: 'niche',
    followerRange: 'followers',
    portfolioLink: 'portfolio',
    languages: 'languages',
    intro: 'intro',
  },

  /**
   * Campaign attribution, captured per session and sent with every
   * submission. Names match the `captureUtm()` keys in lib/analytics.ts, so
   * they are listed here for documentation only — they are not remapped.
   */
  utm: [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'gclid',
    'fbclid',
    'landing_page',
  ] as string[],
} as const

/** Name of the hidden honeypot input. Bots fill it; humans never see it. */
export const HONEYPOT_FIELD = 'company_website_confirm'
