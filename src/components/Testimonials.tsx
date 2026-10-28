import { testimonials } from '../data/content'
import { tints } from '../lib/tints'
import { QuoteIcon } from './ui/Icons'
import Reveal from './ui/Reveal'

export default function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[38px] lg:text-[44px]">
            {testimonials.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3 lg:gap-6">
          {testimonials.items.map((item, index) => {
            const tint = tints[item.tint]

            return (
              <Reveal key={item.name} delay={index * 90} className="h-full">
                <figure className="card flex h-full flex-col p-6 transition-[transform,box-shadow] duration-250 ease-out hover:-translate-y-1.5 hover:shadow-soft sm:p-9">
                  <span
                    className={`font-display text-[52px] font-bold leading-none ${tint.glyph}`}
                    aria-hidden="true"
                  >
                    99
                  </span>

                  <blockquote className="mt-6 text-[15px] leading-relaxed text-ink/70">
                    {item.quote}
                  </blockquote>

                  <figcaption className="mt-auto pt-8">
                    <hr className="border-t border-ink/6" />
                    <div className="mt-6 flex items-center gap-3.5">
                      <span
                        aria-hidden="true"
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-full font-display text-[16px] font-bold ${tint.solid} text-white`}
                      >
                        {item.name.charAt(0)}
                      </span>
                      <span className="leading-tight">
                        <span className="block text-[15px] font-bold text-ink">
                          {item.name}
                        </span>
                        <span className="block text-[13px] text-ink/55">
                          {item.role}
                        </span>
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
