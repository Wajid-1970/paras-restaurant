import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";
import MenuItem  from "@/Components/MenuItem";
import { CTASection } from "@/Components/CTASection";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";





export default function Home() {
  return (

    <main>
      <HeroSection/>
      <Navbar/>
      <MenuItem/>
      <CTASection/>
      <Contact/>
      <Footer/>
    </main>

  )
}
