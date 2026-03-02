import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { LocalTrust } from "@/components/local-trust"
import { Testimonials } from "@/components/testimonials"
import { ContactFooter } from "@/components/contact-footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <LocalTrust />
      <Testimonials />
      <ContactFooter />
    </main>
  )
}
