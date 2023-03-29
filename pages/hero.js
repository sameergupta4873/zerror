import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { Spin as Hamburger } from 'hamburger-react'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Hero = () => {
    const [rotate, setrotate] = useState(false)

    const track = useRef(null);
    const move = useRef(null);
    const move2 = useRef(null);
    const move3 = useRef(null);
    const img = useRef(null);
    const heading = useRef(null);
    const heading2 = useRef(null);
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

        const t = track.current;
        const el = move.current;
        const el2 = move2.current;
        const el3 = move3.current;
        const el4 = heading.current;
        const el5 = heading2.current;


        gsap.fromTo(el,
            { x: 0, y: 0 },
            {
                duration: 0.5, ease: "power1.inOut", motionPath:
                {
                    path: [{
                        x: '2.5rem', y: '3rem'
                    },
                    { x: '4.5rem', y: '7rem' },
                    { x: '6rem', y: '11rem' },
                    { x: '6.5rem', y: '15rem' },
                    { x: '6.25rem', y: '19rem' }]
                }
            },
        );
        gsap.fromTo(el2,
            { x: 0, y: 0 },
            {
                duration: 0.5, ease: "power1.inOut", motionPath:
                {
                    path: [{
                        x: '-0.15rem', y: '4rem'
                    },
                    { x: '0rem', y: '11rem' },
                    { x: '-0.75rem', y: '18rem' },
                    { x: '-2.75rem', y: '25rem' },
                    { x: '-8.5rem', y: '31.5rem' }]
                }
            },
        );
        gsap.fromTo(el3,
            { x: 0, y: 0 },
            {
                duration: 0.5, ease: "power1.inOut", motionPath:
                {
                    path: [{
                        x: '-1rem', y: '6.75rem'
                    },
                    { x: '-3rem', y: '11rem' },
                    { x: '-5rem', y: '15rem' },
                    { x: '-10rem', y: '16.1rem' },
                    { x: '-15rem', y: '16.25rem' },
                    { x: '-20rem', y: '16.25rem' }]
                }
            },
        );
        gsap.fromTo(el4, { y: -250 }, { y: 0, duration: 0.6 });
        gsap.fromTo(el5, { y: -250 }, { y: 0, duration: 0.6 });
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
        const el = move.current;
        const el2 = move2.current;
        const el3 = move3.current;
        const el4 = heading.current;
        const el5 = heading2.current;
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
            const el = move.current;
            const el2 = move2.current;
            const el3 = move3.current;
            const el4 = heading.current;
            const el5 = heading2.current;
            gsap.fromTo(el4, { y: -250 }, { y: 0, duration: 0.6 });
            gsap.fromTo(el5, { y: -250 }, { y: 0, duration: 0.6 });

        } else {
            let tl = gsap.timeline();

            tl.from([el11, el12, el13], {
                duration: 0.5,
                y: 500,
                autoAlpha: -5,
                ease: "Power2.out",
            })
            gsap.to(el6, { x: 1400, duration: 0.5 });
            gsap.to(el7, { x: 400, duration: 0.25 });
            gsap.to(el8, { x: 400, duration: 0.25 });
            gsap.to(el9, { x: 400, duration: 0.25 });
            gsap.to(el10, { x: 400, duration: 0.5 });

        }
    }

    return (
        <div className='w-full h-[62rem] bg-[#e0191a]' ref={track}>
            {/* <div className='w-full h-[100rem]'> */}
            <button className='absolute z-50 top-5 left-8 flex' onClick={() => setrotate(!rotate)}>
                <Hamburger color='white' size={30} rounded toggled={rotate} toggle={setrotate} onToggle={handleAnimation} />
            </button>
            <img alt="Aadesh Masala Logo" src="/Aadesh English Logo.png" className='absolute z-50 top-[1rem] left-[50%] h-[7rem] w-[7rem] mx-auto py-5' />
            <div className={`bg-[#e0191a] z-30 absolute h-[61rem] w-[120rem] left-[-120rem]`} ref={banner}></div>
            {/* bg-[#e0191a] */}
            <>

                <div className=' z-30 bg-[#e0191a] absolute w-[35rem] h-[17rem] top-[0rem] left-[15rem]'>
                </div>

                <div className={`inline-block absolute z-20 mt-[17rem] ml-[15rem]`} ref={heading}>
                    <p className="text-[#EBFE00] font text-[5.5rem] scale-y-[100%]">Indian Spices</p>
                </div>


                <div className={`inline-block w-[25rem] absolute mt-[26rem] ml-[15rem]`} ref={heading2}>
                    <p className="text-[1.5rem] text-white">An amazing range of spices, healthy and nutritious</p>
                    <Link href="/products">
                        <button className='px-10 my-2 py-2 border-4 border-[#EBFE00] rounded-[3rem] text-2xl text-[#EBFE00]'>
                            Products
                        </button>
                    </Link>
                </div>

                <div className='absolute top-[-10rem] left-[59rem] -rotate-12' ref={move}>
                    <img alt="Aadesh Masala Logo" src="/products/ChikenMasala.png" className='h-[20rem] w-[19rem]' ref={img} />
                </div>
                <div className='absolute top-[1.5rem] left-[49.75rem] -rotate-6' ref={move2}>
                    <img alt="Aadesh Masala Logo" src="/products/ChanaBesan.png" className='h-[20rem] w-[19rem]' />
                </div>
                <div className='absolute top-[22rem] left-[30rem]' ref={move3}>
                    <img alt="Aadesh Masala Logo" src="/products/JaljeeraMasala.png" className='h-[20rem] w-[19rem] origin-center' />
                </div>
            </>

            <div className='absolute z-40 bg-[#e0191a] w-[5rem] h-[8.5rem] top-[13rem]'>
            </div>
            <div className='absolute z-30 top-[5rem] left-[-20rem] '>
                <Link href="/products">
                    <p className="text-white transition-all delay-10 duration-200 ease-linear hover:tracking-[0.25rem] font text-[5rem] scale-y-[120%] mt-[10rem] w-[35rem]" ref={list}>Products</p>
                </Link>
            </div>
            <div className='absolute z-40 bg-[#e0191a] w-[5rem] h-[8.5rem] top-[22rem]'>
            </div>
            <div className='absolute z-30 top-[14rem] left-[-20rem]'>
                <Link href="/about">
                    <p className="text-white transition-all delay-10 duration-200 ease-linear hover:tracking-[0.25rem] font text-[5rem] scale-y-[120%] mt-[10rem] w-[35rem]" ref={list2}>About Us</p>
                </Link>
            </div>
            <div className='absolute z-40 bg-[#e0191a] w-[5rem] h-[8.5rem] top-[31rem]'>
            </div>
            <Link href="/contact">
                <div className='absolute z-30 top-[23rem] left-[-20rem]'>
                    <p className="text-white transition-all delay-10 duration-200 ease-linear hover:tracking-[0.25rem] font text-[5rem] scale-y-[120%] mt-[10rem] w-[35rem]" ref={list3}>Contact Us</p>
                </div>
            </Link>

            <div className='absolute z-40 bg-[#e0191a] w-[5rem] h-[4rem] top-[42rem]'>
            </div>

            <div className='absolute z-30 w-[30rem] top-[34rem] left-[-20rem] flex' ref={list4}>
                <Link href="#" className='w-[7.5rem]'>
                    <p className="text-white transition-all delay-10 duration-200 ease-linear font text-[1rem] scale-y-[120%] mt-[10rem] w-[35rem]" >FACEBOOK</p>
                </Link>
                <Link href="#" className='w-[8rem]'>
                    <p className="text-white transition-all delay-10 duration-200 ease-linear font text-[1rem] scale-y-[120%] mt-[10rem] w-[35rem]" >INSTAGRAM</p>
                </Link>
                <Link href="#" className='w-[7.5rem]'>
                    <p className="text-white transition-all delay-10 duration-200 ease-linear font text-[1rem] scale-y-[120%] mt-[10rem] w-[35rem]">TWITTER</p>
                </Link>
            </div>

            {
                <div className={!rotate ? 'absolute z-[-10] top-[30rem] left-[55rem]' : 'absolute z-40 top-[30rem] left-[55rem]'} ref={show}>
                    <img alt="Aadesh Masala Logo" src="/products/ChikenMasala.png" className='h-[12rem] w-[11rem] -rotate-3' ref={cnt} />
                </div>
            }
            {
                <div className={!rotate ? 'absolute z-[-10] top-[7rem] left-[50rem]' : 'absolute z-40 top-[7rem] left-[45rem]'} ref={show2}>
                    <img alt="Aadesh Masala Logo" src="/products/JaljeeraMasala.png" className='h-[12rem] w-[11rem] -rotate-12' ref={cnt2} />
                </div>
            }

            {
                <div className={!rotate ? 'absolute z-[-10] top-[14rem] left-[75rem]' : 'absolute z-40 top-[14rem] left-[75rem]'} ref={show3}>
                    <img alt="Aadesh Masala Logo" src="/products/ChanaBesan.png" className='h-[12rem] w-[11rem] rotate-12' ref={cnt3} />
                </div>
            }
            {/* {
                // rotate &&
            
                    <div className={!rotate ? 'absolute z-[-10] top-[25rem] left-[35rem]' : 'absolute z-40 top-[25rem] left-[35rem]'} ref={show}>
                        <img alt="Aadesh Masala Logo" src="/products/JaljeeraMasala.png" className='h-[20rem] w-[19rem]' />
                    </div>

            } */}




        </div>
    )
}

export default Hero;