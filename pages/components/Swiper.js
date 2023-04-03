import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

// Data
import data from '../../data/data.json';

const Carousel = () => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <div className="carousel mx-auto px-32 max-sm:px-10">
            <div className='flex justify-between'>
                <h1 className="text-[2.7rem] max-md:text-[2rem] text-[#FFFFFF] font-bold py-2 max-sm:text-[1.25rem] max-sm:py-0 max-sm:mt-5">Recipes For Your Soul</h1>
                <div className='flex justify-end max-md:mt-5'>
                    <button
                        onClick={movePrev}
                        className="hover:bg-white hover:text-[#e0191a] border-[0.2rem] rounded-full text-white w-[3rem] h-[3rem] text-center max-md:w-[2rem] max-md:h-[2rem] max-sm:w-[1.75rem] max-sm:h-[1.75rem] disabled:opacity-25 disabled:cursor-not-allowed z-20 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('prev')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-9 h-6 ml-1 max-md:w-5 max-sm:w-4 max-sm:h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                        <span className="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={moveNext}
                        className="hover:bg-white hover:text-[#e0191a] ml-6 border-[0.2rem] rounded-full text-white w-[3rem] h-[3rem] text-center max-md:w-[2rem] max-md:h-[2rem] max-sm:w-[1.75rem] max-sm:h-[1.75rem] max-sm:ml-2 disabled:opacity-25 disabled:cursor-not-allowed z-20 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('next')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-9 h-6 ml-1 max-md:w-5 max-sm:w-4 max-sm:h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </div>
            <div className="relative overflow-hidden mt-5 rounded-md">

                <div className="flex justify-between absolute top left w-full h-full">
                </div>
                <div
                    ref={carousel}
                    className="carousel-container relative flex overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                >
                    {data.resources.map((resource, index) => {
                        return (
                            <div
                                key={index}
                                className="carousel-item content text-center relative w-[20rem] ease-in h-[30rem] transition-all duration-500 hover:w-[35rem] max-md:w-[31.5rem] max-md:h-[35rem] max-sm:h-[18rem] hover:z-30 snap-start"
                            >
                                <div class="content-overlay"></div>
                                <Link
                                    href={resource.link}
                                    className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                                    style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                                >
                                    <img
                                        src={resource.imageUrl || ''}
                                        alt={resource.title}
                                        className="w-full aspect-square hidden"
                                    />
                                    <div className="content-details fadeIn-bottom">
                                        <h3>This is a title</h3>
                                        <p>This is a short description</p>
                                    </div>
                                </Link>
                                <Link
                                    href={resource.link}
                                    className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 z-10"
                                >
                                    <h3 className="text-white py-6 mx-auto text-xl">
                                        {resource.title}
                                    </h3>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
