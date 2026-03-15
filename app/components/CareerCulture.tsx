"use client"

import { motion } from "framer-motion"

export default function CareerCulture(){

const culture = [
{
title:"Remote First",
desc:"Work from anywhere with a distributed global team."
},
{
title:"Engineering Culture",
desc:"We focus on writing scalable, clean and maintainable code."
},
{
title:"Ownership",
desc:"Engineers take full ownership of their work and product impact."
},
{
title:"Continuous Learning",
desc:"We encourage learning new technologies and frameworks."
}
]

return(

<section className="py-32 px-6">

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-16">
Our Culture
</h2>

<div className="grid md:grid-cols-4 gap-10">

{culture.map((item,i)=>(

<motion.div
key={item.title}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.1}}
className="p-8 border border-white/10 rounded-xl bg-white/[0.02]"
>

<h3 className="text-xl font-semibold">
{item.title}
</h3>

<p className="text-gray-400 mt-4 text-sm">
{item.desc}
</p>

</motion.div>

))}

</div>

</div>

</section>

)

}