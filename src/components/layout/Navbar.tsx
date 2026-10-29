import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { nav } from '../../content/site'
import ActionButton from '../ui/ActionButton'
import Logo from '../ui/Logo'
import { ArrowRightIcon, CloseIcon, MenuIcon } from '../ui/Icons'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close the mobile panel whenever the route changes.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Escape closes; body scroll is locked while the panel is open.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative inline-flex items-center px-1 pt-1 text-[15px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm ${
      isActive ? 'font-semibold text-ink' : 'font-medium text-ink/60 hover:text-ink'
    }`

  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-line bg-white/90 backdrop-blur-md">
      <div className="shell flex h-full items-center justify-between gap-8">
        <Logo onClick={() => setMenuOpen(false)} />

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.links.map((link) => (
              <li key={link.to} className="h-full flex items-center">
                <NavLink to={link.to} end={link.to === '/'} className={linkClass}>
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-[22px] left-0 h-[2px] w-full rounded-full bg-accent transition-transform duration-250 ease-out ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop actions */}
        <div className="flex items-center gap-4">
          <ActionButton
            to={nav.primaryCta.to}
            variant="primary"
            className="hidden h-11 px-6 text-[14px] lg:inline-flex"
            event="cta_click"
            eventLabel={nav.primaryCta.label}
            icon={<ArrowRightIcon className="h-4 w-4" />}
          >
            {nav.primaryCta.label}
          </ActionButton>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:bg-subtle lg:hidden"
          >
            {menuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / tablet panel */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="shell py-8">
          <ul className="flex flex-col gap-2">
            {nav.links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3.5 text-lg transition-colors duration-200 ${
                      isActive
                        ? 'bg-accent-soft font-bold text-accent'
                        : 'font-medium text-ink/70 hover:bg-subtle'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4">
            <ActionButton
              to={nav.primaryCta.to}
              variant="primary"
              className="w-full h-12"
              event="cta_click"
              eventLabel={nav.primaryCta.label}
              icon={<ArrowRightIcon className="h-4 w-4" />}
            >
              {nav.primaryCta.label}
            </ActionButton>
            <ActionButton
              to={nav.secondaryCta.to}
              variant="secondary"
              className="w-full h-12"
              event="cta_click"
              eventLabel={nav.secondaryCta.label}
            >
              {nav.secondaryCta.label}
            </ActionButton>
          </div>
        </nav>
      </div>
    </header>
  )
}
