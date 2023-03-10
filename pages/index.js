import SwiperS from './components/Swiper'
import InfinteSlider from './components/InfinteSlider/InfinteSlider'
import HeroSlider from './components/HeroSlider/HeroSlider'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="h-[90vh]">
        <img alt="image" className='h-[100vh]' src='https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/09/1.jpg.webp' width={"100%"}/>
        <h1 className='text-[3.5rem] tracking-wider font-bold text-white absolute  top-[15rem] left-[7rem]'>India’s Most Trusted</h1>
        <h1 className='text-[3.5rem] tracking-wider font-bold text-white absolute top-[20rem] left-[7rem]'>& Largest Brand</h1>
        <h1 className='text-[3.5rem] tracking-wider font-bold text-white absolute top-[25rem] left-[7rem]'>Of Spices.</h1>
      </div>
      <div className='my-[10rem]'>
        <InfinteSlider />
      </div>
      <div class="flex justify-between my-[3rem] mx-[8rem]">
        <h1 class="text-[2.7rem] font-bold">Recipes For Your Soul</h1>
        <button class="bg-black text-white px-[1.5rem] rounded-md">Visit Everest's Kitchen</button>
      </div>
      <SwiperS />
    </>
  )
}
