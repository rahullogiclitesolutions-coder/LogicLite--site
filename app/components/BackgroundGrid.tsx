"use client"

import { motion } from "framer-motion"

export default function BackgroundGrid(){

return(

<div className="absolute inset-0 -z-10 overflow-hidden">

<motion.div
animate={{opacity:[0.4,0.7,0.4]}}
transition={{duration:6,repeat:Infinity}}
className="absolute inset-0
bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),
linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
bg-[size:60px_60px]"
/>

</div>

)

}