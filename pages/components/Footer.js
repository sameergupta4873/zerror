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
    <div className='bg-[#e0191a] pt-[9rem] border border-[#e0191a]'>
      <nav className="pr-32 w-full bg-[#e0191a]">
        <div className='flex'>
          <Link href="/" className="my-[3.25rem] w-[13%] ml-[10%]">
            <img alt="image" src="/Aadesh English Logo.png" className="h-[100%] w-[100%]" />
          </Link>
          <div className="flex ml-[30%] w-[50%]">
            <div className="block w-auto" id="navbar-dropdown">
              <ul className="flex flex-col p-4 mt-4">
                <li>
                  <div className="block text-white font-bold text-2xl rounded bg-transparent my-4 title" aria-current="page">Menu</div>
                </li>
                <li>
                  <Link href="/" className="block text-gray-300 font-bold text-xl rounded bg-transparent my-1 transition delay-20 hover:translate-x-2" aria-current="page">Products</Link>
                </li>
                <li>
                  <Link href="/" className="block text-gray-300 font-bold text-xl rounded bg-transparent my-1 transition delay-20 hover:translate-x-2" aria-current="page">About Us</Link>
                </li>
                <li>
                  <Link href="/" className="block text-gray-300 font-bold text-xl rounded bg-transparent my-1 transition delay-20 hover:translate-x-2" aria-current="page">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="block w-[50%] ml-[10rem]" id="navbar-dropdown">
              <ul className="flex flex-col p-4 mt-4">
                <li>
                  <div className="block title text-white font-bold text-2xl rounded bg-transparent my-4 " aria-current="page">Company</div>
                </li>
                <li>
                  <Link href="/" className="block text-gray-300 font-bold text-xl rounded bg-transparent my-1 transition delay-20 hover:translate-x-2" aria-current="page">FAQ</Link>
                </li>
                <li>
                  <Link href="/" className="block text-gray-300 font-bold text-xl rounded bg-transparent my-1 transition delay-20 hover:translate-x-2" aria-current="page">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/" className="block text-gray-300 font-bold text-xl rounded bg-transparent my-1 transition delay-20 hover:translate-x-2" aria-current="page">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex my-[3rem] mx-[8rem]">
        <div className="contact">
          <h4 className='text-white'>Aadesh Masale Pvt. Ltd.</h4>
          <div className="flex">
            <img alt="image" className="mt-[0rem] mr-[1rem]" src="https://www.everestfoods.com/wp-content/uploads/2021/09/pin-1.svg" />
            <p className="w-[15rem] mt-[0.5rem] text-[0.9rem] text-white">Jangal Ramnagar, Raipur, Phulawari, Amethi, UP 227405</p>
          </div>
          <div className="flex">
            <img alt="image" className="mt-[0.5rem] mr-[1rem]" src="https://www.everestfoods.com/wp-content/uploads/2021/09/tel.svg" />
            <p className="w-[20rem] mt-[1rem] text-[0.9rem] text-white">+91 7607581221, +91 8400382790</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-[8rem] text-[0.9rem] text-white mb-[1rem]">
        <p>CIN: U15100MH2020PTC339&38</p>
      </div>
      <div className="flex justify-between mx-[8rem] text-[0.9rem] text-white mb-[0rem] group">
        <p>Copyright © 2023 Aadesh Masale. All rights reserved.</p>
        <button type="button" className="border border-white p-7 -translate-y-20 rounded-full group-hover:text-[#e0191a] group-hover:bg-[#FFFFFF]" onClick={scrollToTop}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
          </svg>

        </button>
        <p>Made With ❤ by <Link className="underline" href={"https://www.zerrorstudios.com/home"} target="_blank">Zerror Studios</Link></p>
      </div>
    </div>
  )
}

export default Footer