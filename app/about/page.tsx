"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { BentoCard } from "@/components/ui/bento-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Former blockchain architect at Ethereum Foundation. PhD in Distributed Systems from MIT.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Google senior engineer. Expert in smart contract security and formal verification.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Dr. Marcus Thompson",
    role: "Head of Research",
    bio: "Former professor of Economics at Stanford. Specialist in mechanism design and game theory.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Elena Vasquez",
    role: "Head of Security",
    bio: "Former security lead at ConsenSys. 10+ years in blockchain security and auditing.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const values = [
  {
    title: "Technical Excellence",
    description:
      "Every smart contract is audited, every system is tested, every deployment is monitored. We maintain the highest standards of technical quality.",
    variant: "light" as const,
  },
  {
    title: "Governance Innovation",
    description:
      "We design voting mechanisms, delegation systems, and decision-making processes that actually work at scale, not just in theory.",
    variant: "green" as const,
  },
  {
    title: "Real-World Focus",
    description:
      "Pretty whitepapers don't run organizations. We build systems that handle real money, real decisions, and real consequences.",
    variant: "gradient" as const,
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 mesh-gradient-1">
      {/* Hero Section with Background Overlay */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
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
            <Badge className="bg-green-400/10 text-green-400 border-green-400/20 mb-6">About GOSHENDAO</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
              <span className="gradient-text text-glow-green">Building the</span>{" "}
              <span className="text-white">Future of Organization</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-8 font-inter">
              We build the infrastructure that powers decentralized organizations. While others debate the future of
              work, we're building it—creating the tools, systems, and frameworks that enable communities to organize,
              govern, and create value without traditional hierarchies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-32 px-6 lg:px-12 mesh-gradient-2">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Our Approach"
            highlightWord="Our"
            description="Three core principles guide everything we build"
            className="font-space-grotesk"
          />

          <div className="bento-grid">
            {values.map((value, index) => (
              <BentoCard key={index} variant={value.variant} size="default" className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-green-400 mb-4 uppercase font-space-grotesk">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed font-inter">{value.description}</p>
                </motion.div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 lg:px-12 mesh-gradient-3">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Leadership Team"
            highlightWord="Leadership"
            description="Experienced leaders from blockchain, technology, and governance domains"
            className="font-space-grotesk"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <BentoCard key={index} variant="default" className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 font-space-grotesk">{member.name}</h3>
                  <p className="text-green-400 text-sm mb-3 font-inter">{member.role}</p>
                  <p className="text-gray-400 text-sm font-inter">{member.bio}</p>
                </motion.div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 mesh-gradient-1">
        <div className="max-w-4xl mx-auto">
          <BentoCard variant="gradient" className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
                <span className="text-white">Join Us in Building the</span>{" "}
                <span className="gradient-text text-glow-green">Future</span>
              </h2>
              <p className="text-gray-300 text-xl mb-8 font-inter">
                Whether you're looking to build a DAO, join our team, or partner with us, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-4"
                  onClick={() => window.open("https://calendly.com/goshendao/consultation", "_blank")}
                >
                  Work With Us
                </Button>
                <Button
                  size="lg"
                  className="bg-green-400/20 backdrop-blur-xl border border-green-400/30 text-green-400 hover:bg-green-400/30 hover:text-white"
                >
                  Join Our Team
                </Button>
              </div>
            </motion.div>
          </BentoCard>
        </div>
      </section>
    </div>
  )
}
