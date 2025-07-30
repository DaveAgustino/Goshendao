"use client"
import { ScrollCapabilities } from "@/components/ui/scroll-capabilities"

const capabilities = [
  {
    title: "Advanced DAO Infrastructure Development",
    description:
      "Modular smart contract architecture that adapts to any organizational structure, scaling from small communities to global organizations managing billions in assets.",
    variant: "light" as const,
    size: "large" as const,
  },
  {
    title: "Revolutionary Governance Mechanisms",
    description:
      "Sophisticated governance including conviction voting, liquid democracy, quadratic voting, and futarchy-based prediction markets for evidence-driven decisions.",
    variant: "green" as const,
    size: "default" as const,
  },
  {
    title: "Cross-Chain Treasury Management",
    description:
      "Multi-chain treasury systems operating across Ethereum, Polygon, Arbitrum, Avalanche, Solana with automated yield generation and risk management.",
    variant: "gradient" as const,
    size: "default" as const,
  },
  {
    title: "AI-Enhanced Decision Making",
    description:
      "Artificial intelligence augments collective intelligence through proposal impact prediction, automated research synthesis, and governance attack detection.",
    variant: "default" as const,
    size: "wide" as const,
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Formal verification, multiple audits, continuous monitoring with multi-signature controls, time-locked executions, and emergency pause mechanisms.",
    variant: "green" as const,
    size: "default" as const,
  },
  {
    title: "Comprehensive Analytics",
    description:
      "Real-time dashboards with deep insights into governance participation, treasury performance, community health, and predictive analytics.",
    variant: "light" as const,
    size: "default" as const,
  },
]

export function CapabilitiesSection() {
  return (
    <section className="mesh-gradient-2">
      <ScrollCapabilities />
    </section>
  )
}
