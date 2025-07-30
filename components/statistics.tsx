"use client"

import CountUp from './CountUp'

const statistics = [
  {
    value: 500,
    suffix: "+",
    label: "Happy Customers",
    description: "Businesses trust Trackly for their booking management"
  },
  {
    value: 50,
    suffix: "K+",
    label: "Bookings Managed",
    description: "Successfully processed reservations and appointments"
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime",
    description: "Reliable service you can count on 24/7"
  }
]

export function Statistics() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of businesses who have transformed their booking management with Trackly
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl sm:text-7xl font-bold text-primary mb-4">
                <CountUp
                  from={0}
                  to={stat.value}
                  separator=","
                  direction="up"
                  duration={1.5}
                  className="count-up-text"
                />
                {stat.suffix}
              </div>
              <div className="text-2xl font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-lg text-muted-foreground max-w-xs mx-auto">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="flex justify-center items-center gap-4 mt-16">
          <div className="w-16 h-px bg-primary/30"></div>
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-16 h-px bg-primary/30"></div>
        </div>
      </div>
    </section>
  )
}