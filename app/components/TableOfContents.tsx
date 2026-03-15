"use client"

export default function TableOfContents({content}:any){

const headings = content
.split("\n")
.filter((line:string)=>line.startsWith("###"))

return(

<div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">

<h4 className="font-semibold mb-4">
Contents
</h4>

<ul className="space-y-3 text-sm text-gray-400">

{headings.map((heading:string,i:number)=>{

const text = heading.replace("### ","")

return(
<li key={i}>
{text}
</li>
)

})}

</ul>

</div>

)

}