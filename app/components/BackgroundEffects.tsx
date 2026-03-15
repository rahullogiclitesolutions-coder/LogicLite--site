"use client"

import { motion } from "framer-motion"

export default function BackgroundEffects(){

return(

<div className="absolute inset-0 overflow-hidden -z-10">

<motion.div
animate={{x:[0,200,0],y:[0,100,0]}}
transition={{duration:25,repeat:Infinity}}
className="absolute w-[600px] h-[600px] bg-blue-600/30 blur-[120px] rounded-full -top-40 -left-40"
/>

<motion.div
animate={{x:[0,-200,0],y:[0,-100,0]}}
transition={{duration:28,repeat:Infinity}}
className="absolute w-[600px] h-[600px] bg-purple-600/30 blur-[120px] rounded-full bottom-0 right-0"
/>

<div className="absolute inset-0 grid-bg opacity-30"/>

</div>

)

}