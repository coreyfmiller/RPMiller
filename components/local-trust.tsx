import { MapPin, Handshake, Heart, TreePine } from "lucide-react"

const highlights = [
  {
    icon: MapPin,
    title: "Deep Local Roots",
    description:
      "Founded with roots in the Fredericton and Oromocto area, we understand the unique needs of New Brunswick communities.",
  },
  {
    icon: Handshake,
    title: "Personal Relationships",
    description:
      "We're not a faceless firm. You'll work directly with experienced professionals who know your name and your goals.",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "We sponsor local events, support Oromocto-area charities, and reinvest in the community that shaped us.",
  },
  {
    icon: TreePine,
    title: "New Brunswick Values",
    description:
      "Honest advice, fair pricing, and a handshake you can count on. That's how business is done here.",
  },
]

export function LocalTrust() {
  return (
    <section id="about" className="bg-muted px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Our Roots
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Proudly Serving the Oromocto Area
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              For over two decades, RP Miller Consulting has helped families,
              farmers, and business owners across the Saint John River Valley
              navigate their financial futures with confidence. Our office in
              Lakeville Corner means local knowledge paired with professional
              expertise.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-3 shadow-sm">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-card-foreground">
                  Lakeville Corner, New Brunswick
                </p>
                <p className="text-xs text-muted-foreground">
                  Serving the greater Oromocto & Fredericton area
                </p>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-card-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
