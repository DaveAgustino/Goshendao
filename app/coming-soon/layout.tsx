import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron, Space_Grotesk } from "next/font/google"

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Coming Soon - GOSHENDAO",
  description: "GOSHENDAO platform is launching soon. Join our waitlist to be notified.",
  robots: "noindex, nofollow",
}

// Add caching headers
export const revalidate = 3600 // Cache for 1 hour

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta httpEquiv="Cache-Control" content="public, max-age=3600" />
        <meta httpEquiv="Expires" content="3600" />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen`}>{children}</body>
    </html>
  )
}
