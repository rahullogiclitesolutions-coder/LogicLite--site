"use client"

import { motion } from "framer-motion"
import ParticlesBackground from "./ParticlesBackground"
import GradientOrbs from "./GradientOrbs"
import MagneticButton from "./MagneticButton"

export default function Hero(){

return(

<section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

{/* animated backgrounds */}

<ParticlesBackground/>
<GradientOrbs/>

{/* content */}

<div className="container mx-auto text-center relative z-10 max-w-5xl">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.7}}
className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
>

<span className="gradient-text">
Engineering Growth
</span>

<br/>

For Modern Businesses

</motion.h1>


<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.3}}
className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
>

LogicLite Solutions builds high-performance software,
conversion-focused websites and scalable digital systems
that help companies grow faster and operate smarter.

</motion.p>


{/* buttons */}

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.5}}
className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
>

<MagneticButton>
Start Project
</MagneticButton>

<button className="px-8 py-4 rounded-xl border border-white/20 hover:border-white transition text-white">
View Services
</button>

</motion.div>


{/* credibility section */}

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.7}}
className="mt-16 flex flex-wrap justify-center gap-8 text-gray-500 text-sm"
>

<div>Trusted by startups</div>
<div>Enterprise-ready solutions</div>
<div>Global delivery team</div>

</motion.div>

</div>

</section>

)

}