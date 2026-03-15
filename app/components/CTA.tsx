"use client"

import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-blue-600 to-purple-600 p-10 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_40%)]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-4">
              Start the conversation
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Build a stronger digital presence with a team that can actually execute.
            </h2>
            <p className="text-white/85 text-lg mb-10">
              Whether you need a premium website, custom software, marketing
              execution, or additional engineering capacity, we can help you
              move faster with more confidence.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-black font-semibold hover:opacity-90 transition"
            >
              Book a strategy call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}