"use client"

import { motion } from "framer-motion"

export default function GradientOrbs(){

return(

<div className="absolute inset-0 -z-10 overflow-hidden">

<motion.div
animate={{ x:[0,150,0], y:[0,80,0] }}
transition={{ duration:25, repeat:Infinity }}
className="absolute w-[500px] h-[500px] bg-blue-500/30 blur-[120px] rounded-full -top-40 -left-40"
/>

<motion.div
animate={{ x:[0,-150,0], y:[0,-80,0] }}
transition={{ duration:30, repeat:Infinity }}
className="absolute w-[500px] h-[500px] bg-purple-500/30 blur-[120px] rounded-full bottom-0 right-0"
/>

</div>

)

}