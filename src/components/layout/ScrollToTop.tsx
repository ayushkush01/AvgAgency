import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../../lib/analytics'

/**
 * Resets scroll on navigation and reports the page view to analytics.
 * Honours `prefers-reduced-motion` by jumping instantly.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // `instant` avoids the site-wide smooth-scroll for route transitions.
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  useEffect(() => {
    trackPageView(pathname, document.title)
  }, [pathname])

  return null
}
