import React from 'react'
import products from '../../data/products'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Menu from '../components/Menu';
import SwiperS from '../components/Swiper'

const Product = () => {

  const router = useRouter();
  const id = Number(router.asPath.split("product/")[1])
  console.log(id);
  return (
    <div className='bg-[#e0191a]'>
      <Menu />
      {id &&
        <>
          <div className='w-full bg-[#e0191a] h-[6rem]'>
            <h1 className='text-white absolute text-5xl font-bold top-[4rem] left-[11%] tracking-wider'>{products[id - 1].name}</h1>
          </div>
          <section className="pt-12 pb-24 pl-12 bg-blueGray-100 rounded-b-10xl overflow-hidden">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4">
                  <ul className="flex flex-wrap items-center mb-16">
                    <li className="mr-6">
                      <Link className="flex items-center text-md font-medium text-white hover:text-gray-300 hover:underline" href="/">
                        <span>Home</span>
                        <svg className="ml-6" width="4" height="7" viewbox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
                        </svg>
                      </Link>
                    </li>
                    <li className="mr-6">
                      <Link className="flex items-center text-md font-medium text-white hover:text-gray-300 hover:underline" href="/products">
                        <span>Products</span>
                        <svg className="ml-6" width="4" height="7" viewbox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
                        </svg>
                      </Link>
                    </li>
                    <li><Link className="text-md text-white font-bolder" href="#">{id ? products[id - 1].name : 'product'}</Link></li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                  <div className="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
                    {/* <div className="w-full sm:w-auto min-w-max px-4 text-center flex sm:flex-col items-center justify-center">
                      <Link className="inline-block sm:mb-12 mr-4 sm:mr-0 transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400" href="#">
                        <svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.54064 7.21015C1.18719 7.59662 0.615928 7.59662 0.265087 7.21015C-0.087058 6.82369 -0.0896663 6.19929 0.265087 5.81282L5.36206 0.289847C5.71421 -0.0966173 6.28416 -0.0966172 6.63892 0.289847L11.7359 5.81282C12.088 6.19785 12.088 6.82369 11.7359 7.21015C11.3824 7.59662 10.8112 7.59662 10.4603 7.21015L5.99853 2.68073L1.54064 7.21015Z" fill="currentColor"></path>
                        </svg>
                      </Link>
                      <Link className="h-30 block mb-4 mr-2 sm:mr-0" href="#">
                        <img className="h-20 w-16" src={'/' + products[id - 1].imageSrc} alt="" />
                      </Link>
                      <Link className="hidden sm:block h-30 mb-4 mr-2 sm:mr-0" href="#">
                        <img className="h-20 w-16" src={'/' + products[id - 1].imageSrc} alt="" />
                      </Link>
                      <Link className="hidden sm:block h-30 mb-4 mr-2 sm:mr-0 rounded-xl border-2 border-blueGray-500" href="#">
                        <img className="h-20 w-16" src={'/' + products[id - 1].imageSrc} alt="" />
                      </Link>
                      <Link className="h-30 block mb-4 sm:mb-12 mr-4 sm:mr-0" href="#">
                        <img className="h-20 w-16" src={'/' + products[id - 1].imageSrc} alt="" />
                      </Link>
                      <Link className="inline-block transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400" href="#">
                        <svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.4594 0.289849C10.8128 -0.0966154 11.3841 -0.0966154 11.7349 0.289849C12.0871 0.676313 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880364 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.0966159 1.53966 0.289848L6.00147 4.81927L10.4594 0.289849Z" fill="currentColor"></path>
                        </svg>
                      </Link>
                    </div> */}
                    <div style={{
                      backgroundColor: `${products[id - 1].bg}`
                    }} className="w-full sm:w-9/12 rounded-3xl px-10 py-20 border">
                      <img className="" src={'/' + products[id - 1].imageSrc} alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="mb-6 pb-5 border-b-2">
                    <h2 className="text-6xl mb-7 text-white font-extrabold font-heading">Ingredients</h2>
                    <p className="text-2xl text-gray-200">It is a blend of a wide range of spices, like {products[id - 1].ingredients}.</p>
                  </div>
                  <div className="mb-6 pb-5 border-b-2">
                    <h2 className="text-4xl mb-5 text-white font-extrabold font-heading">Pakaging Availabe In</h2>
                    <p className="text-3xl text-gray-200">
                      {products[id - 1].size[0]}g{products[id - 1].size[1] && ','} {products[id - 1].size[1]}{products[id - 1].size[1] && 'g'}
                    </p>
                  </div>
                  <div className="mb-6 pb-5 border-b-2">
                    <h2 className="text-4xl mb-5 text-white font-extrabold font-heading">Price Options</h2>
                    <p className="text-3xl flex text-gray-200">
                      <p className='mr-1'>
                        {products[id - 1].price[0]}
                      </p>
                      <p>
                        {products[id - 1].price[1] && ','}
                      </p>
                      <p className='ml-1'>
                        {products[id - 1].price[1]}
                      </p>
                    </p>
                  </div>
                  <Link href={'/products'}>
                    <button className='px-20 my-5 py-4 border-4 hover:border-[#EBFE00] rounded-[0.5rem] hover:bg-[#e0191a] text-3xl hover:text-[#EBFE00] text-[#e0191a] bg-[#EBFE00] border-[#e0191a]'>
                      Explore Products
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <div className='bg-[#e0191a] mt-20'>
            <h1 className="text-[2.7rem] text-[#FFFFFF] font-bold mx-[10rem]">Recipes For Your Soul</h1>
            <SwiperS />
          </div>
        </>
      }
    </div>
  )
}

export default Product