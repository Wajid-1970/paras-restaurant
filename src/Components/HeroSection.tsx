import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

export function HeroSection() {
    return (
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/rest-background.jpg')" }}>
        <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to Paras Restaurant & Cafe</h1>
            <p className="mt-4 text-lg md:text-xl">Experience delicious dining and quality service.</p>
          </div>
        </div>
      </section>
    );
  }
  
export default HeroSection;