import React from 'react'
import products from '../data/products'
import { FadeIn } from './components/gsap/FadeIn'

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
                        
                            <a key={product.id} href={product.href} className="group">
                                <div className="p-5 overflow-hidden h-[275px]">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="object-center transition duration-500 group-hover:scale-110 m-auto"
                                        height={400}
                                        width={200}
                                    />
                                </div>
                                <h3 className="my-5 tracking-wider text-3xl font-bold text-center group-hover:text-red-600">{product.name}</h3>
                            </a>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Products