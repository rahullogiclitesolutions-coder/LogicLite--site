"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "Digital Marketing",
    desc: "SEO, paid media, analytics, and performance strategy focused on sustainable growth and qualified lead generation.",
  },
  {
    title: "Web Development",
    desc: "Conversion-driven websites and digital platforms engineered for speed, user experience, and technical SEO strength.",
  },
  {
    title: "Software Development",
    desc: "Custom SaaS products, internal platforms, and business-critical systems built for scale, security, and reliability.",
  },
  {
    title: "Staff Augmentation",
    desc: "High-quality engineering support to strengthen delivery capacity without slowing down your internal momentum.",
  },
]

export default function Services() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-[0.22em] text-blue-400 mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            End-to-end digital capability for growth-stage and enterprise teams
          </h2>
          <p className="text-gray-400 text-lg">
            We do not just deliver design files or code. We build the business
            systems, digital experiences, and marketing engines that support
            long-term growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-8">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}