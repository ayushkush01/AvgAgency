/**
 * ============================================================================
 *  SITE CONTENT — edit everything here. No component changes required.
 * ============================================================================
 *
 *  PLACEHOLDERS
 *  ------------
 *  Entries flagged `placeholder: true` are intentionally empty sample slots.
 *  They render as clearly-marked "coming soon" states — never as fake claims.
 *  Search this file for `placeholder: true` to find everything left to replace
 *  before launch. The full checklist also lives in README.md.
 */

/* -------------------------------------------------------------------------- *
 * 1. BRAND — the single source of truth for the agency name.
 *    Change BRAND_NAME once; it propagates to the navbar, footer, meta tags,
 *    JSON-LD and form auto-replies.
 * -------------------------------------------------------------------------- */
export const BRAND_NAME = 'AVG Agency'

export const brand = {
  name: BRAND_NAME,
  /** Splits the wordmark so the trailing word can take the accent colour. */
  wordmark: { lead: 'AVG', trail: 'Agency' },
  legalName: 'AVG Agency',
  /** Used in <title>, OG tags and the footer. */
  tagline: 'Influencer Marketing & UGC Content Creation',
  shortDescription:
    'We connect global brands with a curated network of Indian and international creators who drive measurable results.',
  founded: '2024',
} as const

/* -------------------------------------------------------------------------- *
 * 2. CONTACT DETAILS — replace the placeholder handles/social URLs.
 * -------------------------------------------------------------------------- */
export const contact = {
  email: 'admin@creatoravgagency.in',
  /** WhatsApp number in international format WITHOUT "+" or spaces. */
  whatsappNumber: '', // TODO: add e.g. '919876543210'
  whatsappMessage: `Hi, I'd like to start a campaign with ${BRAND_NAME}`,
  instagram: {
    handle: '@avgagency',
    url: 'https://instagram.com/avgagency', // TODO: replace with the real URL
  },
  linkedin: {
    label: 'AVG Agency',
    url: 'https://linkedin.com/company/avgagency', // TODO: replace with the real URL
  },
  twitter: {
    handle: '@avgagency',
    url: 'https://twitter.com/avgagency', // TODO: replace with the real URL
  },
  /** Shown on the contact page. */
  basedIn: 'India · Working with brands worldwide',
  responseTime: 'We reply to every enquiry within 1 business day.',
} as const

/* -------------------------------------------------------------------------- *
 * 3. NAVIGATION
 * -------------------------------------------------------------------------- */
export type NavLink = { label: string; to: string }

export const nav = {
  links: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Creators', to: '/creators' },
    { label: 'Work', to: '/work' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ] as NavLink[],
  primaryCta: { label: 'Start a Campaign', to: '/contact' },
  secondaryCta: { label: 'Join Our Creator Network', to: '/join' },
} as const

/* -------------------------------------------------------------------------- *
 * 4. HERO
 * -------------------------------------------------------------------------- */
export const hero = {
  eyebrow: 'Influencer Marketing · UGC · Global Brands',
  heading: 'Connecting Brands With Creators Who Drive Results.',
  /** Optional substring of `heading` rendered in the accent colour. */
  headingHighlight: 'Drive Results.',
  paragraph:
    'We plan, produce and scale influencer and UGC campaigns for brands in the USA, UK, UAE and India — powered by a vetted network of creators on Instagram, YouTube and TikTok.',
  primaryCta: { label: 'Start a Campaign', to: '/contact' },
  secondaryCta: { label: 'Hire Creators', to: '/creators' },
  textLink: { label: 'Join Our Creator Network', to: '/join' },
  /** Neutral labels for the abstract hero visual — deliberately no fake metrics. */
  visual: {
    phoneTitle: 'Campaign brief',
    phoneRows: [
      { label: 'Objective', value: 'Product launch reach' },
      { label: 'Market', value: 'USA · UK · UAE · India' },
      { label: 'Deliverables', value: 'Reels, UGC ads, reviews' },
    ],
    phoneStatus: 'Creators shortlisted',
    chipTop: 'Influencer Marketing',
    chipBottom: 'UGC Content Creation',
    caption: 'Campaign planning to content delivery, in one place.',
  },
} as const

