import { Navbar } from "@/components/navbar"
import { HeroTest } from "@/components/hero-test"
import { Services } from "@/components/services"
import { LocalTrust } from "@/components/local-trust"
import { Testimonials } from "@/components/testimonials"
import { ContactFooter } from "@/components/contact-footer"

export default function TestHome() {
    return (
        <main>
            <Navbar />
            <HeroTest />
            <Services />
            <LocalTrust />
            <Testimonials />
            <ContactFooter />
        </main>
    )
}
