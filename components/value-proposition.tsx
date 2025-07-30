import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Zap, TrendingUp } from "lucide-react"

const valueProps = [
  {
    icon: CheckCircle,
    title: "Intuitive Admin Experience",
    description: "Unlike complex systems, Trackly offers simplicity without sacrificing power. Our clean interface reduces training time and increases productivity."
  },
  {
    icon: Users,
    title: "Bento-style Dashboard",
    description: "Modern card-based interface that adapts to your workflow. Organize information the way that makes sense for your business."
  },
  {
    icon: Zap,
    title: "Customer-First Design",
    description: "Built specifically for booking administrators' daily challenges. Every feature is designed with real user feedback and pain points in mind."
  },
  {
    icon: TrendingUp,
    title: "Scalable Solution",
    description: "Grows with your business from startup to enterprise. Handle 10 bookings or 10,000 with the same elegant interface and robust performance."
  }
]

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Main dashboard mockup */}
      <div className="glass p-6 rounded-2xl shadow-2xl">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="glass p-4 rounded-lg">
            <div className="h-2 bg-primary/30 rounded w-3/4 mb-2"></div>
            <div className="h-8 bg-primary/20 rounded"></div>
          </div>
          <div className="glass p-4 rounded-lg">
            <div className="h-2 bg-primary/30 rounded w-1/2 mb-2"></div>
            <div className="h-8 bg-primary/20 rounded"></div>
          </div>
        </div>
        <div className="glass p-4 rounded-lg mb-4">
          <div className="h-2 bg-primary/30 rounded w-2/3 mb-3"></div>
          <div className="space-y-2">
            <div className="h-3 bg-primary/20 rounded w-full"></div>
            <div className="h-3 bg-primary/20 rounded w-5/6"></div>
            <div className="h-3 bg-primary/20 rounded w-4/6"></div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="glass p-3 rounded-lg">
            <div className="h-2 bg-primary/30 rounded w-full mb-2"></div>
            <div className="h-4 bg-primary/20 rounded"></div>
          </div>
          <div className="glass p-3 rounded-lg">
            <div className="h-2 bg-primary/30 rounded w-full mb-2"></div>
            <div className="h-4 bg-primary/20 rounded"></div>
          </div>
          <div className="glass p-3 rounded-lg">
            <div className="h-2 bg-primary/30 rounded w-full mb-2"></div>
            <div className="h-4 bg-primary/20 rounded"></div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/10 rounded-full animate-pulse delay-1000"></div>
    </div>
  )
}

export function ValueProposition() {
  return (
    <section id="value-proposition" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Area */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why Choose Trackly for Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We&apos;ve reimagined booking management from the ground up, focusing on what 
              administrators actually need to succeed in their daily operations.
            </p>

            {/* Value Propositions */}
            <div className="space-y-6">
              {valueProps.map((prop, index) => {
                const IconComponent = prop.icon
                return (
                  <Card key={index} variant="outline" className="glass border-white/10">
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-semibold text-foreground mb-2">
                            {prop.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pl-14">
                      <p className="text-muted-foreground">
                        {prop.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Visual Area - Dashboard Mockup */}
          <div className="relative">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}