/* -------------------------------------------------------------------------- *
 * 5. TRUST STRIP
 * -------------------------------------------------------------------------- */
export const trustStrip = {
  platforms: [
    { name: 'Instagram', icon: 'instagram' },
    { name: 'TikTok', icon: 'tiktok' },
    { name: 'YouTube', icon: 'youtube' },
  ],
  regions: [
    { name: 'USA', flag: 'US' },
    { name: 'UK', flag: 'GB' },
    { name: 'UAE', flag: 'AE' },
    { name: 'India', flag: 'IN' },
  ],
} as const

/* -------------------------------------------------------------------------- *
 * 6. MARKETS STRIP — regions only. No logo claims.
 * -------------------------------------------------------------------------- */
export const markets = {
  label: 'Working with brands in the USA, UK, UAE, India and beyond',
  regions: [
    { flag: '🇺🇸', name: 'USA' },
    { flag: '🇬🇧', name: 'UK' },
    { flag: '🇦🇪', name: 'UAE' },
    { flag: '🇮🇳', name: 'India' },
    { flag: '🌍', name: 'Global' },
  ],
} as const

/* -------------------------------------------------------------------------- *
 * 7. SERVICES — core offerings.
 * -------------------------------------------------------------------------- */
export type ServiceIcon = 'creators' | 'video' | 'strategy'

export type Service = {
  id: string
  icon: ServiceIcon
  title: string
  tagline: string
  description: string
  features: string[]
  cta: { label: string; to: string }
}

export const services = {
  eyebrow: 'What We Do',
  heading: 'Comprehensive solutions for the creator economy.',
  paragraph:
    'Everything we do sits inside the creator economy — pairing the right voices with content built to perform.',
  linkLabel: 'Explore all services',
  linkTo: '/services',
  items: [
    {
      id: 'influencer-marketing',
      icon: 'creators',
      title: 'Influencer Marketing',
      tagline: 'Right creators. Right audience.',
      description:
        'End-to-end influencer campaigns — strategy, creator sourcing, negotiation, briefing, approvals and reporting.',
      features: [
        'Creator sourcing & vetting',
        'Campaign strategy & briefs',
        'Rate negotiation & contracting',
        'Content approvals',
        'Performance reporting',
      ],
      cta: { label: 'Start a campaign', to: '/contact' },
    },
    {
      id: 'ugc-content-creation',
      icon: 'video',
      title: 'UGC Content Creation',
      tagline: 'Authentic content that converts.',
      description:
        'Creator-made, platform-native content built for paid and organic — delivered ready to run on social and Amazon.',
      features: [
        'Authentic videos',
        'Product reviews',
        'Testimonials',
        'Unboxing videos',
        'Ad creatives',
      ],
      cta: { label: 'Request UGC samples', to: '/contact' },
    },
    {
      id: 'strategy-consulting',
      icon: 'strategy',
      title: 'Strategy & Consulting',
      tagline: 'Data-driven roadmap to growth.',
      description:
        'We help brands navigate the creator landscape with clear strategies for market entry and scale.',
      features: [
        'Market entry strategy',
        'Creator landscape audit',
        'Competitor analysis',
        'Campaign roadmaps',
        'ROAS optimization',
      ],
      cta: { label: 'Get a strategy', to: '/contact' },
    },
  ] satisfies Service[],
} as const

/* -------------------------------------------------------------------------- *
 * 8. WHY AVG — 4 differentiators.
 * -------------------------------------------------------------------------- */
export const whyAvg = {
  eyebrow: 'Why Work With Us',
  heading: 'Built for brands who value transparency.',
  items: [
    {
      title: 'Global Network',
      description: 'Vetted creators across USA, UK, UAE, and India markets.',
    },
    {
      title: 'Zero Fake Content',
      description: 'We only publish verified results and consented creator profiles.',
    },
    {
      title: 'Performance First',
      description: 'Every campaign is built around measurable growth and ROI.',
    },
    {
      title: 'Full Transparency',
      description: 'Clear pricing, honest timelines, and direct communication.',
    },
  ],
} as const

