"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Twitter, Linkedin, Facebook, Github } from "lucide-react"

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/trackly" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/trackly" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/trackly" },
  { name: "GitHub", icon: Github, href: "https://github.com/trackly" }
]

const legalLinks = [
  { name: "Terms of Service", href: "https://trackly.com/terms" },
  { name: "Privacy Policy", href: "https://trackly.com/privacy" },
  { name: "Report Abuse", href: "https://trackly.com/report" }
]

export function AfterFooter() {
  const handleSocialClick = (href: string) => {
    window.open(href, '_blank')
  }

  const handleLegalClick = (href: string) => {
    window.open(href, '_blank')
  }

  return (
    <div className="bg-[#1c1c1c] border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Section - Copyright and Legal Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <span>© 2025 Trackly. All rights reserved.</span>
            
            <div className="flex items-center gap-2">
              {legalLinks.map((link, index) => (
                <div key={link.name} className="flex items-center gap-2">
                  {index > 0 && <Separator orientation="vertical" className="h-4" />}
                  <button
                    onClick={() => handleLegalClick(link.href)}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Social Media Icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSocialClick(social.href)}
                  className="w-8 h-8 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="sr-only">{social.name}</span>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}