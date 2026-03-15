"use client"

import { motion } from "framer-motion"

export default function MagneticButton({
  children
}:{
  children: React.ReactNode
}) {

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="btn-primary"
    >
      {children}
    </motion.button>
  )

}