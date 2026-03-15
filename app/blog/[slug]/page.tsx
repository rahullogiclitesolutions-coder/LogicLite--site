import { posts } from "../../../lib/posts"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ReadingProgress from "../../components/ReadingProgress"
import TableOfContents from "../../components/TableOfContents"

export default function BlogArticle({params}:any){

const post = posts.find((p)=>p.slug===params.slug)

if(!post){
return(
<div className="p-20 text-center text-white">
Article not found
</div>
)
}

const words = post.content.split(" ").length
const readingTime = Math.ceil(words/200)

const related = posts.filter(p=>p.slug!==post.slug).slice(0,2)

return(

<main className="bg-[#050505] text-white min-h-screen">

<ReadingProgress/>

<Navbar/>

{/* HERO */}

<section className="pt-32 pb-16 text-center px-6">

<img
src={post.image}
className="w-full max-w-4xl mx-auto rounded-xl mb-10"
/>

<h1 className="text-5xl font-bold max-w-3xl mx-auto">
{post.title}
</h1>

<p className="text-gray-400 mt-6">
{post.author} • {post.date} • {readingTime} min read
</p>

</section>


{/* ARTICLE LAYOUT */}

<section className="max-w-6xl mx-auto grid md:grid-cols-[250px,1fr] gap-16 px-6 pb-32">

{/* SIDEBAR */}

<div className="hidden md:block sticky top-32 h-fit">

<TableOfContents content={post.content}/>

</div>


{/* ARTICLE */}

<article className="max-w-3xl">

<div className="prose prose-invert max-w-none text-lg leading-relaxed">

{post.content.split("\n").map((p,i)=>(
<p key={i}>{p}</p>
))}

</div>

</article>

</section>


{/* RELATED POSTS */}

<section className="px-6 pb-32">

<div className="max-w-5xl mx-auto">

<h3 className="text-3xl font-bold mb-10">
Related Articles
</h3>

<div className="grid md:grid-cols-2 gap-10">

{related.map(post=>(
<a key={post.slug} href={`/blog/${post.slug}`}>

<div className="border border-white/10 rounded-xl overflow-hidden">

<img
src={post.image}
className="w-full h-40 object-cover"
/>

<div className="p-6">

<h4 className="font-semibold text-lg">
{post.title}
</h4>

<p className="text-gray-400 mt-3 text-sm">
{post.excerpt}
</p>

</div>

</div>

</a>
))}

</div>

</div>

</section>

<Footer/>

</main>

)

}