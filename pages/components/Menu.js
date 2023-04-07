import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { Spin as Hamburger } from 'hamburger-react'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
import useWindowSize from '../../utils/ResizeHook';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Menu = () => {
    const [rotate, setrotate] = useState(false);
    const [width, setwidth] = useState(1024)
    const size = useWindowSize();
    useEffect(() => {
        setwidth(size.width)
    }, [size])

    const track = useRef(null);
    const banner = useRef(null);
    const list = useRef(null);
    const list2 = useRef(null);
    const list3 = useRef(null);
    const list4 = useRef(null);
    const list5 = useRef(null);
    const show = useRef(null);
    const show2 = useRef(null);
    const show3 = useRef(null);
    const cnt = useRef(null);
    const cnt2 = useRef(null);
    const cnt3 = useRef(null);
    useEffect(() => {


        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [])

    const handleMouseMove = (event) => {
        const el11 = show.current;
        const el12 = show2.current;
        const el13 = show3.current;
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        console.log(event);

        gsap.to(el11, {
            x: x * 60,
            y: y * 60,
            duration: 0.5,
        });

        gsap.to(el12, {
            x: x * 40,
            y: y * 40,
            duration: 0.5,
        });

        gsap.to(el13, {
            x: x * 30,
            y: y * 30,
            duration: 0.5,
        });
    };

    const handleAnimation = () => {
        const el6 = banner.current;
        const el7 = list.current;
        const el8 = list2.current;
        const el9 = list3.current;
        const el10 = list4.current;
        const el14 = list5.current;
        const el11 = show.current;
        const el12 = show2.current;
        const el13 = show3.current;
        if (rotate) {
            gsap.to(el6, { x: 0, duration: 0.5 });
            gsap.to(el7, { x: 0, duration: 0.25 });
            gsap.to(el8, { x: 0, duration: 0.25 });
            gsap.to(el9, { x: 0, duration: 0.25 });
            gsap.to(el10, { x: 0, duration: 0.25 });
            gsap.to(el14, { x: 0, duration: 0.25 });

        } else {
            let tl = gsap.timeline();

            tl.from([el11, el12, el13], {
                duration: 0.5,
                y: 500,
                autoAlpha: -5,
                ease: "Power2.out",
            })
            gsap.to(el6, { x: 2000, duration: 0.5 });
            gsap.to(el7, { x: 400, duration: 0.25 });
            gsap.to(el8, { x: 400, duration: 0.25 });
            gsap.to(el9, { x: 400, duration: 0.25 });
            gsap.to(el10, { x: 400, duration: 0.5 });
            gsap.to(el14, { x: 400, duration: 0.25 });

        }
    }

    return (
        <div className='block bg-[#e0191a]' ref={track}>
            <button className='fixed z-50 top-5 left-8 flex max-md:left-4 max-md:top-4 max-sm:left-[0rem] max-sm:top-[0.1rem]' onClick={() => setrotate(!rotate)}>
                <Hamburger color='white' size={width > 640 ? 30 : 20} rounded toggled={rotate} toggle={setrotate} onToggle={handleAnimation} />
            </button>
            <div className={`bg-[#e0191a] z-30 fixed h-[130vh] w-[120rem] left-[-120rem] max-lg:left-[-130rem]`} ref={banner}></div>
            <div className='fixed z-40 bg-[#e0191a] w-[5rem] h-[6rem] top-[18%] max-lg:w-[3rem] max-sm:w-[1rem]'>
            </div>
            <div className='fixed z-30 top-[18%] left-[-20rem] max-lg:left-[-23rem] max-sm:left-[-24.5rem]'>
                <Link href='/' onClick={() => {
                    setrotate(!rotate);
                    handleAnimation();
                }}>
                    <p className="text-white title relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[3rem] scale-y-[120%] px-3 h-[100%] w-[105%] max-lg:text-[2.5rem] max-sm:text-[1.5rem]" ref={list}>
                        <span>Home</span>
                        <span className="absolute left-0 -bottom-1 w-full h-0 bg-[#EBFE00] duration-200 delay-75 -z-10 group-hover:h-full group-hover:transition-all"></span>
                    </p>
                </Link>
            </div>
            <div className='fixed z-40 bg-[#e0191a] w-[5rem] h-[6rem] top-[35%] max-lg:w-[3rem] max-sm:w-[1rem]'>
            </div>
            <div className='fixed z-30 top-[35%] left-[-20rem] max-lg:left-[-23rem] max-sm:left-[-24.5rem]'>
                <Link href='/products' onClick={() => {
                    setrotate(!rotate);
                    handleAnimation();
                }
                }>
                    <p className="text-white title relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[3rem] scale-y-[120%] h-[100%] px-3 w-[105%] max-lg:text-[2.5rem] max-sm:text-[1.5rem] " ref={list2}>
                        <span>Products</span>
                        <span className="absolute left-0 -bottom-1 w-full h-0 bg-[#EBFE00] duration-200 delay-75 -z-10 group-hover:h-full group-hover:transition-all"></span>
                    </p>
                </Link>
            </div>
            <div className='fixed z-40 bg-[#e0191a] w-[5rem] h-[6rem] top-[53%] max-lg:w-[3rem] max-sm:w-[1rem]'>
            </div>
            <div className='fixed z-30 top-[53%] left-[-20rem] max-lg:left-[-22.5rem] max-sm:left-[-24.5rem]'>
                <Link href='/about' onClick={() => {
                    setrotate(!rotate);
                    handleAnimation();
                }
                }>
                    <p className="text-white title relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[3rem] scale-y-[120%] h-[100%] px-3 w-[105%] max-lg:text-[2.5rem] max-sm:text-[1.5rem]" ref={list3}>
                        <span>About Us</span>
                        <span className="absolute left-0 -bottom-1 w-full h-0 bg-[#EBFE00] duration-200 delay-75 -z-10 group-hover:h-full group-hover:transition-all"></span>
                    </p>
                </Link>
            </div>
            <div className='fixed z-40 bg-[#e0191a] w-[5rem] h-[6rem] top-[70%] max-lg:w-[3rem] max-sm:w-[1rem]'>
            </div>
            <div className='fixed z-30 top-[70%] left-[-20rem] max-lg:left-[-22.5rem] max-sm:left-[-24.5rem]'>
                <Link href='/contact-us' onClick={() => {
                    setrotate(!rotate);
                    handleAnimation();
                }
                }>
                    <p className="text-white title relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[3rem] scale-y-[120%] h-[100%] px-3 w-[105%] max-lg:text-[2.5rem] max-sm:text-[1.5rem]" ref={list5}>
                        <span>Contact Us</span>
                        <span className="absolute left-0 -bottom-1 w-full h-0 bg-[#EBFE00] duration-200 delay-75 -z-10 group-hover:h-full group-hover:transition-all"></span>
                    </p>
                </Link>
            </div>
            <div className='fixed z-40 bg-[#e0191a] w-[5rem] h-[3rem] top-[90%] max-lg:w-[3rem] max-sm:w-[2rem]'>
            </div>
            <div className='fixed z-30 top-[90%] h-[2rem] w-[20rem] left-[-20rem] flex max-lg:left-[-22rem]' ref={list4}>
                <Link href="https://www.facebook.com/aadeshmasaleofficial" className='w-[7.5rem]'>
                    <p className="text-white relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[1rem] scale-y-[120%] w-[6rem] mr-10 max-lg:w-[4rem] max-lg:text-[0.75rem]">
                        <span>FACEBOOK</span>
                        <span className="absolute left-0 -bottom-[0rem] w-full h-0 bg-[#EBFE00] duration-200 delay-75 -z-10 group-hover:h-full group-hover:transition-all"></span>
                    </p>
                </Link>
                <Link href="https://www.instagram.com/aadeshmasale" className='w-[8rem]'>
                    <p className="text-white relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[1rem] scale-y-[120%] w-[7rem] mr-10 max-lg:w-[4rem] max-lg:text-[0.75rem]">
                        <span>INSTAGRAM</span>
                        <span className="absolute left-0 -bottom-[0rem] w-full h-0 bg-[#EBFE00] duration-200 delay-75 -z-10 group-hover:h-full group-hover:transition-all"></span>
                    </p>
                </Link>
                <Link href="https://twitter.com/AadeshMasale" className='w-[7.5rem]'>
                    <p className="text-white relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[1rem] scale-y-[120%] w-[5rem] mr-10 max-lg:w-[4rem] max-lg:text-[0.75rem]">
                        <span>TWITTER</span>
                        <span className="absolute left-0 -bottom-[0rem] w-full h-0 bg-[#EBFE00] duration-200 delay-75 -z-10 group-hover:h-full group-hover:transition-all"></span>
                    </p>
                </Link>
            </div>
            <div className={!rotate ? 'hidden fixed top-[65%] left-[57%] max-lg:left-[55%] max-lg:top-[55%]' : 'fixed z-40 top-[65%] left-[57%] max-lg:left-[55%] max-lg:top-[55%] max-sm:top-[70%]'} ref={show}>
                <img alt="Aadesh Masala Logo" src="/products/ChikenMasala.png" className='h-[14rem] w-[13rem] max-lg:h-[12rem] max-lg:w-[11rem] max-sm:h-[6rem] max-sm:w-[5rem] -rotate-3' />
            </div>
            <div className={!rotate ? 'hidden fixed top-[15%] left-[40%] max-lg:left-[35%] max-lg:top-[15%]' : 'fixed z-40 top-[15%] left-[40%] max-lg:left-[35%] max-lg:top-[15%] max-sm:top-[25%] max-sm:left-[38%]'} ref={show2}>
                <img alt="Aadesh Masala Logo" src="/products/JaljeeraMasala.png" className='h-[14rem] w-[13rem] max-lg:h-[12rem] max-lg:w-[11rem] max-sm:h-[6rem] max-sm:w-[5rem] -rotate-12' />
            </div>
            <div className={!rotate ? 'hidden fixed top-[20%] left-[75%]' : 'fixed z-40 top-[20%] left-[75%] max-sm:top-[45%] max-sm:left-[70%]'} ref={show3}>
                <img alt="Aadesh Masala Logo" src="/products/ChanaBesan.png" className='h-[14rem] w-[13rem] max-lg:h-[12rem] max-lg:w-[11rem] max-sm:h-[6rem] max-sm:w-[5rem] rotate-12' />
            </div>

        </div>
    )
}

export default Menu;