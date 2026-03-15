"use client"

import { motion } from "framer-motion"

const logos = [
  "Microsoft",
  "Shopify",
  "AWS",
  "HubSpot",
  "Stripe",
  "Slack",
]

export default function LogoCloud() {
  return (
    <section className="py-16 border-y border-white/10 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Trusted by growing brands and ambitious teams
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center text-gray-300 hover:bg-white/[0.06] transition"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}