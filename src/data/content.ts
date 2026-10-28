/**
 * Single source of truth for every piece of copy on the site.
 * Edit text here — no component changes required.
 */

const img = (prompt: string, size: string) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt,
  )}&image_size=${size}`

export type IconKey = 'share' | 'users' | 'lightbulb' | 'video'
export type TintKey = 'orange' | 'yellow' | 'cyan' | 'red'
export type SectionId = 'home' | 'services' | 'work' | 'about' | 'contact'

/* ------------------------------------------------------------------ *
 * Navbar
 * ------------------------------------------------------------------ */
export const brand = {
  name: 'Creator',
  accent: 'Avg',
  sub: 'Agency',
} as const

export const navLinks: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const navAction = { label: "Let's Talk", href: '#contact' } as const

/* ------------------------------------------------------------------ *
 * Hero
 * ------------------------------------------------------------------ */
export const hero = {
  eyebrow: "India's #1 D2C Growth Agency",
  headingLine1: "Your Brand's",
  headingLine2: 'Growth Partner',
  paragraph:
    'We help D2C brands and e-commerce startups scale through social media, influencer marketing, brand strategy, and video production.',
  primaryCta: { label: 'Start Growing', href: '#contact' },
  secondaryCta: { label: 'See Our Work', href: '#work' },
  trustLabel: 'Trusted by 50+ brands across India',
  brands: [
    'Mamaearth',
    'boAt',
    'Nykaa',
    'Bewakoof',
    'Wakefit',
    'mCaffeine',
    'SUGAR Cosmetics',
    'Plum',
    'Noise',
    'Lenskart',
    'The Minimalist',
    'Bombay Shaving Co.',
  ],
  image: {
    src: img(
      'modern creative office workspace with large white wooden table, wooden chairs, bright daylight, plants, minimal aesthetic, high quality photography',
      'landscape_16_9',
    ),
    alt: 'Bright modern office with a long white table and wooden-leg chairs at Creator Avg Agency',
  },
  badge: { value: '200+ Campaigns', label: 'delivered' },
  floatCard: { value: '₹10Cr+', label: 'revenue generated' },
} as const

/* ------------------------------------------------------------------ *
 * What we do
 * ------------------------------------------------------------------ */
export const services = {
  eyebrow: 'What We Do',
  heading: 'Full-stack growth, built for modern brands.',
  linkLabel: 'Work with us',
  linkHref: '#contact',
  items: [
    {
      number: '01',
      tag: 'Social Media',
      title: 'Social Media Marketing',
      description:
        'Scroll-stopping content strategies that build communities and drive conversions across Instagram, YouTube & more.',
      icon: 'share' as IconKey,
      tint: 'orange' as TintKey,
    },
    {
      number: '02',
      tag: 'Influencer',
      title: 'Influencer Marketing',
      description:
        'End-to-end influencer campaigns — from micro to mega — that put your brand in front of the right audience.',
      icon: 'users' as IconKey,
      tint: 'yellow' as TintKey,
    },
    {
      number: '03',
      tag: 'Branding',
      title: 'Brand Strategy',
      description:
        'Deep brand audits, positioning frameworks, and go-to-market playbooks that set you apart.',
      icon: 'lightbulb' as IconKey,
      tint: 'cyan' as TintKey,
    },
    {
      number: '04',
      tag: 'Production',
      title: 'Video Production',
      description:
        'High-impact reels, ads, and brand films that tell your story and convert viewers.',
      icon: 'video' as IconKey,
      tint: 'red' as TintKey,
    },
  ],
} as const

/* ------------------------------------------------------------------ *
 * Our work
 * ------------------------------------------------------------------ */
export const work = {
  eyebrow: 'Our Work',
  heading: 'Results that speak for themselves.',
  items: [
    {
      pill: 'MAMAEARTH',
      name: 'Mamaearth',
      metric: '3.2x ROAS',
      note: '',
      image: {
        src: img(
          'natural skincare products flat lay on beige background, high quality photography',
          'portrait_4_3',
        ),
        alt: 'Mamaearth skincare product campaign shot for Creator Avg Agency',
      },
    },
    {
      pill: 'BOAT',
      name: 'boAt',
      metric: '12M+ Reach',
      note: 'Viral product launch campaign across Instagram and YouTube',
      image: {
        src: img(
          'premium wireless headphones on orange background, studio lighting, high quality photography',
          'portrait_4_3',
        ),
        alt: 'boAt audio product launch campaign creative',
      },
    },
    {
      pill: 'NYKAA',
      name: 'Nykaa',
      metric: '₹2Cr Revenue',
      note: '',
      image: {
        src: img(
          'luxury cosmetic products on pastel pink background, studio lighting, high quality photography',
          'portrait_4_3',
        ),
        alt: 'Nykaa beauty campaign creative with cosmetics on a pink backdrop',
      },
    },
  ],
} as const

/* ------------------------------------------------------------------ *
 * How we work
 * ------------------------------------------------------------------ */
export const process = {
  eyebrow: 'How We Work',
  heading: 'A process built for results.',
  steps: [
    {
      number: '01',
      title: 'Discover',
      description:
        'Deep-dive into your brand, audience, and competitors to uncover growth opportunities.',
    },
    {
      number: '02',
      title: 'Create',
      description:
        'Build scroll-stopping content, campaigns, and strategies tailored to your goals.',
    },
    {
      number: '03',
      title: 'Launch',
      description:
        'Execute with precision across channels — paid, organic, influencer, and video.',
    },
    {
      number: '04',
      title: 'Scale',
      description:
        'Analyse, optimise, and double down on what works to compound your growth.',
    },
  ],
} as const

/* ------------------------------------------------------------------ *
 * Impact (dark section)
 * ------------------------------------------------------------------ */
export const impact = {
  eyebrow: '"OUR IMPACT"',
  heading: '"Numbers that prove it."',
  paragraph:
    'Real results from real campaigns across 50+ Indian D2C brands.',
  cta: { label: 'Partner with us', href: '#contact' },
  stats: [
    { value: '50+', label: 'Brands Scaled' },
    { value: '₹10Cr+', label: 'Revenue Generated' },
    { value: '200+', label: 'Campaigns Launched' },
    { value: '12M+', label: 'Views Delivered' },
  ],
} as const

/* ------------------------------------------------------------------ *
 * Testimonials
 * ------------------------------------------------------------------ */
export const testimonials = {
  eyebrow: 'What Clients Say',
  heading: 'Trusted by founders who mean business.',
  items: [
    {
      quote:
        'Creator Avg Agency transformed our Instagram presence. Our engagement tripled in just 60 days and we saw a direct impact on our D2C sales.',
      name: 'Priya Sharma',
      role: 'Founder, Skincare Brand',
      tint: 'orange' as TintKey,
    },
    {
      quote:
        'The influencer campaign they ran for our product launch was flawless. 12 million reach, zero drama. These guys know what they\'re doing.',
      name: 'Rahul Mehta',
      role: 'CMO, Consumer Electronics',
      tint: 'yellow' as TintKey,
    },
    {
      quote:
        'Finally an agency that understands the Indian D2C market. Their brand strategy completely repositioned us and our revenue doubled in a quarter.',
      name: 'Ananya Kapoor',
      role: 'Co-founder, Fashion Brand',
      tint: 'cyan' as TintKey,
    },
  ],
} as const

/* ------------------------------------------------------------------ *
 * Final CTA
 * ------------------------------------------------------------------ */
export const cta = {
  eyebrow: "Let's Collaborate",
  heading: 'Ready to scale?',
  paragraph: "Let's build something remarkable together.",
  button: { label: 'Get Started', href: '#contact' },
  email: 'admin@creatoravgagency.in',
} as const

/* ------------------------------------------------------------------ *
 * Footer
 * ------------------------------------------------------------------ */
export const footer = {
  description:
    "India's #1 D2C growth agency — helping brands scale through social media, influencer marketing, brand strategy, and video production.",
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'X', href: '#' },
  ],
  quickLinksTitle: 'Quick Links',
  contactTitle: 'Contact',
  contactRows: [
    { label: 'Helpline', value: 'admin@creatoravgagency.in' },
    { label: 'Website', value: 'creatoravgagency.in' },
  ],
  contactCta: { label: 'Get in Touch', href: '#contact' },
  copyright: '© 2026 Creator Avg Agency. All rights reserved.',
  legalLinks: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
} as const
