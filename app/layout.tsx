import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { PageTransitionProvider } from "@/contexts/page-transition-context"
import { PageTransitionWrapper } from "@/components/providers/page-transition-provider"

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
  title: "GOSHENDAO - Next-Generation DAO Infrastructure Platform",
  description:
    "Build. Govern. Scale. Autonomously. The definitive platform for creating, deploying, and managing sophisticated decentralized autonomous organizations.",
    generator: 'AgustD'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${spaceGrotesk.variable}`}>
      <body
        className={`${inter.className} bg-gradient-to-br from-black via-gray-900 to-green-900/20 text-white min-h-screen`}
      >
        <div className="grid-pattern min-h-screen">
          <PageTransitionProvider>
            <PageTransitionWrapper>
              <Navigation />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </PageTransitionWrapper>
          </PageTransitionProvider>
        </div>
      </body>
    </html>
  )
}
