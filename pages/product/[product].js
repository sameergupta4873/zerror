import React from 'react'
import products from '../../data/products'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Menu from '../components/Menu';
import Recipes from '../components/RecipeCarousel'

const Product = () => {

  const router = useRouter();
  const id = Number(router.asPath.split("product/")[1])
  return (
    <div className='bg-[#e0191a]'>
      <Menu />
      {id &&
        <>
            <h1 className='text-white text-5xl font-bold mt-[2.5rem] mx-[9rem] tracking-wider max-md:text-3xl max-md:mx-[5.5rem] max-sm:mx-[3rem] max-sm:text-2xl'>{products[id - 1].name}</h1>
          <section className="pt-12 pb-24 pl-[9rem] bg-blueGray-100 rounded-b-10xl overflow-hidden px-24 max-md:pb-7 max-md:px-20 max-md:pt-5 max-sm:px-9">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4">
                  <ul className="flex flex-wrap items-center mb-16 max-sm:mb-7">
                    <li className="mr-6 max-sm:mr-3">
                      <Link className="flex items-center text-md font-medium text-white hover:text-gray-300 hover:underline max-md:text-sm max-sm:text-xs" href="/">
                        <span>Home</span>
                        <svg className="ml-6 max-sm:ml-3" width="4" height="7" viewbox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
                        </svg>
                      </Link>
                    </li>
                    <li className="mr-6 max-sm:mr-3">
                      <Link className="flex items-center text-md font-medium text-white hover:text-gray-300 hover:underline max-md:text-sm max-sm:text-xs" href="/products">
                        <span>Products</span>
                        <svg className="ml-6 max-sm:ml-3" width="4" height="7" viewbox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
                        </svg>
                      </Link>
                    </li>
                    <li><Link className="text-md text-white font-bolder max-md:text-sm max-sm:text-xs" href="#">{id ? products[id - 1].name : 'product'}</Link></li>
                  </ul>
                </div>
                <div className='flex justify-between max-md:flex-col'>
                  <div className="w-[40%] max-lg:w-[50%] max-md:w-[100%] max-md:px-10 mx-auto max-sm:px-3">
                    <div style={{
                      backgroundColor: `${products[id - 1].bg}`
                    }} className="w-[85%] h-[95%] rounded-3xl p-7 border max-xl:h-[80%] max-xl:w-[90%] max-lg:w-[100%] max-lg:h-[95%] max-sm:h-[100%]">
                      <img className="mx-auto h-[100%] w-full max-md:justify-center" src={'/' + products[id - 1].imageSrc} alt="" />
                    </div>
                  </div>
                  <div className="w-[60%] px-4 max-lg:mx-10 max-md:px-0 max-md:py-5 max-md:w-[100%] max-md:mx-0 max-sm:px-3">
                    <div className="mb-6 pb-5 border-b-2 max-lg:mb-3">
                      <h2 className="text-4xl mb-5 text-white font-extrabold font-heading max-lg:text-3xl max-lg:mb-2 max-sm:text-2xl">Ingredients</h2>
                      <p className="text-2xl text-gray-200 max-lg:text-base max-sm:text-sm">It is a blend of a wide range of spices, like {products[id - 1].ingredients}.</p>
                    </div>
                    <div className="mb-6 pb-5 border-b-2 max-lg:pb-2 max-lg:mb-3">
                      <h2 className="text-2xl mb-2 text-white font-extrabold font-heading max-lg:text-xl max-sm:text-md">Pakaging Availabe In</h2>
                      <p className="text-xl text-gray-200 max-lg:text-base max-sm:text-sm">
                        {products[id - 1].size[0]}g{products[id - 1].size[1] && ','} {products[id - 1].size[1]}{products[id - 1].size[1] && 'g'}
                      </p>
                    </div>
                    <div className="mb-6 pb-5 border-b-2 max-lg:pb-2">
                      <h2 className="text-2xl mb-2 text-white font-extrabold font-heading max-lg:text-xl max-lg:mb-0 max-sm:text-sm">Price Options</h2>
                      <p className="text-xl flex text-gray-200 max-lg:text-base max-sm:text-sm">
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
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className='bg-[#e0191a] mt-20 max-md:mt-0 max-sm:mt-5'>
            <Recipes />
          </div>
        </>
      }
    </div>
  )
}

export default Product