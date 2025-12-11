import React from 'react'
import Card from './Card';

const Products = () => {

 interface ProductCard {
  title: string;
  bullets: string[];
}

 const productsData: ProductCard[] = [
  {
    title: "Remote Operations Platform",
    bullets: [
      "Control drones remotely",
      "Live video feed",
      "Real-time telemetry",
      "Mission planning tools",
    ],
  },
  {
    title: "Fleet Management System",
    bullets: [
      "Global 4G/5G link",
      "MAVLink routing",
      "Fleet status view",
      "User roles & logs",
    ],
  },
  {
    title: "MAVLink Connectivity Module",
    bullets: [
      "Plug-and-play setup",
      "Standard MAVLink support",
      "Real-time drone data",
      "Signal fallback safety",
    ],
  }
];

  return (
    <section id="products" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl text-center text-white font-bold mb-16">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {productsData.map((product, index) => (
                <Card key={index+1} card={index+1} title={product.title} bullets={product.bullets} />
            ))}
        </div>
    </section>
  )
}

export default Products