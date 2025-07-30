"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Sparkles } from "lucide-react"

export function CallToAction() {
  const handleGetStartedClick = () => {
    window.open('https://admin.trackly.com', '_blank')
  }

  return (
    <section className="relative overflow-hidden pt-20 pb-40">
      
      {/* Content container with consistent margins */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <Card className="relative overflow-hidden bg-gradient-to-br from-[#1c1c1c] via-[#1c1c1c] to-primary/20 border-primary/20 shadow-2xl backdrop-blur-sm w-full animate-gradient-shift">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Sparkles className="w-40 h-40 text-primary/5" />
          </div>

          <CardHeader className="text-center pb-12 pt-20 mb-8 relative z-10">
            <CardTitle className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Ready to Transform Your{" "}
              <span className="text-primary">Booking Management</span>?
            </CardTitle>
            <CardDescription className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of administrators who trust Trackly for their daily operations. 
              Experience the difference that intuitive design and powerful features can make.
            </CardDescription>
          </CardHeader>

          <CardContent className="text-center pb-24 px-16 relative z-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg"
                onClick={handleGetStartedClick}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl px-12 py-6 transition-all duration-200 hover:scale-105 hover:shadow-xl group rounded-full animate-circle"
              >
                Get Started Today
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Additional benefits */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Free during beta</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Setup in under 5 minutes</span>
              </div>
            </div>
          </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}