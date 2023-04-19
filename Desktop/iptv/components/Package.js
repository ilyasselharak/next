import Link from 'next/link'
import React from 'react'

const Package = ({url,lastPrice,price, month}) => {
  return (
    <div>
        <div className="bg-red-800 text-white text-center rounded-lg py-2 pb-4">
        <div className=" border-b-2 py-1 border-red-200"><h1 className='text-2xl'>{month}</h1>
        <p>Sports, News, Series, Movies, Cartons</p>
        </div>
        
        <h1 className='py-2 border-b border-gray-500 w-[80%] m-auto text-xl'><span className='text-black'><del>{lastPrice}</del></span>{price}</h1>
        <div className="py-4 text-l flex flex-col gap-4 pb-6">
        
        <p>instant Activation!</p>
        <p>18900 Live Channels</p>
        <p>1 Month IPTV 24/7</p>
        <p>All Country Channels</p>
        <p>100 Gbps streaming speed</p>
        <p>Movies & TV Show included</p>
        <p>24/7 Technical Support</p>
        <p>Quality SD/HD/FHD/4K</p>
        <p>100% Stable Server</p>
        <p>Fast Delivery</p>
        </div>
        <Link href={url} className="bg-blue-900 text-white p-2 rounded-md">Buy Now</Link>

      </div>
    </div>
  )
}

export default Package