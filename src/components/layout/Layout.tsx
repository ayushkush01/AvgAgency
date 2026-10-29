import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import CookieConsent from './CookieConsent'
import ScrollToTop from './ScrollToTop'
import JsonLd from '../JsonLd'
import { organizationSchema, websiteSchema } from '../../lib/schema'

/** Global page shell: skip link, navbar, routed content, footer, overlays. */
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <WhatsAppButton />
      <CookieConsent />
      <ScrollToTop />
    </div>
  )
}
