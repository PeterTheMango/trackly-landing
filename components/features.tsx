import SpotlightCard from "@/components/spotlight-card"
import { CalendarDays, BarChart3, MessageCircle, Zap, Smartphone, Puzzle } from "lucide-react"

const features = [
  {
    icon: CalendarDays,
    title: "Effortless Booking Management",
    description: "Create, edit, and track all bookings in one centralized dashboard. Never miss a reservation again."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor booking trends, performance metrics, and revenue insights with beautiful, interactive charts."
  },
  {
    icon: MessageCircle,
    title: "Customer Communication",
    description: "Manage customer interactions, send automated notifications, and keep everyone in the loop."
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Streamline repetitive processes with intelligent automation that saves time and reduces errors."
  },
  {
    icon: Smartphone,
    title: "Cross-platform Access",
    description: "Access your dashboard from any device, anywhere. Manage your business on the go with ease."
  },
  {
    icon: Puzzle,
    title: "Seamless Integrations",
    description: "Connect with your existing tools and services. Import data and sync across all your platforms."
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Manage Bookings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed specifically for booking administrators who want to 
            streamline operations and deliver exceptional customer experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <SpotlightCard 
                key={index} 
                className="group cursor-pointer"
                spotlightColor="rgba(74, 222, 128, 0.2)"
              >
                <div className="pb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </SpotlightCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}