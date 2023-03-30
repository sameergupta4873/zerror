import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { Spin as Hamburger } from 'hamburger-react'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Menu = () => {
    const [rotate, setrotate] = useState(false)

    const track = useRef(null);
    const banner = useRef(null);
    const list = useRef(null);
    const list2 = useRef(null);
    const list3 = useRef(null);
    const list4 = useRef(null);
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

        gsap.to(el11, {
            x: x * 50,
            y: y * 50,
            duration: 0.5,
        });

        gsap.to(el12, {
            x: x * 50,
            y: y * 50,
            duration: 0.5,
        });

        gsap.to(el13, {
            x: x * 50,
            y: y * 50,
            duration: 0.5,
        });
    };

    const handleAnimation = () => {
        const el6 = banner.current;
        const el7 = list.current;
        const el8 = list2.current;
        const el9 = list3.current;
        const el10 = list4.current;
        const el11 = show.current;
        const el12 = show2.current;
        const el13 = show3.current;
        if (rotate) {
            gsap.to(el6, { x: 0, duration: 0.5 });
            gsap.to(el7, { x: 0, duration: 0.25 });
            gsap.to(el8, { x: 0, duration: 0.25 });
            gsap.to(el9, { x: 0, duration: 0.25 });
            gsap.to(el10, { x: 0, duration: 0.25 });

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

        }
    }

    return (
        <div className='block bg-[#e0191a]' ref={track}>
            <button className='fixed z-50 top-5 left-8 flex' onClick={() => setrotate(!rotate)}>
                <Hamburger color='white' size={30} rounded toggled={rotate} toggle={setrotate} onToggle={handleAnimation} />
            </button>
            <div className={`bg-[#e0191a] z-30 fixed h-[61rem] w-[120rem] left-[-120rem]`} ref={banner}></div>
            <div className='fixed z-40 bg-[#e0191a] w-[5rem] h-[6rem] top-[13rem]'>
            </div>
            <div className='fixed z-30 top-[13rem] left-[-20rem] '>
                <Link href='/'>
                    <p className="text-white relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[4rem] scale-y-[120%] h-[5rem] w-[12rem]" ref={list}>
                        <span>Home</span>
                        <span className="absolute left-0 -bottom-1 w-full h-0 bg-[#EBFE00] duration-200 delay-75 -z-10 group-hover:h-full group-hover:transition-all"></span>
                    </p>
                </Link>
            </div>
            <div className='fixed z-40 bg-[#e0191a] w-[5rem] h-[6rem] top-[20rem]'>
            </div>
            <div className='fixed z-30 top-[21rem] left-[-20rem]'>
                <Link href='/products'>
                    <p className="text-white relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[4rem] scale-y-[120%] h-[5rem] w-[17rem]" ref={list2}>
                        <span>Products</span>
                        <span className="absolute left-0 -bottom-1 w-full h-0 bg-[#EBFE00] duration-200 delay-75 -z-10 group-hover:h-full group-hover:transition-all"></span>
                    </p>
                </Link>
            </div>
            <div className='fixed z-40 bg-[#e0191a] w-[5rem] h-[6rem] top-[28rem]'>
            </div>
            <div className='fixed z-30 top-[29rem] left-[-20rem]'>
                <Link href='/about'>
                    <p className="text-white relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[4rem] scale-y-[120%] h-[5rem] w-[18rem]" ref={list3}>
                        <span>About Us</span>
                        <span className="absolute left-0 -bottom-1 w-full h-0 bg-[#EBFE00] duration-200 delay-75 -z-10 group-hover:h-full group-hover:transition-all"></span>
                    </p>
                </Link>
            </div>
            <div className='fixed z-40 bg-[#e0191a] w-[5rem] h-[3rem] top-[39rem]'>
            </div>
            <div className='fixed z-30 top-[39rem] h-[2rem] w-[20rem] left-[-20rem] flex' ref={list4}>
                <Link href="https://www.facebook.com/aadeshmasaleofficial" className='w-[7.5rem]'>
                    <p className="text-white relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[1rem] scale-y-[120%] w-[6rem] mr-10">
                        <span>FACEBOOK</span>
                        <span className="absolute left-0 -bottom-[0rem] w-full h-0 bg-[#EBFE00] duration-200 delay-75 -z-10 group-hover:h-full group-hover:transition-all"></span>
                    </p>
                </Link>
                <Link href=" https://www.instagram.com/aadeshmasale/" className='w-[8rem]'>
                    <p className="text-white relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[1rem] scale-y-[120%] w-[7rem] mr-10">
                        <span>INSTAGRAM</span>
                        <span className="absolute left-0 -bottom-[0rem] w-full h-0 bg-[#EBFE00] duration-200 delay-75 -z-10 group-hover:h-full group-hover:transition-all"></span>
                    </p>
                </Link>
                <Link href="https://twitter.com/AadeshMasale" className='w-[7.5rem]'>
                    <p className="text-white relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[1rem] scale-y-[120%] w-[5rem] mr-10">
                        <span>TWITTER</span>
                        <span className="absolute left-0 -bottom-[0rem] w-full h-0 bg-[#EBFE00] duration-200 delay-75 -z-10 group-hover:h-full group-hover:transition-all"></span>
                    </p>
                </Link>
            </div>
            <div className={!rotate ? 'fixed z-[-10] top-[30rem] left-[55rem]' : 'fixed z-40 top-[30rem] left-[55rem]'} ref={show}>
                <img alt="Aadesh Masala Logo" src="/products/ChikenMasala.png" className='h-[14rem] w-[13rem] -rotate-3' ref={cnt} />
            </div>
            <div className={!rotate ? 'fixed z-[-10] top-[9rem] left-[50rem]' : 'fixed z-40 top-[9rem] left-[45rem]'} ref={show2}>
                <img alt="Aadesh Masala Logo" src="/products/JaljeeraMasala.png" className='h-[14rem] w-[13rem] -rotate-12' ref={cnt2} />
            </div>
            <div className={!rotate ? 'fixed z-[-10] top-[14rem] left-[75rem]' : 'fixed z-40 top-[14rem] left-[75rem]'} ref={show3}>
                <img alt="Aadesh Masala Logo" src="/products/ChanaBesan.png" className='h-[14rem] w-[13rem] rotate-12' ref={cnt3} />
            </div>
        </div>
    )
}

export default Menu;