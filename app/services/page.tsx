"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CTA from "../components/CTA"
import GradientOrbs from "../components/GradientOrbs"
import ParticlesBackground from "../components/ParticlesBackground"
import MagneticButton from "../components/MagneticButton"
import { motion } from "framer-motion"

const services = [
{
title:"Digital Marketing",
description:"Strategic marketing programs designed to generate traffic, leads and long-term revenue growth.",
features:[
"Advanced SEO strategy",
"Paid advertising campaigns",
"Conversion optimization",
"Marketing analytics and attribution"
]
},
{
title:"Web Development",
description:"High-performance websites designed for speed, scalability and conversion optimization.",
features:[
"Next.js architecture",
"Mobile-first UX design",
"SEO-optimized development",
"Performance engineering"
]
},
{
title:"Software Development",
description:"Custom digital platforms and SaaS systems designed for reliability and scalability.",
features:[
"SaaS product engineering",
"Enterprise platforms",
"API architecture",
"Cloud infrastructure"
]
},
{
title:"Staff Augmentation",
description:"Extend your engineering team with experienced developers and specialists.",
features:[
"Frontend engineers",
"Backend engineers",
"DevOps specialists",
"Long-term engineering support"
]
}
]

const stats=[
{number:"150+",label:"Projects Delivered"},
{number:"60+",label:"Clients Served"},
{number:"10+",label:"Years Experience"},
{number:"14",label:"Countries Served"}
]

const industries=[
"Technology Startups",
"Ecommerce Companies",
"SaaS Platforms",
"Healthcare Organizations",
"Financial Services",
"Enterprise Businesses"
]

const testimonials=[
{
quote:"LogicLite helped us scale our digital platform faster than expected.",
author:"David Lee — SaaS Founder"
},
{
quote:"Their engineering quality and communication were exceptional.",
author:"Sarah Khan — Product Director"
},
{
quote:"They delivered a website that dramatically improved our conversions.",
author:"Michael Chen — Ecommerce CEO"
}
]

export default function ServicesPage(){

const [openFAQ,setOpenFAQ] = useState<number | null>(null)

return(

<main className="bg-[#050505] text-white overflow-hidden">

<Navbar/>

{/* HERO */}

<section className="relative py-44 text-center px-6">

<ParticlesBackground/>
<GradientOrbs/>

<div className="relative z-10 max-w-4xl mx-auto">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:.6}}
className="text-5xl md:text-7xl font-bold leading-tight"
>

Digital Services That
<br/>

<span className="gradient-text">
Power Business Growth
</span>

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:.3}}
className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto"
>

LogicLite Solutions combines strategy, engineering and digital expertise
to help companies design better products, build scalable platforms
and create powerful growth systems.

</motion.p>

<div className="mt-12 flex justify-center gap-6">

<MagneticButton>
Start Your Project
</MagneticButton>

<button className="btn-outline">
View Case Studies
</button>

</div>

{/* credibility row */}

<div className="mt-16 text-sm text-gray-500 flex flex-wrap justify-center gap-8">
<span>Trusted by startups</span>
<span>Enterprise-ready engineering</span>
<span>Global delivery teams</span>
</div>

</div>

</section>


{/* STATS */}

<section className="py-28 px-6">

<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 text-center">

{stats.map(stat=>(
<div key={stat.label}>
<h3 className="text-5xl font-bold">{stat.number}</h3>
<p className="text-gray-400 mt-3">{stat.label}</p>
</div>
))}

</div>

</section>


{/* SERVICES GRID */}

<section className="py-28 px-6">

<div className="max-w-6xl mx-auto text-center mb-20">

<h2 className="text-4xl font-bold mb-6">
Our Core Services
</h2>

<p className="text-gray-400 max-w-2xl mx-auto">
We help companies transform digitally through modern engineering,
high-performance websites and scalable marketing systems.
</p>

</div>

<div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">

