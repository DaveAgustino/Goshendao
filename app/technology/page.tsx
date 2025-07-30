"use client"

import { motion } from "framer-motion"
import { BentoCard } from "@/components/ui/bento-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const blockchainTech = [
  { name: "Ethereum", logo: "/placeholder.svg?height=48&width=48&text=ETH", category: "Layer 1" },
  { name: "Polygon", logo: "/placeholder.svg?height=48&width=48&text=MATIC", category: "Layer 2" },
  { name: "Arbitrum", logo: "/placeholder.svg?height=48&width=48&text=ARB", category: "Layer 2" },
  { name: "Optimism", logo: "/placeholder.svg?height=48&width=48&text=OP", category: "Layer 2" },
  { name: "Avalanche", logo: "/placeholder.svg?height=48&width=48&text=AVAX", category: "Layer 1" },
  { name: "Solana", logo: "/placeholder.svg?height=48&width=48&text=SOL", category: "Layer 1" },
  { name: "Base", logo: "/placeholder.svg?height=48&width=48&text=BASE", category: "Layer 2" },
  { name: "Cosmos", logo: "/placeholder.svg?height=48&width=48&text=ATOM", category: "Interchain" },
]

const developmentTech = [
  { name: "Solidity", logo: "/placeholder.svg?height=48&width=48&text=SOL", category: "Smart Contracts" },
  { name: "Rust", logo: "/placeholder.svg?height=48&width=48&text=RUST", category: "Systems" },
  { name: "TypeScript", logo: "/placeholder.svg?height=48&width=48&text=TS", category: "Frontend" },
  { name: "React", logo: "/placeholder.svg?height=48&width=48&text=REACT", category: "Frontend" },
  { name: "Next.js", logo: "/placeholder.svg?height=48&width=48&text=NEXT", category: "Framework" },
  { name: "Node.js", logo: "/placeholder.svg?height=48&width=48&text=NODE", category: "Backend" },
  { name: "GraphQL", logo: "/placeholder.svg?height=48&width=48&text=GQL", category: "API" },
  { name: "IPFS", logo: "/placeholder.svg?height=48&width=48&text=IPFS", category: "Storage" },
]

export default function TechnologyPage() {
  return (
    <div className="pt-24 pb-20 mesh-gradient-1">
      {/* Hero Section with Background Overlay */}
      <section className="py-20 px-6 lg:px-12 relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-bg-overlay.png"
            alt="Background Pattern"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="bg-green-400/10 text-green-400 border-green-400/20 mb-6">Technology Foundation</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
              <span className="text-white">NEXT-GENERATION</span>
              <br />
              <span className="gradient-text text-glow-green">INFRASTRUCTURE</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-8 font-inter">
              Built for the multi-chain future with enterprise-grade security, AI-enhanced governance, and scalable
              architecture that grows with your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack - Glass Morphism Container */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <BentoCard variant="light" size="large" className="tech-stack-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Supported Networks */}
              <div>
                <h3 className="text-3xl font-bold text-green-600 mb-8 uppercase font-space-grotesk">
                  Supported Networks
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {blockchainTech.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="tech-item bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-green-200/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-12 h-12 mx-auto mb-3 relative">
                        <Image
                          src={tech.logo || "/placeholder.svg"}
                          alt={`${tech.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-1 font-space-grotesk">{tech.name}</h4>
                      <p className="text-xs text-green-600 font-inter">{tech.category}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Development Technologies */}
              <div>
                <h3 className="text-3xl font-bold text-green-600 mb-8 uppercase font-space-grotesk">
                  Development Technologies
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {developmentTech.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="tech-item bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-green-200/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-12 h-12 mx-auto mb-3 relative">
                        <Image
                          src={tech.logo || "/placeholder.svg"}
                          alt={`${tech.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-1 font-space-grotesk">{tech.name}</h4>
                      <p className="text-xs text-green-600 font-inter">{tech.category}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-6 lg:px-12 mesh-gradient-2">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
              <span className="text-white">EMPOWERING</span>
              <br />
              <span className="gradient-text">SUCCESS IN NUMBERS</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto font-inter">
              We redefine collaboration, innovation, and success. From our unwavering commitment to excellence to our
              dynamic approach that adapts to your unique needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "97%", label: "Satisfaction rate", description: "Client satisfaction with our solutions" },
              { metric: "50+", label: "Delivered projects", description: "Successfully completed Web3 projects" },
              { metric: "10", label: "Years of experience", description: "Combined team expertise in blockchain" },
            ].map((stat, index) => (
              <BentoCard key={index} variant="gradient" className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-6xl font-bold text-green-400 mb-4 text-glow-green font-orbitron">
                    {stat.metric}
                  </div>
                  <div className="text-xl font-semibold text-white mb-2 font-space-grotesk">{stat.label}</div>
                  <div className="text-gray-400 text-sm font-inter">{stat.description}</div>
                </motion.div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <BentoCard variant="green" className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
                <span className="text-white">Ready to Build the</span>
                <br />
                <span className="text-green-400">Future?</span>
              </h2>
              <p className="text-gray-300 text-xl mb-8 font-inter">
                See our technology in action with a personalized demo tailored to your organization's needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-4"
                  onClick={() => window.open("https://calendly.com/goshendao/demo", "_blank")}
                >
                  Request Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-400/50 text-green-400 hover:bg-green-400/10 bg-transparent"
                >
                  Technical Documentation
                </Button>
              </div>
            </motion.div>
          </BentoCard>
        </div>
      </section>
    </div>
  )
}
