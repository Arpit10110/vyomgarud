"use client"
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeroMarquee from './components/HeroMarquee';
import About from './components/About';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const page = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <HeroMarquee/>
    <About/>
    <Products/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default page