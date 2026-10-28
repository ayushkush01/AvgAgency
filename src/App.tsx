import { useState } from 'react'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowWeWork from './components/HowWeWork'
import Impact from './components/Impact'
import Navbar from './components/Navbar'
import OurWork from './components/OurWork'
import Testimonials from './components/Testimonials'
import WhatWeDo from './components/WhatWeDo'
import ContactModal from './components/ContactModal'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar onContactClick={openModal} />

      <main id="main">
        <Hero onContactClick={openModal} />
        <WhatWeDo onContactClick={openModal} />
        <OurWork />
        <HowWeWork />
        <Impact onContactClick={openModal} />
        <Testimonials />
        <CTA onContactClick={openModal} />
      </main>

      <Footer onContactClick={openModal} />

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
