import { work } from '../data/content'
import Reveal from './ui/Reveal'

export default function OurWork() {
  return (
    <section id="work" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{work.eyebrow}</p>
          <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[38px] lg:text-[44px]">
            {work.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3 md:gap-6">
          {work.items.map((item, index) => (
            <Reveal key={item.pill} delay={index * 90} className="h-full">
              <article className="group relative h-[440px] overflow-hidden rounded-media md:h-[650px]">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5"
                />

                <div className="relative flex h-full flex-col p-6">
                  <span className="w-fit rounded-full bg-accent px-4 py-2 text-[11px] font-bold uppercase leading-none tracking-[0.14em] text-white">
                    {item.pill}
                  </span>

                  <div className="mt-auto">
                    <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/70">
                      {item.name}
                    </p>
                    <p className="mt-2.5 font-display text-[32px] font-bold leading-none tracking-[-0.02em] text-white lg:text-[36px]">
                      {item.metric}
                    </p>
                    {item.note ? (
                      <p className="mt-3 max-w-[28ch] text-[14px] leading-relaxed text-white/75">
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
