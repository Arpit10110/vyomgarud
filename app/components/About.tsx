import Image from "next/image"
import AboutImage from "@/app/assets/about.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
    useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 data-aos="fade-up" data-aos-duration="3000" className="text-4xl md:text-5xl text-center text-white font-bold mb-16 tracking-wide">
          About <span className="text-blue-500">VyomGarud</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div  data-aos="zoom-in-up" data-aos-delay="1000" className="w-full md:w-1/2 relative">
                <Image 
                  src={AboutImage} 
                  alt="About VyomGarud" 
                  className="w-full animate-float h-auto rounded-xl shadow-2xl relative z-10 "
                />
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1000" className="w-full md:w-1/2 flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-white text-center">Who We Are & What We Build</h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p className="flex gap-3">
                    <span className="text-blue-500 text-xl">✨</span>
                    <span>VyomGarud designs next-generation UAV systems that enable fast, reliable, and secure delivery of critical medical supplies. From blood and vaccines to emergency equipment, our drones close the accessibility gap for remote and underserved regions.</span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-blue-500 text-xl">✨</span>
                    <span>Our mission is to merge aerospace innovation with humanitarian impact — creating aerial logistics solutions that strengthen national healthcare infrastructure.</span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-blue-500 text-xl">✨</span>
                    <span>We also empower young engineers by providing hands-on opportunities, mentorship, and real-world exposure in UAV and aerospace development.</span>
                  </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About