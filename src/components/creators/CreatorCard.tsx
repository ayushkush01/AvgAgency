import { useEffect, useState } from 'react'
import type { Creator } from '../../content/site'
import { trackEvent } from '../../lib/analytics'
import {
  ArrowUpRightIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  UserPlusIcon,
  YouTubeIcon,
} from '../ui/Icons'
import { FlagIcon } from '../ui/FlagIcon'

const platformIconMap = {
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
  TikTok: TikTokIcon,
  LinkedIn: LinkedInIcon,
} as const

export default function CreatorCard({ creator }: { creator: Creator }) {
  const [avatarFailed, setAvatarFailed] = useState(false)

  // Reset the fallback if the URL changes at runtime.
  useEffect(() => setAvatarFailed(false), [creator.avatarUrl])

  const PlatformIcon = platformIconMap[creator.platform]

  // Reserved slots only visible in development
  if (creator.placeholder) {
    if (!import.meta.env.DEV) return null

    return (
      <article className="flex h-full flex-col items-center rounded-card border border-dashed border-line bg-subtle/50 p-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-line text-muted/30">
          <UserPlusIcon className="h-7 w-7" />
        </span>

        <p className="mt-4 text-[14px] font-bold text-muted/60">
          Reserved creator slot
        </p>

        <ul className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
          <li className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-muted">
            {creator.niche}
          </li>
          <li className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-muted">
            <FlagIcon country={creator.country} className="h-2.5 w-auto rounded-sm" />
            {creator.country}
          </li>
        </ul>

        <p className="mt-4 text-[12px] leading-relaxed text-muted/50">
          Dev hint: Add in site.ts
        </p>
      </article>
    )
  }

  const initials = creator.name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <article className="group flex h-full flex-col items-center rounded-card border border-line bg-white p-6 text-center transition duration-250 ease-out hover:-translate-y-1 hover:border-accent/30 hover:shadow-soft">
      <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-accent/10 font-display text-[20px] font-bold text-accent">
        {creator.avatarUrl && !avatarFailed ? (
          <img
            src={creator.avatarUrl}
            alt={`${creator.name}, ${creator.niche} creator`}
            width={64}
            height={64}
            loading="lazy"
            decoding="async"
            onError={() => setAvatarFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          initials
        )}
      </span>

      <h3 className="mt-4 text-[17px] font-semibold leading-tight">{creator.name}</h3>

      <ul className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
        <li className="inline-flex items-center gap-1.5 rounded-full bg-subtle px-2.5 py-1 text-[11px] font-semibold text-muted">
          <PlatformIcon className="h-3.5 w-3.5" />
          {creator.platform}
        </li>
        <li className="rounded-full bg-subtle px-2.5 py-1 text-[11px] font-semibold text-muted">
          {creator.niche}
        </li>
        <li className="inline-flex items-center gap-1.5 rounded-full bg-subtle px-2.5 py-1 text-[11px] font-semibold text-muted">
          <FlagIcon country={creator.country} className="h-2.5 w-auto rounded-sm" />
          {creator.country}
        </li>
      </ul>

      {creator.followers && (
        <p className="mt-3 text-[13px] font-semibold text-muted/70">
          {creator.followers} followers
        </p>
      )}

      <div className="mt-auto pt-5">
        {creator.profileUrl ? (
          <a
            href={creator.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent('outbound_social_click', {
                label: `creator:${creator.name}`,
              })
            }
            className="inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-semibold text-accent transition-colors duration-200 hover:text-accent-hover"
          >
            View profile
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        ) : (
          <span className="inline-flex min-h-[44px] items-center text-[14px] font-medium text-muted/50">
            Profile link pending
          </span>
        )}
      </div>
    </article>
  )
}