/* -------------------------------------------------------------------------- *
 * 9. MINI PROCESS — 3 steps.
 * -------------------------------------------------------------------------- */
export const miniProcess = {
  eyebrow: 'How It Works',
  heading: 'From brief to delivery in three steps.',
  steps: [
    {
      title: 'Discovery & Brief',
      description: 'Share your goals and market. We respond with a tailored strategy.',
    },
    {
      title: 'Creator Selection',
      description: 'We shortlist and secure the best creator fit for your brand.',
    },
    {
      title: 'Campaign Launch',
      description: 'We manage production, approvals, and delivery of high-performing content.',
    },
  ],
} as const

/* -------------------------------------------------------------------------- *
 * 10. CREATOR NETWORK PREVIEW
 * -------------------------------------------------------------------------- */
import type { Creator } from './creators'

export const creatorNetwork = {
  eyebrow: 'Creator Network',
  heading: 'Creators across India and international markets.',
  paragraph:
    'A vetted roster spanning beauty, fashion, tech, fitness, food and more — matched to your market and objectives.',
  cta: { label: 'Browse all creators', to: '/creators' },
  overviewCta: { label: 'Join Our Creator Network', to: '/join' },
  emptyState: {
    title: 'Verified creator profiles coming soon',
    body: 'We are onboarding our roster and publishing consented profiles. Creator cards below are reserved slots.',
  },
  items: [
    { id: 'slot-1', name: 'Creator slot 01', niche: 'Beauty', platforms: ['Instagram'], country: 'India', countryCode: 'IN', followers: '', placeholder: true },
    { id: 'slot-2', name: 'Creator slot 02', niche: 'Fashion', platforms: ['Instagram'], country: 'UAE', countryCode: 'AE', followers: '', placeholder: true },
    { id: 'slot-3', name: 'Creator slot 03', niche: 'Technology', platforms: ['YouTube'], country: 'USA', countryCode: 'US', followers: '', placeholder: true },
    { id: 'slot-4', name: 'Creator slot 04', niche: 'Fitness', platforms: ['Instagram'], country: 'India', countryCode: 'IN', followers: '', placeholder: true },
    { id: 'slot-5', name: 'Creator slot 05', niche: 'Lifestyle', platforms: ['TikTok'], country: 'UK', countryCode: 'GB', followers: '', placeholder: true },
    { id: 'slot-6', name: 'Creator slot 06', niche: 'Food', platforms: ['Instagram'], country: 'India', countryCode: 'IN', followers: '', placeholder: true },
  ] satisfies Creator[],
} as const

/* -------------------------------------------------------------------------- *
 * 11. CREATOR CATEGORIES
 * -------------------------------------------------------------------------- */
export type CategoryIcon =
  | 'beauty'
  | 'fashion'
  | 'lifestyle'
  | 'fitness'
  | 'technology'
  | 'food'
  | 'travel'
  | 'gaming'

export type CreatorCategory = {
  slug: string
  name: string
  icon: CategoryIcon
  blurb: string
}

export const creatorCategories = {
  eyebrow: 'Browse by Category',
  heading: 'Find creators in the categories your brand lives in.',
  items: [
    { slug: 'beauty', name: 'Beauty', icon: 'beauty', blurb: 'Skincare, makeup & wellness' },
    { slug: 'fashion', name: 'Fashion', icon: 'fashion', blurb: 'Apparel, accessories & styling' },
    { slug: 'lifestyle', name: 'Lifestyle', icon: 'lifestyle', blurb: 'Home, everyday & aspirational' },
    { slug: 'fitness', name: 'Fitness', icon: 'fitness', blurb: 'Training, nutrition & sport' },
    { slug: 'technology', name: 'Technology', icon: 'technology', blurb: 'Devices, gadgets & reviews' },
    { slug: 'food', name: 'Food', icon: 'food', blurb: 'Cooking, recipes & dining' },
    { slug: 'travel', name: 'Travel', icon: 'travel', blurb: 'Destinations & experiences' },
    { slug: 'gaming', name: 'Gaming', icon: 'gaming', blurb: 'Play, hardware & esports' },
  ] satisfies CreatorCategory[],
} as const

