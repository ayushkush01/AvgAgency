import { faq } from '../../content/site'
import Reveal from '../ui/Reveal'
import { SectionHeading } from '../ui/Section'
import { PlusIcon, MinusIcon } from '../ui/Icons'
import { useState } from 'react'

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Reveal delay={index * 50}>
      <div className="border-b border-line last:border-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-accent"
        >
          <span className="text-[17px] font-bold text-ink sm:text-[19px]">{question}</span>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-subtle text-ink/40 transition-colors group-hover:bg-accent-soft group-hover:text-accent">
            {isOpen ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
          </div>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'
          }`}
        >
          <p className="text-[15px] leading-relaxed text-body/70 sm:text-[16px]">
            {answer}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="shell max-w-[800px]">
        <Reveal>
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.heading}
        />
      </Reveal>

        <div className="mt-16">
          {faq.items.map((item, index) => (
            <FaqItem key={item.question} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
