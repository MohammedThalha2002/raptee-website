import NavBar from '../../components/NavBar'
import ReserveBtn from '../../components/ReserveBtn'
import BottomLoader from '../../components/BottomLoader'
import SideActiveIndicator from '../../components/SideActiveIndicatorHome'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import SideActiveIndicatorTechStory from '../../components/SideActiveIndicatorTechStory'

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
    useEffect(() => {
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
            <NavBar></NavBar>
            <SideActiveIndicatorTechStory index={sectionIndex}></SideActiveIndicatorTechStory>
            {/* OUR PRODUCTS SECTION */}
            <section className='bg-black aspect-video snap-center relative' id='products-id' ref={productsSection}>
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
                                tracking-widest mb-4'>We Conceive and Create</h3>
                            <h1 className='text-4xl font-thin font-mont tracking-widest'>Our Products</h1>
                            <div className="underline w-10 h-0.5 rounded-xl my-2 bg-highlight"></div>
                            <h4 className='text-2xl font-thin font-mont tracking-widest'>
                                We have developed 90% of the components <br />
                                in-house which are best altered for our Indian <br />
                                roads.</h4>
                        </div>
                    </div>
                    <BottomLoader></BottomLoader>
                </div>
            </section>
            {/* VCU SECTION */}
            <section className='bg-black aspect-video snap-center relative' id='vcu-id' ref={vcuSection}>
                <div className="flex h-full">
                    {/* SIDE CONTENTS */}
                    <div className='w-2/6 flex flex-col justify-center pl-20 pr-4 z-20'>
                        <div className="title mb-14">
                            <h2 className=' font-oswald font-light text-4xl tracking-wide'>VCU</h2>
                            <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                        </div>
                        <div className="contents text-lg tracking-wide text-gray-500">
                            <h3>
                                The VCU controls every other subsystem of the vehicle,
                                and continuously monitors data received from it,
                            </h3>
                            <h3>
                                which is then optimized using ML algorithms to enable
                                features like throttle mapping, fast charging and over-the-air updates.
                            </h3>
                        </div>
                    </div>
                    <div className='h-full absolute'>
                        <Image
                            src="/images/2.png"
                            width={1920}
                            height={1080}
                            priority={true}
                        />
                    </div>
                </div>
                <BottomLoader></BottomLoader>
            </section>
            {/* BMS SECTION */}
            <section className='bg-black aspect-video snap-center relative' id='bms-id' ref={bmsSection}>
                <div className="flex h-full">
                    {/* SIDE CONTENTS */}
                    <div className='w-2/6 flex flex-col justify-center pl-20 pr-4'>
                        <div className="title mb-14">
                            <h2 className=' font-oswald font-light text-4xl tracking-wide'>BMS</h2>
                            <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                        </div>
                        <div className="contents text-lg tracking-wide text-gray-500">
                            <h3>
                                Longer Distance on a Single Charge with Adaptive Charging
                            </h3>
                            <h3>
                                Charge Cycle Management: Safety is important to us.
                                Yours as well as the battery&#39;s
                            </h3>
                            <h3>
                                Active balancing: Perfectly balanced, as everything should be.
                            </h3>
                        </div>
                    </div>
                    <div className='w-2/3 h-full flex items-end relative'>
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
            {/* MOTOR SECTION */}
            <section className='bg-black aspect-video snap-center relative' id='motor-id' ref={motorSection}>
                <div className="flex h-full">
                    {/* SIDE CONTENTS */}
                    <div className='w-2/6 flex flex-col justify-center pl-20 pr-4'>
                        <div className="title mb-14">
                            <h2 className=' font-oswald font-light text-4xl tracking-wide'>MOTOR</h2>
                            <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                        </div>
                        <div className="contents text-lg tracking-wide text-gray-500">
                            <h3>
                                Raptee&#39;s Electric Drivetrain is a high-powered software driven
                                vehicle developed in house to adapt to various driving conditions for the Indian roads.
                            </h3>
                            <h3>
                                It is backed by the control logics of the VCU that can be adjusted to
                                the rider&#39;s needs, be it ECO mode with enhanced range or the POWER mode
                                with quick acceleration.
                            </h3>
                            <h3>
                                With a motor controller developed to suit our high voltage drivetrain,
                                RED can extract the most out of the permanent magnet synchronous motor in the most efficient manner.
                            </h3>
                        </div>
                    </div>
                    <div className='w-2/3 h-full flex items-end relative'>
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
            {/* CCS SECTION */}
            <section className='bg-black aspect-video snap-center relative' id='ccs-id' ref={ccsSection}>
                <div className="flex h-full">
                    {/* SIDE CONTENTS */}
                    <div className='w-2/6 flex flex-col justify-center pl-20 pr-4 z-20'>
                        <div className="title mb-14">
                            <h2 className=' font-oswald font-light text-4xl tracking-wide'>CCS-2</h2>
                            <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                        </div>
                        <div className="contents text-lg tracking-wide text-gray-500">
                            <h3>
                                Our vehicles are the first two-wheelers that support the CCS 2 charging standard,
                                which enables riders to use any existing public charging station to power their vehicles.
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
            {/* Saftey SECTION */}
            <section className='bg-black aspect-video snap-center relative' id='safety-id' ref={safetySection}>
                <div className="flex h-full">
                    {/* SIDE CONTENTS */}
                    <div className='w-2/6 flex flex-col justify-center pl-20 pr-4 z-20'>
                        <div className="title mb-14">
                            <h2 className=' font-oswald font-light text-4xl tracking-wide'>Safety</h2>
                            <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                        </div>
                        <div className="contents text-lg tracking-wide text-gray-500">
                            <h3>
                                Safer rides with traction control that reduces vehicle slip and blind spot warning that avoids
                                unexpected collisions.
                            </h3>
                            <h3>
                                Over-the-air software upgrades to increase the efficiency of individual
                                components and track factors that cause to efficiency reduction.
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
        </div>
    )
}

export default Techstory