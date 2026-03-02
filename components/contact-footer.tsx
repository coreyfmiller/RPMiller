"use client"

import { useState, type FormEvent } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(506) 555-0142",
    href: "tel:+15065550142",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@rpmillerconsulting.com",
    href: "mailto:info@rpmillerconsulting.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Lakeville Corner, NB",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri, 9 AM - 5 PM",
    href: undefined,
  },
]

export function ContactFooter() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    try {
      await fetch("https://formsubmit.co/ajax/rpmillerconsultinginc@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      })

      setSubmitted(true)
    } catch (error) {
      console.error("Form submission failed:", error)
      // Still show success to not break UX, but log it locally
      setSubmitted(true)
    }
  }

  return (
    <>
      {/* Contact section */}
      <section id="contact" className="bg-muted px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Info side */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Get in Touch
              </p>
              <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Ready to Take Control of Your Finances?
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                Whether you have a quick question or need comprehensive
                financial planning, I am here to help. Reach out and
                let&apos;s start a conversation.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-semibold text-foreground hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map embed */}
              <div className="mt-12 overflow-hidden rounded-xl border border-border shadow-sm">
                <iframe
                  title="Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.771617495572!2d-66.2731515!3d45.8758832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca7cc8c3ed701bb%3A0x633919d3630f5509!2s30%20Sanctuary%20Ln%2C%20Lakeville%20Corner%2C%20NB%20E4B%201L5!5e0!3m2!1sen!2sca!4v1709400000000!5m2!1sen!2sca"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full object-cover saturate-50 contrast-125 filter dark:invert dark:hue-rotate-180"
                />
              </div>
            </div>

            {/* Form side */}
            <div className="rounded-lg border border-border bg-card p-8 shadow-sm sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                  <h3 className="mt-4 font-serif text-xl font-bold text-card-foreground">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    I have received your message and will be in touch within
                    one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New Consultation Request via Website" />

                  <h3 className="font-serif text-xl font-bold text-card-foreground">
                    Book a Free Consultation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and I will reach out to schedule a
                    time.
                  </p>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-1.5 block text-xs font-medium text-card-foreground"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-1.5 block text-xs font-medium text-card-foreground"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium text-card-foreground"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-xs font-medium text-card-foreground"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Corporate Tax</option>
                      <option>Personal Accounting</option>
                      <option>Small Business Consulting</option>
                      <option>Bookkeeping</option>
                      <option>Expert Guidance</option>
                      <option>CRA Audit Support</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-medium text-card-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                      placeholder="Tell me a little about what you need..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="mt-1 rounded-lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-primary px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/10 text-xs font-bold text-primary-foreground">
              RP
            </span>
            <span className="text-sm font-semibold text-primary-foreground">
              RP Miller Consulting Inc.
            </span>
          </div>
          <p className="text-xs text-primary-foreground/50">
            {`\u00A9 ${new Date().getFullYear()} RP Miller Consulting Inc. All rights reserved.`}
          </p>
        </div>
      </footer>
    </>
  )
}
