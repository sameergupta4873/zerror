import React from 'react'
import products from '../../data/products'
import { useRouter } from 'next/router';

const Product = () => {

  const router = useRouter();
  const id = Number(router.asPath.split("product/")[1])
  console.log(id);
  return (
    <div>
      <div className='w-full bg-black h-[11rem]'>
        <h1 className='text-white absolute text-4xl font-bold top-[7rem] left-[8rem] tracking-wider'>Product Details</h1>
      </div>
      {id &&
        <>
          <section class="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
            <div class="container px-4 mx-auto">
              <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4">
                  <ul class="flex flex-wrap items-center mb-16">
                    <li class="mr-6">
                      <a class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" href="/">
                        <span>Home</span>
                        <svg class="ml-6" width="4" height="7" viewbox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
                        </svg>
                      </a>
                    </li>
                    <li class="mr-6">
                      <a class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" href="/products">
                        <span>Products</span>
                        <svg class="ml-6" width="4" height="7" viewbox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
                        </svg>
                      </a>
                    </li>
                    <li><a class="text-sm font-medium text-red-500 hover:text-red-600" href="#">{id ? products[id-1].name : 'product' }</a></li>
                  </ul>
                </div>
                <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                  <div class="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
                    <div class="w-full sm:w-auto min-w-max px-4 text-center flex sm:flex-col items-center justify-center">
                      <a class="inline-block sm:mb-12 mr-4 sm:mr-0 transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400" href="#">
                        <svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.54064 7.21015C1.18719 7.59662 0.615928 7.59662 0.265087 7.21015C-0.087058 6.82369 -0.0896663 6.19929 0.265087 5.81282L5.36206 0.289847C5.71421 -0.0966173 6.28416 -0.0966172 6.63892 0.289847L11.7359 5.81282C12.088 6.19785 12.088 6.82369 11.7359 7.21015C11.3824 7.59662 10.8112 7.59662 10.4603 7.21015L5.99853 2.68073L1.54064 7.21015Z" fill="currentColor"></path>
                        </svg>
                      </a>
                      <a class="h-30 block mb-4 mr-2 sm:mr-0" href="#">
                        <img class="h-20 w-16" src={'/'+products[id-1].imageSrc} alt=""/>
                      </a>
                      <a class="hidden sm:block h-30 mb-4 mr-2 sm:mr-0" href="#">
                        <img class="h-20 w-16" src={'/'+products[id-1].imageSrc} alt=""/>
                      </a>
                      <a class="hidden sm:block h-30 mb-4 mr-2 sm:mr-0 rounded-xl border-2 border-blueGray-500" href="#">
                        <img class="h-20 w-16" src={'/'+products[id-1].imageSrc} alt=""/>
                      </a>
                      <a class="h-30 block mb-4 sm:mb-12 mr-4 sm:mr-0" href="#">
                        <img class="h-20 w-16" src={'/'+products[id-1].imageSrc} alt=""/>
                      </a>
                      <a class="inline-block transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400" href="#">
                        <svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.4594 0.289849C10.8128 -0.0966154 11.3841 -0.0966154 11.7349 0.289849C12.0871 0.676313 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880364 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.0966159 1.53966 0.289848L6.00147 4.81927L10.4594 0.289849Z" fill="currentColor"></path>
                        </svg>
                      </a>
                    </div>
                    <div class="w-full sm:w-9/12 px-4">
                      <img class="mb-5" src={'/'+products[id-1].imageSrc} alt=""/>
                        {/* <p class="text-sm text-gray-300">Roll over image to zoom in</p> */}
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-1/2 px-4">
                  <div class="max-w-md mb-6">
                    <h2 class="mt-6 mb-4 text-4xl font-heading font-medium"></h2>
                    <p class="flex items-center mb-6">
                      <span class="mr-2 text-sm text-red-600 font-medium">₹</span>
                      <span class="text-3xl text-red-600 font-medium">5</span>
                    </p>
                    <p class="text-lg text-gray-400">The nulla commodo, commodo eros a lor, tristique lectus. Lorem sad 128 GB silver.</p>
                  </div>
                  {/* <div class="mb-10">
                    <h4 class="mb-3 font-heading font-medium">Qty:</h4>
                    <input class="w-24 px-3 py-2 text-center bg-white border-2 border-black outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50 rounded-xl" type="text" placeholder="1"/>
                  </div> */}
                  <div class="flex flex-wrap -mx-2 mb-12">
                    <div class="w-full md:w-2/3 px-2 mb-2 md:mb-0"><a class="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-black focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded-xl" href="#">Buy Now</a></div>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </>
      }
    </div>
  )
}

export default Product