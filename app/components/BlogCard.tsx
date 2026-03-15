"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function BlogCard({post}:any){

return(

<Link href={`/blog/${post.slug}`}>

<motion.div
whileHover={{y:-8}}
className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]"
>

<img
src={post.image}
className="w-full h-48 object-cover"
/>

<div className="p-6">

<h3 className="text-xl font-semibold">
{post.title}
</h3>

<p className="text-gray-400 mt-4 text-sm">
{post.excerpt}
</p>

</div>

</motion.div>

</Link>

)

}