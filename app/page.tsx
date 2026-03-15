import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import LogoCloud from "./components/LogoCloud"
import Stats from "./components/Stats"
import WhyChooseUs from "./components/WhyChooseUs"
import Services from "./components/Services"
import TechStack from "./components/TechStack"
import Process from "./components/Process"
import Testimonials from "./components/Testimonials"
import BlogPreview from "./components/BlogPreview"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Stats />
      <WhyChooseUs />
      <Services />
      <TechStack />
      <Process />
      <Testimonials />
      <BlogPreview />
      <CTA />
      <Footer />
    </main>
  )
}