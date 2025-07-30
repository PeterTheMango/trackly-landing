"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SplitText from "@/components/ui/split-text"

export function Hero() {
  const handleGetStartedClick = () => {
    window.open('https://admin.trackly.com', '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Coming Soon Badge */}
        <div className="mb-8">
          <Badge 
            variant="secondary" 
            className="px-4 py-2 text-sm font-medium bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors rounded-full animate-circle-glow"
          >
            Coming Soon! 🚀
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Simplify Your{" "}
          <span className="text-primary">Booking Management</span>
          {" "}with{" "}
          <SplitText 
            text="Trackly"
            ease="power3.out"
            splitType="chars"
            delay={80}
            className="text-primary inline"
            threshold={0.1}
            duration={3}
          />
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Streamline your day-to-day operations with our intuitive admin dashboard. 
          Manage bookings, track performance, and delight customers—all in one place.
        </p>

        {/* Primary CTA Button */}
        <Button 
          size="lg"
          onClick={handleGetStartedClick}
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 transition-all duration-200 hover:scale-105 hover:shadow-xl rounded-full animate-circle"
        >
          Get Started Today
        </Button>

        {/* Additional context */}
        <p className="text-sm text-muted-foreground mt-6">
          Join the waitlist and be the first to experience the future of booking management
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-3/4 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-pulse delay-500" />
    </section>
  )
}