/* -------------------------------------------------------------------------- *
 * 12. CAMPAIGN PROCESS — 5 steps.
 * -------------------------------------------------------------------------- */
export const process = {
  eyebrow: 'How We Work',
  heading: 'A process built for results.',
  paragraph: 'Five clear stages, with visibility at every step.',
  steps: [
    {
      number: '01',
      title: 'Brand Inquiry',
      description:
        'Share your goals, markets and budget. We respond with an initial point of view.',
    },
    {
      number: '02',
      title: 'Strategy',
      description:
        'We define the campaign angle, creator profile, deliverables and success metrics.',
    },
    {
      number: '03',
      title: 'Creator Selection',
      description:
        'We shortlist and secure the creators who best fit your audience and market.',
    },
    {
      number: '04',
      title: 'Content Production',
      description:
        'Briefs, shoot coordination, reviews and revisions until the content is right.',
    },
    {
      number: '05',
      title: 'Campaign Delivery',
      description:
        'Content delivered ready to publish, with reporting on how it performed.',
    },
  ],
} as const

/* -------------------------------------------------------------------------- *
 * 13. CAMPAIGN PACKAGES
 * -------------------------------------------------------------------------- */
export type Package = {
  id: string
  name: string
  audience: string
  summary: string
  features: string[]
  highlighted: boolean
}

export const packages = {
  eyebrow: 'Packages',
  heading: 'Flexible scopes, built around your goals.',
  paragraph:
    'Every engagement is scoped to your market, category and budget. Start from a package or build your own.',
  priceLabel: 'Pricing available on request',
  primaryCta: { label: 'Customize Your Package', to: '/contact' },
  items: [
    {
      id: 'ugc-starter',
      name: 'UGC Video Package',
      audience: 'For brands needing high-converting ad creative',
      summary: 'High-quality creator-made content for paid and organic social.',
      features: [
        '5–10 UGC videos',
        'Platform-native hooks & styles',
        'Professional editing & subtitles',
        'Full usage rights included',
        'Fast 7-10 day turnaround',
      ],
      highlighted: false,
    },
    {
      id: 'influencer-sprint',
      name: 'Influencer Campaign',
      audience: 'For brands scaling reach and awareness',
      summary: 'Managed influencer activation across key markets.',
      features: [
        '10–20 vetted creators',
        'End-to-end management',
        'Strategy & creative briefing',
        'Multi-platform coverage',
        'Performance reporting',
      ],
      highlighted: true,
    },
    {
      id: 'always-on',
      name: 'Always-On Ambassadors',
      audience: 'For teams building long-term community & trust',
      summary: 'Long-term creator partnerships for consistent growth.',
      features: [
        'Monthly creator pipeline',
        'Dedicated account lead',
        'Deep brand integration',
        'Monthly strategy reviews',
        'Custom dashboard access',
      ],
      highlighted: false,
    },
  ] satisfies Package[],
} as const

/* -------------------------------------------------------------------------- *
 * 14. RESULTS — verified metrics + case studies.
 * -------------------------------------------------------------------------- */
export type Metric = {
  id: string
  label: string
  value: string
  note: string
  placeholder: boolean
}

export type CaseStudy = {
  id: string
  client: string
  category: string
  summary: string
  deliverables: string[]
  resultLine: string
  href: string
  placeholder: boolean
}

export const results = {
  eyebrow: 'Results',
  heading: 'Verified results, published as we earn them.',
  paragraph:
    'We only publish numbers a client has approved. There is nothing to inflate here.',
  metricsLabel: 'How we measure success',
  caseStudiesLabel: 'Case Studies',
  caseStudiesEmptyState: {
    title: 'Case studies coming soon',
    body: 'We are currently preparing detailed case studies. In the meantime, you can request our campaign deck.',
  },
  cta: { label: 'Request Campaign Deck', to: '/contact' },
  emptyState: {
    title: 'Verified results coming soon',
    body: 'We are collecting client-approved performance data. These slots are reserved for real campaign numbers.',
  },
  metrics: [
    {
      id: 'reach',
      label: 'Campaign Reach',
      value: '',
      note: 'Total unique users reached across all creator content.',
      placeholder: true,
    },
    {
      id: 'engagement',
      label: 'Engagement Rate',
      value: '',
      note: 'Blended average of likes, comments, and shares.',
      placeholder: true,
    },
    {
      id: 'views',
      label: 'Video Views',
      value: '',
      note: 'Organic and paid views across Instagram, TikTok, and YouTube.',
      placeholder: true,
    },
    {
      id: 'conversions',
      label: 'Conversions driven',
      value: '',
      note: 'Tracked via custom link & attribution codes.',
      placeholder: true,
    },
  ] satisfies Metric[],
  caseStudies: [] as CaseStudy[],
} as const

