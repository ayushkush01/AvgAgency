import { markets } from '../../content/site'
import Reveal from '../ui/Reveal'
import { GlobeIcon } from '../ui/Icons'
import { FlagIcon } from '../ui/FlagIcon'

/** Region badges only — deliberately no client logos or brand claims. */
export default function MarketsStrip() {
  return (
    <section
      aria-label="Markets we serve"
      className="border-y border-line bg-white py-12 lg:py-16"
    >
      <div className="shell text-center">
        <Reveal>
          <p className="eyebrow justify-center">
            <span aria-hidden="true" className="eyebrow-dot" />
            Global Reach
          </p>
          <h3 className="mt-4 text-[18px] font-bold text-ink/80 sm:text-[20px]">
            {markets.label}
          </h3>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12">
            {markets.regions.map((region, index) => (
              <li key={region.name}>
                <Reveal delay={index * 50} className="group flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-line bg-subtle shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-accent/30 group-hover:shadow-soft">
                    <FlagIcon
                      country={region.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-[15px] font-bold text-ink/70 transition-colors duration-200 group-hover:text-accent">
                    {region.name}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
