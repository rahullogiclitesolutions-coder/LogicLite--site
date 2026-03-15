"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "150+", label: "Projects delivered" },
  { value: "60+", label: "Clients supported" },
  { value: "10+", label: "Years combined expertise" },
  { value: "14", label: "Countries served" },
]

export default function Stats() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.22em] text-blue-400 mb-4">
            Authority
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Built for companies that need outcomes, not just deliverables.
          </h2>
          <p className="text-gray-400 text-lg">
            We combine product thinking, engineering discipline, and growth
            execution to deliver work that performs in the real market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8"
            >
              <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}