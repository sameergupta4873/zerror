import React, { useLayoutEffect, useRef } from 'react'
import Menu from './components/Menu'

const about = () => {



    return (
        <div>
            <Menu/>
            <div className='w-full bg-[#e0191a] h-[7rem]'>
                {/* <h1 className='text-white absolute text-4xl font-bold top-[7rem] left-[8rem] tracking-wider'>Product Details</h1> */}
            </div>
            <section className="bg-[#e0191a]">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-700 sm:text-lg">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Essence of Indian Cooking</h2>
                        <p className="mb-4">At Aadesh Masala, we believe that spices are the essence of Indian cooking. They not only add flavor to our dishes but also provide numerous health benefits. Our mission is to provide the best quality spices to our customers, ensuring that every meal is full of flavor and packed with nutrition.</p>
                    </div>

                    {/* <div className="grid grid-cols-2 gap-4 mt-8">
                        <FadeIn vars={{ y: -100 }} >
                            <img className="w-full rounded-lg" src="/about.jpg" alt="office content 1" />
                        </FadeIn>
                        <FadeIn vars={{ y: 100 }} >
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/about2.jpg" alt="office content 2" />
                        </FadeIn>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default about