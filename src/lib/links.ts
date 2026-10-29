import { env } from '../config/env'
import { contact } from '../content/site'

/** The configured WhatsApp number, env first then content file. */
export function getWhatsAppNumber(): string {
  return env.whatsappNumber || contact.whatsappNumber
}

export function isWhatsAppConfigured(): boolean {
  return getWhatsAppNumber().length > 0
}

/**
 * Builds a wa.me deep link with a pre-filled message.
 * Returns `null` when no number is configured, so callers can render a
 * graceful "not configured" placeholder instead of a broken link.
 */
export function getWhatsAppUrl(message: string = contact.whatsappMessage) {
  const number = getWhatsAppNumber()
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function getMailtoUrl(subject = 'New campaign enquiry') {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`
}

/** Returns `null` until a real Instagram URL is set in content/site.ts. */
export function getInstagramUrl(): string | null {
  return contact.instagram.url || null
}

/** Returns `null` until a real LinkedIn URL is set in content/site.ts. */
export function getLinkedInUrl(): string | null {
  return contact.linkedin.url || null
}
