import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary px-6 py-24 lg:py-36">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5">
            <Shield className="h-4 w-4 text-primary-foreground/80" />
            <span className="text-xs font-medium text-primary-foreground/80">
              Trusted in New Brunswick since 2005
            </span>
          </div>

          <h1 className="text-balance font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Financial Clarity for Your Business & Life
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/70">
            Expert accounting, tax planning, and consulting services rooted in
            Lakeville Corner and serving the greater Oromocto area. We turn
            complex numbers into confident decisions.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-lg text-sm font-semibold"
            >
              <a href="#contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-lg text-sm font-semibold text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          {/* Trust metrics */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { icon: Users, label: "Clients Served", value: "500+" },
              { icon: TrendingUp, label: "Years of Experience", value: "20+" },
              { icon: Shield, label: "Satisfaction Rate", value: "99%" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="h-5 w-5 text-primary-foreground/50" />
                <p className="text-2xl font-bold text-primary-foreground">
                  {value}
                </p>
                <p className="text-sm text-primary-foreground/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
