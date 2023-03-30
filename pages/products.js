import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import products from '../data/products'
import Menu from './components/Menu'

const Products = () => {



    return (
        <div className='bg-[#e0191a] h-[200rem]'>
            <Menu/>
            <div className='w-full bg-[#e0191a] h-[11rem]'>
                <h1 className='text-white absolute text-4xl font-bold top-[7rem] left-[8rem] tracking-wider'>Exotic Range of Masalas</h1>
            </div>

            <div className='my-10 mb-24 mx-[8rem]'>
                <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-16">
                    {products.map((product) => (
                        <Link key={product.id} className={`h-30 block mb-4 mr-5 pt-20 pb-9 px-16 rounded-[25px] w-[24rem]`} href={product.href} style={{ backgroundColor: product.bg }}>
                            <img className="h-[20rem] w-[20rem] transition duration-500 hover:scale-110" src={'/' + product.imageSrc} alt="" />
                            <p className='text-xl font-extrabold mt-6'>{product.name}</p>
                            <div className='mt-4 flex'>
                                <p className='text-xl font-extrabold'>{product.price}</p>
                                <Link href={`/product/${product.id}`} className='px-4 py-1 pt-2 ml-[50%] flex bg-[#e0191a] rounded-full text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#e0191a] border-2 border-transparent hover:border-[#e0191a]'>
                                    Details
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 ml-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </Link>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Products