/* -------------------------------------------------------------------------- *
 * 15. TESTIMONIALS
 * -------------------------------------------------------------------------- */
export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  company: string
  placeholder: boolean
}

export const testimonials = {
  eyebrow: 'What Clients Say',
  heading: 'Trusted by founders who mean business.',
  items: [] as Testimonial[],
} as const

/* -------------------------------------------------------------------------- *
 * 16. FAQ
 * -------------------------------------------------------------------------- */
export const faq = {
  eyebrow: 'FAQ',
  heading: 'Questions brands ask us first.',
  items: [
    {
      question: 'How much does an influencer campaign cost?',
      answer:
        'Cost depends on market, creator tier and deliverables. We scope every campaign to your budget, and pricing is shared as a tailored proposal after we understand your goals.',
    },
    {
      question: 'Which countries do you work in?',
      answer:
        'We run campaigns for brands in the USA, UK, UAE and India, and we place Indian creators for international brands and international creators for Indian brands.',
    },
    {
      question: 'How do you select creators?',
      answer:
        'We start from your audience and objective, then screen on category fit, audience geography, engagement quality and content style. You approve the final shortlist.',
    },
    {
      question: 'What is the typical turnaround time?',
      answer:
        'UGC-only deliverables usually take 1–2 weeks from brief to final files. Full influencer campaigns typically run 3–6 weeks from kickoff to delivery.',
    },
    {
      question: 'Who owns the content usage rights?',
      answer:
        'Standard usage rights for organic social and paid ads are typically included for a set period. We handle all licensing negotiations with creators on your behalf.',
    },
    {
      question: 'How do you track and report campaign results?',
      answer:
        'We provide comprehensive reports covering reach, engagement, video views, and conversions. For direct-response campaigns, we use trackable links and unique promo codes.',
    },
  ],
} as const

/* -------------------------------------------------------------------------- *
 * 17. FINAL CTA BAND
 * -------------------------------------------------------------------------- */
export const finalCta = {
  eyebrow: "Let's Collaborate",
  heading: 'Ready to start your next campaign?',
  paragraph:
    'Tell us about your brand and market. We will come back with a creator plan.',
  primaryCta: { label: 'Start a Campaign', to: '/contact' },
  whatsappLabel: 'Chat on WhatsApp',
} as const

/* -------------------------------------------------------------------------- *
 * 18. FOOTER
 * -------------------------------------------------------------------------- */
export const footer = {
  description:
    'Influencer marketing and UGC content creation for brands in the USA, UK, UAE and India.',
  quickLinksTitle: 'Quick Links',
  contactTitle: 'Contact',
  socialsTitle: 'Follow',
  cta: { label: 'Get in Touch', to: '/contact' },
  legalTitle: 'Legal',
  copyright: `© ${new Date().getFullYear()} ${BRAND_NAME}. All rights reserved.`,
  legalLinks: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
  ],
  credit: {
    prefix: 'Made & Designed by',
    name: 'CraftoraX',
    url: 'https://craftorax.in',
  },
} as const

/* -------------------------------------------------------------------------- *
 * 19. COOKIE CONSENT
 * -------------------------------------------------------------------------- */
export const cookieConsent = {
  title: 'We use cookies',
  body: 'We use analytics cookies to understand how the site is used. Nothing loads until you accept.',
  accept: 'Accept',
  decline: 'Decline',
  policyLink: { label: 'Privacy Policy', to: '/privacy' },
} as const

/* -------------------------------------------------------------------------- *
 * 20. FORM OPTIONS
 * -------------------------------------------------------------------------- */
