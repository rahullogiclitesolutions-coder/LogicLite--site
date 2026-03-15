"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

export default function PortalModal({
children,
onClose
}:{
children:React.ReactNode
onClose:()=>void
}){

const [mounted,setMounted] = useState(false)

useEffect(()=>{
setMounted(true)

document.body.style.overflow="hidden"

return ()=>{
document.body.style.overflow="auto"
}

},[])

if(!mounted) return null

return createPortal(

<div className="fixed inset-0 z-[9999] flex items-center justify-center">

{/* background */}
<div
className="absolute inset-0 bg-black/80 backdrop-blur-sm"
onClick={onClose}
/>

{/* modal container */}
<div className="relative z-10 w-full max-w-xl mx-auto px-6">

{children}

</div>

</div>,

document.body

)

}