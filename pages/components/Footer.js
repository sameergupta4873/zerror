import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black pt-8 border border-black'>
      <nav className="px-2 w-full bg-black">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center ml-[3.25rem]">
            <img alt="image" src="/Aadesh English Logo.png" className="" height={125} width={100} />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </Link>
          <div className="w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <Link href="/" className="block text-white font-bold text-base rounded bg-transparent hover:text-red-600" aria-current="page">About Us</Link>
              </li>
              <li>
                <Link href="/" className="block text-white font-bold text-base rounded bg-transparent hover:text-red-600" aria-current="page">Products</Link>
              </li>
              <li>
                <Link href="/" className="block text-white font-bold text-base rounded bg-transparent hover:text-red-600" aria-current="page">Taseeto</Link>
              </li>
              <li>
                <Link href="/" className="block text-white font-bold text-base rounded bg-transparent hover:text-red-600" aria-current="page">Recipes</Link>
              </li>
              <li>
                <Link href="/" className="block text-white font-bold text-base rounded bg-transparent hover:text-red-600" aria-current="page">CSR</Link>
              </li>
              <li>
                <Link href="/" className="block text-white font-bold text-base rounded bg-transparent hover:text-red-600" aria-current="page">Careers</Link>
              </li>
              <li>
                <Link href="/" className="block text-white font-bold text-base rounded bg-transparent hover:text-red-600" aria-current="page">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="flex my-[3rem] mx-[8rem]">
        <div class="contact">
          <h4 className='text-white'>Aadesh Masale Pvt. Ltd.</h4>
          <div class="flex">
            <img alt="image" class="mt-[0rem] mr-[1rem]" src="https://www.everestfoods.com/wp-content/uploads/2021/09/pin-1.svg" />
            <p class="w-[15rem] mt-[0.5rem] text-[0.9rem] text-white">Jangal Ramnagar, Raipur, Phulawari, Amethi, UP 227405</p>
          </div>
          <div class="flex">
            <img alt="image" class="mt-[0.5rem] mr-[1rem]" src="https://www.everestfoods.com/wp-content/uploads/2021/09/tel.svg" />
            <p class="w-[20rem] mt-[1rem] text-[0.9rem] text-white">+91 7607581221, +91 8400382790</p>
          </div>
        </div>
        <div class="text-white">
          <a class="ml-[1rem]">
            <p></p>
          </a>
          <a href="" class="ml-[1rem]">
            <p></p>
          </a>
          <a href="" class="ml-[1rem]">
            <p></p>
          </a>
          <a href="" class="ml-[1rem]">
            <p></p>
          </a>
        </div>
      </div>
      <div class="flex justify-between mx-[8rem] text-[0.9rem] text-stone-700 mb-[1rem]">
          <p>CIN: U15100MH2020PTC339&38</p>
          <p>Privacy Policy</p>
        </div>
        <div class="flex justify-between mx-[8rem] text-[0.9rem] text-stone-700 mb-[1.5rem]">
          <p>Copyright © 2023 Everest Spices. All rights reserved.</p>
          <p>Made With ❤ by Sameer</p>
        </div>
    </div>
  )
}

export default Footer