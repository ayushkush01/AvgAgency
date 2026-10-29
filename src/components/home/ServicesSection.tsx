import { services } from '../../content/site'
import ActionButton from '../ui/ActionButton'
import Reveal from '../ui/Reveal'
import { Section, SectionHeading } from '../ui/Section'
import { ArrowRightIcon, CheckIcon, serviceIconMap } from '../ui/Icons'

export default function ServicesSection() {
  return (
    <Section id="services">
      <Reveal>
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.heading}
          description={services.paragraph}
          action={
            <ActionButton
              to={services.linkTo}
              variant="text"
              event="cta_click"
              eventLabel={services.linkLabel}
              icon={<ArrowRightIcon className="h-4 w-4" />}
            >
              {services.linkLabel}
            </ActionButton>
          }
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2">
        {services.items.map((service, index) => {
          const Icon = serviceIconMap[service.icon]
          const image = service.id === 'influencer-marketing' 
            ? 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20lifestyle%20influencer%20marketing%20strategy%20meeting&image_size=landscape_16_9'
            : 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=ugc%20content%20creator%20recording%20video%20with%20phone%20and%20ring%20light&image_size=landscape_16_9'

          return (
            <Reveal key={service.id} delay={index * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-panel border border-line bg-white transition duration-250 ease-out hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-8 sm:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <span className="icon-tile !h-12 !w-12 bg-accent-soft">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-subtle px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                      {service.tagline}
                    </span>
                  </div>

                  <h3 className="mt-8 text-[26px] font-bold leading-tight text-ink">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-relaxed text-body/70">
                    {service.description}
                  </p>

                  <ul className="mt-8 space-y-3.5 border-t border-line pt-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-[15px] text-body/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-10">
                    <ActionButton
                      to={service.cta.to}
                      variant="primary"
                      event="cta_click"
                      eventLabel={`${service.title} — ${service.cta.label}`}
                      icon={<ArrowRightIcon className="h-4 w-4" />}
                      className="w-full sm:w-auto px-8"
                    >
                      {service.cta.label}
                    </ActionButton>
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
