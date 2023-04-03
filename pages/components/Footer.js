import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  return (
    <div className='bg-[#e0191a] pt-[9rem] max-md:pt-[2rem]'>
      <nav className="pr-32 w-full bg-[#e0191a] max-md:mx-auto">
        <div className='flex justify-between max-md:flex-col'>
          <Link href="/" className="my-[3.25rem] w-[15%] ml-[10%] max-md:hidden">
            <img alt="image" src="/aadesh.png" className="h-[100%] w-[100%]" />
          </Link>
          <div className="flex max-md:flex-col max-md:mx-auto max-md:text-center max-md:w-[100vw]">
            <div className="block w-[25%] max-md:mx-auto max-sm:w-[50%]" id="navbar-dropdown">
              <ul className="p-4 mt-4 max-sm:mt-2">
                <li>
                  <div className="block text-white font-bold text-2xl rounded bg-transparent my-4 title max-sm:text-xl max-sm:my-2" aria-current="page">Menu</div>
                </li>
                <li>
                  <Link href="/" className="block text-gray-300 font-bold text-xl rounded bg-transparent my-1 transition delay-20 hover:translate-x-2 max-sm:text-sm" aria-current="page">Products</Link>
                </li>
                <li>
                  <Link href="/" className="block text-gray-300 font-bold text-xl rounded bg-transparent my-1 transition delay-20 hover:translate-x-2 max-sm:text-sm" aria-current="page">About Us</Link>
                </li>
                <li>
                  <Link href="/" className="block text-gray-300 font-bold text-xl rounded bg-transparent my-1 transition delay-20 hover:translate-x-2 max-sm:text-sm" aria-current="page">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="block w-[25%] max-md:mx-auto  max-md:w-[15rem] max-md:text-center ml-[10rem]" id="navbar-dropdown">
              <ul className="p-4 mt-4 max-sm:mt-0">
                <li>
                  <div className="block title text-white font-bold text-2xl rounded bg-transparent my-4 max-sm:text-xl max-sm:my-2" aria-current="page">Company</div>
                </li>
                <li>
                  <Link href="/" className="block text-gray-300 font-bold text-xl rounded bg-transparent my-1 transition delay-20 hover:translate-x-2 max-sm:text-sm" aria-current="page">FAQ</Link>
                </li>
                <li>
                  <Link href="/" className="block text-gray-300 font-bold text-xl rounded bg-transparent my-1 transition delay-20 hover:translate-x-2 max-sm:text-sm" aria-current="page">Privacy & Policy</Link>
                </li>
                <li>
                  <Link href="/" className="block text-gray-300 font-bold text-xl rounded bg-transparent my-1 transition delay-20 hover:translate-x-2 max-sm:text-sm" aria-current="page">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex max-md:text-center max-md:mx-auto max-md:w-[16rem] max-md:flex-col my-[3rem] mx-[8rem] max-sm:my-7">
        <div className="contact">
          <h4 className='text-white max-sm:text-xl max-sm:py-2'>Aadesh Masale Pvt. Ltd.</h4>
          <div className="flex">
            <img alt="image" className="mt-[0rem] mr-[1rem]" src="https://www.everestfoods.com/wp-content/uploads/2021/09/pin-1.svg" />
            <p className="w-[15rem] mt-[0.5rem] text-[0.9rem] text-white max-sm:text-sm max-sm:w-[13rem]">Jangal Ramnagar, Raipur, Phulawari, Amethi, UP 227405</p>
          </div>
          <div className="flex">
            <img alt="image" className="mt-[0.5rem] mr-[1rem]" src="https://www.everestfoods.com/wp-content/uploads/2021/09/tel.svg" />
            <p className="w-[20rem] mt-[1rem] text-[0.9rem] text-white">+91 7607581221, +91 8400382790</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between max-md:mx-auto max-md:w-[13.5rem] mx-[8rem] text-[0.9rem] text-white mb-[1rem]">
        <p>CIN: U15100MH2020PTC339&38</p>
      </div>
      <div className="flex max-md:flex-col justify-between max-md:mx-auto max-md:w-[22rem] mx-[8rem] text-[0.9rem] text-white mb-[0rem] max-sm:px-14 max-sm:text-center">
        <p>Copyright © 2023 Aadesh Masale. All rights reserved.</p>
        <button type="button" className="border border-white m-10 max-sm:my-7 max-sm:mx-auto w-[6rem] h-[6rem] max-sm:h-[4rem] max-sm:w-[4rem] max-sm:p-5 p-7 max-md:translate-y-0 max-md:mx-auto rounded-full hover:text-[#e0191a] hover:bg-[#FFFFFF]" onClick={scrollToTop}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 max-sm:h-6 max-sm:w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
          </svg>
        </button>
        <p className='my-5 max-md:mx-auto'>Made With ❤ by <Link className="underline" href={"https://www.zerrorstudios.com/home"} target="_blank">Zerror Studios</Link></p>
      </div>
    </div>
  )
}

export default Footer