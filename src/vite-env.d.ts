/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Canonical origin, e.g. https://creatoravgagency.in */
  readonly VITE_SITE_URL?: string

  /* ---- EmailJS ---- */
  readonly VITE_EMAILJS_SERVICE_ID?: string
  readonly VITE_EMAILJS_PUBLIC_KEY?: string
  /** Brand Inquiry form → agency inbox */
  readonly VITE_EMAILJS_BRAND_TEMPLATE_ID?: string
  /** Brand Inquiry form → submitter auto-reply */
  readonly VITE_EMAILJS_BRAND_AUTOREPLY_TEMPLATE_ID?: string
  /** Creator Recruitment form → agency inbox */
  readonly VITE_EMAILJS_CREATOR_TEMPLATE_ID?: string
  /** Creator Recruitment form → submitter auto-reply */
  readonly VITE_EMAILJS_CREATOR_AUTOREPLY_TEMPLATE_ID?: string

  /* ---- Legacy EmailJS names (kept as fallbacks) ---- */
  readonly VITE_EMAILJS_TEMPLATE_ID?: string
  readonly VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID?: string

  /* ---- Contact ---- */
  /** International format, digits only, e.g. 919876543210 */
  readonly VITE_WHATSAPP_NUMBER?: string

  /* ---- Analytics (load only after cookie consent) ---- */
  readonly VITE_GA4_ID?: string
  readonly VITE_META_PIXEL_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
