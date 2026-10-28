import { brand, footer, navLinks } from '../data/content'
import {
  ArrowRightIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from './ui/Icons'

const socialIcons = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
} as const

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="shell py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1.1fr] lg:gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#home" className="flex flex-col leading-none">
              <span className="font-display text-[26px] font-bold tracking-[-0.02em] text-white">
                {brand.name} <span className="text-accent">{brand.accent}</span>
              </span>
              <span className="mt-[3px] text-[9px] font-bold uppercase tracking-[0.42em] text-white/45">
                {brand.sub}
              </span>
            </a>

            <p className="mt-6 text-[15px] leading-relaxed text-white/55">
              {footer.description}
            </p>

            <ul className="mt-7 flex items-center gap-3">
              {footer.socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons]

                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-[background-color,border-color,color] duration-250 hover:border-accent hover:bg-accent hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Quick links */}
          <nav aria-labelledby="footer-quick-links">
            <h2
              id="footer-quick-links"
              className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-white"
            >
              {footer.quickLinksTitle}
            </h2>
            <ul className="mt-6 space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-[15px] text-white/55 transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-white">
              {footer.contactTitle}
            </h2>
            <dl className="mt-6 space-y-3.5">
              {footer.contactRows.map((row) => (
                <div key={row.label} className="text-[15px]">
                  <dt className="text-white/45">{row.label}</dt>
                  <dd className="mt-0.5 text-white/80">{row.value}</dd>
                </div>
              ))}
            </dl>

            <a href={footer.contactCta.href} className="btn-accent mt-7">
              {footer.contactCta.label}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <hr className="mt-14 border-t border-white/8" />

        <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-[13px] text-white/45">{footer.copyright}</p>
          <ul className="flex items-center gap-6">
            {footer.legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[13px] text-white/45 transition-colors duration-200 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
