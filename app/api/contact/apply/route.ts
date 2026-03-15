import { NextResponse } from "next/server"

export async function POST(req:Request){

const formData = await req.formData()

const name = formData.get("name")
const email = formData.get("email")
const jobTitle = formData.get("jobTitle") || formData.get("role")

if(!name || !email){

return NextResponse.json(
{message:"Missing fields"},
{status:400}
)

}

console.log({
name,
email,
jobTitle
})

return NextResponse.json({
message:"Application received"
})

}