"use client"

import { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "RP Miller has handled our farm's books for over fifteen years. They understand agriculture like no other firm, and their advice has saved us thousands.",
    name: "David T.",
    role: "Oromocto-area Farmer",
  },
  {
    quote:
      "Switching to RP Miller was the best decision for our restaurant. They simplified everything and helped us plan for growth we didn't think was possible.",
    name: "Sarah & James L.",
    role: "Small Business Owners, Fredericton",
  },
  {
    quote:
      "As a first-time home buyer, I had no idea how to manage my finances properly. The team walked me through everything with patience and genuine care.",
    name: "Michelle K.",
    role: "Personal Tax Client",
  },
  {
    quote:
      "Professional, responsive, and always available when we need them. They've been an invaluable partner for our non-profit organization.",
    name: "Robert P.",
    role: "Executive Director, NB Community Foundation",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const { quote, name, role } = testimonials[current]

  return (
    <section id="testimonials" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Client Stories
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Slider */}
        <div className="relative mt-14">
          <div className="rounded-lg border border-border bg-card px-8 py-12 shadow-sm sm:px-14 sm:py-16">
            <Quote className="mx-auto h-8 w-8 text-primary/30" />
            <blockquote className="mt-6 text-center text-lg leading-relaxed text-card-foreground sm:text-xl">
              {`"${quote}"`}
            </blockquote>
            <div className="mt-8 text-center">
              <p className="text-sm font-semibold text-foreground">{name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{role}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-6 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
