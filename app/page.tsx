import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StatsCounter } from "@/components/stats-counter"
import { SpotlightReveal } from "@/components/spotlight-reveal"
import { WorkProcess } from "@/components/work-process"
import { Marquee } from "@/components/marquee"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { TechStack } from "@/components/tech-stack"
import { FinalCTA } from "@/components/final-cta"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
    return (
        <main className="relative min-h-screen bg-black overflow-x-hidden">
            <Navbar />
            <Hero />
            <StatsCounter />
            <SpotlightReveal />


            <WorkProcess />
            <Marquee />
            <Pricing />


            <TechStack />
            <FinalCTA />
            <ContactForm />
            <FAQ />
            <Footer />

        </main>
    )
}
