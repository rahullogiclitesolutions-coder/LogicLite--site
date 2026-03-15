"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CTA from "../components/CTA"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactPage(){

const [form,setForm] = useState({
name:"",
email:"",
company:"",
service:"",
message:""
})

const [loading,setLoading] = useState(false)
const [success,setSuccess] = useState("")
const [error,setError] = useState("")

function handleChange(e:any){
setForm({...form,[e.target.name]:e.target.value})
}

async function handleSubmit(e:any){

e.preventDefault()

setError("")
setSuccess("")

if(!form.name || !form.email || !form.message){
setError("Please fill required fields.")
return
}

setLoading(true)

try{

const res = await fetch("/api/contact",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(form)
})

const data = await res.json()

if(res.ok){
setSuccess("Message sent successfully!")
setForm({
name:"",
email:"",
company:"",
service:"",
message:""
})
}else{
setError(data.message)
}

}catch(err){
setError("Something went wrong.")
}

setLoading(false)

}

return(

<main className="bg-[#050505] text-white min-h-screen">

<Navbar/>

<section className="py-32 text-center px-6">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-5xl md:text-6xl font-bold"
>

Let's Build Something Great

</motion.h1>

<p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">

Tell us about your project or request.  
Our team will respond within 24 hours.

</p>

</section>


<section className="px-6 pb-32">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">


{/* LEFT INFO */}

<div>

<h2 className="text-3xl font-semibold mb-6">
Why Work With LogicLite
</h2>

<ul className="space-y-4 text-gray-400">

<li>✔ Experienced engineers</li>
<li>✔ Product-focused development</li>
<li>✔ High performance systems</li>
<li>✔ Transparent communication</li>

</ul>


<div className="mt-16 space-y-6">

<div>
<h4 className="font-semibold">Email</h4>
<p className="text-gray-400">info@logiclitesolutions.in</p>
</div>

<div>
<h4 className="font-semibold">Location</h4>
<p className="text-gray-400">Jaipur, Rajasthan, India</p>
</div>

</div>

</div>


{/* FORM */}

<form
onSubmit={handleSubmit}
className="space-y-6 border border-white/10 p-10 rounded-xl bg-white/[0.02]"
>

<h3 className="text-2xl font-semibold mb-6">
Contact Us
</h3>

<input
name="name"
placeholder="Your Name *"
value={form.name}
onChange={handleChange}
className="w-full p-4 bg-black border border-white/10 rounded-lg"
/>

<input
name="email"
placeholder="Email Address *"
value={form.email}
onChange={handleChange}
className="w-full p-4 bg-black border border-white/10 rounded-lg"
/>

<input
name="company"
placeholder="Company Name"
value={form.company}
onChange={handleChange}
className="w-full p-4 bg-black border border-white/10 rounded-lg"
/>


<select
name="service"
value={form.service}
onChange={handleChange}
className="w-full p-4 bg-black border border-white/10 rounded-lg"
>

<option value="">Select Request Type</option>
<option value="Web Development">Web Development</option>
<option value="Software Development">Software Development</option>
<option value="Digital Marketing">Digital Marketing</option>
<option value="Staff Augmentation">Staff Augmentation</option>
<option value="Career">Career</option>
<option value="Proposal Request">Proposal Request</option>
<option value="Other">Other</option>

</select>


<textarea
name="message"
rows={5}
placeholder="Tell us about your request *"
value={form.message}
onChange={handleChange}
className="w-full p-4 bg-black border border-white/10 rounded-lg"
/>


{error && (
<p className="text-red-400 text-sm">
{error}
</p>
)}

{success && (
<p className="text-green-400 text-sm">
{success}
</p>
)}


<button
type="submit"
disabled={loading}
className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold"
>

{loading ? "Sending..." : "Send Message"}

</button>

</form>

</div>

</section>

<CTA/>
<Footer/>

</main>

)

}