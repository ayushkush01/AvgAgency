import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { CloseIcon, ArrowRightIcon } from './ui/Icons'

type ContactModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      // Send main notification email
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      // Send auto-reply email to the user
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setIsSubmitting(false)
      setIsSuccess(true)
      
      // Auto close after success
      setTimeout(() => {
        setIsSuccess(false)
        onClose()
      }, 2500)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setIsSubmitting(false)
      setErrorMessage('Something went wrong. Please try again or email us directly.')
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-[32px] bg-white shadow-2xl transition-all">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:bg-peach"
          aria-label="Close modal"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="p-8 sm:p-10">
          {isSuccess ? (
            <div className="flex flex-col items-center py-12 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-white shadow-lift">
                <svg
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="mt-8 font-display text-3xl font-bold text-ink">
                Message Sent!
              </h2>
              <p className="mt-4 text-ink/60">
                We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Let's Build <br />
                <span className="text-accent">Something Great.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
                Fill out the form below and our strategy team will reach out to
                discuss your brand's growth.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-[13px] font-bold uppercase tracking-wider text-ink/40"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-2xl border border-ink/10 bg-ink/[0.02] px-5 py-3.5 text-ink outline-none transition-all focus:border-accent/30 focus:bg-white focus:ring-4 focus:ring-accent/5"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[13px] font-bold uppercase tracking-wider text-ink/40"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="rahul@brand.com"
                      className="w-full rounded-2xl border border-ink/10 bg-ink/[0.02] px-5 py-3.5 text-ink outline-none transition-all focus:border-accent/30 focus:bg-white focus:ring-4 focus:ring-accent/5"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="brand"
                    className="text-[13px] font-bold uppercase tracking-wider text-ink/40"
                  >
                    Brand Name
                  </label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    required
                    placeholder="e.g. Mamaearth"
                    className="w-full rounded-2xl border border-ink/10 bg-ink/[0.02] px-5 py-3.5 text-ink outline-none transition-all focus:border-accent/30 focus:bg-white focus:ring-4 focus:ring-accent/5"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-[13px] font-bold uppercase tracking-wider text-ink/40"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your goals..."
                    className="w-full resize-none rounded-2xl border border-ink/10 bg-ink/[0.02] px-5 py-3.5 text-ink outline-none transition-all focus:border-accent/30 focus:bg-white focus:ring-4 focus:ring-accent/5"
                  />
                </div>

                {errorMessage && (
                  <p className="text-sm font-medium text-red-500">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-accent w-full py-4 text-base disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 animate-spin text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Submit Request
                      <ArrowRightIcon className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
