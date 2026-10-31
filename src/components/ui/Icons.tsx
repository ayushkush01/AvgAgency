import type { ComponentType, SVGProps } from 'react'
import type { CategoryIcon, ServiceIcon } from '../../content/site'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/* -------------------------------------------------------------------------- *
 * Navigation & actions
 * -------------------------------------------------------------------------- */
export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.2} aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.2} aria-hidden="true" {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.2} aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.2} aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.2} aria-hidden="true" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.6} aria-hidden="true" {...props}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  )
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.8" />
    </svg>
  )
}

export function AlertIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5M12 16.2h.01" />
    </svg>
  )
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.2} aria-hidden="true" {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function MinusIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.2} aria-hidden="true" {...props}>
      <path d="M5 12h14" />
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.2} aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  )
}

export function LoaderIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.25"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* -------------------------------------------------------------------------- *
 * Contact
 * -------------------------------------------------------------------------- */
export function MailIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </svg>
  )
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9S14.4 18.4 12 21c-2.4-2.6-3.6-5.6-3.6-9S9.6 5.6 12 3Z" />
    </svg>
  )
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M21 11.6a8.5 8.5 0 0 1-12.4 7.6L3 21l1.9-5.5A8.5 8.5 0 1 1 21 11.6Z" />
      <path d="M8.7 8.4h1.2l1 2.2-1 1a6.5 6.5 0 0 0 2.7 2.7l1-1 2.2 1v1.2c0 .6-.5 1.1-1.1 1.1a7.9 7.9 0 0 1-7.1-7.1c0-.6.5-1.1 1.1-1.1Z" />
    </svg>
  )
}

/* -------------------------------------------------------------------------- *
 * Social
 * -------------------------------------------------------------------------- */
export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" />
    </svg>
  )
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M7.5 10.5V17M7.5 7.4h.01M11.5 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" />
    </svg>
  )
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  )
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="m11 9.6 4 2.4-4 2.4V9.6Z" />
    </svg>
  )
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M15 4v9.2a3.4 3.4 0 1 1-3.4-3.4" />
      <path d="M15 4c.4 2.2 2 3.7 4.2 3.9" />
    </svg>
  )
}

/* -------------------------------------------------------------------------- *
 * Services
 * -------------------------------------------------------------------------- */
export function CreatorsIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20" />
      <circle cx="9" cy="7" r="3.2" />
      <path d="M17.5 4.3a3.2 3.2 0 0 1 0 6.2M22 20v-1.5a4 4 0 0 0-3-3.8" />
    </svg>
  )
}

export function VideoIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="2" y="6" width="13" height="12" rx="3" />
      <path d="m15 11.5 6-3.3v8.6l-6-3.3v-2Z" />
    </svg>
  )
}

export function StrategyIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 3v18M3 12h18" />
      <path d="M12 8l4 4-4 4-4-4 4-4Z" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  )
}

export function TargetIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function MessagesIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M20 14.5a3.5 3.5 0 0 1-3.5 3.5H9l-4 3v-3.6A3.5 3.5 0 0 1 4 14.5v-6A3.5 3.5 0 0 1 7.5 5h9A3.5 3.5 0 0 1 20 8.5v6Z" />
      <path d="M8.5 11h7M8.5 8h4" />
    </svg>
  )
}

export function RocketIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M13.5 4.6C16.6 3 20 3.4 20 3.4s.4 3.4-1.2 6.5c-1.3 2.5-3.7 4.6-6.3 6l-3.5-.7-2-2-.7-3.5c1.4-2.6 3.5-5 5.7-6.1Z" />
      <circle cx="15.2" cy="8.8" r="1.6" />
      <path d="M6.5 17.5 4 20M9.5 18.5 8 21" />
    </svg>
  )
}

export function GridIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
    </svg>
  )
}

export function ChartIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M4 20h16" />
      <path d="M7 20V11M12 20V5M17 20v-6" />
    </svg>
  )
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m4 12.5 8 4.3 8-4.3M4 16.8l8 4.2 8-4.2" />
    </svg>
  )
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 3.5l1.8 4.4 4.4 1.8-4.4 1.8L12 15.9l-1.8-4.4L5.8 9.7l4.4-1.8L12 3.5Z" />
      <path d="M18.6 15.4l.7 1.7 1.7.7-1.7.7-.7 1.7-.7-1.7-1.7-.7 1.7-.7.7-1.7Z" />
    </svg>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 3.5 5 6v6c0 4.2 3 7.3 7 8.5 4-1.2 7-4.3 7-8.5V6l-7-2.5Z" />
      <path d="m9.2 12.1 2 2 3.6-3.8" />
    </svg>
  )
}

