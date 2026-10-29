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
    handle: '@avgagency', // TODO: replace with the real handle
    url: '', // TODO: e.g. 'https://instagram.com/avgagency'
  },
  linkedin: {
    label: 'AVG Agency',
    url: '', // TODO: e.g. 'https://linkedin.com/company/avgagency'
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
 * 5. MARKETS STRIP — regions only. No logo claims.
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
 * 6. SERVICES — two core offerings.
 * -------------------------------------------------------------------------- */
export type ServiceIcon = 'creators' | 'video'

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
  heading: 'Two services. One growth engine.',
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
        'End-to-end influencer campaigns — strategy, creator sourcing, negotiation, briefing, approvals and reporting. Micro to mega, across India and international markets.',
      features: [
        'Creator sourcing & vetting',
        'Campaign strategy & briefs',
        'Rate negotiation & contracting',
        'Content approvals & scheduling',
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
        'Creator-made, platform-native content built for paid and organic — delivered ready to run on Meta, TikTok, YouTube and Amazon.',
      features: [
        'Authentic videos',
        'Product reviews',
        'Testimonials',
        'Unboxing videos',
        'Ad creatives',
      ],
      cta: { label: 'Request UGC samples', to: '/contact' },
    },
  ] satisfies Service[],
} as const

/* -------------------------------------------------------------------------- *
 * 7. CREATOR NETWORK PREVIEW
 *
 *    Every entry below is a PLACEHOLDER SLOT. Replace with real, consented
 *    creator profiles before launch, then set `placeholder: false`.
 * -------------------------------------------------------------------------- */
export type Creator = {
  id: string
  /** Real creator name. Ignored while `placeholder` is true. */
  name: string
  niche: string
  platform: 'Instagram' | 'YouTube' | 'TikTok' | 'LinkedIn'
  country: string
  flag: string
  /** Optional follower range label, e.g. '100K–500K'. */
  followers: string
  /** Optional headshot URL. Falls back to initials when empty. */
  avatarUrl: string
  /** Only render a link when this is set. */
  profileUrl: string
  placeholder: boolean
}

export const creatorNetwork = {
  eyebrow: 'Creator Network',
  heading: 'Creators across India and international markets.',
  paragraph:
    'A vetted roster spanning beauty, fashion, tech, fitness, food and more — matched to your market and objectives.',
  cta: { label: 'Browse all creators', to: '/creators' },
  overviewCta: { label: 'Join Our Creator Network', to: '/join' },
  /** Shown while every entry is still a placeholder. */
  emptyState: {
    title: 'Verified creator profiles coming soon',
    body: 'We are onboarding our roster and publishing consented profiles. Creator cards below are reserved slots — add your real roster in content/site.ts.',
  },
  items: [
    { id: 'slot-1', name: 'Creator slot 01', niche: 'Beauty', platform: 'Instagram', country: 'India', flag: '🇮🇳', followers: '', avatarUrl: '', profileUrl: '', placeholder: true },
    { id: 'slot-2', name: 'Creator slot 02', niche: 'Fashion', platform: 'Instagram', country: 'UAE', flag: '🇦🇪', followers: '', avatarUrl: '', profileUrl: '', placeholder: true },
    { id: 'slot-3', name: 'Creator slot 03', niche: 'Technology', platform: 'YouTube', country: 'USA', flag: '🇺🇸', followers: '', avatarUrl: '', profileUrl: '', placeholder: true },
    { id: 'slot-4', name: 'Creator slot 04', niche: 'Fitness', platform: 'Instagram', country: 'India', flag: '🇮🇳', followers: '', avatarUrl: '', profileUrl: '', placeholder: true },
    { id: 'slot-5', name: 'Creator slot 05', niche: 'Lifestyle', platform: 'TikTok', country: 'UK', flag: '🇬🇧', followers: '', avatarUrl: '', profileUrl: '', placeholder: true },
    { id: 'slot-6', name: 'Creator slot 06', niche: 'Food', platform: 'Instagram', country: 'India', flag: '🇮🇳', followers: '', avatarUrl: '', profileUrl: '', placeholder: true },
    { id: 'slot-7', name: 'Creator slot 07', niche: 'Travel', platform: 'YouTube', country: 'UAE', flag: '🇦🇪', followers: '', avatarUrl: '', profileUrl: '', placeholder: true },
    { id: 'slot-8', name: 'Creator slot 08', niche: 'Gaming', platform: 'YouTube', country: 'USA', flag: '🇺🇸', followers: '', avatarUrl: '', profileUrl: '', placeholder: true },
  ] satisfies Creator[],
} as const

