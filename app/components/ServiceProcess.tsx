"use client"

import { motion } from "framer-motion"

const steps=[

{
title:"Discovery",
desc:"Understand business goals, market and technical requirements."
},

{
title:"Strategy",
desc:"Define architecture, roadmap and execution plan."
},

{
title:"Execution",
desc:"Design, develop and deploy digital platforms."
},

{
title:"Optimization",
desc:"Improve performance, scale infrastructure and growth systems."
}

]

export default function ServiceProcess(){

return(

<section className="py-32 bg-white/[0.02] px-6">

<div className="max-w-5xl mx-auto text-center mb-20">

<h2 className="text-4xl font-bold">
Our Delivery Process
</h2>

<p className="text-gray-400 mt-4">
A structured process that ensures quality, speed and scalability.
</p>

</div>

<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">

{steps.map((step,i)=>(

<motion.div
key={step.title}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.15}}
className="text-center"
>

<div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">

{i+1}

</div>

<h3 className="text-xl font-semibold">
{step.title}
</h3>

<p className="text-gray-400 mt-3">
{step.desc}
</p>

</motion.div>

))}

</div>

</section>

)

}