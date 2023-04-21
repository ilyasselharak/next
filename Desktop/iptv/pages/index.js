import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Package from "@/components/Package";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import {BsFillCloudDownloadFill} from "react-icons/bs"
import {MdBackup,MdOutlineSupportAgent} from "react-icons/md"
import {FcSalesPerformance} from "react-icons/fc"
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import { useEffect, useState } from "react";
import Pay from "@/components/Pay";


export default function Home() {
  
  const [num, setNum] = useState(0);
  const [pay,setPay] = useState(false)

  const fun=()=>{
    setPay(!pay)
  }
  const [days,setDays]=useState(0)
  const [hours,setHours]=useState(0)
  const [minutes,setMinutes]=useState(0)
  useEffect(()=>{
    const interval = setInterval(()=>{
      const target = new Date("04/21/2023 22:59:59")
      const now = new Date()
      const difference = target.getTime() - now.getTime()
      const d = Math.floor(difference/(1000*60*60*24))
      const h = Math.floor(difference % (1000 * 60*60*24)/(1000*60*60))
      const m = Math.floor(
        (difference % (1000*60*60)/(1000*60))
      )
      setHours(h)
      setDays(d)
      setMinutes(m)

    }, 1000)
    return () => clearInterval(interval)
  },[])
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(()=>{
    setNum(randomNumberInRange(20, 50))
  },[])

  return (
    <>
    <Header msg={fun}/>
    <div className="top-20 sm:w-[730px] xl:w-full md:w-full 2xl:w-ful lg:w-full w-[600px] xl:top- right-0 relative">
      <div className={`bg-white h-[80%] w-[84%] left-[10%] fixed z-[1] rounded-xl ${pay ? "" : "hidden"}`}><Pay msg={fun}/></div>
    <Swiper style={{"z-index": "0"}}
    autoplay={{
      delay: 6000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
      slidesPerView={1}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
      <div className="h-96 bg2  bg-cover bg-center">
    <div className="text-white xl:w-[60%] xl:pt-[5%] pt-[10%] sm:pt-[10%] pl-[4%]">
    <h1 className="pb-2 border-b border-red-500 w-fit mb-2">BEST IPTV PROVIDER</h1>
    <div className="xl:text-4xl text-2xl pb-2">TAKE IPTV SUBSCRIPTION FROM THE BEST SERVER SELLER AND BE IN CONTACT</div>
    <div className="text-xl">ALL DEVICES ARE SUPPORTED</div>
    <button className="rounded-md text-xl p-2 mt-2 bg-blue-600 text-white" >Shop iptv</button>
    </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-96 bg1  bg-cover bg-center">

    <div className="text-white xl:w-[60%] xl:pt-[5%] pt-[10%] sm:pt-[10%] pl-[4%]">
    <h1 className="pb-2 border-b border-red-500 w-fit mb-2">Luxury IPTV</h1>
    <div className="xl:text-4xl text-2xl pb-2">+ 242,000 Live & VODs</div>
    <div className="text-xl">FUll HD, 4K ULTRA HD ...</div>
    <button className="rounded-md text-xl p-2 mt-2 bg-red-600 text-white">See channels</button>
    </div>
    </div> 
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-96 bg3  bg-cover bg-center">
   
    <div className="text-white xl:w-[60%] xl:pt-[5%] sm:pt-[10%] pt-[10%] pl-[4%]">
    <h1 className="pb-2 border-b border-red-500 w-fit mb-2">INSTANT ACTIVATION</h1>
    <div className="xl:text-4xl text-2xl pb-2">HELP YOU ACTIVATE AND RUN YOU SERVER</div>
    <div className="text-xl">24/7 SUPPORT</div>
    <button className="rounded-md text-xl p-2 mt-2 bg-[#8A2BE2] text-white">Contact us</button>
    </div>
    </div> 
      </SwiperSlide>
    </Swiper>
    
    <div className="text-red-700 text-center text-6xl py-6">Why Subscribe to Our Service</div>
    <div className="px-4">
    <div className=" text-center text-xl pt-2">One of The best subscriptions service with more up to 19999 channels and more than 99999 Movies and tv shows.</div>
    <div className=" text-center text-xl pt-2">When you use our IPTV server You will be able to watch TV channels, movies, TV shows, sports, and documentaries from all over the world, shop IPTV now, and enjoy with our server.</div>
    </div>
    <div className=" grid justify-around gap-3 text-lg text-center xl:grid-cols-3 sm:grid-cols-2 xl:px-72 sm:32 py-16">
      <div className="flex flex-col items-center justify-center">
      <Image className="rounded-md wx-auto my-6" src="/movie.jpg" width={200} height={130}/>
      <div>
      <p>All Premium TV Channels WorldWide FHD and 4K Sports, News, Movies, Documentary, Movie channels, and more</p>
      <strong>Live TV Channels</strong>
      </div>
      </div>
     <div className="flex flex-col items-center justify-end">
     <Image className="rounded-md wx-auto my-6" src="/movie2.jpg" width={200} height={130}/>
     <div>
     <p>We have a big list of VOD & Movies in multiple languages English, French, German, Italian, Spanish and Arabic etc…</p>
     <strong>Movies</strong>
     </div>
     </div>
      <div className="flex flex-col items-center justify-center">
      <Image className="rounded-md wx-auto my-6 -[150px]" src="/movie1.jpg" width={200} height={130} />
      <div>
      <p>We have the best TV Shows of all time for you, which are updated regularly. You may also request a TV Series or TV Shows.</p>
      <strong>TV Shows</strong>
      </div>
      </div>
      
    </div>
    <div className=" text-xl">
      <div className=" text-center my-4">
      <div className="text-red-700 text-center text-6xl py-6">Overall Features</div>
      <span className="inline">Our revolutionary Cloud solution is powerful, simple, and surprisingly affordable.</span>
      </div>
      <div className="grid md:grid-cols-2 py-4 gap-2 gap-x-4 md:px-52 sm:px-48 xl:px-72 2xl:px-80 lg:px-64 px-32">
        <div>
          <BsFillCloudDownloadFill className="mx-auto my-0" size={50} color="gold"/>
          <h2>Auto Update</h2>
          <p>our Services and channels as well as our panel are automatically update once a week.</p>
        </div>
        <div>
          <FcSalesPerformance className="mx-auto my-0" size={50} color="gold"/>
          <h2>Sales Systems</h2>
          <p>All sales steps are done automatically.From payment to service delivery.There is no human factor at this page.</p>
        </div>
        <div>
        <MdBackup className="mx-auto my-0" size={50}  color="gold"/>
        <h2>Daily Backup</h2>
        <p>All IPTV System infrastructure provided to customers are automatically backed up every 5 minutes.</p>
        </div>
        <div>
        <MdOutlineSupportAgent className="mx-auto my-0" size={50}  color="gold"/>
        <h2>Free Support</h2>
        <p>Our support is available 24 hours a day without any interruption through online chat and ticket creation.</p>
        </div>
      </div>
    </div>
    <Swiper 
    style={{"z-index": "0"}}
        spaceBetween={20}
        slidesPerView={4}
        className="text-center text-xl my-8 bg-gray-400 border-white border"
      >
        <SwiperSlide className="text-white p-4">
          <div className="text-2xl text-">
            ONLINE

          </div>
          <div>
            <span>{num}</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white p-4">
          <div className="text-2xl">
            Channels
          </div>
          <div>
            <span>+242,000</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white p-4">
        <div className="text-2xl">
            Clients
          </div>
          <div>
            <span>197</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white p-4">
          <div className="text-2xl">
            Days
          </div>
          <div>
            <span>2</span>
          </div></SwiperSlide>
        
      </Swiper>
    <div className="text-red-700 text-center text-6xl pb-4" id="price">Pricing</div>
    <div className=" text-center text-xl pb-2">Choose Your IPTV SUBSCRIPTION</div>
    
      <div className=" pl-4 text-center text-xl border border-black p-4 m-4 rounded-md"><span className="text-rose-400 pr-4">DISCOUNT:  </span>{days}DAYS:{hours}HOURS:{minutes}MINUTES</div>
    <div className=" grid px-8 pb-5 gap-4 xl:grid-cols-4 sm:grid-cols-2 justify-around">
      <Package msg={fun} month={1} lastPrice={"14.99€ "} price={"10.99"}/>
      <Package msg={fun} month={3} lastPrice={"23.99€ "} price={"19.99"} />
      <Package msg={fun} month={6} lastPrice={"39.99€ "} price={"34.99"} />
      <Package msg={fun} month={12} lastPrice={"59.99€ "} price={"49.99"}/>
    </div>
    
    <div className="grid my-12 md:grid-cols-2 gap-x-6 grid-cols-1 md:px-52 sm:px-48 xl:px-72 2xl:px-80 lg:px-64 px-32">
      <div className="flex flex-col gap-4 mb-12">
        
        <div className="text-red-700 text-4xl py-8">
          <span>OUR EXPERIENCE</span>
          <div className="w-16 bg-red-400 h-1"></div></div>
          <div>
        <p>
        The most powerful and fastest BUY IPTV servers for all modern devices and all m3u & txt & cfg & WebTV extensions for Smartphones, Smart TV, Android, MAG, Enigma, TV Box, Kodi, Computer, and Tablet…. buy best IPTV, we provide you with more than 18,500 premium & normal Live TV Channels. In Addition to, more than 89,000 VOD (Movies & TV Shows).
        </p>
        <p>
        Second, there are no extra costs, just the Subscription Fees. and more than 96.377 Customers trust us and all over the world, join us now.
        </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2"><h1 className="text-gray-800 text-xl font-bold">How to watch IPTV Service?​</h1>
<p>Watch our iptv package on all your devices, after buy iptv you can use on your TV, android box, mobile phone, mag box and tablets…</p>

        </div>
        <div className="flex flex-col gap-2"><h1 className="text-gray-800 text-xl font-bold">What is our Quality servers?​</h1>
<p>We are first the best service provider on internet, and we provide no freezing technology with 99% uptime.</p>

        </div>
        <div><h1 className="text-gray-800 text-xl font-bold">Do you have problem?​</h1>
<p>We are here to help you 24/7, feel free to contact our technical support team.</p>

        </div>
        <div className="flex flex-col gap-2"><h1 className="text-gray-700 text-xl font-bold">What is IPTV Reseller Solution?​</h1>
<p>try our Buy IPTV reseller solution and make money with us, get your own Buy IPTV reseller panel, and manage your customers easily with only some clicks!

</p>

        </div>
      </div>
    </div>
    <h1 className="text-red-700 text-center text-6xl pb-12">Happy Client</h1>
    <div className=" grid md:px-36 justify-around xl:grid-cols-4 sm:grid-cols-2 text-center mb-12">
      
      <div className="flex flex-col items-center text-xl">Artur Siemens<Image className="rounded-md mt-4" src="/whatsapp1.png" width={200} height={300}/></div>
      <div  className="flex flex-col items-center  text-xl">Marc Goschke
      <Image className="rounded-md mt-4" src="/whatsapp2.png" width={200} height={300}/>
      </div>
      <div className="flex flex-col items-center text-xl">Jhon
      <Image className="rounded-md mt-4" src="/whatsapp1.png" width={200} height={300} />
      </div>
      <div className="flex flex-col items-center text-xl">Mark
      <Image className="rounded-md mt-4" src="/whatsapp1.png" width={200} height={300} />
      </div>
    </div>
    <div className="grid my-12 md:grid-cols-2 gap-x-6 grid-cols-1 px-16" id="about">
      <div className="flex flex-col gap-4 mb-12">
        
        <div className="text-red-700 text-4xl py-8">
          <span>ABOUT OUR SERVICE</span>
        </div>
        <div className="text-black">
        <div className=" text-xl pb-4">UPGRADE TO RELIABLE AND ENJOY WATCHING TV</div>
          <ul>
          <li>Get +18,500 Channels & Movies</li>
          <li>Up to +89,000 Movies & TV Shows</li>
          <li>Get Unlimited Access 24/24 7/7</li>
          <li>Watch TV on all your devices!</li>
          <li>No Hardware Needed</li>
          <li>No bandwidth Limits</li>
          <li>Stable Server and Fast</li>
          <li>Wide list of worldwide Channels</li>
          </ul>
        
        </div>
      </div>
      <div className="flex justify-center m-auto gap-4">
      <Image src="/tv.jpg" className="rounded-md" width={200} height={300}/>

        </div>
      
    </div>
    <Swiper 
    style={{"z-index": "0"}}
        spaceBetween={20}
        slidesPerView={4}
        >
      
        <SwiperSlide>
          <Image src="/netflix.png" width={200} height={300}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/disney.png" width={200} height={300}/>
          
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/bein.png" width={200} height={300}/>
        
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/prime.png" width={200} height={300}/>

        </SwiperSlide>
        <SwiperSlide>
        <Image src="/hbo.png" width={200} height={300} />

        </SwiperSlide>
        
      </Swiper>
    <Footer/>
    </div>
    </>
  )
}