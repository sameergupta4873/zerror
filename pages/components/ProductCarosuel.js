import React, { Component } from "react";
import Slider from "react-slick";
import product from '../../data/products'
import Link from "next/link";


export default class ProductCarosuel extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 3,
                        dots: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false
                    }
                }
            ]
        };
        return (
            <div className="px-28 max-sm:px-12">
                <Slider {...settings}>
                    {product && product.map((item) => {
                        return (
                            <div key={item.id}>
                                <Link className={`h-30 w-[90%] block m-5 pt-16 p-5 rounded-[25px]`} href={item.href} style={{ backgroundColor: item.bg }}>
                                    <img className="h-[15rem] w-[13rem] max-sm:h-[12rem] max-sm:w-[10rem] mx-[auto] transition duration-500 hover:scale-110" src={'/' + item.imageSrc} alt="" />
                                    <p className='text-md flex justify-between font-extrabold mt-6'>{item.name}    <span className='mr-3'>{item.size[0]}g{item.size[1] && ','} {item.size[1]}{item.size[1] && 'g'}</span></p>
                                    <div className='mt-4 flex justify-between'>
                                        <p className='text-md flex font-extrabold'>
                                            <p className='mr-1'>
                                                {item.price[0]}
                                            </p>
                                            <p>
                                                {item.price[1] && '|'}
                                            </p>
                                            <p className='ml-1'>
                                                {item.price[1]}
                                            </p>
                                        </p>
                                        <Link href={`/product/${item.id}`} className='px-3 py-1 pt-1 flex text-sm bg-[#e0191a] rounded-full text-[#FFFFFF] hover:bg-transparent hover:text-[#e0191a] border-2 border-transparent hover:border-[#e0191a]'>
                                            Details
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-3 my-[3px]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </Link>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}