import * as Flags from 'country-flag-icons/react/3x2'
import { GlobeIcon } from './Icons'

export function FlagIcon({
  country,
  className = 'h-4 w-auto',
}: {
  country: string
  className?: string
}) {
  const normalized = country.toLowerCase().trim()

  if (normalized === 'usa' || normalized === 'united states' || normalized === 'us') {
    return <Flags.US className={className} />
  }
  if (normalized === 'uk' || normalized === 'united kingdom' || normalized === 'gb') {
    return <Flags.GB className={className} />
  }
  if (normalized === 'uae' || normalized === 'united arab emirates' || normalized === 'ae') {
    return <Flags.AE className={className} />
  }
  if (normalized === 'india' || normalized === 'in') {
    return <Flags.IN className={className} />
  }
  if (normalized === 'global' || normalized === 'world') {
    return <GlobeIcon className={`${className} text-accent`} />
  }

  return null
}
