"use client"

import { useParams } from "next/navigation"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import { jobs } from "../../../../lib/jobs"

export default function ApplyPage(){

const params = useParams()
const slug = params?.slug

const job = jobs.find(j=>j.slug===slug)

if(!job){

return(
<div className="bg-black text-white min-h-screen flex items-center justify-center">
Job not found
</div>
)

}

return(

<main className="bg-[#050505] text-white min-h-screen">

<Navbar/>

<section className="pt-36 pb-20 text-center">

<h1 className="text-5xl font-bold">
Apply for {job.title}
</h1>

<p className="text-gray-400 mt-4">
{job.location} • {job.type} • {job.experience}
</p>

</section>


<section className="pb-32 px-6">

<div className="max-w-3xl mx-auto">

<form
className="space-y-6 border border-white/10 p-10 rounded-xl"
encType="multipart/form-data"
onSubmit={async(e)=>{

e.preventDefault()

const formData = new FormData(e.currentTarget)

await fetch("/api/apply",{
method:"POST",
body:formData
})

alert("Application submitted")

}}
>

<input type="hidden" name="jobTitle" value={job.title}/>

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
name="linkedin"
placeholder="LinkedIn Profile"
className="w-full p-4 bg-black border border-white/10 rounded"
/>

<input
name="portfolio"
placeholder="Portfolio"
className="w-full p-4 bg-black border border-white/10 rounded"
/>

<textarea
name="message"
rows={5}
placeholder="Cover Letter"
className="w-full p-4 bg-black border border-white/10 rounded"
/>

<input
type="file"
name="resume"
/>

<button
type="submit"
className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded"
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