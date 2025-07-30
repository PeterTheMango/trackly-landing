import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Hotel Manager",
    company: "Grand Vista Resort",
    avatar: "https://github.com/shadcn.png",
    fallback: "SJ",
    quote: "Trackly transformed how we manage reservations. The intuitive interface saved us hours daily and reduced booking errors by 90%. Our team adopted it instantly.",
    rating: 5
  },
  {
    name: "Michael Chen",
    title: "Operations Director",
    company: "BookEasy Co.",
    avatar: "https://github.com/shadcn.png",
    fallback: "MC",
    quote: "The real-time analytics helped us optimize our booking processes and increase efficiency by 40%. The dashboard gives us insights we never had before.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    title: "Event Coordinator",
    company: "Metro Events",
    avatar: "https://github.com/shadcn.png",
    fallback: "ER",
    quote: "Customer communication became seamless with Trackly's integrated messaging system. Our client satisfaction scores improved dramatically within weeks.",
    rating: 5
  },
  {
    name: "David Thompson",
    title: "Restaurant Owner",
    company: "The Gourmet Table",
    avatar: "https://github.com/shadcn.png",
    fallback: "DT",
    quote: "Trackly's automated reminders and waitlist management increased our table turnover by 25%. The staff loves how simple it is to manage reservations during peak hours.",
    rating: 5
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what booking administrators are saying 
            about their experience with Trackly.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="glass hover:scale-105 transition-all duration-200 hover:shadow-xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>

              <CardHeader className="pb-4">
                {/* Star Rating */}
                <StarRating rating={testimonial.rating} />

                {/* Avatar and Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                      {testimonial.fallback}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}