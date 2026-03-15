"use client"

import { useState } from "react"

export default function BlogSearch({posts,setFiltered}:any){

const [query,setQuery] = useState("")

function handleSearch(value:string){

setQuery(value)

const filtered = posts.filter((post:any)=>
post.title.toLowerCase().includes(value.toLowerCase()) ||
post.tags.join(" ").toLowerCase().includes(value.toLowerCase())
)

setFiltered(filtered)

}

return(

<div className="max-w-xl mx-auto mb-16">

<input
type="text"
value={query}
onChange={(e)=>handleSearch(e.target.value)}
placeholder="Search articles..."
className="w-full px-6 py-4 rounded-lg bg-white/[0.03] border border-white/10 outline-none"
/>

</div>

)

}