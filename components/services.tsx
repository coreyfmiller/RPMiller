import {
  Building2,
  Calculator,
  Briefcase,
  FileText,
  PiggyBank,
  ClipboardCheck,
} from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Corporate Tax",
    description:
      "Strategic tax planning and compliance for corporations of all sizes, maximizing deductions and minimizing liabilities.",
  },
  {
    icon: Calculator,
    title: "Personal Accounting",
    description:
      "Comprehensive personal tax preparation and financial planning to keep more of what you earn.",
  },
  {
    icon: Briefcase,
    title: "Small Business Consulting",
    description:
      "Practical financial guidance to help your small business grow, from startup to succession planning.",
  },
  {
    icon: FileText,
    title: "Bookkeeping",
    description:
      "Accurate, timely bookkeeping services so you always know where your business stands financially.",
  },
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    description:
      "Long-term strategies for RRSPs, TFSAs, and pension planning to secure your financial future.",
  },
  {
    icon: ClipboardCheck,
    title: "CRA Audit Support",
    description:
      "Professional representation and support if the Canada Revenue Agency comes calling.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            What We Do
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Services Tailored to You
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            From individual returns to complex corporate structures, we deliver
            precise, personalized financial services.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-lg border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
