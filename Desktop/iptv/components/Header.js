import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {FiMenu} from "react-icons/fi"
import {GrClose} from "react-icons/gr"


const Header = () => {
  const [open ,setOpen]= useState(false)
  return (
    <div className='top-0 left-0 z-[1] fixed w-full'>
    <div className='md:flex items-center bg-mycustomcolor border-b py-4 border-red-400 justify-around'>
      <div className='flex text-white text-2xl ml-2 items-center'>
        IP<Image src="/logo.png" width={70} height={70}/>
      </div>
      <div onClick={()=>setOpen(!open)} className='text-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      {open ? <GrClose/> :<FiMenu/>}
        
        
      </div>
      <ul id="navbar" className={`md:flex bg-mycustomcolor md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-412px]'}`}>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'/'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl ' >HOME</Link></li>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'/blog'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl '>BLOG</Link></li>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'/about'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl '>ABOUT</Link></li>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'/contact'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl '>CONTACTUS</Link></li>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'/business'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl '>BUSINESS</Link></li>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'/business'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl '>CART</Link></li>
        
      </ul>
      
    </div>
    </div>
  )
}

export default Header