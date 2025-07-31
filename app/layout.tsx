import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trackly - Simplify Your Booking Management",
  description: "Streamline your day-to-day operations with our intuitive admin dashboard. Manage bookings, track performance, and delight customers—all in one place.",
  keywords: [
    "booking management",
    "admin dashboard",
    "booking system",
    "reservation management",
    "hotel management",
    "booking analytics",
    "customer management",
    "booking automation",
    "business operations",
    "trackly"
  ],
  authors: [{ name: "Trackly Team" }],
  creator: "Trackly",
  publisher: "Trackly",
  metadataBase: new URL("https://trackly-landing.vercel.app"),
  
  // Open Graph metadata
  openGraph: {
    title: "Trackly - Simplify Your Booking Management",
    description: "Streamline your day-to-day operations with our intuitive admin dashboard. Manage bookings, track performance, and delight customers—all in one place.",
    url: "https://trackly-landing.vercel.app",
    siteName: "Trackly",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Trackly - Booking Management Dashboard",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Trackly - Simplify Your Booking Management",
    description: "Streamline your day-to-day operations with our intuitive admin dashboard. Manage bookings, track performance, and delight customers—all in one place.",
    images: ["/twitter-image.png"],
    creator: "@tracklyapp",
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification and other meta tags
  verification: {
    google: "your-google-verification-code",
  },

  // Alternate languages (if applicable)
  alternates: {
    canonical: "https://trackly-landing.vercel.app",
  },

  // App-specific metadata
  applicationName: "Trackly",
  category: "Business",
  classification: "Booking Management System",

  // Additional structured data
  other: {
    "theme-color": "#0070f3",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Trackly",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#0070f3",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      <SpeedInsights />
      <Analytics />
      </body>
    </html>
  );
}
