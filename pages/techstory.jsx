import NavBar from '../components/NavBar'
import BottomLoader from '../components/BottomLoader'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useEffect, useRef, useState } from 'react'
import SideActiveIndicatorTechStory from '../components/SideActiveIndicatorTechStory'
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function Techstory() {
    const productsSection = useRef()
    const vcuSection = useRef()
    const bmsSection = useRef()
    const motorSection = useRef()
    const ccsSection = useRef()
    const safetySection = useRef()
    const [sectionIndex, setSectionIndex] = useState(1)
    let observerOptions = {
        rootMargin: '20px',
        threshold: 0.4
    }

    //animations
    const titlesAnim = useRef([])
    const parasAnim = useRef([])

    useEffect(() => {
        // titles animation
        titlesAnim.current.forEach((val, index) => {
            gsap.fromTo(titlesAnim.current[index],
                { opacity: 0, x: -100 },
                {
                    opacity: 1, x: 0, duration: 2, ease: "ease-in",
                    scrollTrigger: {
                        trigger: titlesAnim.current[index],
                        toggleActions: 'restart none none none'
                    }
                },
            )
        })
        //paras animations
        parasAnim.current.forEach((val, index) => {
            gsap.fromTo(parasAnim.current[index],
                { opacity: 0, y: 100 },
                {
                    opacity: 1, y: 0, duration: 2, ease: "ease-in",
                    scrollTrigger: {
                        trigger: parasAnim.current[index],
                        toggleActions: 'restart none none none'
                    }
                },
            )
        })
        const techSectionObserver = new IntersectionObserver(observerCallback, observerOptions)
        function observerCallback(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id == 'products-id') {
                        // console.log("Homepage")
                        setSectionIndex(1)
                    } else if (entry.target.id == 'vcu-id') {
                        // console.log("About")
                        setSectionIndex(2)
                    } else if (entry.target.id == 'bms-id') {
                        // console.log("Zero")
                        setSectionIndex(3)
                    } else if (entry.target.id == 'motor-id') {
                        // console.log("Performance")
                        setSectionIndex(4)
                    } else if (entry.target.id == 'ccs-id') {
                        // console.log("Performance")
                        setSectionIndex(5)
                    } else if (entry.target.id == 'safety-id') {
                        // console.log("Performance")
                        setSectionIndex(6)
                    } else {
                        // console.log("else")
                        setSectionIndex(1)
                    }
                }
            });
        };
        techSectionObserver.observe(productsSection.current)
        techSectionObserver.observe(vcuSection.current)
        techSectionObserver.observe(bmsSection.current)
        techSectionObserver.observe(motorSection.current)
        techSectionObserver.observe(ccsSection.current)
        techSectionObserver.observe(safetySection.current)

    }, [])

    return (
        <div className='bg-black'>
            <NavBar mobile={false}></NavBar>
            <SideActiveIndicatorTechStory index={sectionIndex}></SideActiveIndicatorTechStory>
            {/*  */}
            {/* OUR PRODUCTS SECTION - DESKTOP*/}
            <div >
                <section className='bg-black aspect-16/8 snap-center relative sm:hidden' id='products-id' ref={productsSection}>
                    <div className=' h-12 '></div>
                    <div>
                        <Image
                            src="/images/7.png"
                            width="1920"
                            height="1080"
                            priority={true}
                        />
                        <div className="absolute left-0 top-20 pl-20 pt-6 ">
                            <div className="content text-left">
                                <h3 className='text-4xl font-light font-oswald 
                                    tracking-widest mb-4' ref={(el) => (titlesAnim.current[0] = el)}>
                                    Technology engineered beyond boundaries.
                                </h3>
                                <h4 className='text-2xl font-thin tracking-widest' ref={(el) => (parasAnim.current[0] = el)}>
                                    90% of our technology has been engineered in-house, <br />
                                    keeping in mind the conditions and requirements of our <br />
                                    Indian roads.</h4>
                            </div>
                        </div>
                        <BottomLoader></BottomLoader>
                    </div>
                </section>
                {/* OUR PRODUCTS SECTION - MOBILE*/}
                <section className='bg-black hidden sm:block' id='products-id' ref={productsSection}>
                    <div className=' h-12 '></div>
                    <div>
                        <div className='h-screen w-full top-0
                    bg-techstorybg bg-cover bg-no-repeat bg-techstorybp ease-in duration-500'>
                            <div className="text-left pl-4 pr-8">
                                <h3 className='text-3xl font-light font-oswald 
                                    tracking-wide my-4'>Technology engineered beyond boundaries.</h3>
                                <h4 className='text-xl font-thin tracking-wide'>
                                    90% of our technology has been engineered in-house, <br />
                                    keeping in mind the conditions and requirements of our <br />
                                    Indian roads.</h4>
                            </div>
                        </div>
                        {/* <BottomLoader></BottomLoader> */}
                    </div>
                </section>
                {/* VCU SECTION */}
                <section className='bg-black aspect-16/8 snap-center relative sm:hidden' id='vcu-id' ref={vcuSection}>
                    <div className="flex h-full">
                        {/* SIDE CONTENTS */}
                        <div className='w-2/6 flex flex-col justify-center pl-20 pr-4'>
                            <div className="title mb-14">
                                <h2 className=' font-oswald font-light text-4xl tracking-wide' ref={(el) => (titlesAnim.current[1] = el)}>
                                    VCU: The Brain.
                                </h2>
                                <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                            </div>
                            <div className="contents text-base tracking-wide text-gray-500">
                                <h3 className='text-xl' ref={(el) => (parasAnim.current[1] = el)}>
                                    The VCU controls every other subsystem of the vehicle,
                                    and continuously monitors data received from it,
                                    which is then optimized using ML algorithms to enable
                                    features like throttle mapping, fast charging and over-the-air updates.
                                </h3>
                            </div>
                        </div>
                        <div className='w-2/3 h-full flex items-end'>
                            <Image
                                src="/images/2.png"
                                width={1200}
                                height={950}
                                priority={true}
                            />
                        </div>
                    </div>
                    <BottomLoader></BottomLoader>
                </section>
                {/* VCU SECTION - MOBILE*/}
                <section className='bg-black hidden sm:block'>
                    <div className='flex relative flex-col'>
                        <div className='my-8'>
                            <div className="text-left pl-4 pr-8">
                                <h3 className='text-3xl font-light font-oswald 
                                    tracking-wide my-4'>VCU: The Brain.</h3>
                                <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                                <div className="contents text-lg tracking-wide text-gray-500">
                                    <h3>
                                        The VCU controls every other subsystem of the vehicle,
                                        and continuously monitors data received from it,
                                        which is then optimized using ML algorithms to enable
                                        features like throttle mapping, fast charging and over-the-air updates.
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden'>
                            <div className='h-60 w-full top-0
                        bg-vcubg bg-cover bg-no-repeat bg-center scale-125 ease-in duration-500'></div>
                        </div>
                        {/* <BottomLoader></BottomLoader> */}
                    </div>
                </section>
                {/* BMS SECTION */}
                <section className='bg-black aspect-16/8 snap-center relative sm:hidden' id='bms-id' ref={bmsSection}>
                    <div className="flex h-full">
                        {/* SIDE CONTENTS */}
                        <div className='w-2/6 flex flex-col justify-center pl-20 pr-4'>
                            <div className="title mb-14">
                                <h2 className=' font-oswald font-light text-4xl tracking-wide'
                                    ref={(el) => (titlesAnim.current[2] = el)}>
                                    BMS: Zeus to the Batteries.
                                </h2>
                                <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                            </div>
                            <div className="contents text-xl tracking-wide text-gray-500">
                                <h3 ref={(el) => (parasAnim.current[2] = el)}>
                                    State-of-the-art ML algorithms analyze variance in cell behaviour and choose the best
                                    charging approach to reduce loss and boost efficiency, thus extending your motorcycle&#39;s
                                    range.
                                    Effective Charge Cycle Management ensures top-notch safety - both yours, and your
                                    battery&#39;s. It protects cells against aggressive usage, and fast charging & discharging
                                    cycles, which results in a stable system providing many years of reliable service.
                                    Active balancing directs excess current from a cell approaching its charging limit to the
                                    next cell with a lower charge, ensuring that all cells are charged to their maximum limit.
                                </h3>
                            </div>
                        </div>
                        <div className='w-2/3 h-full flex items-end relative sm:hidden'>
                            <Image
                                src="/images/1.png"
                                width={1205}
                                height={1000}
                                priority={true}
                            />
                        </div>
                    </div>
                    <BottomLoader></BottomLoader>
                </section>
                {/* BMS SECTION - MOBILE*/}
                <section className='bg-black hidden sm:block'>
                    <div className='flex relative flex-col'>
                        <div className='my-8'>
                            <div className="text-left pl-4 pr-8">
                                <h3 className='text-3xl font-light font-oswald 
                                    tracking-wide my-4'>BMS: Zeus to the Batteries.</h3>
                                <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                                <div className="contents text-lg tracking-wide text-gray-500">
                                    <h3>
                                        State-of-the-art ML algorithms analyze variance in cell behaviour and choose the best
                                        charging approach to reduce loss and boost efficiency, thus extending your motorcycle&#39;s
                                        range.
                                        Effective Charge Cycle Management ensures top-notch safety - both yours, and your
                                        battery&#39;s. It protects cells against aggressive usage, and fast charging & discharging
                                        cycles, which results in a stable system providing many years of reliable service.
                                        Active balancing directs excess current from a cell approaching its charging limit to the
                                        next cell with a lower charge, ensuring that all cells are charged to their maximum limit.
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden'>
                            <div className='h-64 w-full top-0
                        bg-bmsbg bg-cover bg-no-repeat bg-center ease-in duration-500'></div>
                        </div>
                        {/* <BottomLoader></BottomLoader> */}
                    </div>
                </section>
                {/* MOTOR SECTION - DESKTOP*/}
                <section className='bg-black aspect-16/8 snap-center relative sm:hidden' id='motor-id' ref={motorSection}>
                    <div className="flex h-full">
                        {/* SIDE CONTENTS */}
                        <div className='w-2/6 flex flex-col justify-center pl-20 pr-4'>
                            <div className="title mb-14">
                                <h2 className=' font-oswald font-light text-4xl tracking-wide' ref={(el) => (titlesAnim.current[3] = el)}>
                                    Motor and motor controller:
                                </h2>
                                <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                            </div>
                            <div className="contents text-xl tracking-wide text-gray-500">
                                <h3 ref={(el) => (parasAnim.current[3] = el)}>
                                    Raptee&#39;s Electric Drivetrain (RED) is a high-powered software driven vehicle developed in
                                    house to adapt to various driving conditions for the Indian roads. It is backed by the
                                    control logics of the VCU that can be adjusted to the rider&#39;s needs, be it ECO mode with
                                    enhanced range or the POWER mode with quick acceleration.
                                    With a motor controller developed to suit our high voltage drivetrain, RED can extract the
                                    most out of the permanent magnet synchronous motor we use, in the most efficient
                                    manner
                                </h3>
                            </div>
                        </div>
                        <div className='w-2/3 h-full flex items-end relative sm:hidden'>
                            <Image
                                src="/images/3.png"
                                width={1920}
                                height={1080}
                                priority={true}
                            />
                        </div>
                    </div>
                    <BottomLoader></BottomLoader>
                </section>
                {/* MOTOR SECTION - MOBILE*/}
                <section className='bg-black hidden sm:block'>
                    <div className='flex relative flex-col'>
                        <div className='my-8'>
                            <div className="text-left pl-4 pr-8">
                                <h3 className='text-3xl font-light font-oswald 
                                    tracking-wide my-4'>Motor and motor controller:</h3>
                                <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                                <div className="contents text-lg tracking-wide text-gray-500">
                                    <h3>
                                        Raptee&#39;s Electric Drivetrain (RED) is a high-powered software driven vehicle developed in
                                        house to adapt to various driving conditions for the Indian roads. It is backed by the
                                        control logics of the VCU that can be adjusted to the rider&#39;s needs, be it ECO mode with
                                        enhanced range or the POWER mode with quick acceleration.
                                        With a motor controller developed to suit our high voltage drivetrain, RED can extract the
                                        most out of the permanent magnet synchronous motor we use, in the most efficient
                                        manner
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden'>
                            <div className='h-64 w-full top-0
                        bg-motorbg bg-cover bg-no-repeat bg-center ease-in duration-500'></div>
                        </div>
                        {/* <BottomLoader></BottomLoader> */}
                    </div>
                </section>
                {/* CCS SECTION -DESKTOP */}
                <section className='bg-black aspect-16/8 snap-center relative sm:hidden' id='ccs-id' ref={ccsSection}>
                    <div className="flex h-full">
                        {/* SIDE CONTENTS */}
                        <div className='w-2/6 flex flex-col justify-center pl-20 pr-4 z-20'>
                            <div className="title mb-14">
                                <h2 className=' font-oswald font-light text-4xl tracking-wide' 
                                ref={(el) => (titlesAnim.current[4] = el)}>
                                    Charge anywhere.
                                </h2>
                                <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                            </div>
                            <div className="contents text-xl tracking-wide text-gray-500">
                                <h3 ref={(el) => (parasAnim.current[4] = el)}>
                                    Our motorcycles are the first two-wheelers to support the CCS 2 charging standard, which
                                    lets you use any existing public charging station to power your vehicle.
                                </h3>
                            </div>
                        </div>
                        <div className='absolute flex items-end'>
                            <Image
                                src="/images/11.png"
                                width={1920}
                                height={1080}
                                priority={true}
                            />
                        </div>
                    </div>
                    <BottomLoader></BottomLoader>
                </section>
                {/* CCS SECTION - MOBILE*/}
                <section className='bg-black hidden sm:block'>
                    <div className='flex relative flex-col'>
                        <div className='mb-8'>
                            <div className="text-left pl-4 pr-8">
                                <h3 className='text-3xl font-light font-oswald 
                                    tracking-wide my-4'>Charge anywhere.</h3>
                                <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                                <div className="contents text-lg tracking-wide text-gray-500">
                                    <h3>
                                        Our motorcycles are the first two-wheelers to support the CCS 2 charging standard, which
                                        lets you use any existing public charging station to power your vehicle.
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden shadow-edgeBlur'>
                            <div className='h-64 w-full top-0
                        bg-ccsbg bg-cover bg-no-repeat bg-right scale-125 ease-in duration-500'></div>
                        </div>
                        {/* <BottomLoader></BottomLoader> */}
                    </div>
                </section>
                {/* Saftey SECTION */}
                <section className='bg-black aspect-video snap-center relative sm:hidden' id='safety-id' ref={safetySection}>
                    <div className="flex h-full">
                        {/* SIDE CONTENTS */}
                        <div className='w-2/6 flex flex-col justify-center pl-20 pr-4 z-10'>
                            <div className="title mb-14">
                                <h2 className=' font-oswald font-light text-4xl tracking-wide' 
                                ref={(el) => (titlesAnim.current[5] = el)}>
                                    Safety, like never before.
                                </h2>
                                <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                            </div>
                            <div className="contents text-xl tracking-wide text-gray-500">
                                <h3 ref={(el) => (parasAnim.current[5] = el)}>
                                    Get safer rides with traction control that reduces vehicle slip and blind spot warning that
                                    helps avoid unexpected collisions. Over-the-air software upgrades increase the efficiency
                                    of individual components and track factors that cause a reduction in efficiency.
                                </h3>
                            </div>
                        </div>
                        <div className='absolute flex items-end'>
                            <Image
                                src="/images/10.png"
                                width={1920}
                                height={1080}
                                priority={true}
                            />
                        </div>
                    </div>
                    <BottomLoader></BottomLoader>
                </section>
                {/* Safety SECTION - MOBILE*/}
                <section className='bg-black hidden sm:block'>
                    <div className='flex relative flex-col'>
                        <div className='mb-8'>
                            <div className="text-left pl-4 pr-8">
                                <h3 className='text-3xl font-light font-oswald 
                                    tracking-wide my-4'>Safety, like never before.</h3>
                                <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                                <div className="contents text-lg tracking-wide text-gray-500">
                                    <h3>
                                        Get safer rides with traction control that reduces vehicle slip and blind spot warning that
                                        helps avoid unexpected collisions. Over-the-air software upgrades increase the efficiency
                                        of individual components and track factors that cause a reduction in efficiency.
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden shadow-edgeBlur'>
                            <div className='h-64 w-full top-0
                        bg-safetybg bg-cover bg-no-repeat bg-right scale-125 ease-in duration-500'></div>
                        </div>
                        {/* <BottomLoader></BottomLoader> */}
                    </div>
                </section>
            </div>
            {/* FOOTER */}
            <Footer></Footer>
        </div>
    )
}

export default Techstory