{services.map((service,i)=>(
<motion.div
key={service.title}
whileHover={{y:-10}}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.1}}
className="relative p-10 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition group overflow-hidden"
>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 to-purple-500/10"/>

<h3 className="text-xl font-semibold relative z-10">
{service.title}
</h3>

<p className="text-gray-400 mt-4 relative z-10">
{service.description}
</p>

</motion.div>
))}

</div>

</section>


{/* DETAILED SERVICES */}

<section className="py-32 px-6">

<div className="max-w-6xl mx-auto space-y-32">

{services.map((service,i)=>(
<motion.div
key={service.title}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.1}}
className="grid md:grid-cols-2 gap-20 items-center"
>

<div>

<h2 className="text-4xl font-semibold leading-tight">
{service.title}
</h2>

<p className="text-gray-400 mt-6">
{service.description}
</p>

</div>

<div>

<ul className="space-y-4">

{service.features.map(f=>(
<li key={f} className="text-gray-300">
• {f}
</li>
))}

</ul>

</div>

</motion.div>
))}

</div>

</section>


{/* INDUSTRIES */}

<section className="py-28 bg-white/[0.02] px-6">

<div className="max-w-5xl mx-auto text-center mb-16">

<h2 className="text-4xl font-bold">
Industries We Serve
</h2>

</div>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

{industries.map(industry=>(
<div
key={industry}
className="p-10 border border-white/10 rounded-xl bg-white/[0.03] text-center"
>
{industry}
</div>
))}

</div>

</section>


{/* PROCESS TIMELINE */}

<section className="py-32 px-6">

<div className="max-w-5xl mx-auto text-center mb-20">

<h2 className="text-4xl font-bold">
Our Consulting Process
</h2>

</div>

<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 relative text-center">

<div className="hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-white/10"/>

{["Discovery","Strategy","Execution","Optimization"].map((step,i)=>(

<motion.div
key={step}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.2}}
className="relative"
>

<div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6 relative z-10">
{i+1}
</div>

<h3 className="font-semibold text-lg">{step}</h3>

<p className="text-gray-400 text-sm mt-2">
Our team carefully executes this phase to ensure reliable delivery.
</p>

</motion.div>

))}

</div>

</section>


{/* TESTIMONIALS */}

<section className="py-32 bg-white/[0.02] px-6">

<div className="max-w-5xl mx-auto text-center mb-20">

<h2 className="text-4xl font-bold">
Client Testimonials
</h2>

</div>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

{testimonials.map(t=>(
<div key={t.author} className="p-10 border border-white/10 rounded-xl bg-white/[0.03]">

<p className="text-4xl text-blue-400 mb-4">“</p>

<p className="text-gray-300">
{t.quote}
</p>

<p className="text-gray-500 mt-4">
{t.author}
</p>

</div>
))}

</div>

</section>


{/* FAQ */}

<section className="py-32 px-6">

<div className="max-w-3xl mx-auto">

<h2 className="text-4xl font-bold mb-16 text-center">
Frequently Asked Questions
</h2>

<div className="space-y-6">

{[
{
q:"How long does a typical project take?",
a:"Most projects range between 4–12 weeks depending on scope."
},
{
q:"Do you work with startups?",
a:"Yes. We work with startups, scale-ups and enterprise organizations globally."
},
{
q:"Can you scale our engineering team?",
a:"Yes. Our staff augmentation services provide experienced engineers."
}
].map((item,index)=>(
<div key={index} className="border border-white/10 rounded-lg">

<button
onClick={()=>setOpenFAQ(openFAQ===index?null:index)}
className="w-full text-left p-6 flex justify-between items-center"
>

<span className="font-semibold">{item.q}</span>

<span>{openFAQ===index?"−":"+"}</span>

</button>

{openFAQ===index && (
<p className="px-6 pb-6 text-gray-400">
{item.a}
</p>
)}

</div>
))}

</div>

</div>

</section>

<CTA/>

<Footer/>

</main>

)
}