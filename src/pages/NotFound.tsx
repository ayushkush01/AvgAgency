import Seo from '../components/Seo'
import ActionButton from '../components/ui/ActionButton'
import { ArrowRightIcon } from '../components/ui/Icons'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you were looking for does not exist."
        path="/404"
        noIndex
      />

      <section className="py-24 sm:py-32">
        <div className="shell">
          <div className="mx-auto max-w-lg text-center">
            <p className="font-display text-[64px] font-bold leading-none text-accent">
              404
            </p>
            <h1 className="mt-4 text-[30px] leading-tight sm:text-[38px]">
              We could not find that page.
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-ink/60">
              The link may be out of date. Head back to the homepage, or start a
              campaign and we will take it from there.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ActionButton
                to="/"
                variant="primary"
                event="cta_click"
                eventLabel="404 — home"
                icon={<ArrowRightIcon className="h-4 w-4" />}
              >
                Back to home
              </ActionButton>
              <ActionButton
                to="/contact"
                variant="secondary"
                event="cta_click"
                eventLabel="404 — contact"
              >
                Contact us
              </ActionButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
