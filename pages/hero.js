import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { Spin as Hamburger } from 'hamburger-react'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
import ReactCurvedText from 'react-curved-text';
import Button from './components/Button/index'
import Menu from './components/Menu';
import useWindowSize from '../utils/ResizeHook'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Hero = () => {
    const [rotate, setrotate] = useState(false);
    const [width, setwidth] = useState(1024)
    const size = useWindowSize();
    useEffect(() => {
      setwidth(size.width)  
    }, [size])

    const track = useRef(null);
    const move = useRef(null);
    const move2 = useRef(null);
    const move3 = useRef(null);
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
    const path = useRef(null);
    useEffect(() => {
        const t = track.current;
        const el = move.current;
        const el2 = move2.current;
        const el3 = move3.current;
        const el4 = heading.current;
        const el5 = heading2.current;
        const el6 = path.current;

        gsap.to(el,
            {
                duration: 100,
                ease: 'none',
                motionPath: {
                    path: el6,
                    align: el6,
                    start: 0.66,
                    end: 0.99,
                },
                rotation: -50,
                scrollTrigger: {
                    trigger: t,
                    start: '2',
                    end: '+=1200',
                    scrub: true,
                }
            });
        gsap.to(el2,
            {
                duration: 100,
                ease: 'none',
                motionPath: {
                    path: el6,
                    align: el6,
                    start: 0.33,
                    end: 0.66,
                },
                rotation: -30,
                scrollTrigger: {
                    trigger: t,
                    start: '2',
                    end: '+=1200',
                    scrub: true,
                }
            });
        gsap.to(el3,
            {
                duration: 100,
                ease: 'none',
                motionPath: {
                    path: el6,
                    align: el6,
                    start: 0,
                    end: 0.33,
                },
                rotation: -20,
                scrollTrigger: {
                    trigger: t,
                    start: '2',
                    end: '+=1200',
                    scrub: true,
                }
            });

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
            gsap.to(el6, { x: 3000, duration: 0.5 });
            gsap.to(el7, { x: 400, duration: 0.25 });
            gsap.to(el8, { x: 400, duration: 0.25 });
            gsap.to(el9, { x: 400, duration: 0.25 });
            gsap.to(el10, { x: 400, duration: 0.5 });

        }
    }

    return (
        <div className="overflow-x-hidden">
            <svg className='absolute top-[-10%] left-[12rem] text-transparent max-lg:top-[15%] max-lg:left-[9rem] max-sm:left-[4rem] max-sm:top-[13rem]' viewBox="0 0 1620 1280" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                <path ref={path} d="M0,708.473914Q1304.811396,713.1978,1404.013008,80.197041" transform="translate(0 0.000001)" fill="none" stroke="#3f5787" strokeWidth="0"/>
            </svg>
            <div className='w-full h-[55rem] max-lg:h-[40rem] max-md:h-[28rem] max-sm:h-[24rem] bg-[#e0191a] overflow-hidden' ref={track}>
                <img alt="Aadesh Masala Logo" src="aadesh.png" className='absolute z-50 top-[1rem] translate-x-[-50%] left-[50%] h-[10rem] w-[10rem] mx-auto py-5 max-sm:w-[6rem] max-sm:h-[7rem]' />
                <div>
                    <div className='z-30 bg-[#e0191a] absolute w-[40.5rem] h-[7.25rem] top-[0rem] left-[7rem] max-lg:w-[25.5rem] max-lg:left-[5.5rem] max-md:w-[21rem] max-sm:left-[3rem] max-sm:w-[10.5rem]'>
                    </div>
                    <div className='font' ref={heading}>
                        <ReactCurvedText
                            width={900}
                            height={600}
                            cx={width >1024 ? 280 :width > 640 ? 200 : 100}
                            cy={width >1024 ? 290 : width > 640 ? 260 : 225}
                            rx={width >1024 ? 130 : width > 640 ? 90 : 40}
                            ry={width >1024 ? 130 : width > 640 ? 90 : 40}
                            startOffset={width > 1024 ? 40 : width > 640 ? 25 : 10}
                            reversed={true}
                            text="Indian Spices"
                            textProps={{
                                style: {
                                    fontSize: width >1024 ? 50: width > 640 ? 30 : 15,
                                }
                            }}
                            textPathProps={{ "fill": "#EBFE00" }}
                            tspanProps={null}
                            ellipseProps={null}
                            svgProps={null}
                        />
                    </div>
                    <div className={`inline-block w-[50%] absolute mt-[-25rem] ml-[12rem] max-lg:ml-[8.5rem] max-sm:ml-[4.3rem]`} ref={heading2}>
                        <p className='text-[#EBFE00] title text-[3rem] max-lg:text-[2.5rem] max-md:text-[2rem] max-sm:text-[1rem]'>AADESH MASALE</p>
                        <p className="text-[1.5rem] text-gray-200 max-lg:text-[0.75rem] max-md:text-[0.55rem] max-sm:text-[0.35rem]">An amazing range of spices, healthy and nutritious</p>
                            <Button text={"Products"}/>
                    </div>
                    <div className='absolute top-[2rem] left-[70%] -rotate-[40deg]' ref={move}>
                        <img alt="Aadesh Masala Logo" src="/products/ChikenMasala.png" className='h-[20rem] w-[19rem] max-lg:h-[11rem] max-lg:w-[10rem] max-md:w-[7rem] max-md:h-[8rem] max-sm:w-[4rem] max-sm:h-[5rem]' />
                    </div>
                    <div className='absolute top-[1.5rem] left-[50%] -rotate-[15deg]' ref={move2}>
                        <img alt="Aadesh Masala Logo" src="/products/ChanaBesan.png" className='h-[20rem] w-[19rem] max-lg:h-[11rem] max-lg:w-[10rem] max-md:w-[7rem] max-md:h-[8rem] max-sm:w-[4rem] max-sm:h-[5rem]' />
                    </div>
                    <div className='absolute top-[22rem] left-[30%]' ref={move3}>
                        <img alt="Aadesh Masala Logo" src="/products/JaljeeraMasala.png" className='h-[20rem] w-[19rem] max-lg:h-[11rem] max-lg:w-[10rem] max-md:w-[7rem] max-md:h-[8rem] max-sm:w-[4rem] max-sm:h-[5rem]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;