import { useEffect, useState } from 'react'
import type { SectionId } from '../data/content'

type NavLink = { id: SectionId; label: string }

/**
 * Tracks which section is currently in the viewport so the navbar can
 * highlight the matching link while scrolling.
 */
export function useActiveSection(links: readonly NavLink[], offset = 120) {
  const [active, setActive] = useState<SectionId>(links[0]?.id ?? 'home')

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((element): element is HTMLElement => element !== null)

    if (sections.length === 0) return

    const update = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2

      if (nearBottom) {
        setActive(sections[sections.length - 1].id as SectionId)
        return
      }

      let current = sections[0].id as SectionId
      for (const section of sections) {
        if (section.getBoundingClientRect().top - offset <= 0) {
          current = section.id as SectionId
        }
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [links, offset])

  return active
}
