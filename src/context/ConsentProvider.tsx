import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  initAnalytics,
  setAnalyticsAllowed,
  trackPageView,
} from '../lib/analytics'

export type ConsentState = 'unset' | 'granted' | 'denied'

type ConsentContextValue = {
  consent: ConsentState
  /** True only after the visitor has actively accepted. */
  granted: boolean
  /** True until a decision is stored — controls the banner and the float. */
  bannerVisible: boolean
  accept: () => void
  decline: () => void
}

const STORAGE_KEY = 'avg.cookie-consent'

const ConsentContext = createContext<ConsentContextValue | null>(null)

function readStoredConsent(): ConsentState {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'granted' || stored === 'denied') return stored
  } catch {
    /* localStorage can be blocked — treat as unset */
  }
  return 'unset'
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>('unset')

  // Restore a previous decision on first paint.
  useEffect(() => {
    const stored = readStoredConsent()
    setConsent(stored)
    if (stored === 'granted') {
      setAnalyticsAllowed(true)
      initAnalytics()
    }
  }, [])

  const commit = useCallback((next: Exclude<ConsentState, 'unset'>) => {
    setConsent(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
    if (next === 'granted') {
      setAnalyticsAllowed(true)
      initAnalytics()
      trackPageView(window.location.pathname, document.title)
    }
  }, [])

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      granted: consent === 'granted',
      bannerVisible: consent === 'unset',
      accept: () => commit('granted'),
      decline: () => commit('denied'),
    }),
    [consent, commit],
  )

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  )
}

export function useConsent(): ConsentContextValue {
  const context = useContext(ConsentContext)
  if (!context) {
    throw new Error('useConsent must be used inside a <ConsentProvider>')
  }
  return context
}
