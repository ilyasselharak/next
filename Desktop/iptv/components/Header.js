import Image from 'next/image'
import Link from 'next/link'
import logo from "public/logo.png"
const Header = () => {
  return (
    <div className='flex items-center bg-mycustomcolor border-b border-red-400 justify-around'>
      <div className='flex text-white text-2xl items-center'>
        IP<Image src={logo} width={70} height={70}/>
      </div>
      <ul className='flex gap-4'>
        <li><Link href={'/'} >HOME</Link></li>
        <li><Link href={'/blog'}>BLOG</Link></li>
        <li><Link href={'/about'}>ABOUT</Link></li>
        <li><Link href={'/contact'}>CONTACTUS</Link></li>
        <li><Link href={'/business'}>BUSINESS</Link></li>
        <li><Link href={'/business'}>CART</Link></li>
      </ul>
    </div>
  )
}

export default Header