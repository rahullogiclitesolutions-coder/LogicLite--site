"use client"

export default function BlogTags({posts,setFiltered}:any){

const tags = [...new Set(posts.flatMap((p:any)=>p.tags))]

function filter(tag:string){

const filtered = posts.filter((post:any)=>post.tags.includes(tag))

setFiltered(filtered)

}

return(

<div className="flex flex-wrap gap-4 justify-center mb-16">

<button
onClick={()=>setFiltered(posts)}
className="px-4 py-2 border border-white/10 rounded-lg"
>
All
</button>

{tags.map((tag:any)=>(
<button
key={tag}
onClick={()=>filter(tag)}
className="px-4 py-2 border border-white/10 rounded-lg hover:bg-white/10"
>
{tag}
</button>
))}

</div>

)

}