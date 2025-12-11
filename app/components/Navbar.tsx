import Link from 'next/link'
import Logo from "@/app/assets/logo.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const router = useRouter()
  return (
   <>
    <nav className='flex justify-between items-center px-[2rem] py-[1.5rem] ' >
      <div >
        <Image alt='Vyomgarud' className='w-[100%]  cursor-pointer '  src={Logo} onClick={()=>{
          router.push("/")
        }}  /> 
      </div>
      <div className='flex gap-[2rem] items-center text-[1.3rem]  ' >
        <Link href={"#about"} className='hover:scale-[1.02] transition-all hover:text-[#ff9d00] font-semibold ' >About</Link>
        <Link href={"#services"} className='hover:scale-[1.02] transition-all hover:text-[#ff9d00] font-semibold ' >Services</Link>
        <Link href={"#contact"} className='hover:scale-[1.02] transition-all hover:text-[#ff9d00] font-semibold ' >Contact</Link>
      </div>
      <div className='hover:scale-[1.03] transition-all duration-300 items-center ' >
        <Link href={"#contact"} className='bg-[#ff7b00] text-[1.2rem] font-semibold px-[0.7rem] py-[0.2rem] rounded-[0.3rem]  ' >Get in touch</Link>  
      </div>
    </nav>
   </>
  )
}

export default Navbar