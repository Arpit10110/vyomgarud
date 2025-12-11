import Image from "next/image" 
import heroimage from "@/app/assets/hero-section.png"
import Link from "next/link"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HeroSection = () => {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col-reverse md:flex-row items-center gap-12 mt-16">
        <div data-aos="fade-up-right" className="w-full md:w-1/2 flex flex-col gap-6 items-start">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              VyomGarud <br/> <span className="text-3xl md:text-5xl text-blue-500">Military Grade UAVs</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg">
              Reliable, long-range drones engineered for precision and security. Built for defense, surveillance, and critical mission environments.
            </p> 
            <div className="flex flex-wrap gap-4 mt-4">
                <Link href="#services" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all border border-gray-700">
                  View Capabilities
                </Link>
                <Link href="#contact" className="px-6 py-3 bg-[#fe8700] hover:bg-[#e67600] text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-orange-500/20">
                  Request Demo
                </Link>
            </div>
        </div>
        <div data-aos="fade-up-left" className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
               <Image 
                 alt='Hero Section' 
                 src={heroimage} 
                 className="w-full h-auto object-contain drop-shadow-2xl animate-float"
                 priority
               />
            </div>
        </div>
    </section>
  )
}

export default HeroSection