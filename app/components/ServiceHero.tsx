"use client"

import { motion } from "framer-motion"
import GradientOrbs from "./GradientOrbs"

export default function ServiceHero(){

return(

<section className="relative py-44 text-center overflow-hidden">

<GradientOrbs/>

<div className="relative z-10 max-w-4xl mx-auto px-6">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:.6}}
className="text-5xl md:text-7xl font-bold leading-tight"
>

Digital Services That Help
<br/>

<span className="gradient-text">
Companies Scale Faster
</span>

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:.3}}
className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto"
>

LogicLite Solutions combines engineering expertise,
modern technology and digital strategy to build
high-performance platforms and scalable growth systems.

</motion.p>

</div>

</section>

)

}