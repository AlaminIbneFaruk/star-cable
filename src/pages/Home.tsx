import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Hero from "@/sections/Hero"
import TrustBar from "@/sections/TrustBar"
import Benefits from "@/sections/Benefits"
import Packages from "@/sections/Packages"
import Channels from "@/sections/Channels"
import Sports from "@/sections/Sports"
import Internet from "@/sections/Internet"
import Devices from "@/sections/Devices"
import Coverage from "@/sections/Coverage"
import Testimonials from "@/sections/Testimonials"
import Stats from "@/sections/Stats"
import About from "@/sections/About"
import FAQ from "@/sections/FAQ"
import Contact from "@/sections/Contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Benefits />
      <Packages />
      <Channels />
      <Sports />
      <Internet />
      <Devices />
      <Coverage />
      <Testimonials />
      <Stats />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
