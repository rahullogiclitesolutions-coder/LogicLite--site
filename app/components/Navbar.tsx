"use client"

import Link from "next/link"

export default function Navbar() {

return (

<header className="fixed w-full z-50 top-0">

<div className="container mx-auto px-6">

<div className="flex justify-between items-center mt-6 px-6 py-4 
backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl">

{/* Logo */}

<div className="text-xl font-bold gradient-text">
LogicLite
</div>

{/* Navigation */}

<nav className="flex gap-8 text-sm text-gray-300">

<Link href="/">Home</Link>

<Link href="/services">Services</Link>

<Link href="/blog">Blog</Link>

<Link href="/careers">Careers</Link>

<Link href="/contact">Contact</Link>

</nav>

{/* CTA */}

<Link
href="/contact"
className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition"
>
Book Call
</Link>

</div>

</div>

</header>

)

}