"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

function TracklyLogo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/images/logo.png"
        alt="Trackly Logo"
        width={40}
        height={40}
        className="w-10 h-10"
        priority
      />
      <span className="text-xl font-bold text-foreground">Trackly</span>
    </div>
  )
}

export function Navigation() {
  const handleGetStartedClick = () => {
    window.open('https://admin.trackly.com', '_blank')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 hover:scale-105 transition-transform cursor-pointer">
            <TracklyLogo />
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "cursor-pointer bg-transparent hover:bg-white/10 hover:rounded-lg transition-all duration-200")}
                    onClick={() => scrollToSection('features')}
                  >
                    Features
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "cursor-pointer bg-transparent hover:bg-white/10 hover:rounded-lg transition-all duration-200")}
                    onClick={() => scrollToSection('value-proposition')}
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "cursor-pointer bg-transparent hover:bg-white/10 hover:rounded-lg transition-all duration-200")}
                    onClick={() => scrollToSection('testimonials')}
                  >
                    Testimonials
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "cursor-pointer bg-transparent hover:bg-white/10 hover:rounded-lg transition-all duration-200")}
                    onClick={() => scrollToSection('footer')}
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Button 
              onClick={handleGetStartedClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:scale-105 hover:shadow-lg rounded-full animate-circle"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}