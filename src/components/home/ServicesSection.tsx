import { services } from '../../content/site'
import Reveal from '../ui/Reveal'
import { SectionHeading } from '../ui/Section'
import ActionButton from '../ui/ActionButton'
import { ArrowRightIcon, serviceIconMap } from '../ui/Icons'

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="shell">
        <Reveal>
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.heading}
          description={services.paragraph}
        />
      </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {services.items.map((service, index) => {
            const Icon = serviceIconMap[service.icon]
            return (
              <Reveal key={service.id} delay={index * 100}>
                <div className="card group flex h-full flex-col p-8 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="mt-8 text-[22px] font-bold text-ink sm:text-[24px]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[14px] font-bold uppercase tracking-[0.1em] text-accent">
                    {service.tagline}
                  </p>
                  
                  <p className="mt-4 text-[15px] leading-relaxed text-body/70">
                    {service.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[14px] text-body/80">
                        <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                          <ArrowRightIcon className="h-2.5 w-2.5" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-10">
                    <ActionButton
                      to={service.cta.to}
                      variant="ghost"
                      className="w-full justify-between group-hover:border-ink/25 group-hover:bg-subtle"
                      icon={<ArrowRightIcon className="h-4 w-4" />}
                    >
                      {service.cta.label}
                    </ActionButton>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