export function UserPlusIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="10" cy="8" r="3.4" />
      <path d="M3.5 20v-1.2A4.8 4.8 0 0 1 8.3 14h3.4a4.8 4.8 0 0 1 4.8 4.8V20" />
      <path d="M19 7v5M21.5 9.5h-5" />
    </svg>
  )
}

export function CookieIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M20.8 12.6A9 9 0 1 1 11.4 3a3.4 3.4 0 0 0 4.2 4.3 3.4 3.4 0 0 0 5.2 5.3Z" />
      <circle cx="9" cy="10" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="9.6" cy="15" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.4" cy="15.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Proper vector quote mark. (The previous build rendered two literal "9"
 * glyphs here — this replaces that.)
 */
export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.6 5.4c-3.4 1.5-5.6 4.5-5.6 8.3 0 3 1.6 4.9 4 4.9 2.1 0 3.6-1.5 3.6-3.5 0-1.9-1.3-3.3-3.1-3.3-.3 0-.6 0-.9.1.4-1.9 1.8-3.5 3.6-4.4l-1.6-2.1Zm9.1 0c-3.4 1.5-5.6 4.5-5.6 8.3 0 3 1.6 4.9 4 4.9 2.1 0 3.6-1.5 3.6-3.5 0-1.9-1.3-3.3-3.1-3.3-.3 0-.6 0-.9.1.4-1.9 1.8-3.5 3.6-4.4l-1.6-2.1Z" />
    </svg>
  )
}

/* -------------------------------------------------------------------------- *
 * Creator categories
 * -------------------------------------------------------------------------- */
export function BeautyIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M9.5 3.5h3.2l1 5.2H8.5l1-5.2Z" />
      <path d="M8.5 8.7h5.2V20a1 1 0 0 1-1 1h-3.2a1 1 0 0 1-1-1V8.7Z" />
      <path d="M8.5 13h5.2" />
      <path d="M18.6 3.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
    </svg>
  )
}

export function FashionIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M8.2 4 5 6.2l1.4 3.4 1.8-.6V20h7.6V9l1.8.6L19 6.2 15.8 4 13.6 6h-3.2L8.2 4Z" />
    </svg>
  )
}

export function LifestyleIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M4 10.6 12 4l8 6.6V20H4v-9.4Z" />
      <path d="M9.6 20v-5.4h4.8V20" />
    </svg>
  )
}

export function FitnessIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M3.2 9.5v5M6.4 7v10M17.6 7v10M20.8 9.5v5M6.4 12h11.2" />
    </svg>
  )
}

export function TechnologyIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2.5" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </svg>
  )
}

export function FoodIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M6.5 3v6.2a2.2 2.2 0 0 0 4.4 0V3" />
      <path d="M8.7 9.2V21" />
      <path d="M16.5 3v18" />
      <path d="M16.5 3.4c1.9 1 2.6 3 2.6 5.4 0 2.2-.8 3.4-2.6 3.4" />
    </svg>
  )
}

export function TravelIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M21.4 3.6 2.6 10.5l6.6 2.3 2.3 6.6 9.9-15.8Z" />
      <path d="M9.2 12.8 21.4 3.6" />
    </svg>
  )
}

export function GamingIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M8.2 8h7.6a5 5 0 0 1 4.7 6.8l-.6 1.8a2.4 2.4 0 0 1-4.2.8L14.4 16H9.6l-1.3 1.4a2.4 2.4 0 0 1-4.2-.8l-.6-1.8A5 5 0 0 1 8.2 8Z" />
      <path d="M8.4 12h2M9.4 11v2M15 11.6h.01M16.6 13.2h.01" />
    </svg>
  )
}

/* -------------------------------------------------------------------------- *
 * Lookups used by data-driven sections
 * -------------------------------------------------------------------------- */
export const serviceIconMap: Record<ServiceIcon, ComponentType<IconProps>> = {
  creators: CreatorsIcon,
  video: VideoIcon,
  strategy: StrategyIcon,
}

export const categoryIconMap: Record<CategoryIcon, ComponentType<IconProps>> = {
  beauty: BeautyIcon,
  fashion: FashionIcon,
  lifestyle: LifestyleIcon,
  fitness: FitnessIcon,
  technology: TechnologyIcon,
  food: FoodIcon,
  travel: TravelIcon,
  gaming: GamingIcon,
}
