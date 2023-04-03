import SwiperS from './components/Swiper'
import InfinteSlider from './components/InfinteSlider/InfinteSlider'
import Link from 'next/link'
import products from '../data/products'
import { useState } from 'react'
import Hero from './hero'
import ProductCarosuel from './components/ProductCarosuel'
import Menu from './components/Menu'


export default function Home() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Menu/>
      {/* <Hero /> */}
      <div className='bg-[#e0191a] pt-[5rem] pb-[5rem]'>
        <div className='w-[80%] mx-auto py-[1rem]'>
          <p className='text-[2rem] max-md:px-6 max-md:text-[1.25rem] max-md:leading-[2.2rem] max-sm:text-[1rem] max-sm:leading-[1.75rem] max-sm:px-2 tracking-wider text-center leading-[4.3rem] text-[#EBFE00]'>
            Welcome to <span className='font-bold border-b-[0.3rem] max-sm:border-b-[0.2rem] font border-[#EBFE00]'>AADESH MASALA</span> ,
            an Indian spices brand that is dedicated to bringing
            the <span className='font-bold border-b-[0.3rem] max-sm:border-b-[0.2rem] font border-[#EBFE00]'>FLAVOURS</span> of
            traditional <span className='font-bold border-b-[0.3rem] max-sm:border-b-[0.2rem] font border-[#EBFE00]'>INDIAN CUISINE</span> to
            every <span className='font-bold border-b-[0.3rem] max-sm:border-b-[0.2rem] font border-[#EBFE00]'>HOUSEHOLD</span> in
            India. At Aadesh Masala, we believe
            that <span className='font-bold border-b-[0.3rem] max-sm:border-b-[0.2rem] font border-[#EBFE00]'>SPICES</span> are
            the <span className='font-bold border-b-[0.3rem] max-sm:border-b-[0.2rem] font border-[#EBFE00]'>ESSENCE OF INDIAN COOKING</span>.
            They not only add flavor to our dishes but also provide
            numerous <span className='font-bold border-b-[0.3rem] max-sm:border-b-[0.2rem] font border-[#EBFE00]'>HEALTH BENEFITS</span>.
            Our mission is to provide
            the <span className='font-bold border-b-[0.3rem] max-sm:border-b-[0.2rem] font border-[#EBFE00]'>BEST QUALITY SPICES</span> to
            our customers, ensuring that every meal
            is <span className='font-bold border-b-[0.3rem] max-sm:border-b-[0.2rem] font border-[#EBFE00]'>FULL OF FLAVOURS</span> and
            packed with <span className='font-bold border-b-[0.3rem] max-sm:border-b-[0.2rem] font border-[#EBFE00]'>NUTRITION</span>.
          </p>
        </div>
      </div>
      <div className='px-36 max-sm:px-12'>
        <h1 className="text-[2.7rem] text-[#FFFFFF] font-bold py-7 max-md:text-[2rem] max-sm:text-[1.5rem] max-sm:py-0">Products You Will Love</h1>
      </div>
      <ProductCarosuel/>
      <div className='bg-[#e0191a] my-36 max-sm:my-16'>
        <SwiperS />
      </div>
    </div>
  )
}
