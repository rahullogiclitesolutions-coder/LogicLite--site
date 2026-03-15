"use client"

import { useEffect, useState } from "react"

export default function ReadingProgress(){

const [width,setWidth] = useState(0)

useEffect(()=>{

const handleScroll = () => {

const scrollTop = window.scrollY
const docHeight = document.body.scrollHeight - window.innerHeight
const progress = (scrollTop / docHeight) * 100

setWidth(progress)

}

window.addEventListener("scroll",handleScroll)

return ()=> window.removeEventListener("scroll",handleScroll)

},[])

return(

<div className="fixed top-0 left-0 w-full h-1 z-[999] bg-transparent">

<div
className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
style={{width:`${width}%`}}
/>

</div>

)

}