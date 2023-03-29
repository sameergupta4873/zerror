import SwiperS from './components/Swiper'
import InfinteSlider from './components/InfinteSlider/InfinteSlider'
import Link from 'next/link'
import products from '../data/products'
import { useState } from 'react'
import FadeIn from './components/gsap/FadeIn'
import Hero from './hero'
import Footer from './components/Footer'


export default function Home() {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <>
      
      {/* <div className="h-[80vh]">
        <img className='h-[87vh]' src='https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/09/2.jpg.webp' width={"100%"} />
        <h1 className='text-[3.5rem] tracking-wider font-bold text-white absolute  top-[15rem] left-[7rem]'>India’s Most Trusted</h1>
        <h1 className='text-[3.5rem] tracking-wider font-bold text-white absolute top-[20rem] left-[7rem]'>& Largest Brand</h1>
        <h1 className='text-[3.5rem] tracking-wider font-bold text-white absolute top-[25rem] left-[7rem]'>Of Spices.</h1>

      </div> */}


      <Hero/>
      <div className='my-[8rem]'>
        <div className='w-[80%] mx-auto py-[1rem]'>
          <p className='text-[2rem] tracking-wider text-center leading-[4.3rem]'>
            Welcome to <span className='font-bold border-b-[0.4rem] border-black'>AADESH MASALA</span> , 
            an Indian spices brand that is dedicated to bringing 
            the <span className='font-bold border-b-[0.4rem] border-black'>FLAVOURS</span> of 
            traditional <span className='font-bold border-b-[0.4rem] border-black'>INDIAN CUISINE</span> to 
            every <span className='font-bold border-b-[0.4rem] border-black'>HOUSEHOLD</span> in 
            India. At Aadesh Masala, we believe 
            that <span className='font-bold border-b-[0.4rem] border-black'>SPICES</span> are 
            the <span className='font-bold border-b-[0.4rem] border-black'>ESSENCE OF INDIAN COOKING</span> . 
            They not only add flavor to our dishes but also provide 
            numerous <span className='font-bold border-b-[0.4rem] border-black'>HEALTH BENEFITS</span> . 
            Our mission is to provide 
            the <span className='font-bold border-b-[0.4rem] border-black'>BEST QUALITY SPICES</span> to 
            our customers, ensuring that every meal 
            is <span className='font-bold border-b-[0.4rem] border-black'>FULL OF FLAVOURS</span> and 
            packed with <span className='font-bold border-b-[0.4rem] border-black'>NUTRITION</span> .
          </p>
        </div>
        <div class="flex justify-between mb-[2rem] mx-[3rem] mt-[5rem]">
          <h1 class="text-[2.7rem] font-bold mb-[1rem]">Products You Will Love</h1>
        </div>
        <div class="w-full flex px-4 text-center items-center justify-center">
          <div class="border z-20 bg-white border-gray-300 absolute left-6
           inline-block rounded p-3 sm:mb-12 mr-[-1rem] sm:mr-0 transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400" onClick={() => {
              if (index <= 0) {
                setIndex(8);
              } else {
                setIndex(index - 4)
              }
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
          </div>
          <FadeIn vars={{ y: -100 }}>
            <Link class={`h-30 block mb-4 mr-20 ml-20 py-20 px-10 rounded-[25px]`} href={products[index].href} style={{backgroundColor:products[index].bg}}>
              <img class="h-[20rem] w-[18rem] transition duration-500 hover:scale-110" src={'/' + products[index].imageSrc} alt="" />
            </Link>
          </FadeIn>
          <FadeIn vars={{ y: -100 }}>
            <Link class={`h-30 block mb-4 mr-20 py-20 px-10 rounded-[25px]`} href={products[index + 1].href} style={{backgroundColor:products[index+1].bg}}>
              <img class="h-[20rem] w-[18rem] transition duration-500 hover:scale-110" src={'/' + products[index + 1].imageSrc} alt="" />
            </Link>
          </FadeIn>
          <FadeIn vars={{ y: -100 }}>
            <Link class={`h-30 block mb-4 mr-20 py-20 px-10 rounded-[25px]`} href={products[index + 1].href} style={{backgroundColor:products[index+2].bg}}>
              <img class="h-[20rem] w-[18rem] transition duration-500 hover:scale-110" src={'/' + products[index + 2].imageSrc} alt="" />
            </Link>
          </FadeIn>

          <div class="inline-block bg-white absolute border border-gray-300 right-7 rounded p-3 transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400" onClick={() => {
            if (index >= 8) {
              setIndex(0);
            } else {
              setIndex(index + 4)
            }
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>

          </div>

        </div>
        <div className='w-[10rem] mx-auto my-5'>
          <Link href="/products" class="bg-black text-white p-3 rounded w-[10rem] flex pl-9">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>

          </Link>
        </div>
      </div>
      <div class="flex justify-between my-[3rem] mx-[8rem]">
        <h1 class="text-[2.7rem] font-bold">Recipes For Your Soul</h1>
        {/* <button class="bg-black text-white px-[1.5rem] rounded-md">Visit Everest’s Kitchen</button> */}
      </div>
      <SwiperS />
      <div className='mt-[5rem]'>
        <InfinteSlider />
      </div>
      <Footer/>
    </>
  )
}
