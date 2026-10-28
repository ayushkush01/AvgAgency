import { useEffect, useState } from 'react'
import { brand, navAction, navLinks } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { ArrowRightIcon, CloseIcon, MenuIcon } from './ui/Icons'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(navLinks)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white shadow-[0_1px_0_rgba(10,10,10,0.03),0_8px_24px_-18px_rgba(10,10,10,0.35)]">
      <div className="shell grid h-[72px] grid-cols-[auto_1fr_auto] items-center gap-4 lg:h-[84px]">
        {/* Logo */}
        <a
          href="#home"
          className="flex flex-col justify-center leading-none"
          aria-label={`${brand.name} ${brand.accent} ${brand.sub} — home`}
        >
          <span className="font-display text-[24px] font-bold tracking-[-0.02em] lg:text-[27px]">
            <span className="text-ink">{brand.name}</span>{' '}
            <span className="text-accent">{brand.accent}</span>
          </span>
          <span className="mt-[3px] text-[9px] font-bold uppercase tracking-[0.42em] text-ink/50">
            {brand.sub}
          </span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center justify-center gap-9">
            {navLinks.map((link) => {
              const isActive = link.id === active
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative inline-block py-1 text-[15px] transition-colors duration-200 ${
                      isActive
                        ? 'font-bold text-ink'
                        : 'font-medium text-ink/60 hover:text-ink'
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-accent transition-transform duration-250 ease-out ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      style={{ transformOrigin: 'left' }}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="flex items-center gap-3">
          <a href={navAction.href} className="btn-accent hidden lg:inline-flex">
            {navAction.label}
            <ArrowRightIcon className="h-4 w-4" />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-200 hover:bg-peach lg:hidden"
          >
            {menuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-ink/10 bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="shell py-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={link.id === active ? 'page' : undefined}
                  className={`block rounded-xl px-3 py-3 text-base transition-colors duration-200 ${
                    link.id === active
                      ? 'bg-peach font-bold text-ink'
                      : 'font-medium text-ink/70 hover:bg-ink/5'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={navAction.href}
            onClick={() => setMenuOpen(false)}
            className="btn-accent mt-3 w-full"
          >
            {navAction.label}
            <ArrowRightIcon className="h-4 w-4" />
          </a>

          {/* Attribution */}
          <div className="mt-10 border-t border-ink/5 pt-8 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/30">
              Made & Designed by
            </p>
            <a
              href="https://craftorax.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 inline-flex flex-col items-center"
            >
              <span className="font-display text-[22px] font-bold tracking-tight text-ink transition-colors group-hover:text-accent">
                Craftora<span className="text-[#A3E635]">X</span>
              </span>
              <span className="mt-1 text-[12px] font-medium text-ink/40 group-hover:text-ink/60">
                craftoraxcoders@gmail.com
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
