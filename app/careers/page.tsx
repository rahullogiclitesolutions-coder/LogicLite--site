"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { jobs } from "../../lib/jobs"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CareersPage(){

return(

<main className="bg-[#050505] text-white min-h-screen">

<Navbar/>

{/* HERO */}

<section className="pt-40 pb-32 px-6 text-center">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-5xl md:text-6xl font-bold"
>

Build Your Career  
<span className="block text-blue-500 mt-2">
With LogicLite
</span>

</motion.h1>

<p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
Join a team of engineers and designers building scalable digital
products for global companies.
</p>

</section>



{/* HIRING PROCESS */}

<section className="py-32 px-6 border-t border-white/5">

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-20">
Our Hiring Process
</h2>

<p className="text-gray-400 text-center max-w-2xl mx-auto mb-24">
Our recruitment process focuses on understanding your technical
skills, problem-solving mindset and collaboration ability.
</p>

<div className="relative">

{/* connecting line */}

<div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-white/10"></div>

<div className="grid md:grid-cols-5 gap-10">

{[
{
step:"01",
title:"Application",
desc:"Submit your resume and portfolio for the role you're interested in."
},
{
step:"02",
title:"Screening",
desc:"Initial discussion with our team to understand your experience."
},
{
step:"03",
title:"Technical",
desc:"Technical interview or practical task related to the role."
},
{
step:"04",
title:"Final Round",
desc:"Discussion with leadership to evaluate culture fit and goals."
},
{
step:"05",
title:"Offer",
desc:"Successful candidates receive an offer and onboarding plan."
}
].map((item,i)=>(

<motion.div
key={item.step}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.15}}
className="relative text-center"
>

<div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-sm">

{item.step}

</div>

<h3 className="mt-6 font-semibold">
{item.title}
</h3>

<p className="text-gray-400 text-sm mt-3 px-4">
{item.desc}
</p>

</motion.div>

))}

</div>

</div>

</div>

</section>



{/* OPEN POSITIONS */}

<section className="py-32 px-6">

<div className="max-w-5xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-20">
Open Positions
</h2>

<div className="space-y-8">

{jobs.map(job=>(

<motion.div
key={job.id}
whileHover={{scale:1.01}}
className="border border-white/10 rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:bg-white/[0.03] transition"
>

<div>

<h3 className="text-xl font-semibold">
{job.title}
</h3>

<p className="text-gray-400 text-sm mt-1">
{job.location} • {job.type} • {job.experience}
</p>

<p className="text-gray-400 mt-4 max-w-xl">
{job.description}
</p>

<div className="flex flex-wrap gap-2 mt-4">

{job.skills.map(skill=>(

<span
key={skill}
className="px-3 py-1 text-xs border border-white/10 rounded-md bg-white/[0.05]"
>

{skill}

</span>

))}

</div>

</div>

<Link
href={`/careers/apply/${job.slug}`}
className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-sm h-fit"
>

Apply

</Link>

</motion.div>

))}

</div>

</div>

</section>



{/* GENERAL APPLICATION */}

<section className="py-32 px-6 bg-white/[0.02]">

<div className="max-w-4xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-12">
Send Us Your Resume
</h2>

<p className="text-gray-400 text-center mb-12">
If you don't see a role that fits your experience,
share your resume and we will reach out when
a suitable opportunity opens.
</p>

<form
className="space-y-6 border border-white/10 p-10 rounded-xl"
encType="multipart/form-data"
onSubmit={async(e)=>{

e.preventDefault()

const formData=new FormData(e.currentTarget)

await fetch("/api/apply",{
method:"POST",
body:formData
})

alert("Application submitted!")

}}
>

<input
name="name"
required
placeholder="Full Name"
className="w-full p-4 bg-black border border-white/10 rounded"
/>

<input
name="email"
required
type="email"
placeholder="Email Address"
className="w-full p-4 bg-black border border-white/10 rounded"
/>

<input
name="role"
placeholder="Role you're interested in"
className="w-full p-4 bg-black border border-white/10 rounded"
/>

<textarea
name="message"
rows={4}
placeholder="Tell us about yourself"
className="w-full p-4 bg-black border border-white/10 rounded"
/>

<input
type="file"
name="resume"
/>

<button
type="submit"
className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
>

Submit Application

</button>

</form>

</div>

</section>

<Footer/>

</main>

)
}