/* -------------------------------------------------------------------------- *
 * 8. CREATOR CATEGORIES — icon tiles, each links to /creators?category=…
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
 * 9. CAMPAIGN PROCESS — 5 steps.
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
 * 10. CAMPAIGN PACKAGES — no prices anywhere. Custom scope only.
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
  /** Displayed on every card instead of a price. */
  priceLabel: 'Pricing available on request',
  primaryCta: { label: 'Customize Your Package', to: '/contact' },
  items: [
    {
      id: 'startup',
      name: 'Startup',
      audience: 'For first campaigns and proofs of concept',
      summary: 'Test the channel with a focused creator sprint.',
      features: [
        '1 market',
        '4–6 creators',
        'Campaign strategy & briefs',
        'Content delivery',
        'Performance summary',
      ],
      highlighted: false,
    },
    {
      id: 'growing-brand',
      name: 'Growing Brand',
      audience: 'For brands scaling what already works',
      summary: 'A multi-creator programme with ongoing content output.',
      features: [
        'Up to 3 markets',
        '10–20 creators',
        'Always-on UGC pipeline',
        'Paid ad creative variants',
        'Monthly reporting call',
      ],
      highlighted: true,
    },
    {
      id: 'established-business',
      name: 'Established Business',
      audience: 'For teams running always-on influencer programmes',
      summary: 'A managed creator programme with dedicated support.',
      features: [
        'Unlimited markets',
        '20+ creators',
        'Dedicated account lead',
        'Quarterly strategy reviews',
        'Custom reporting & dashboards',
      ],
      highlighted: false,
    },
  ] satisfies Package[],
} as const

/* -------------------------------------------------------------------------- *
 * 11. RESULTS — verified metrics + case studies.
 *     All entries are placeholders until real, verified data is added.
 * -------------------------------------------------------------------------- */
export type Metric = {
  id: string
  label: string
  /** e.g. '12.4M'. Leave as '' while placeholder. */
  value: string
  note: string
  placeholder: boolean
}

export type CaseStudy = {
  id: string
  client: string
  category: string
  summary: string
  /** Deliverable chips, e.g. 'Instagram Reels'. */
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
  metricsLabel: 'Campaign performance',
  emptyState: {
    title: 'Verified results coming soon',
    body: 'We are collecting client-approved performance data. These slots are reserved for real campaign numbers.',
  },
  caseStudiesLabel: 'Case studies',
  caseStudiesEmptyState: {
    title: 'No case studies published yet',
    body: 'Each case study is released once the client has approved the numbers and assets. Add yours in content/site.ts.',
  },
  cta: { label: 'Start a Campaign', to: '/contact' },
  metrics: [
    { id: 'reach', label: 'Campaign reach', value: '', note: 'Across creator content', placeholder: true },
    { id: 'engagement', label: 'Engagement rate', value: '', note: 'Blended average', placeholder: true },
    { id: 'views', label: 'Video views', value: '', note: 'Organic + paid', placeholder: true },
    { id: 'conversions', label: 'Conversions driven', value: '', note: 'Tracked via link & code', placeholder: true },
  ] satisfies Metric[],
  caseStudies: [] as CaseStudy[],
} as const

/* -------------------------------------------------------------------------- *
 * 12. TESTIMONIALS
 *     The section auto-hides while this array is empty — no invented quotes.
 *     To publish one, add an object with `placeholder: false`.
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
 * 13. FAQ — also emitted as FAQPage JSON-LD for search.
 * -------------------------------------------------------------------------- */
export const faq = {
  eyebrow: 'FAQ',
  heading: 'Questions brands ask us first.',
  items: [
    {
      question: 'How much does an influencer campaign cost?',
      answer:
        'Cost depends on market, creator tier and deliverables. We scope every campaign to your budget, and pricing is shared as a tailored proposal after we understand your goals. There are no off-the-shelf rates.',
    },
    {
      question: 'Which countries do you work in?',
      answer:
        'We run campaigns for brands in the USA, UK, UAE and India, and we place Indian creators for international brands and international creators for Indian brands.',
    },
    {
      question: 'How do you select creators?',
      answer:
        'We start from your audience and objective, then screen on category fit, audience geography, engagement quality and content style. You approve the final shortlist before anything is briefed.',
    },
    {
      question: 'What is the typical turnaround time?',
      answer:
        'UGC-only deliverables usually take 1–2 weeks from brief to final files. Full influencer campaigns typically run 3–6 weeks from kickoff to delivery, depending on creator availability and approvals.',
    },
  ],
} as const

/* -------------------------------------------------------------------------- *
 * 14. FINAL CTA BAND
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
 * 15. FOOTER
 * -------------------------------------------------------------------------- */
export const footer = {
  description:
    'Influencer marketing and UGC content creation for brands in the USA, UK, UAE and India.',
  quickLinksTitle: 'Quick Links',
  contactTitle: 'Contact',
  socialsTitle: 'Follow',
  emailLabel: 'Email',
  whatsappLabel: 'WhatsApp',
  instagramLabel: 'Instagram',
  linkedinLabel: 'LinkedIn',
  cta: { label: 'Get in Touch', to: '/contact' },
  legalTitle: 'Legal',
  copyright: `© ${new Date().getFullYear()} ${BRAND_NAME}. All rights reserved.`,
  legalLinks: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
  ],
  /** Design credit — leave blank to hide. */
  credit: {
    prefix: 'Made & Designed by',
    name: 'CraftoraX',
    email: 'craftoraxcoders@gmail.com',
    url: 'https://craftorax.in',
  },
} as const

