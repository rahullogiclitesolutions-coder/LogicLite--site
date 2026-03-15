"use client"

import { motion } from "framer-motion"

type Props = {
  variant?: "home" | "careers"
}

export default function TechStack({ variant = "home" }: Props) {
  const stack = [
    { name: "Next.js", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "TailwindCSS", icon: "🎨" },
    { name: "GraphQL", icon: "🔺" },
    { name: "Redis", icon: "🚀" }
  ]

  return (
    <section className={`px-6 ${variant === "home" ? "py-28" : "py-32 bg-white/[0.02]"}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20">
          {variant === "home" ? "Our Technology Stack" : "Engineering Tech Stack"}
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          {variant === "home"
            ? "We build modern, scalable digital platforms using cutting-edge technologies."
            : "Our engineers work with modern technologies to build scalable and high-performance systems."}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-6 border border-white/10 rounded-xl text-center bg-white/[0.02] hover:bg-white/[0.05] transition"
            >
              <div className="text-3xl mb-3">{tech.icon}</div>
              <h3 className="text-sm font-medium">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}