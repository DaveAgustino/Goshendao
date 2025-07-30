"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { ServiceCard } from "@/components/ui/service-card"

const services = [
  {
    title: "DAO Development & Deployment",
    description:
      "Transform your community or organization into a fully functional DAO with custom smart contracts, governance systems, and treasury management—all designed for your specific needs.",
    features: [
      "Custom smart contract development and deployment",
      "Governance mechanism design and implementation",
      "Multi-signature treasury setup with security protocols",
      "Cross-chain compatibility and bridge integration",
    ],
    timeline: "Timeline: 8-12 weeks from concept to live deployment",
  },
  {
    title: "Governance Optimization",
    description:
      "Most DAOs fail because of poor governance design. We analyze your current system and implement proven mechanisms that increase participation, improve decision quality, and prevent common attack vectors.",
    features: [
      "Conviction voting for gradual consensus building",
      "Delegation systems enabling expertise-based representation",
      "Quadratic voting to prevent whale dominance",
      "Emergency governance protocols",
    ],
  },
  {
    title: "Smart Contract Security",
    description:
      "Your DAO is only as secure as its smart contracts. Our security-first approach includes multiple audits, formal verification, ongoing monitoring, and insurance coverage.",
    features: [
      "Multiple independent security audits",
      "Formal verification of critical functions",
      "Real-time monitoring and threat detection",
      "Up to $10M insurance coverage",
    ],
  },
  {
    title: "Treasury Management",
    description:
      "Most DAOs struggle with treasury management. We provide institutional-grade treasury operations including yield generation, risk management, and automated diversification strategies.",
    features: [
      "Multi-chain treasury architecture",
      "Automated yield generation strategies",
      "Risk management and diversification",
      "Real-time treasury analytics and reporting",
    ],
  },
]

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Services"
          highlightWord="Our"
          description="Complete end-to-end solutions for building, optimizing, and securing decentralized organizations"
        />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              timeline={service.timeline}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
