import { hero } from '../../content/site'
import ActionButton from '../ui/ActionButton'
import Reveal from '../ui/Reveal'
import {
  ArrowRightIcon,
  VideoIcon,
  CreatorsIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from '../ui/Icons'

/** Splits the headline so the trailing phrase can take the accent colour. */
function Headline() {
  const { heading, headingHighlight } = hero
  const index = headingHighlight ? heading.indexOf(headingHighlight) : -1

  if (index === -1) return <>{heading}</>

  return (
    <>
      {heading.slice(0, index)}
      <span className="text-[#4D7CFF]">{heading.slice(index)}</span>
    </>
  )
}

/**
 * A vertical phone frame showing a video still and social overlays.
 */
function PhoneMockup({
  image,
  rotation = 0,
  raised = false,
  creator = '@creator',
  className = '',
}: {
  image: string
  rotation?: number
  raised?: boolean
  creator?: string
  className?: string
}) {
  return (
    <div
      className={`relative w-full transition-all duration-700 ease-out ${className}`}
      style={{
        transform: `rotate(${rotation}deg) translateY(${raised ? '-24px' : '0'})`,
      }}
    >
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.5rem] border-[8px] border-ink bg-ink shadow-lift">
        <img
          src={image}
          alt="Creator content"
          className="h-full w-full object-cover opacity-90"
          loading="lazy"
        />
        
        {/* Social Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <div className="absolute bottom-6 left-5 right-5">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-white/20 backdrop-blur" />
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur">
                {creator}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3 text-white/80">
              <InstagramIcon className="h-4 w-4" />
              <TikTokIcon className="h-4 w-4" />
              <YouTubeIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center lg:justify-end">
      {/* Three overlapping phone mockups */}
      <div className="relative grid w-full max-w-[340px] grid-cols-3 gap-0 sm:max-w-[480px]">
        {/* Left phone */}
        <PhoneMockup
          image="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=vertical%20influencer%20video%20still%20lifestyle%20fashion&image_size=portrait_16_9"
          rotation={-6}
          className="z-10 mt-8 hidden sm:block"
        />
        
        {/* Middle phone (raised and in front) */}
        <PhoneMockup
          image="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=vertical%20ugc%20video%20still%20tech%20unboxing&image_size=portrait_16_9"
          raised
          className="z-30 col-start-1 col-end-4 sm:col-start-2 sm:col-end-3"
        />
        
        {/* Right phone */}
        <PhoneMockup
          image="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=vertical%20creator%20video%20still%20travel%20vlog&image_size=portrait_16_9"
          rotation={6}
          className="z-10 mt-8 hidden sm:block"
        />
      </div>

      {/* Floating glass chips */}
      <div className="absolute -left-4 top-1/4 z-40 hidden items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 shadow-float backdrop-blur-md lg:flex">
        <CreatorsIcon className="h-4 w-4 text-accent" />
        <span className="text-[13px] font-semibold text-white">Influencer Marketing</span>
      </div>

      <div className="absolute -right-4 bottom-1/4 z-40 hidden items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 shadow-float backdrop-blur-md lg:flex">
        <VideoIcon className="h-4 w-4 text-accent" />
        <span className="text-[13px] font-semibold text-white">UGC Content</span>
      </div>

      <div className="absolute left-1/2 top-0 z-40 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 shadow-float backdrop-blur-md lg:top-auto lg:bottom-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
          USA · UK · UAE · India
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="on-dark relative min-h-[calc(100vh-72px)] overflow-hidden bg-ink py-16 sm:py-20 lg:py-0 flex items-center">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="line-grid-dark absolute inset-0 opacity-4"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px]"
      />
      
      <div className="shell relative grid items-center gap-16 lg:grid-cols-[55fr_45fr]">
        <div className="text-center lg:text-left">
          <Reveal>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent sm:text-[12px]">
                {hero.eyebrow}
              </span>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-8 text-[40px] font-bold leading-[1.05] tracking-tight text-white sm:text-[56px] lg:text-[64px]">
              <Headline />
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-prose text-[17px] leading-relaxed text-white/70 lg:mx-0 sm:text-[19px]">
              {hero.paragraph}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <ActionButton
                to={hero.primaryCta.to}
                variant="primary"
                event="cta_click"
                eventLabel={hero.primaryCta.label}
                icon={<ArrowRightIcon className="h-4 w-4" />}
                className="h-[52px] px-8"
              >
                {hero.primaryCta.label}
              </ActionButton>

              <ActionButton
                to={hero.secondaryCta.to}
                variant="onDark"
                event="cta_click"
                eventLabel={hero.secondaryCta.label}
                className="h-[52px] px-8"
              >
                {hero.secondaryCta.label}
              </ActionButton>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8">
              <ActionButton
                to={hero.textLink.to}
                variant="text"
                event="cta_click"
                eventLabel={hero.textLink.label}
                className="text-white/60 hover:text-white"
              >
                {hero.textLink.label}
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </ActionButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="w-full">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  )
}
