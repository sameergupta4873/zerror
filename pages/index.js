import SwiperS from './components/Swiper'
import InfinteSlider from './components/InfinteSlider/InfinteSlider'
import Link from 'next/link'
import products from '../data/products'
import { useState } from 'react'
import Hero from './hero'


export default function Home() {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <>
      <Hero />
      <div className='bg-[#e0191a] pt-[5rem] pb-[5rem]'>
        <div className='w-[80%] mx-auto py-[1rem]'>
          <p className='text-[2rem] tracking-wider text-center leading-[4.3rem] text-[#EBFE00]'>
            Welcome to <span className='font-bold border-b-[0.3rem] font border-[#EBFE00]'>AADESH MASALA</span> ,
            an Indian spices brand that is dedicated to bringing
            the <span className='font-bold border-b-[0.3rem] font border-[#EBFE00]'>FLAVOURS</span> of
            traditional <span className='font-bold border-b-[0.3rem] font border-[#EBFE00]'>INDIAN CUISINE</span> to
            every <span className='font-bold border-b-[0.3rem] font border-[#EBFE00]'>HOUSEHOLD</span> in
            India. At Aadesh Masala, we believe
            that <span className='font-bold border-b-[0.3rem] font border-[#EBFE00]'>SPICES</span> are
            the <span className='font-bold border-b-[0.3rem] font border-[#EBFE00]'>ESSENCE OF INDIAN COOKING</span>.
            They not only add flavor to our dishes but also provide
            numerous <span className='font-bold border-b-[0.3rem] font border-[#EBFE00]'>HEALTH BENEFITS</span>.
            Our mission is to provide
            the <span className='font-bold border-b-[0.3rem] font border-[#EBFE00]'>BEST QUALITY SPICES</span> to
            our customers, ensuring that every meal
            is <span className='font-bold border-b-[0.3rem] font border-[#EBFE00]'>FULL OF FLAVOURS</span> and
            packed with <span className='font-bold border-b-[0.3rem] font border-[#EBFE00]'>NUTRITION</span>.
          </p>
        </div>
        <div className="flex justify-between mb-[2rem] mx-[5rem] mt-[10rem] w-[90%]">
          <h1 className="text-[2.7rem] text-[#FFFFFF] font-bold mb-[0rem] ml-[5rem]">Products You Will Love</h1>
          <div className='flex'>
            <div className="border-[0.2rem] mr-7 p-4 bg-[#e0191a] border-[#FFFFFF] rounded-full text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#e0191a]" onClick={() => {
              if (index <= 0) {
                setIndex(8);
              } else {
                setIndex(index - 4)
              }
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>
            </div>
            <div className="border-[0.2rem] mr-5 p-4 bg-[#e0191a] border-[#FFFFFF] rounded-full w-[rem] flex text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#e0191a]" onClick={() => {
              if (index >= 8) {
                setIndex(0);
              } else {
                setIndex(index + 4)
              }
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-[90%] ml-[7%] flex px-5 items-center justify-between">
          <Link key={products[index].id} className={`h-30 block mb-4 mr-5 pt-16 p-5 rounded-[25px]`} href={products[index].href} style={{ backgroundColor: products[index].bg }}>
            <img className="h-[15rem] w-[13rem] mx-[auto] transition duration-500 hover:scale-110" src={'/' + products[index].imageSrc} alt="" />
            <p className='text-md flex justify-between font-extrabold mt-6'>{products[index].name}    <span className='mr-3'>{products[index].size[0]}g{products[index].size[1] && ','} {products[index].size[1]}{products[index].size[1] && 'g'}</span></p>
            <div className='mt-4 flex justify-between w-[16rem]'>
              <p className='text-md flex font-extrabold'>
                <p className='mr-1'>
                  {products[index].price[0]}
                </p>
                <p>
                  {products[index].price[1] && '|'}
                </p>
                <p className='ml-1'>
                  {products[index].price[1]}
                </p>
              </p>
              <Link href={`/product/${products[index].id}`} className='px-3 py-1 pt-1 flex text-sm bg-[#e0191a] rounded-full text-[#FFFFFF] hover:bg-transparent hover:text-[#e0191a] border-2 border-transparent hover:border-[#e0191a]'>
                Details
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-3 my-[3px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </Link>
          <Link key={products[index + 1].id} className={`h-30 block mb-4 mr-5 pt-16 p-5 rounded-[25px]`} href={products[index + 1].href} style={{ backgroundColor: products[index + 1].bg }}>
            <img className="h-[15rem] w-[13rem] mx-[auto] transition duration-500 hover:scale-110" src={'/' + products[index + 1].imageSrc} alt="" />
            <p className='text-md flex justify-between font-extrabold mt-6'>{products[index + 1].name}    <span className='mr-3'>{products[index + 1].size[0]}g{products[index + 1].size[1] && ','} {products[index + 1].size[1]}{products[index + 1].size[1] && 'g'}</span></p>
            <div className='mt-4 flex justify-between w-[16rem]'>
              <p className='text-md flex font-extrabold'>
                <p className='mr-1'>
                  {products[index + 1].price[0]}
                </p>
                <p>
                  {products[index + 1].price[1] && '|'}
                </p>
                <p className='ml-1'>
                  {products[index + 1].price[1]}
                </p>
              </p>
              <Link href={`/product/${products[index+1].id}`} className='px-3 py-1 pt-1 flex text-sm bg-[#e0191a] rounded-full text-[#FFFFFF] hover:bg-transparent hover:text-[#e0191a] border-2 border-transparent hover:border-[#e0191a]'>
                Details
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-3 my-[3px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </Link>
          <Link key={products[index + 2].id} className={`h-30 block mb-4 mr-5 pt-16 p-5 rounded-[25px]`} href={products[index + 2].href} style={{ backgroundColor: products[index + 2].bg }}>
            <img className="h-[15rem] w-[13rem] mx-[auto] transition duration-500 hover:scale-110" src={'/' + products[index + 2].imageSrc} alt="" />
            <p className='text-md flex justify-between font-extrabold mt-6'>{products[index + 2].name}    <span className='mr-3'>{products[index + 2].size[0]}g{products[index + 2].size[1] && ','} {products[index + 2].size[1]}{products[index + 2].size[1] && 'g'}</span></p>
            <div className='mt-4 flex justify-between w-[16rem]'>
              <p className='text-md flex font-extrabold'>
                <p className='mr-1'>
                  {products[index + 2].price[0]}
                </p>
                <p>
                  {products[index + 2].price[1] && '|'}
                </p>
                <p className='ml-1'>
                  {products[index + 2].price[1]}
                </p>
              </p>
              <Link href={`/product/${products[index+2].id}`} className='px-3 py-1 pt-1 flex text-sm bg-[#e0191a] rounded-full text-[#FFFFFF] hover:bg-transparent hover:text-[#e0191a] border-2 border-transparent hover:border-[#e0191a]'>
                Details
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-3 my-[3px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </Link>
          <Link key={products[index + 3].id} className={`h-30 block mb-4 mr-5 pt-16 p-5 rounded-[25px]`} href={products[index + 3].href} style={{ backgroundColor: products[index + 3].bg }}>
            <img className="h-[15rem] w-[13rem] mx-[auto] transition duration-500 hover:scale-110" src={'/' + products[index + 3].imageSrc} alt="" />
            <p className='text-md flex justify-between font-extrabold mt-6'>{products[index + 3].name}    <span className='mr-3'>{products[index + 3].size[0]}g{products[index + 3].size[1] && ','} {products[index + 3].size[1]}{products[index].size[1] && 'g'}</span></p>
            <div className='mt-4 flex justify-between w-[16rem]'>
              <p className='text-md flex font-extrabold'>
                <p className='mr-1'>
                  {products[index + 3].price[0]}
                </p>
                <p>
                  {products[index + 3].price[1] && '|'}
                </p>
                <p className='ml-1'>
                  {products[index + 3].price[1]}
                </p>
              </p>
              <Link href={`/product/${products[index+3].id}`} className='px-3 group py-1 pt-1 flex text-sm bg-[#e0191a] rounded-full text-[#FFFFFF] hover:bg-transparent hover:text-[#e0191a] border-2 border-transparent hover:border-[#e0191a]'>
                Details
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-3 my-[3px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </Link>
        </div>
      </div>
      <div className='bg-[#e0191a]'>
        <h1 className="text-[2.7rem] text-[#FFFFFF] font-bold mx-[10rem]">Recipes For Your Soul</h1>
        <SwiperS />
      </div>
    </>
  )
}
