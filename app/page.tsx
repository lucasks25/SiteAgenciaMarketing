import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { StatsCounter } from "@/components/stats-counter"
import { Steps2H } from "@/components/steps-2h"
import { Services } from "@/components/services"
import { WorkProcess } from "@/components/work-process"
import { Marquee } from "@/components/marquee"
import { Pricing } from "@/components/pricing"
import { Cases } from "@/components/cases"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Partners } from "@/components/partners"
import { ContactForm } from "@/components/contact-form"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <StatsCounter />
      <Steps2H />
      <Services />
      <WorkProcess />
      <Marquee />
      <Pricing />
      <Cases />
      <Testimonials />
      <FAQ />
      <Partners />
      <ContactForm />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
