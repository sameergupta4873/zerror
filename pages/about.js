import React, { useLayoutEffect, useRef } from 'react'
import Menu from './components/Menu'

const about = () => {



    return (
        <div>
            <Menu/>
            <section className="bg-[#e0191a] px-20 max-lg:px-8 max-md:px-4">
                <div className="gap-16 items-center py-8 px-20 w-[100%] max-sm:px-7">
                    <div className="font-light text-gray-100 sm:text-lg">
                        <h2 className="mb-20 title text-5xl tracking-tight font-extrabold text-white max-lg:text-4xl max-lg:mb-10 max-sm:text-2xl">Aadesh Masale</h2>
                        <div className='flex justify-between max-md:flex-col'>
                            <p className="mb-4 w-[65%] max-lg:text-sm max-lg:w-[75%] max-md:w-[115%] max-sm:w-full">Aadesh Masale Approved by AGMARK & ISO, HACCP Established in the year 2005, at Jungle Ramnagar, Raipur Fulwari, Amethi, District Amethi in India, We “MAHESH GRIH UDYOG”, is engaged in manufacturing and supplying Nutritious and Quality Food products.
                                Our offered food product include SABUT GARAM-MASALA. Highly nutritious, our range is hygienically processed using advance technology to retain all its essential properties.
                                We are backed by a diligent are experienced team of professionals that helps in offering highly nutritious, pure, fresh and appetite pleasing food products to our customers.
                                <br />
                                <br />
                                These professionals use superior quality ingredients and advanced technology for preparing the food products.
                                To maximize customer satisfaction, these are quality tested on defined parameters like purity, nutrition value, taste, low fats, safety and hygiene. We have also maintained a hygienic and safe warehousing unit, to ensure that the food products are free from any contamination and remain fresh for a long time.
                                <br />
                                Our packaging personnel ensure that the food products are packed carefully using quality packaging material, so that their taste can we retained for a longer period of time.
                            </p>
                            <img src="/about.jpg" className='h-[31rem] w-[21rem] rounded-lg ml-10 max-lg:h-[31rem] max-lg:w-[15rem] max-md:w-[130%] max-md:ml-0 max-md:h-[75%] max-md:text-center'></img>
                        </div>
                        <h2 className="mt-20 mb-10 title text-5xl tracking-tight font-extrabold text-white max-lg:text-3xl max-sm:text-2xl max-sm:mt-10 max-sm:mb-5">Our Story</h2>
                        <div className=''>
                            {/* <img src="/about2.jpg" className='h-[31rem] w-[21rem] rounded-lg mt-20'></img> */}
                            <div className='flex max-md:flex-col'>
                                <img src='/about2.jpg' className='w-[25%] h-[20rem] rounded-md mr-20 max-lg:mr-7 max-lg:h-[21rem] max-md:w-[100%] max-md:h-[65%]'></img>
                                <div className='w-[60%] max-lg:text-base max-lg:w-[70%] max-md:w-[115%] max-md:mt-10 max-sm:w-full max-sm:text-sm'>
                                    Welcome to Aadesh Masala, an Indian spices brand that is dedicated to bringing the flavors of traditional Indian cuisine to every household in India. My name is Mahesh Kumar Soni and I am the founder of Aadesh Masala.
                                    <br />
                                    Our journey started in 2005, with a simple goal - to create job opportunities for our local citizens. As a passionate entrepreneur, I wanted to make a difference in my community and contribute to the growth of our nation&#39;s economy. With a strong desire to explore the traditional Indian spices, I established Aadesh Masala, a subsidiary of Mahesh Grih Udyog.
                                    <br />
                                    At Aadesh Masala, we believe that spices are the essence of Indian cooking. They not only add flavor to our dishes but also provide numerous health benefits.
                                    <br />
                                </div>
                            </div>
                            <br />
                            <div className='flex max-md:flex-col'>

                                <p className='w-[70%] max-lg:text-base max-md:w-[115%] max-sm:w-full max-sm:text-sm'>
                                    Over the years, we have grown from a small local business to a national brand, serving customers across India. We take pride in our commitment to quality, sourcing the freshest and finest ingredients to make our spices. Our products are free from any harmful additives, ensuring that our customers can enjoy healthy and delicious meals.
                                    <br />
                                    Our team of experts is dedicated to creating unique blends of spices that capture the authentic taste of Indian cuisine. We believe that our spices are not just a product, but a representation of our culture and heritage. We take great care in every step of the production process, from sourcing to packaging, to ensure that our customers receive the best quality products.
                                    <br />
                                    <br />
                                    At Aadesh Masala, we are more than just a spice brand. We are a community of passionate individuals who are committed to promoting the flavors of India. We invite you to join us on this journey and experience the true taste of Indian spices. Thank you for choosing Aadesh Masala - where every spice tells a story.
                                </p>
                                <img src="/about3.jpeg" className='w-[25%] h-[22rem] ml-10 rounded max-lg:h-[28rem] max-md:w-[115%] max-md:py-5 max-md:ml-0'></img>
                            </div>
                            <p className='title ml-[50%] mt-[2%] max-md:text-sm max-sm:ml-[35%] max-sm:text-sm'>- Mr. Mahesh Kumar Soni </p>
                            <p className='title ml-[53%]  mt-[1%] max-md:text-sm max-sm:ml-[50%] max-sm:text-sm'>MD, Aadesh Masale</p>
                        </div>
                        <div>
                            <h2 className="mt-20 mb-10 title text-3xl text-center tracking-tight font-extrabold text-white max-sm:mt-10 max-sm:mb-5">Mission</h2>
                            <div>
                                <p className="max-md:w-[115%] max-sm:w-full max-sm:text-sm">
                                    To be recognized as the company that has achieved &#39;Trinity of Excellence&#39; through practicing &#39;Right Perception&#39;, &#39;Right Thinking&#39;
                                    and &#39;Right Conduct&#39; for achieving Highest Quality, &#39;Value for Money&#39; and &#39;Outstanding Commitment&#39;.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="mt-20 mb-10 title text-3xl text-center tracking-tight font-extrabold text-white max-sm:mt-10 max-sm:mb-5">Vision</h2>
                            <div>
                                <p className='max-md:w-[115%] max-sm:w-full max-sm:text-sm'>
                                    Developing new markets of our products Spices, Instant Mixes and Food Products - Product Wise, Region Wise and with standard hygienic manufacturing plant & operational process, professionally managed.
                                </p>
                            </div>
                        </div>
                        <div>
                            <section class="bg-[#e0191a]">
                                <div class="pt-20 mx-auto max-w-screen-xl px-4">
                                    <h2 class="text-3xl font-extrabold title tracking-tight leading-tight text-center text-white">Values</h2>
                                    <section class="bg-[#e0191a]">
                                        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                                            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                                                <div>
                                                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                                            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                                                            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                                                        </svg>
                                                    </div>
                                                    <h3 class="mb-2 text-xl font-bold dark:text-white">People</h3>
                                                    <p class="text-gray-300">Be a great place to work where people are inspired to be the best they can be</p>
                                                </div>
                                                <div>
                                                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                                            <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
                                                            <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                                        </svg>

                                                    </div>
                                                    <h3 class="mb-2 text-xl font-bold dark:text-white">Portfolio</h3>
                                                    <p class="text-gray-300">Bring to the world a portfolio of quality Food brands that anticipate and satisfy people&#39;s desires and needs.</p>
                                                </div>
                                                <div>
                                                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                                        <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                                    </div>
                                                    <h3 class="mb-2 text-xl font-bold dark:text-white">Partners</h3>
                                                    <p class="text-gray-300">Nurture a winning network of customers and suppliers, together we create mutual, enduring value.</p>
                                                </div>
                                                <div>
                                                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                                        </svg>
                                                    </div>
                                                    <h3 class="mb-2 text-xl font-bold dark:text-white">Planet</h3>
                                                    <p class="text-gray-300"> Be a responsible citizen that makes a difference by helping build and support sustainable communities.</p>
                                                </div>
                                                <div>
                                                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                                            <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <h3 class="mb-2 text-xl font-bold dark:text-white">Profits</h3>
                                                    <p class="text-gray-300">Maximize long-term return to stakeholders while being mindful of our overall responsibilities.</p>
                                                </div>
                                                <div>
                                                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                                        <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                                                    </div>
                                                    <h3 class="mb-2 text-xl font-bold dark:text-white">Productivity</h3>
                                                    <p class="text-gray-300">Be a highly effective, lean and fast-moving organization.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default about