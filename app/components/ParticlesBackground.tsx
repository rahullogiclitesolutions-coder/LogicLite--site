"use client"

import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useCallback } from "react"

export default function ParticlesBackground(){

const particlesInit = useCallback(async (engine:any)=>{
await loadSlim(engine)
},[])

return(

<Particles
id="tsparticles"
init={particlesInit}
options={{
background:{color:"transparent"},
fpsLimit:60,
particles:{
number:{value:40},
size:{value:3},
move:{enable:true,speed:1},
opacity:{value:0.3}
}
}}
className="absolute inset-0"
/>

)
}