export const formOptions = {
  budgets: [
    'Under $2,000',
    '$2,000 – $5,000',
    '$5,000 – $15,000',
    '$15,000 – $50,000',
    '$50,000+',
    'Not sure yet',
  ],
  targetCountries: ['USA', 'UK', 'UAE', 'India', 'Other'],
  followerRanges: [
    'Nano (1K – 10K)',
    'Micro (10K – 50K)',
    'Mid (50K – 250K)',
    'Macro (250K – 1M)',
    'Mega (1M+)',
  ],
  platforms: ['Instagram', 'YouTube', 'TikTok', 'LinkedIn'] as const,
  languages: [
    'English',
    'Hindi',
    'Arabic',
    'Urdu',
    'Tamil',
    'Telugu',
    'Marathi',
    'Bengali',
    'Other',
  ],
} as const

/* -------------------------------------------------------------------------- *
 * 21. FORMS
 * -------------------------------------------------------------------------- */
export type FormMessages = {
  success: { title: string; body: string }
  notConfigured: { title: string; body: string }
  error: { title: string; body: string }
}

export const forms = {
  brand: {
    title: 'Tell us about your campaign',
    intro:
      'Share your market, budget and goals. We reply to every enquiry within one business day with an initial point of view.',
    submitLabel: 'Send enquiry',
    submittingLabel: 'Sending…',
    consentBefore: 'I agree to be contacted about this enquiry. See our',
    consentLinkLabel: 'Privacy Policy',
    consentAfter: '.',
    fields: {
      companyName: { label: 'Company name', placeholder: 'Acme Inc.' },
      contactName: { label: 'Your name', placeholder: 'Jane Cooper' },
      contactEmail: { label: 'Work email', placeholder: 'jane@acme.com' },
      website: {
        label: 'Website or social profile',
        placeholder: 'https://acme.com',
        hint: 'Helps us understand your brand before we reply.',
        optional: true,
      },
      budget: { label: 'Campaign budget', placeholder: 'Select a budget range' },
      targetCountry: {
        label: 'Primary target market',
        placeholder: 'Select a country',
      },
      marketingGoals: {
        label: 'Marketing goals',
        placeholder:
          'Launching a new product in the UK, need UGC for paid social and 10 creators for reviews…',
        hint: 'The more specific you are, the faster we can scope it.',
      },
      creatorCategories: {
        label: 'Preferred creator categories',
        hint: 'Select all that apply.',
      },
    },
    messages: {
      success: {
        title: 'Enquiry received',
        body: 'Thanks — your brief is with our team, and a confirmation is on its way to your inbox. We will come back with a creator plan within one business day.',
      },
      notConfigured: {
        title: 'This form is not connected yet',
        body: 'The email keys are missing, so nothing was sent. Email us directly and we will pick it up from there.',
      },
      error: {
        title: 'We could not send that',
        body: 'Something went wrong on our side. Please try again, or email us directly.',
      },
    } satisfies FormMessages,
  },

  creator: {
    title: 'Apply to the creator network',
    intro:
      'Tell us about your channels and the kind of content you make. We review every application and reach out when a campaign matches your niche.',
    submitLabel: 'Submit application',
    submittingLabel: 'Submitting…',
    consentBefore: 'I agree to be contacted about creator opportunities. See our',
    consentLinkLabel: 'Privacy Policy',
    consentAfter: '.',
    fields: {
      fullName: { label: 'Full name', placeholder: 'Your name' },
      email: { label: 'Email', placeholder: 'you@example.com' },
      location: {
        label: 'Country and city',
        placeholder: 'Mumbai, India',
      },
      instagram: {
        label: 'Instagram handle',
        placeholder: '@yourhandle',
        optional: true,
      },
      tiktok: { label: 'TikTok handle', placeholder: '@yourhandle', optional: true },
      youtube: {
        label: 'YouTube channel',
        placeholder: '@yourchannel',
        optional: true,
      },
      niche: { label: 'Primary niche', placeholder: 'Select a category' },
      followerRange: {
        label: 'Follower count range',
        placeholder: 'Select a range',
      },
      portfolioLink: {
        label: 'Portfolio or media kit link',
        placeholder: 'https://…',
        hint: 'A drive folder or media kit is perfect.',
        optional: true,
      },
      languages: {
        label: 'Languages you create in',
        hint: 'Select all that apply.',
      },
      intro: {
        label: 'Short intro',
        placeholder:
          'A couple of lines about your audience, the brands you have worked with, and what you like creating…',
      },
    },
    messages: {
      success: {
        title: 'Application received',
        body: 'Thanks for applying. Check your inbox for a confirmation — we review applications continuously and will reach out when a campaign matches your niche.',
      },
      notConfigured: {
        title: 'This form is not connected yet',
        body: 'The email keys are missing, so nothing was sent. Email your profile to us directly and we will add it to the review queue.',
      },
      error: {
        title: 'We could not send that',
        body: 'Something went wrong on our side. Please try again, or email your profile to us directly.',
      },
    } satisfies FormMessages,
    /** Shown beside the form as an honest expectation-setter. */
    notes: [
      'Every application is read by a human — no automated rejections.',
      'We match on niche and audience fit, not follower count alone.',
      'Applications stay on file, so you do not need to re-apply for each campaign.',
    ],
  },
} as const

