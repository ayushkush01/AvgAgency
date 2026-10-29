import { Link } from 'react-router-dom'
import { brand } from '../../content/site'

/**
 * Text wordmark: "AVG" in ink/white followed by "Agency" in the accent colour.
 * The agency name itself comes from BRAND_NAME in content/site.ts.
 */
export default function Logo({
  tone = 'light',
  withTagline = true,
  onClick,
}: {
  tone?: 'light' | 'dark'
  withTagline?: boolean
  onClick?: () => void
}) {
  const isDark = tone === 'dark'

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${brand.name} — home`}
      className="flex flex-col justify-center leading-none"
    >
      <span className="font-display text-[23px] font-bold tracking-[-0.03em] lg:text-[26px]">
        <span className={isDark ? 'text-white' : 'text-ink'}>
          {brand.wordmark.lead}
        </span>
        <span className="text-accent"> {brand.wordmark.trail}</span>
      </span>
      {withTagline && (
        <span
          className={`mt-[5px] text-[8.5px] font-bold uppercase tracking-[0.34em] ${
            isDark ? 'text-white/45' : 'text-ink/45'
          }`}
        >
          Influencer · UGC
        </span>
      )}
    </Link>
  )
}
