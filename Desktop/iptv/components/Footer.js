import Image from 'next/image'
import React from 'react'
import  bg  from 'public/bg.png'
import logo from "public/logo.png"
import {FaInstagram,FaFacebook,FaTwitter} from "react-icons/fa"
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-black w-full h-72 relative '>
        
        <Image src={bg} className='h-[100%] w-full absolute mix-blend-screen'/>
        <div className=' grid px-8 py-4 gap-3 grid-cols-4 justify-around text-white'>
        
            <div>
                <Image src={logo} width={120} height={70}/>
                <span>https://localhost://3000</span>
                <h1 className='text-center'>Follow us in </h1>
                <div className='flex gap-4'>
                <Link href="/"><FaInstagram/></Link>
                <Link href="/"><FaFacebook/></Link>
                <Link href="/"><FaTwitter/></Link>
                </div>
            </div>
            <div className='text-center flex flex-col gap-1'>
                <h1 className='text-2xl pb-2'>LINKS</h1>
                <p><Link href={'/'} >HOME</Link></p>
        <p><Link href={'/blog'}>BLOG</Link></p>
        <p><Link href={'/about'}>ABOUT</Link></p>
        <p><Link href={'/contact'}>CONTACTUS</Link></p>
        <p><Link href={'/business'}>BUSINESS</Link></p>
        <p><Link href={'/business'}>CART</Link></p>
            </div>
            <div className='text-center flex flex-col gap-1'>
                <h1 className='text-2xl pb-2'>Packages</h1>
                <p><Link href={'/'} >1 Month </Link></p>
        <p><Link href={'/pricing'}>3 Month</Link></p>
        <p><Link href={'/blog'}>6 Month</Link></p>
        <p><Link href={'/about'}>12 Month</Link></p>
            </div>
            <div>
                <h1>Contact US</h1>
                <p>Contact@email.com</p>
                <p>Whatsapp : Send Message</p>
            </div>
        </div>
   </div>
  )
}
Footer.layout = {
    headerHeight: 132,
    background: bg.src,
  }
export default Footer