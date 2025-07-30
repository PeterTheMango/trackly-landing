import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ValueProposition } from "@/components/value-proposition"
import { Testimonials } from "@/components/testimonials"
import { Statistics } from "@/components/statistics"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { AfterFooter } from "@/components/after-footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <ValueProposition />
      <Testimonials />
      <Statistics />
      <CallToAction />
      <Footer />
      <AfterFooter />
    </div>
  );
}
