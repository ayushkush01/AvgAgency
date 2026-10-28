import { impact } from '../data/content'
import { ArrowRightIcon } from './ui/Icons'
import Reveal from './ui/Reveal'

export default function Impact({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section className="bg-dark py-16 text-white sm:py-20 lg:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* 2 x 2 stat cards — left on desktop, second on mobile */}
        <div className="order-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:order-1">
          {impact.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80} className="h-full">
              <div className="flex h-full flex-col justify-center rounded-card border border-white/8 bg-dark-card p-6 transition-colors duration-250 hover:border-white/15 lg:p-7">
                <p className="font-display text-[32px] font-bold leading-none tracking-[-0.02em] text-accent lg:text-[38px]">
                  {stat.value}
                </p>
                <p className="mt-3 text-[15px] font-medium text-white/60">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Copy — right on desktop, first on mobile */}
        <Reveal className="order-1 lg:order-2">
          <p className="eyebrow tracking-[0.2em]">{impact.eyebrow}</p>
          <h2 className="mt-4 font-display text-[34px] font-bold leading-[1.12] tracking-[-0.02em] text-white sm:text-[42px] lg:text-[48px]">
            {impact.heading}
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/55 sm:text-[17px]">
            {impact.paragraph}
          </p>
          <button onClick={onContactClick} className="btn-accent mt-8">
            {impact.cta.label}
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </Reveal>
      </div>
    </section>
  )
}
