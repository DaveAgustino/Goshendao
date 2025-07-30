"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StatCard } from "@/components/ui/stat-card"

const caseStudies = [
  {
    title: "DeFi Protocol Governance Overhaul",
    industry: "DeFi",
    client: "Major DeFi Protocol",
    timeline: "6 months",
    challenge: "Low participation (3%), whale dominance, slow decisions",
    solution: "Implemented conviction voting, delegation system, automated execution",
    results: [
      { metric: "45%", label: "Participation Rate", description: "Increased from 3% to 45%" },
      { metric: "3", label: "Days", description: "Decision time reduced from 2 weeks" },
      { metric: "200%", label: "Treasury Yield", description: "Improvement in yield generation" },
      { metric: "$50M", label: "Assets Under Management", description: "Total treasury value managed" },
    ],
    testimonial: {
      quote:
        "GOSHENDAO transformed our governance from a plutocracy to a true democracy. The conviction voting system ensures thoughtful decision-making while preventing manipulation.",
      author: "Sarah Chen",
      role: "Protocol Lead",
    },
    technologies: ["Conviction Voting", "Liquid Democracy", "Multi-sig Treasury", "Cross-chain Bridge"],
  },
  {
    title: "Creator Economy DAO Launch",
    industry: "Creator Economy",
    client: "Creative Platform",
    timeline: "4 months",
    challenge: "Transition 8,000 creators to decentralized ownership",
    solution: "Multi-tiered membership, revenue sharing, reputation-based voting",
    results: [
      { metric: "80%", label: "Creator Retention", description: "Improvement in creator retention" },
      { metric: "150%", label: "Platform Revenue", description: "Increase in total platform revenue" },
      { metric: "3x", label: "Development Speed", description: "Product development acceleration" },
      { metric: "8000", label: "Active Creators", description: "Successfully transitioned to DAO" },
    ],
    testimonial: {
      quote:
        "The transition to a creator-owned platform was seamless. Our creators now have real ownership and decision-making power, leading to unprecedented engagement and innovation.",
      author: "Marcus Rodriguez",
      role: "Platform Founder",
    },
    technologies: ["Reputation System", "Revenue Sharing", "Quadratic Voting", "Creator Tokens"],
  },
  {
    title: "Research Consortium DAO",
    industry: "Research & Development",
    client: "Academic Consortium",
    timeline: "8 months",
    challenge: "Coordinate research funding across institutions",
    solution: "Specialized governance, automated peer review, IP tokenization",
    results: [
      { metric: "70%", label: "Funding Efficiency", description: "Improvement in funding allocation" },
      { metric: "6", label: "Weeks", description: "Reduced from 8 months to 6 weeks" },
      { metric: "$8M", label: "IP Revenue", description: "Generated through tokenization" },
      { metric: "25", label: "Institutions", description: "Participating in the consortium" },
    ],
    testimonial: {
      quote:
        "The automated peer review and IP tokenization system has revolutionized how we fund and manage research. Collaboration across institutions has never been more efficient.",
      author: "Dr. Elena Vasquez",
      role: "Research Director",
    },
    technologies: ["Peer Review Automation", "IP Tokenization", "Multi-institutional Governance", "Research Analytics"],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="bg-green-400/10 text-green-400 border-green-400/20 mb-6">Success Stories</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
              <span className="text-green-400">Proven</span> <span className="text-white">Results</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-8 font-inter">
              Real organizations achieving transformational results with GOSHENDAO's DAO infrastructure and governance
              solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-32">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Header */}
              <div className="text-center">
                <Badge className="bg-green-400/10 text-green-400 border-green-400/20 mb-4">{study.industry}</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-space-grotesk">{study.title}</h2>
                <div className="flex justify-center items-center space-x-8 text-gray-400 font-inter">
                  <span>Client: {study.client}</span>
                  <span>•</span>
                  <span>Timeline: {study.timeline}</span>
                </div>
              </div>

              {/* Challenge, Solution, Results */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="bg-green-900/20 border-green-400/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-4 font-space-grotesk">Challenge</h3>
                    <p className="text-gray-300 font-inter">{study.challenge}</p>
                  </CardContent>
                </Card>

                <Card className="bg-green-800/20 border-green-400/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-4 font-space-grotesk">Solution</h3>
                    <p className="text-gray-300 font-inter">{study.solution}</p>
                  </CardContent>
                </Card>

                <Card className="bg-green-900/20 border-green-400/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-4 font-space-grotesk">Technologies</h3>
                    <div className="space-y-2">
                      {study.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-green-400/50 text-green-400 mr-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Results Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {study.results.map((result, resultIndex) => (
                  <StatCard
                    key={resultIndex}
                    number={Number.parseInt(result.metric.replace(/[^0-9]/g, "")) || 0}
                    suffix={result.metric.replace(/[0-9]/g, "")}
                    label={result.label}
                    delay={resultIndex * 0.1}
                    fontClass="font-orbitron"
                  />
                ))}
              </div>

              {/* Testimonial */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <div className="text-center">
                    <svg className="w-8 h-8 text-green-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-xl text-gray-300 mb-6 italic font-inter">
                      "{study.testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-white font-inter">{study.testimonial.author}</div>
                      <div className="text-gray-400 font-inter">{study.testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Overall Impact */}
      <section className="py-20 px-6 lg:px-12 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Overall Impact"
            highlightWord="Overall"
            description="Cumulative results across all our DAO implementations and governance optimizations"
            titleClass="font-space-grotesk"
            descriptionClass="font-inter"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: 50, suffix: "+", label: "DAOs Deployed", description: "Successfully launched organizations" },
              { number: 100000, suffix: "+", label: "Members Served", description: "Active DAO participants" },
              { number: 500, suffix: "M+", label: "Assets Managed", description: "Total treasury value in USD" },
              { number: 99, suffix: "%", label: "Success Rate", description: "Projects meeting objectives" },
            ].map((stat, index) => (
              <StatCard
                key={index}
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 0.1}
                fontClass="font-orbitron"
              />
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
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
              <span className="text-white">Ready to Join Our</span>{" "}
              <span className="text-green-400">Success Stories?</span>
            </h2>
            <p className="text-gray-400 text-xl mb-8 font-inter">
              Let's discuss how GOSHENDAO can help your organization achieve similar transformational results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-4">
                Start Your Success Story
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                Download Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
