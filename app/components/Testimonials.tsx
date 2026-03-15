"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const items = [
  {
    category: "Ecommerce Growth",
    title: "Rebuilt the web experience to increase conversions and improve paid traffic performance.",
    result: "+220% revenue growth",
  },
  {
    category: "SaaS Platform",
    title: "Designed and developed a scalable product experience that supported acquisition and onboarding.",
    result: "10k+ new users",
  },
  {
    category: "Enterprise Automation",
    title: "Created internal tools that reduced repetitive work and improved operational speed.",
    result: "40% faster operations",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-28 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.22em] text-blue-400 mb-4">
              Case studies
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Work designed to move metrics, not just look polished.
            </h2>
            <p className="text-gray-400 text-lg">
              Our case studies show how strong strategy, modern engineering, and
              thoughtful execution create measurable business impact.
            </p>
          </div>
          <a href="/services" className="text-blue-400 hover:text-blue-300">
            Explore capabilities →
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.a
              href="/services"
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8 block"
            >
              <p className="text-sm uppercase tracking-[0.16em] text-gray-500 mb-5">
                {item.category}
              </p>
              <h3 className="text-2xl font-semibold leading-tight mb-6">
                {item.title}
              </h3>
              <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/10">
                <span className="text-blue-300 font-medium">{item.result}</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}