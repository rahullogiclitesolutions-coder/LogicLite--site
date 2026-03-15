"use client"

import { motion } from "framer-motion"
import { ShieldCheck, BarChart3, Cpu } from "lucide-react"

const items = [
  {
    icon: ShieldCheck,
    title: "Enterprise-grade reliability",
    desc: "We build systems and websites with strong technical foundations, predictable delivery, and long-term maintainability.",
  },
  {
    icon: BarChart3,
    title: "Growth-focused execution",
    desc: "Every solution is designed to improve visibility, conversions, operational efficiency, or product adoption.",
  },
  {
    icon: Cpu,
    title: "Strategy + engineering in one team",
    desc: "You do not need separate partners for business thinking, UX direction, development, and growth execution.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm uppercase tracking-[0.22em] text-blue-400 mb-4">
              Why LogicLite
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              A consulting mindset with the speed of a modern product team.
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We position ourselves between traditional agencies and pure dev
              shops. That means stronger business thinking, sharper execution,
              and cleaner technical delivery.
            </p>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8">
              <h3 className="text-2xl font-semibold mb-4">
                What clients actually value
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li>Clear communication and fast iteration</li>
                <li>Better quality control and fewer handoff issues</li>
                <li>Design, engineering, and growth aligned from day one</li>
                <li>Scalable systems instead of short-term patchwork</li>
              </ul>
            </div>
          </motion.div>

          <div className="space-y-6">
            {items.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 hover:bg-white/[0.06] transition"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}