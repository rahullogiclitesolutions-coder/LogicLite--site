export default function Clients(){

const clients=["Google","Amazon","Shopify","Microsoft","Slack"]

return(

<section>

<div className="container text-center">

<p className="text-gray-400 mb-8">
Trusted by growing companies
</p>

<div className="flex justify-center gap-10 text-gray-500">

{clients.map((c,i)=>(
<div key={i}>{c}</div>
))}

</div>

</div>

</section>

)

}