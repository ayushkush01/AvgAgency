import { services } from '../data/content'
import { tints } from '../lib/tints'
import { iconMap, ArrowRightIcon } from './ui/Icons'
import Reveal from './ui/Reveal'

export default function WhatWeDo({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="shell">
        {/* Section header */}
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{services.eyebrow}</p>
            <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[38px] lg:text-[44px]">
              {services.heading}
            </h2>
          </div>
          <button
            onClick={onContactClick}
            className="group inline-flex shrink-0 items-center gap-2 text-[15px] font-bold text-ink transition-colors duration-200 hover:text-accent"
          >
            {services.linkLabel}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </Reveal>

        {/* 2 x 2 cards */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-8">
          {services.items.map((item, index) => {
            const Icon = iconMap[item.icon]
            const tint = tints[item.tint]

            return (
              <Reveal key={item.number} delay={index * 80} className="h-full">
                <article className="group card flex h-full flex-col p-6 transition-[transform,background-color,box-shadow] duration-250 ease-out hover:-translate-y-1.5 hover:bg-peach hover:shadow-lift sm:p-7 lg:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${tint.tile}`}
                    >
                      <Icon className={`h-5 w-5 ${tint.glyph}`} />
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-display text-[48px] font-bold leading-none text-ink/4 sm:text-[62px]"
                    >
                      {item.number}
                    </span>
                  </div>

                  <span
                    className={`mt-6 inline-flex w-fit items-center rounded-full border px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-accent ${tint.ring}`}
                  >
                    {item.tag}
                  </span>

                  <h3 className="mt-4 font-display text-[22px] font-bold tracking-[-0.01em] sm:text-[24px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-[15px] leading-relaxed text-ink/60">
                    {item.description}
                  </p>

                  <button
                    onClick={onContactClick}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-[14px] font-bold text-ink transition-colors duration-200 group-hover:text-accent"
                  >
                    Learn more
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
