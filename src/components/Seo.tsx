import { Helmet } from 'react-helmet-async'
import { brand } from '../content/site'
import { env } from '../config/env'

type SeoProps = {
  title: string
  description: string
  /** Route path beginning with "/", used for the canonical URL. */
  path: string
  /** Absolute or root-relative image URL. */
  image?: string
  type?: 'website' | 'article'
  /** Set true for thank-you / legal-stub pages that shouldn't be indexed. */
  noIndex?: boolean
}

const DEFAULT_OG_IMAGE = '/og-image.jpg'
/** Intrinsic size of `DEFAULT_OG_IMAGE` — used for the og:image:width/height hints. */
const OG_IMAGE_WIDTH = 2560
const OG_IMAGE_HEIGHT = 1440
const OG_IMAGE_ALT = `${brand.name} — influencer marketing and UGC content creation`

/** Per-page document head: title, description, canonical, Open Graph, Twitter. */
export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noIndex = false,
}: SeoProps) {
  const canonical = `${env.siteUrl}${path === '/' ? '' : path}`
  const ogImage = image.startsWith('http') ? image : `${env.siteUrl}${image}`
  const fullTitle = title.includes(brand.name)
    ? title
    : `${title} | ${brand.name}`

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex,follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={brand.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
      <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />
    </Helmet>
  )
}
