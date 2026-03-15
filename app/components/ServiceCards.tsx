"use client"

import { motion } from "framer-motion"

const services = [

{
title:"Digital Marketing",
desc:"Data-driven strategies designed to increase traffic, leads and revenue."
},

{
title:"Web Development",
desc:"High-performance websites engineered for speed and conversions."
},

{
title:"Software Development",
desc:"Custom digital platforms designed for scalability and reliability."
},

{
title:"Staff Augmentation",
desc:"Extend your engineering team with experienced developers."
}

]

export default function ServiceCards(){

return(

<section className="py-28 px-6">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">

{services.map((service,i)=>(

<motion.div
key={service.title}
whileHover={{y:-8}}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.1}}
className="p-8 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition"
>

<h3 className="text-xl font-semibold">
{service.title}
</h3>

<p className="text-gray-400 mt-4">
{service.desc}
</p>

</motion.div>

))}

</div>

</section>

)

}