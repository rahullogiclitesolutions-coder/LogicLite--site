import Link from "next/link"
import { FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer() {

const linkedinUrl = "https://in.linkedin.com/company/logiclite-solutions"   // ← change
const email = "info@logiclitesolutions.in"                          // ← change

return (
<footer className="border-t border-white/10 py-14">

<div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">

{/* BRAND */}

<div>

<div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
LogicLite
</div>

<p className="text-gray-500 leading-7">
Digital marketing, web development, software delivery, and staff
augmentation for growth-focused companies.
</p>

{/* SOCIAL ICONS */}

<div className="flex items-center gap-4 mt-6">

<a
href={linkedinUrl}
target="_blank"
className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-lg hover:bg-white/5 transition"
>

<FaLinkedin size={18} />

</a>

<a
href={`mailto:${email}`}
className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-lg hover:bg-white/5 transition"
>

<FaEnvelope size={18} />

</a>

</div>

</div>


{/* SERVICES */}

<div>

<h4 className="font-semibold mb-4">Services</h4>

<div className="space-y-3 text-gray-400">

<div>Digital Marketing</div>
<div>Web Development</div>
<div>Software Development</div>
<div>Staff Augmentation</div>

</div>

</div>


{/* COMPANY */}

<div>

<h4 className="font-semibold mb-4">Company</h4>

<div className="space-y-3 text-gray-400">

<Link href="/blog">Blog</Link>
<div className="block" />

<Link href="/careers">Careers</Link>
<div className="block" />

<Link href="/contact">Contact</Link>

</div>

</div>


{/* CONTACT */}

<div>

<h4 className="font-semibold mb-4">Contact</h4>

<div className="space-y-3 text-gray-400">

<div>{email}</div>
<div>Global delivery model</div>
<div>Available for new projects</div>

</div>

</div>

</div>


{/* COPYRIGHT */}

<div className="container mx-auto px-6 mt-10 pt-8 border-t border-white/10 text-sm text-gray-500">

© 2026 LogicLite Solutions. All rights reserved.

</div>

</footer>
)
}