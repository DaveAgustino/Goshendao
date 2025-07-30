"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    id: "01",
    title: "DAO Development & Deployment",
    description:
      "Complete end-to-end DAO creation and launch. Transform your community or organization into a fully functional DAO with custom smart contracts, governance systems, and treasury management.",
    features: [
      "Custom smart contract development",
      "Governance mechanism design",
      "Multi-signature treasury setup",
      "Cross-chain compatibility",
    ],
    timeline: "8-12 weeks",
    size: "large",
  },
  {
    id: "02",
    title: "Governance Optimization",
    description:
      "Upgrade existing DAOs with advanced governance systems. We analyze your current system and implement proven mechanisms that increase participation.",
    features: [
      "Conviction voting systems",
      "Delegation mechanisms",
      "Quadratic voting implementation",
      "Automated execution protocols",
    ],
    timeline: "4-6 weeks",
    size: "medium",
  },
  {
    id: "03",
    title: "Smart Contract Security",
    description:
      "Military-grade security for your DAO infrastructure. Our security-first approach includes multiple audits and formal verification.",
    features: ["Multiple security audits", "Formal verification", "Real-time monitoring", "Emergency mechanisms"],
    timeline: "6-8 weeks",
    size: "medium",
  },
  {
    id: "04",
    title: "Treasury Management",
    description:
      "Professional treasury operations for DAOs. We provide institutional-grade treasury operations including yield generation.",
    features: ["Multi-chain architecture", "Automated yield strategies", "Risk management", "Real-time analytics"],
    timeline: "3-4 weeks",
    size: "small",
  },
  {
    id: "05",
    title: "Blockchain Integration",
    description:
      "Seamless integration with existing systems and new blockchain technologies for enhanced functionality.",
    features: ["API development", "Cross-chain bridges", "Legacy system integration", "Custom protocols"],
    timeline: "4-8 weeks",
    size: "small",
  },
  {
    id: "06",
    title: "Digital Ecosystem Development",
    description:
      "Building comprehensive digital ecosystems that connect users, applications, and services in the Web3 space.",
    features: ["DApp development", "Token economics design", "Community platforms", "Ecosystem governance"],
    timeline: "12-16 weeks",
    size: "large",
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20 bg-black">
      {/* Hero Section - HAOS Style */}
      <section className="py-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Category Tags */}
              <motion.div
                className="flex flex-wrap gap-4 text-sm text-gray-400 uppercase tracking-wider font-space-grotesk"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <span className="text-gray-500">CATEGORY:</span>
                  <br />
                  <span className="text-white">WEB3 SOLUTIONS</span>
                </div>
                <div>
                  <span className="text-gray-500">YEAR:</span>
                  <br />
                  <span className="text-white">2024</span>
                </div>
                <div>
                  <span className="text-gray-500">TECH SOLUTIONS:</span>
                  <br />
                  <span className="text-white">DAO & BLOCKCHAIN</span>
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-orbitron">
                  GOSHEN
                  <br />
                  <span className="text-gray-400">Solutions</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-orbitron">
                  Innovative Web3
                  <br />
                  Infrastructure
                </h2>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-sm text-gray-400 uppercase tracking-wider font-space-grotesk">
                  HIGH-QUALITY
                  <br />
                  DEVELOPMENT
                </div>
                <div className="text-4xl font-bold text-white">+50</div>
                <div className="w-32 h-1 bg-green-400 rounded-full" />
              </motion.div>
            </div>

            {/* Right Side - Glowing Element */}
            <div className="flex items-center justify-center relative">
              <motion.div
                className="relative w-96 h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {/* Main Glowing Shape */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `
                      radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.8) 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, rgba(34, 197, 94, 0.6) 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.4) 0%, transparent 70%)
                    `,
                    filter: "blur(40px)",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Inner Ring */}
                <motion.div
                  className="absolute inset-16 rounded-full border-2 border-green-400/30"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                {/* Center G Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-green-400 opacity-80">G</div>
                </div>

                {/* Plus Icon */}
                <motion.div
                  className="absolute bottom-8 right-8 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center border border-green-400/30"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-green-400 text-2xl font-bold">+</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="flex justify-between items-end mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-orbitron">OUR SERVICES</h2>
              <p className="text-gray-400 text-lg max-w-2xl font-inter">
                Explore our array of services, from web3 development to e-commerce solutions. Designed to elevate your
                online presence and drive success in the digital landscape.
              </p>
            </div>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 font-semibold font-space-grotesk">
              Contact us →
            </Button>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`
                  ${service.size === "large" ? "lg:col-span-2 lg:row-span-2" : ""}
                  ${service.size === "medium" ? "lg:row-span-1" : ""}
                  ${service.size === "small" ? "" : ""}
                `}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`
                    h-full border-gray-800 transition-all duration-300 hover:border-green-400/50 group cursor-pointer
                    ${index === 2 ? "bg-white text-black" : "bg-gray-900/50 text-white"}
                  `}
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    {/* Service Number */}
                    <div
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-6
                        ${index === 2 ? "bg-black text-white" : "bg-white text-black"}
                      `}
                    >
                      {service.id}
                    </div>

                    {/* Service Title */}
                    <h3
                      className={`
                        text-xl md:text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors font-space-grotesk
                        ${index === 2 ? "text-black" : "text-white"}
                      `}
                    >
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p
                      className={`
                        mb-6 flex-grow leading-relaxed font-inter
                        ${index === 2 ? "text-gray-700" : "text-gray-400"}
                      `}
                    >
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm font-inter">
                          <div
                            className={`
                              w-1.5 h-1.5 rounded-full mr-3
                              ${index === 2 ? "bg-green-600" : "bg-green-400"}
                            `}
                          />
                          <span
                            className={`
                              ${index === 2 ? "text-gray-600" : "text-gray-300"}
                            `}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Timeline Badge */}
                    <Badge
                      variant="outline"
                      className={`
                        self-start font-space-grotesk
                        ${index === 2 ? "border-green-600 text-green-600" : "border-green-400/50 text-green-400"}
                      `}
                    >
                      Timeline: {service.timeline}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-xl border border-green-700/30 rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-orbitron">
              Ready to Build the <span className="text-green-400">Future?</span>
            </h2>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto font-inter">
              Let's discuss how our innovative strategies can propel your organization forward. Our team is here to turn
              your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-4 font-space-grotesk"
              >
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-400/50 text-green-400 hover:bg-green-400/10 bg-transparent font-space-grotesk"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
