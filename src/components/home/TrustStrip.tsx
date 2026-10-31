import { trustStrip } from '../../content/site'
import Reveal from '../ui/Reveal'
import { InstagramIcon, TikTokIcon, YouTubeIcon } from '../ui/Icons'
import { FlagIcon } from '../ui/FlagIcon'

const PLATFORM_ICONS: Record<string, any> = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
}

export default function TrustStrip() {
  return (
    <div className="border-y border-line bg-white py-8 lg:py-10">
      <div className="shell">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Platforms */}
          <Reveal className="flex items-center gap-6 sm:gap-10">
            {trustStrip.platforms.map((platform) => {
              const Icon = PLATFORM_ICONS[platform.icon]
              return (
                <div
                  key={platform.name}
                  className="group flex items-center gap-2.5 transition-colors hover:text-accent"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-subtle text-ink/40 transition-colors group-hover:bg-accent-soft group-hover:text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-ink/50 group-hover:text-ink">
                    {platform.name}
                  </span>
                </div>
              )
            })}
          </Reveal>

          {/* Vertical Divider (Desktop only) */}
          <div className="hidden h-8 w-px bg-line lg:block" aria-hidden="true" />

          {/* Regions */}
          <Reveal delay={100} className="flex items-center gap-6 sm:gap-10">
            {trustStrip.regions.map((region) => (
              <div
                key={region.name}
                className="group flex items-center gap-3 transition-transform hover:scale-105"
              >
                <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-line bg-subtle shadow-sm transition-colors group-hover:border-accent/30">
                  <FlagIcon
                    country={region.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-ink/50 group-hover:text-ink">
                  {region.name}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </div>
  )
}
