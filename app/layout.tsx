import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://logiclitesolutions.in"),
  title: "LogicLite Solutions",
  description: "Digital engineering, software development and scalable growth systems.",
  keywords: [
    "software development",
    "web development",
    "digital marketing",
    "Next.js development",
    "SaaS development"
  ],
  openGraph: {
    title: "LogicLite Solutions",
    description: "Engineering growth for modern businesses.",
    url: "https://logiclitesolutions.in",
    siteName: "LogicLite",
    type: "website"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}