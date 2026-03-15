"use client"

import { motion } from "framer-motion"

const posts = [
  {
    title: "How modern websites drive qualified pipeline, not just traffic",
    desc: "A stronger website is not only a branding asset. It is a conversion and trust system for serious growth.",
    date: "May 2024",
  },
  {
    title: "What companies get wrong when scaling digital products",
    desc: "Poor delivery structure, fragmented teams, and weak technical decisions slow down growth more than most leaders expect.",
    date: "April 2024",
  },
  {
    title: "Why staff augmentation works best with clear ownership",
    desc: "The right augmentation model supports speed without damaging process quality or engineering standards.",
    date: "March 2024",
  },
]

export default function BlogPreview() {
  return (
    <section className="py-28 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.22em] text-blue-400 mb-4">
              Blog
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ideas, strategy, and technical thinking from our team
            </h2>
            <p className="text-gray-400 text-lg">
              We use the blog to share practical insight across digital growth,
              engineering delivery, and product execution.
            </p>
          </div>
          <a href="/blog" className="text-blue-400 hover:text-blue-300">
            View all articles →
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.a
              href="/blog"
              key={post.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 block"
            >
              <div className="text-sm text-gray-500 mb-5">{post.date}</div>
              <h3 className="text-2xl font-semibold leading-tight mb-5">
                {post.title}
              </h3>
              <p className="text-gray-400 leading-7">{post.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}