import type { TintKey } from '../data/content'

export type Tint = {
  /** Tinted rounded-square background for icon tiles */
  tile: string
  /** Accessible foreground for the glyph inside the tile */
  glyph: string
  /** Full-strength background, e.g. for pills */
  solid: string
  /** Soft border tone matching the tint */
  ring: string
}

/**
 * Yellow and cyan are lightened for WCAG AA contrast when used as a glyph on
 * white — the hue is preserved, only the lightness changes.
 */
export const tints: Record<TintKey, Tint> = {
  orange: {
    tile: 'bg-accent/10',
    glyph: 'text-accent',
    solid: 'bg-accent',
    ring: 'border-accent/25',
  },
  yellow: {
    tile: 'bg-sunny/20',
    glyph: 'text-[#A16207]',
    solid: 'bg-sunny',
    ring: 'border-sunny/40',
  },
  cyan: {
    tile: 'bg-cyan/20',
    glyph: 'text-[#0E7490]',
    solid: 'bg-cyan',
    ring: 'border-cyan/40',
  },
  red: {
    tile: 'bg-[#EF4444]/10',
    glyph: 'text-[#EF4444]',
    solid: 'bg-[#EF4444]',
    ring: 'border-[#EF4444]/30',
  },
}
