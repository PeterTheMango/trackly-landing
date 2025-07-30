import SpotlightCard from "@/components/spotlight-card"
import Image from "next/image"

const features = [
  {
    image: "/images/features/booking.png",
    title: "Effortless Booking Management",
    description: "Create, edit, and track all bookings in one centralized dashboard. Never miss a reservation again."
  },
  {
    image: "/images/features/real-time.png",
    title: "Real-time Analytics",
    description: "Monitor booking trends, performance metrics, and revenue insights with beautiful, interactive charts."
  },
  {
    image: "/images/features/customer-communication.png",
    title: "Customer Communication",
    description: "Manage customer interactions, send automated notifications, and keep everyone in the loop."
  },
  {
    image: "/images/features/automated-workflow.png",
    title: "Automated Workflows",
    description: "Streamline repetitive processes with intelligent automation that saves time and reduces errors."
  },
  {
    image: "/images/features/cross-platform.png",
    title: "Cross-platform Access",
    description: "Access your dashboard from any device, anywhere. Manage your business on the go with ease."
  },
  {
    image: "/images/features/integrations.png",
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
            return (
              <SpotlightCard 
                key={index} 
                className="group cursor-pointer"
                spotlightColor="rgba(74, 222, 128, 0.2)"
              >
                <div className="pb-4">
                  <div className="flex items-left justify-leftW mb-4">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={100}
                      height={100}
                      className="w-35 h-35 object-contain"
                    />
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