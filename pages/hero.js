import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { Spin as Hamburger } from 'hamburger-react'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
import ReactCurvedText from 'react-curved-text';

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
                    { x: '6.25rem', y: '19rem' },
                    { x: '5rem', y: '24rem' }]
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
                    { x: '-6.5rem', y: '31.5rem' }]
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
        gsap.fromTo(el4, { y: -750 }, { y: 0, duration: 0.75 });
        gsap.fromTo(el5, { y: -750 }, { y: 0, duration: 0.6 });
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
            gsap.to(el6, { x: 2000, duration: 0.5 });
            gsap.to(el7, { x: 400, duration: 0.25 });
            gsap.to(el8, { x: 400, duration: 0.25 });
            gsap.to(el9, { x: 400, duration: 0.25 });
            gsap.to(el10, { x: 400, duration: 0.5 });

        }
    }

    return (
        <div className='w-full h-[62rem] bg-[#e0191a]' ref={track}>
            <button className='fixed z-50 top-5 left-8 flex' onClick={() => setrotate(!rotate)}>
                <Hamburger color='white' size={30} rounded toggled={rotate} toggle={setrotate} onToggle={handleAnimation} />
            </button>
            <img alt="Aadesh Masala Logo" src="/Aadesh English Logo.png" className='absolute z-50 top-[1rem] left-[50%] h-[10rem] w-[10rem] mx-auto py-5' />
            <div className={`bg-[#e0191a] z-30 fixed h-[61rem] w-[120rem] left-[-120rem]`} ref={banner}></div>
            <>
                <div className='z-30 bg-[#e0191a] absolute w-[50rem] h-[11.5rem] top-[0rem] left-[7rem]'>
                </div>

                <div className='font' ref={heading}>
                    <ReactCurvedText
                        width={680}
                        height={600}
                        cx={450}
                        cy={500}
                        rx={250}
                        ry={250}
                        startOffset={50}
                        reversed={true}
                        text="Indian Spices"
                        textProps={{
                            style: {
                                fontSize: 75,
                            }
                        }}
                        textPathProps={{ "fill": "#EBFE00" }}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null}
                    />
                </div>


                <div className={`inline-block w-[55rem] absolute mt-[-17rem] ml-[17rem]`} ref={heading2}>
                    <p className='text-[#EBFE00] title text-[5rem]'>AADESH MASALE</p>
                    <p className="text-[1.5rem] text-gray-200">An amazing range of spices, healthy and nutritious</p>
                    <Link href="/products">
                        <button className='px-10 my-5 py-2 border-4 border-[#EBFE00] rounded-[3rem] text-2xl text-[#EBFE00] hover:text-[#e0191a] hover:bg-[#EBFE00] hover:border-[#e0191a]'>
                            Products
                        </button>
                    </Link>
                </div>

                <div className='absolute top-[-10rem] left-[70%] -rotate-12' ref={move}>
                    <img alt="Aadesh Masala Logo" src="/products/ChikenMasala.png" className='h-[20rem] w-[19rem]' ref={img} />
                </div>
                <div className='absolute top-[1.5rem] left-[50%] -rotate-6' ref={move2}>
                    <img alt="Aadesh Masala Logo" src="/products/ChanaBesan.png" className='h-[20rem] w-[19rem]' />
                </div>
                <div className='absolute top-[22rem] left-[30%]' ref={move3}>
                    <img alt="Aadesh Masala Logo" src="/products/JaljeeraMasala.png" className='h-[20rem] w-[19rem] origin-center' />
                </div>
            </>
            <div className='fixed z-40 bg-[#e0191a] w-[5rem] h-[6rem] top-[13rem]'>
            </div>
            <div className='fixed z-30 top-[13rem] left-[-20rem] '>
                <Link href='/'>
                    <p className="text-white title relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[4rem] scale-y-[120%] px-3 h-[5rem] w-[13rem]" ref={list}>
                        <span>Home</span>
                        <span className="absolute left-0 -bottom-1 w-full h-0 bg-[#EBFE00] duration-200 delay-75 -z-10 group-hover:h-full group-hover:transition-all"></span>
                    </p>
                </Link>
            </div>
            <div className='fixed z-40 bg-[#e0191a] w-[5rem] h-[6rem] top-[20rem]'>
            </div>
            <div className='fixed z-30 top-[21rem] left-[-20rem]'>
                <Link href='/products'>
                    <p className="text-white title relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[4rem] scale-y-[120%] h-[5rem] px-3 w-[20rem]" ref={list2}>
                        <span>Products</span>
                        <span className="absolute left-0 -bottom-1 w-full h-0 bg-[#EBFE00] duration-200 delay-75 -z-10 group-hover:h-full group-hover:transition-all"></span>
                    </p>
                </Link>
            </div>
            <div className='fixed z-40 bg-[#e0191a] w-[5rem] h-[6rem] top-[28rem]'>
            </div>
            <div className='fixed z-30 top-[29rem] left-[-20rem]'>
                <Link href='/about'>
                    <p className="text-white title relative hover:text-[#e0191a] group transition-all delay-10 duration-200 ease-linear text-[4rem] scale-y-[120%] h-[5rem] px-3 w-[20rem]" ref={list3}>
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

export default Hero;