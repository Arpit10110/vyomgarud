"use client"
import Link from 'next/link'
import Logo from "@/app/assets/logo.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <div className='shrink-0 cursor-pointer' onClick={() => router.push("/")}>
             <Image alt='Vyomgarud' src={Logo} className='h-12 w-auto' />
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link href="#about" className='text-gray-300 hover:text-[#ff9d00] transition-colors font-medium'>About</Link>
            <Link href="#services" className='text-gray-300 hover:text-[#ff9d00] transition-colors font-medium'>Services</Link>
            <Link href="#contact" className='text-gray-300 hover:text-[#ff9d00] transition-colors font-medium'>Contact</Link>
            <Link href="#contact" className='bg-[#fe8700] hover:bg-[#e67600] text-white px-5 py-2 rounded-lg font-semibold transition-all transform hover:scale-105'>
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-gray-300 hover:text-white focus:outline-none'>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden bg-gray-900 border-b border-gray-800'>
          <div className='px-4 pt-2 pb-6 space-y-2'>
            <Link href="#about" onClick={toggleMenu} className='block px-3 py-2 text-gray-300 hover:text-[#ff9d00] hover:bg-gray-800 rounded-md font-medium'>About</Link>
            <Link href="#services" onClick={toggleMenu} className='block px-3 py-2 text-gray-300 hover:text-[#ff9d00] hover:bg-gray-800 rounded-md font-medium'>Services</Link>
            <Link href="#contact" onClick={toggleMenu} className='block px-3 py-2 text-gray-300 hover:text-[#ff9d00] hover:bg-gray-800 rounded-md font-medium'>Contact</Link>
             <Link href="#contact" onClick={toggleMenu} className='block w-full text-center mt-4 bg-[#fe8700] hover:bg-[#e67600] text-white px-5 py-3 rounded-lg font-semibold transition-all'>
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar