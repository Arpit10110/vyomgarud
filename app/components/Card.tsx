import React, { useEffect } from 'react'
import Image from 'next/image';
import Card1 from "@/app/assets/card1.png"
import Card2 from "@/app/assets/card2.png"
import Card3 from "@/app/assets/card3.png"
import AOS from "aos";
import "aos/dist/aos.css";
interface ProductCard {
  card: number;
  title: string;
  bullets: string[];
}

const Card = ({card, title, bullets}: ProductCard) => {
        useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <div data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:scale-105 transition-transform duration-300 w-[350px] ">
        <Image alt='product' src={card===1?Card1:card===2?Card2:Card3} className="w-full h-48 object-contain mb-4" />
        <h1 className="text-2xl font-bold text-white mb-4">{title}</h1>
        <ul className="text-gray-300 space-y-2 w-full">
            {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  {bullet}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Card