/* -------------------------------------------------------------------------- *
 * 16. COOKIE CONSENT
 * -------------------------------------------------------------------------- */
export const cookieConsent = {
  title: 'We use cookies',
  body: 'We use analytics cookies to understand how the site is used. Nothing loads until you accept.',
  accept: 'Accept',
  decline: 'Decline',
  policyLink: { label: 'Privacy Policy', to: '/privacy' },
} as const

/* -------------------------------------------------------------------------- *
 * 17. FORM OPTIONS — shared dropdown values for both forms.
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
 * 18. FORMS — every label, placeholder and message for both forms.
 *     Variable names sent to EmailJS live in src/constants/emailjs.ts.
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
 * 19. PAGES — per-page hero copy. Each page renders exactly one H1.
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
      body: 'We are onboarding our roster and publishing consented profiles. These cards are reserved slots — add your real roster in content/site.ts.',
    },
    cta: { label: 'Request creators', to: '/contact' },
    joinCta: { label: 'Join Our Creator Network', to: '/join' },
  },

  work: {
    eyebrow: 'Our Work',
    h1: 'Case studies, published once clients approve them.',
    paragraph:
      'We only publish campaign numbers a client has signed off on. Until then, the slots below stay open rather than filled with estimates.',
    cta: { label: 'Start a Campaign', to: '/contact' },
    metricsTitle: 'Performance snapshot',
    caseStudiesTitle: 'Published case studies',
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
    lastUpdated: 'Last updated: 29 October 2026',
    intro:
      'This policy explains what we collect when you use this website, why we collect it, and the choices you have. It describes what this site actually does — nothing more.',
    sections: [
      {
        heading: 'What we collect',
        body: [
          'Information you submit through our forms: your name, email address, company, website, budget range, target market, creator preferences, social handles and any message you write.',
          'Analytics data — pages viewed and how you arrived at the site — but only after you accept cookies. Nothing is measured before that.',
          'Campaign attribution parameters (UTM tags and click IDs) from the link you arrived on, stored with your form submission so we know which channel brought you in.',
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
          'We use a cookie-consent banner. Analytics scripts (Google Analytics 4 and the Meta Pixel) load only after you press “Accept”. If you decline, they do not load at all.',
          'Your choice is stored in your browser. You can change it at any time by clearing this site’s storage in your browser settings.',
        ],
      },
      {
        heading: 'Who we share it with',
        body: [
          'EmailJS — delivers form submissions to our inbox and sends your confirmation email.',
          'Google Analytics and Meta — measure site usage, only after consent.',
          'Vercel — hosts this website and processes requests on our behalf.',
          'We do not sell your personal information.',
        ],
      },
      {
        heading: 'How long we keep it',
        body: [
          'Enquiries and creator applications are kept while the relationship is active and for a reasonable period afterwards, so we can pick up a conversation where it left off. You can ask us to delete your data at any time.',
        ],
      },
      {
        heading: 'Your choices',
        body: [
          'You can ask us to show you the personal data we hold about you, correct it, or delete it. Email us and we will action the request.',
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
    lastUpdated: 'Last updated: 29 October 2026',
    intro:
      'These terms govern your use of this website. They are written plainly, and they describe the site as it exists today.',
    sections: [
      {
        heading: 'Using this site',
        body: [
          'You may browse this site and submit enquiries and creator applications. Do not attempt to disrupt the site, submit spam, or use the forms to send anything unlawful or misleading.',
        ],
      },
      {
        heading: 'Enquiries are not agreements',
        body: [
          'Submitting a form starts a conversation. It does not create a contract, reserve creator availability, or commit either side to a campaign. Work begins only under a separate written agreement with agreed scope and fees.',
        ],
      },
      {
        heading: 'No performance guarantee',
        body: [
          'Influencer and UGC campaigns depend on factors outside our control, including platform algorithms and creator audiences. We do not guarantee specific reach, engagement, conversions or revenue.',
        ],
      },
      {
        heading: 'Content and intellectual property',
        body: [
          'The text, layout, graphics and code on this site belong to us or are used with permission. Creator profiles and campaign assets remain the property of their respective owners.',
          'Content created for a client is governed by that client’s agreement, not by these terms.',
        ],
      },
      {
        heading: 'Third-party links and services',
        body: [
          'This site links to and uses third-party services such as Instagram, LinkedIn, WhatsApp, Google Analytics, Meta and EmailJS. We are not responsible for their content or their practices.',
        ],
      },
      {
        heading: 'Limitation of liability',
        body: [
          'The site is provided on an “as is” basis. To the extent permitted by law, we are not liable for indirect or consequential losses arising from your use of this site.',
        ],
      },
      {
        heading: 'Changes and governing law',
        body: [
          'We may update these terms as the site changes; the date at the top reflects the latest revision.',
          'These terms are governed by the laws of India.',
        ],
      },
      {
        heading: 'Contact',
        body: [`Questions about these terms? Email ${contact.email}.`],
      },
    ],
  },
} as const

