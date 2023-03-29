import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import products from '../data/products'

const Products = () => {



    return (
        <div>
            <div className='w-full bg-black h-[11rem]'>
                <h1 className='text-white absolute text-4xl font-bold top-[7rem] left-[8rem] tracking-wider'>Explore the World of Taste</h1>
            </div>

            <div className='my-10 mb-24 mx-[8rem]'>
                <h1 className='text-4xl font-bold mb-10'>Products</h1>
                <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-16">
                    {products.map((product) => (
                        <Link key={product.id} class={` h-[33rem] block mr-2 py-20 px-10 rounded-[25px]`} href={product.href} style={{ backgroundColor: product.bg }}>
                            <img class="h-[20rem] w-[18rem] transition duration-500 hover:scale-110" src={'/' + product.imageSrc} alt="" />
                            <h3 className="my-10 tracking-wider text-3xl font-bold text-center group-hover:text-red-600">{product.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Products