"use client"

import { motion } from "framer-motion"

const steps = [
  {
    no: "01",
    title: "Discovery",
    desc: "We understand the business model, market position, audience, and growth objectives before proposing solutions.",
  },
  {
    no: "02",
    title: "Strategy",
    desc: "We define the roadmap, priorities, technical direction, and user experience approach required for impact.",
  },
  {
    no: "03",
    title: "Execution",
    desc: "Our team designs, develops, tests, and iterates quickly while maintaining delivery quality and transparency.",
  },
  {
    no: "04",
    title: "Scale",
    desc: "After launch, we optimize performance, support growth initiatives, and help teams scale with confidence.",
  },
]

export default function Process() {
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
            Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A delivery model designed for clarity, speed, and better outcomes
          </h2>
          <p className="text-gray-400 text-lg">
            We keep our process simple, disciplined, and transparent so clients
            always know what is happening and why.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.no}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <div className="text-blue-400 text-sm tracking-[0.18em] mb-4">
                {step.no}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-7">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}