import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Package from "@/components/Package";
import Image from "next/image";
import bg1 from "public/bg1.jpg"
import bg2 from "public/bg2.jpg"
import bg3 from "public/bg3.jpg"
import img from "public/netflix.png"
import img1 from "public/disney.png"
import img2 from "public/bein.png"
import img3 from "public/prime.png"
import img4 from "public/hbo.png"
import wh1 from "public/whatsapp1.png"
import wh2 from "public/whatsapp2.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import { useEffect, useState } from "react";

export default function Home() {
  const [num, setNum] = useState(0);
  
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(()=>{
    setNum(randomNumberInRange(20, 50))
  })
  return (
    <>
    <Header />
    <Swiper
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
      <div className="h-96 w-full relative h-[100vh]">
    <Image src={bg2} className="h-[100%] absolute mix-blend-screen"/>
    <div className="text-white w-[56%] pt-[17%] pl-[4%]">
    <h1 className="pb-2 border-b border-red-500 w-fit mb-2">BEST IPTV PROVIDER</h1>
    <div className="text-4xl pb-2">TAKE IPTV SUBSCRIPTION FROM THE BEST SERVER SELLER AND BE IN CONTACT</div>
    <div className="text-xl">ALL DEVICES ARE SUPPORTED</div>
    <button className="rounded-md text-xl p-2 mt-2 bg-blue-600 text-white" >Shop iptv</button>
    </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-96 w-full relative h-[100vh]">
    <Image src={bg1} className="h-[100%] absolute mix-blend-screen"/>
    <div className="text-white w-[56%] pt-[17%] pl-[4%]">
    <h1 className="pb-2 border-b border-red-500 w-fit mb-2">Luxury IPTV</h1>
    <div className="text-4xl pb-2">+ 242,000 Live & VODs</div>
    <div className="text-xl">FUll HD, 4K ULTRA HD ...</div>
    <button className="rounded-md text-xl p-2 mt-2 bg-red-600 text-white">See channels</button>
    </div>
    </div> 
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-96 w-full relative h-[100vh]">
    <Image src={bg3} className="h-[100%] absolute mix-blend-screen"/>
    <div className="text-white w-[56%] pt-[17%] pl-[4%]">
    <h1 className="pb-2 border-b border-red-500 w-fit mb-2">INSTANT ACTIVATION</h1>
    <div className="text-4xl pb-2">HELP YOU ACTIVATE AND RUN YOU SERVER</div>
    <div className="text-xl">24/7 SUPPORT</div>
    <button className="rounded-md text-xl p-2 mt-2 bg-[#8A2BE2] text-white">Contact us</button>
    </div>
    </div> 
      </SwiperSlide>
    </Swiper>
    
    <div className="text-red-700 text-center text-4xl py-2">Why Subscribe to Our Service</div>
    <div className="px-4">
    <div className="text-white text-center text-xl pt-2">One of The best subscriptions service with more up to 19999 channels and more than 99999 Movies and tv shows.</div>
    <div className="text-white text-center text-xl pt-2">When you use our IPTV server You will be able to watch TV channels, movies, TV shows, sports, and documentaries from all over the world, shop IPTV now, and enjoy with our server.</div>
    </div>
    <Swiper 
        spaceBetween={20}
        slidesPerView={3}
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
    <div className="text-red-700 text-center text-4xl pb-4">Pricing</div>
    <div className="text-white text-center text-xl pb-2">Choose Your IPTV SUBSCRIPTION</div>
    <div className=" grid px-8 pb-5 gap-3 grid-cols-4 justify-around">
      <Package month={"1 Months"} price={"10.99€"} url={"product/OneMonth"}/>
      <Package month={"3 Months"} price={"19.99€"} url={"product/OneMonth"}/>
      <Package month={"6 Months"} price={"34.99€"} url={"product/OneMonth"}/>
      <Package month={"12 Months"} price={"49.99€"} url={"product/OneMonth"}/>
    </div>
    
    <h1 className="text-red-700 text-center text-4xl">Happy Client</h1>
    <div className="text-white flex justify-around gap-2 p-4 text-center">
      
      <Image className="rounded-md" src={wh1} width={200} />
      <Image className="rounded-md" src={wh2} width={200} />
      <Image className="rounded-md" src={wh2} width={200} />
      <Image className="rounded-md" src={wh2} width={200} />
    </div>
    <Swiper 
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image src={img}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img1}/>
          
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img2}/>
        
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img3} />

        </SwiperSlide>
        <SwiperSlide>
        <Image src={img4} />

        </SwiperSlide>
        
      </Swiper>
    <Footer/>
    </>
  )
}
