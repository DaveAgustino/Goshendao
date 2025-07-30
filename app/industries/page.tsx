"use client"

import { motion } from "framer-motion"
import { BentoCard } from "@/components/ui/bento-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const industries = [
  {
    title: "Decentralized Finance (DeFi)",
    description:
      "Revolutionary financial infrastructure that operates without traditional intermediaries, enabling global access to financial services.",
    capabilities: [
      "Automated market makers and liquidity pools",
      "Yield farming and staking protocols",
      "Cross-chain bridge development",
      "Risk management and insurance protocols",
    ],
    variant: "light" as const,
    size: "large" as const,
    gradient: "from-green-500/20 to-green-600/20",
  },
  {
    title: "Gaming & Virtual Worlds",
    description:
      "Player-owned economies with transparent, community-driven development and true digital asset ownership.",
    capabilities: [
      "NFT-based gaming assets",
      "Play-to-earn mechanisms",
      "Virtual real estate platforms",
      "Guild management systems",
    ],
    variant: "gradient" as const,
    size: "default" as const,
    gradient: "from-green-600/20 to-green-700/20",
  },
  {
    title: "Creator Economy",
    description:
      "Direct creator-fan relationships through decentralized funding and transparent revenue sharing mechanisms.",
    capabilities: [
      "Creator token economies",
      "Decentralized content platforms",
      "Fan engagement protocols",
      "Revenue sharing systems",
    ],
    variant: "green" as const,
    size: "default" as const,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Enterprise Solutions",
    description:
      "Hybrid governance models that combine corporate efficiency with decentralized transparency and stakeholder participation.",
    capabilities: [
      "Supply chain transparency",
      "Stakeholder governance systems",
      "ESG reporting and compliance",
      "Internal innovation funding",
    ],
    variant: "default" as const,
    size: "wide" as const,
    gradient: "from-green-400/20 to-green-500/20",
  },
  {
    title: "Research & Development",
    description:
      "Decentralized coordination for scientific advancement with transparent funding and intellectual property management.",
    capabilities: [
      "Peer review automation",
      "Research funding DAOs",
      "IP tokenization systems",
      "Cross-institutional collaboration",
    ],
    variant: "light" as const,
    size: "default" as const,
    gradient: "from-green-300/20 to-green-400/20",
  },
  {
    title: "Social Impact",
    description:
      "Transparent governance for social causes, enabling global coordination for humanitarian and environmental initiatives.",
    capabilities: [
      "Impact measurement systems",
      "Transparent fund allocation",
      "Community-driven initiatives",
      "Global coordination platforms",
    ],
    variant: "gradient" as const,
    size: "default" as const,
    gradient: "from-green-500/20 to-green-600/20",
  },
]

export default function IndustriesPage() {
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
            <Badge className="bg-green-400/10 text-green-400 border-green-400/20 mb-6">Industry Solutions</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
              <span className="text-white">TRANSFORM</span>
              <br />
              <span className="text-white">CHALLENGES INTO</span>
              <br />
              <span className="gradient-text text-glow-green">OPPORTUNITIES</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-8 font-inter">
              Specialized DAO solutions for different industries, each with unique requirements and features designed
              for optimal performance and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Bento Grid */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bento-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <BentoCard
                key={index}
                variant={industry.variant}
                size={industry.size}
                className="group relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient}`} />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full flex flex-col"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green-400 uppercase font-space-grotesk">
                      {industry.title}
                    </h3>
                    <p className="text-gray-300 mb-6 flex-grow leading-relaxed font-inter">{industry.description}</p>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-white font-inter">Key Capabilities:</h4>
                      {industry.capabilities.map((capability, capIndex) => (
                        <motion.div
                          key={capIndex}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: capIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-green-400 mr-3 mt-1 text-sm">●</span>
                          <span className="text-gray-400 text-sm font-inter">{capability}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="mt-6 pt-4 border-t border-gray-700/50"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <Button variant="ghost" className="text-green-400 hover:text-green-300 hover:bg-green-400/10 p-0">
                        Learn More →
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </BentoCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
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
              <span className="text-white">MASTERING CREATIVITY IN</span>
              <br />
              <span className="gradient-text">CAMPAIGN CRAFTSMANSHIP</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto font-inter">
              Our campaigns are not just created, they are meticulously crafted, each element designed to tell a
              compelling story and leave an indelible mark on your audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision in Targeted Audience Engagement",
                description:
                  "We tailor each interaction to resonate with your audiences unique interests and preferences, ensuring a profound and lasting connection.",
                color: "from-green-500/20 to-green-600/20",
              },
              {
                title: "Setting Trends and Shaping Futures",
                description:
                  "Our campaigns are not just about advertising, they're a testament to our commitment to set trends, shape futures, and redefine industry standards.",
                color: "from-green-400/20 to-green-500/20",
              },
              {
                title: "Seamlessly Connecting Across Channels",
                description:
                  "Our approach ensures that your brand message resonates consistently across diverse platforms, creating a unified and powerful presence.",
                color: "from-green-600/20 to-green-700/20",
              },
            ].map((item, index) => (
              <BentoCard key={index} variant="gradient" className="text-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`} />
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-white mb-4 uppercase font-space-grotesk">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-inter">{item.description}</p>
                </motion.div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <BentoCard variant="light" className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 font-orbitron">
                <span className="text-gray-800">Don't See Your</span>
                <br />
                <span className="text-green-600">Industry?</span>
              </h2>
              <p className="text-gray-600 text-xl mb-8 font-inter">
                We work with organizations across all sectors. Contact us to discuss how GOSHENDAO can be tailored to
                your industry's specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4"
                  onClick={() => window.open("https://calendly.com/goshendao/industry-consultation", "_blank")}
                >
                  Discuss Your Industry
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600/10 bg-transparent"
                >
                  View Success Stories
                </Button>
              </div>
            </motion.div>
          </BentoCard>
        </div>
      </section>
    </div>
  )
}
