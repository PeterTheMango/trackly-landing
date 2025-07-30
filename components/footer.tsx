"use client"

import { MapPin, Mail, Phone } from "lucide-react"

function TracklyLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-lg">T</span>
      </div>
      <span className="text-xl font-bold text-foreground">Trackly</span>
    </div>
  )
}

const footerLinks = {
  product: [
    { name: "Features", href: "#features", internal: true },
    { name: "Documentation", href: "https://docs.trackly.com", internal: false },
    { name: "Integrations", href: "https://trackly.com/integrations", internal: false }
  ],
  company: [
    { name: "About", href: "https://trackly.com/about", internal: false },
    { name: "Careers", href: "https://trackly.com/jobs", internal: false },
    { name: "Support", href: "https://support.trackly.com", internal: false }
  ],
  resources: [
    { name: "API Documentation", href: "https://api.trackly.com/docs", internal: false },
    { name: "Privacy Policy", href: "https://trackly.com/privacy", internal: false },
    { name: "Terms of Service", href: "https://trackly.com/terms", internal: false },
    { name: "Community", href: "https://community.trackly.com", internal: false }
  ]
}

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLinkClick = (link: typeof footerLinks.product[0]) => {
    if (link.internal) {
      scrollToSection(link.href.replace('#', ''))
    } else {
      window.open(link.href, '_blank')
    }
  }

  return (
    <footer id="footer" className="bg-[#1c1c1c] border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section - Company Info */}
          <div className="space-y-6">
            <TracklyLogo />
            
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Simplifying booking management for administrators worldwide. 
              Streamline operations, delight customers, and grow your business with confidence.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">123 Business Ave, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:support@trackly.com" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  support@trackly.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+15551237725" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  +1 (555) 123-TRACK
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Product Column */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}