/* -------------------------------------------------------------------------- *
 * 22. PAGES
 * -------------------------------------------------------------------------- */
export const pages = {
  services: {
    eyebrow: 'Services',
    h1: 'Influencer marketing and UGC, managed end to end.',
    paragraph:
      'We take a brief from strategy through creator selection, content production and delivery — for brands in the USA, UK, UAE and India.',
    cta: { label: 'Start a Campaign', to: '/contact' },
    secondaryCta: { label: 'See how we work', to: '/work' },
    includesTitle: "What's included",
    processTitle: 'How a campaign runs',
    closing: {
      heading: 'Not sure which service you need?',
      body: 'Tell us the outcome you want. We will recommend the mix of influencers and UGC that gets you there.',
    },
  },

  creators: {
    eyebrow: 'Creator Network',
    h1: 'Find creators for your market.',
    paragraph:
      'Filter our roster by category, country and platform. Every profile is added with the creator’s consent — nothing here is scraped or invented.',
    filters: {
      title: 'Filter creators',
      category: 'Category',
      country: 'Country',
      platform: 'Platform',
      all: 'All',
      clear: 'Clear filters',
      resultsLabel: 'creators match your filters',
      noResults: {
        title: 'No creators match those filters yet',
        body: 'Our roster is still being onboarded. Clear the filters to see every slot, or tell us who you need and we will source them.',
      },
    },
    emptyState: {
      title: 'Verified creator profiles coming soon',
      body: 'We are onboarding our roster and publishing consented profiles. These cards are reserved slots.',
    },
    cta: { label: 'Request creators', to: '/contact' },
    joinCta: { label: 'Join Our Creator Network', to: '/join' },
    whyJoin: {
      title: 'Why join our network?',
      items: [
        'Paid briefs matched to your niche and audience.',
        'Clear deliverables and timelines before you accept.',
        'A named contact who handles the brand side for you.',
        'Long-term collaborations when the first campaign performs.',
      ],
    },
  },

  work: {
    eyebrow: 'Our Work',
    h1: 'Case studies, published once clients approve them.',
    paragraph:
      'We only publish campaign numbers a client has signed off on. Until then, the slots below stay open rather than filled with estimates.',
    cta: { label: 'Start a Campaign', to: '/contact' },
    metricsTitle: 'How we measure success',
    caseStudiesTitle: 'Published case studies',
    caseStudyCta: { label: 'Request our sample campaign deck', to: '/contact' },
    closing: {
      heading: 'Want to see work relevant to your category?',
      body: 'Tell us your category and market, and we will walk you through the campaigns that match.',
    },
  },

  about: {
    eyebrow: 'About',
    h1: 'An influencer and UGC agency built on work we can stand behind.',
    paragraph:
      'We connect brands with creators who actually move product — and we publish nothing we cannot substantiate.',
    cta: { label: 'Work with us', to: '/contact' },
    valuesTitle: 'How we operate',
    values: [
      {
        title: 'Client-approved numbers only',
        body: 'Every result we publish has been signed off by the client. If a number is not verified, the slot stays empty.',
      },
      {
        title: 'Audience fit before follower count',
        body: 'We screen on category relevance and audience geography first. Reach is a consequence of fit, not a substitute for it.',
      },
      {
        title: 'India and international, both ways',
        body: 'We place Indian creators with global brands and international creators with Indian brands — briefing both to the same standard.',
      },
      {
        title: 'One team, end to end',
        body: 'Strategy, sourcing, negotiation, briefing, production and reporting stay in-house, so nothing gets lost between vendors.',
      },
    ],
    networkTitle: 'Where our creators and brands are',
    closing: {
      heading: 'Building something and need reach?',
      body: 'Send us the brief. We will come back with a creator plan and an honest view of what is achievable.',
    },
  },

  contact: {
    eyebrow: 'Start a Campaign',
    h1: 'Tell us what you are launching.',
    paragraph:
      'Share your market, budget and goals. You will hear back from a real person within one business day.',
    formTitle: 'Campaign enquiry',
    detailsTitle: 'Or reach us directly',
    expectation: 'No forms? Email us and we will pick it up from there.',
  },

  join: {
    eyebrow: 'Creator Network',
    h1: 'Join our creator network.',
    paragraph:
      'We work with creators across India and international markets on paid campaigns, UGC and product collaborations.',
    benefitsTitle: 'What you get',
    benefits: [
      'Paid briefs matched to your niche and audience.',
      'Clear deliverables and timelines before you accept.',
      'A named contact who handles the brand side for you.',
      'Long-term collaborations when the first campaign performs.',
    ],
    formTitle: 'Creator application',
    closing: {
      heading: 'Brands: looking to hire creators instead?',
      body: 'Tell us who you need and we will shortlist from the network.',
    },
  },

  privacy: {
    eyebrow: 'Legal',
    h1: 'Privacy Policy',
    lastUpdated: 'Last updated: 30 October 2026',
    intro:
      'This policy explains what we collect when you use this website, why we collect it, and the choices you have.',
    sections: [
      {
        heading: 'What we collect',
        body: [
          'Information you submit through our forms: your name, email address, company, website, budget range, target market, creator preferences, social handles and any message you write.',
          'Analytics data — pages viewed and how you arrived at the site — but only after you accept cookies.',
        ],
      },
      {
        heading: 'Why we use it',
        body: [
          'To reply to your enquiry and prepare a campaign proposal.',
          'To review creator applications and match creators with relevant campaigns.',
          'To understand which pages and channels are useful, so we can improve the site.',
        ],
      },
      {
        heading: 'Cookies and analytics',
        body: [
          'We use a cookie-consent banner. Analytics scripts load only after you press “Accept”. If you decline, they do not load at all.',
        ],
      },
      {
        heading: 'Who we share it with',
        body: [
          'EmailJS — delivers form submissions to our inbox.',
          'Google Analytics and Meta — measure site usage, only after consent.',
          'Vercel — hosts this website.',
        ],
      },
      {
        heading: 'Your choices',
        body: [
          'You can ask us to show you the personal data we hold about you, correct it, or delete it.',
          'You can decline analytics cookies and still use every part of this site.',
        ],
      },
      {
        heading: 'Contact',
        body: [`Questions about this policy? Email ${contact.email}.`],
      },
    ],
  },

  terms: {
    eyebrow: 'Legal',
    h1: 'Terms of Service',
    lastUpdated: 'Last updated: 30 October 2026',
    intro:
      'These terms govern your use of this website.',
    sections: [
      {
        heading: 'Using this site',
        body: [
          'You may browse this site and submit enquiries and creator applications. Do not attempt to disrupt the site or submit spam.',
        ],
      },
      {
        heading: 'Enquiries are not agreements',
        body: [
          'Submitting a form starts a conversation. It does not create a contract. Work begins only under a separate written agreement.',
        ],
      },
      {
        heading: 'Limitation of liability',
        body: [
          'The site is provided on an “as is” basis. We are not liable for indirect losses arising from your use of this site.',
        ],
      },
      {
        heading: 'Contact',
        body: [`Questions about these terms? Email ${contact.email}.`],
      },
    ],
  },
} as const
