/**
 * JSON-LD structured data.
 *
 * Every value is read from `content/site.ts`, so the schema can never drift
 * from the copy actually shown on the page.
 */

import { BRAND_NAME, brand, contact, faq } from '../content/site'
import { env } from '../config/env'

type Json = Record<string, unknown>

/** Absolute URL for a route path ('' or '/services', etc.). */
const abs = (path = '') => `${env.siteUrl}${path}`

/** Countries the agency serves, used by `areaServed`. */
const AREA_SERVED = [
  'United States',
  'United Kingdom',
  'United Arab Emirates',
  'India',
]

/** Only real profiles are emitted — empty placeholders are dropped. */
function socialProfiles(): string[] {
  return [contact.instagram.url, contact.linkedin.url].filter(Boolean)
}

export function organizationSchema(): Json {
  const sameAs = socialProfiles()

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${abs()}/#organization`,
    name: BRAND_NAME,
    legalName: brand.legalName,
    url: abs(),
    description: brand.shortDescription,
    foundingDate: brand.founded,
    email: contact.email,
    logo: {
      '@type': 'ImageObject',
      url: abs('/og-image.jpg'),
      width: 2560,
      height: 1440,
    },
    areaServed: AREA_SERVED,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  }
}

export function websiteSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${abs()}/#website`,
    url: abs(),
    name: BRAND_NAME,
    description: brand.tagline,
    inLanguage: 'en',
    publisher: { '@id': `${abs()}/#organization` },
  }
}

export function serviceSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${brand.tagline} — ${BRAND_NAME}`,
    serviceType: 'Influencer marketing and UGC content creation',
    description:
      'Creator sourcing, campaign strategy, briefs, content production and reporting for brands in the USA, UK, UAE and India.',
    url: abs('/services'),
    areaServed: AREA_SERVED,
    provider: {
      '@type': 'Organization',
      name: BRAND_NAME,
      url: abs(),
    },
  }
}

export function faqSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}
