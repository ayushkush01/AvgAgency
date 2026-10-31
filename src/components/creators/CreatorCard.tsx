import { useEffect, useState } from 'react'
import type { Creator } from '../../content/creators'
import ActionButton from '../ui/ActionButton'
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

const gradients = [
  'from-blue-500 to-indigo-600',
  'from-purple-500 to-pink-600',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-red-600',
  'from-cyan-500 to-blue-600',
]

export default function CreatorCard({ creator }: { creator: Creator }) {
  const [avatarFailed, setAvatarFailed] = useState(false)

  // Reset the fallback if the URL changes at runtime.
  useEffect(() => setAvatarFailed(false), [creator.avatarUrl])

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
            <FlagIcon country={creator.countryCode} className="h-2.5 w-auto rounded-sm" />
            {creator.country}
          </li>
        </ul>

        <p className="mt-4 text-[12px] leading-relaxed text-muted/50">
          Dev hint: Add in creators.ts
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

  const gradient = gradients[creator.id.length % gradients.length]

  return (
    <article className="group flex h-full flex-col items-center rounded-card border border-line bg-white p-6 text-center transition duration-250 ease-out hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift">
      <div className={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-full font-display text-[20px] font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br ${gradient}`}>
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
      </div>

      <h3 className="mt-4 text-[17px] font-bold leading-tight text-ink">{creator.name}</h3>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-subtle px-2.5 py-1 text-[11px] font-semibold text-muted">
          <FlagIcon country={creator.countryCode} className="h-2.5 w-auto rounded-sm" />
          {creator.country}
        </div>
        <div className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-bold text-accent">
          {creator.niche}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        {creator.platforms.map((platform) => {
          const Icon = platformIconMap[platform]
          return (
            <div key={platform} className="flex h-8 w-8 items-center justify-center rounded-lg bg-subtle text-ink/40 transition-colors hover:bg-accent-soft hover:text-accent" title={platform}>
              <Icon className="h-4 w-4" />
            </div>
          )
        })}
      </div>

      {creator.followers && (
        <p className="mt-4 text-[13px] font-bold text-ink/60">
          {creator.followers} followers
        </p>
      )}

      <div className="mt-auto pt-6">
        <ActionButton
          variant="text"
          event="creator_click"
          eventLabel={creator.name}
          className="text-[14px] font-bold"
        >
          View Case Studies
          <ArrowUpRightIcon className="h-4 w-4 ml-1.5" />
        </ActionButton>
      </div>
    </article>
  )
}
