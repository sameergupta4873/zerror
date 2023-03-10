import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    return (
        <div>
            <nav className={ scrollY <= 75 ? "z-30 px-2 py-7 fixed w-full bg-gradient-to-b from-black" : "z-30 px-2 py-2 fixed w-full bg-black"}>
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link href="/" className="flex items-center ml-[3rem]">
                        <img src="https://www.everestfoods.com/wp-content/uploads/2022/01/everest-logo.svg" className="h-6 mr-3 sm:h-10" alt="Everest Logo" />
                    </Link>
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
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
        </div>
    )
}

export default Navbar