import React from 'react'
import Image from 'next/image'
import BottomLoader from '../../widgets/BottomLoader'

function AboutSection(props) {
    return (
        <div>
            {/* ABOUT SECTION - DESKTOP*/}
            <section className='bg-black aspect-16/8 snap-center relative sm:hidden' id='about-id' ref={props.aboutSection}>
                <div className="flex h-full">
                    {/* SIDE CONTENTS */}
                    <div className='w-2/5 flex flex-col mt-16 pl-20 pr-20'>
                        <div className="title mb-14" ref={(el) => (props.titlesAnim.current[1] = el)}>
                            <h2 className=' font-oswald font-light text-4xl tracking-wide'>Our Story</h2>
                            <div className="underline w-10 h-0.5 rounded-xl my-2 bg-highlight"></div>
                        </div>
                        <div ref={(el) => (props.parasAnim.current[0] = el)}>
                            <div className="contents text-2xl tracking-wide text-gray-500">
                                <h2 style={{ color: props.about1 }} ref={props.about1Ref} >We at Raptee are driven by an innovative spirit to redefine electric mobility.</h2>
                                <h2 style={{ color: props.about2 }} ref={props.about2Ref} >Our motorcycles are intuitive and engineered to outperform conventionally powered vehicles - proving that switching to electric is not a sacrifice.</h2>
                                <h2 style={{ color: props.about3 }} ref={props.about3Ref} >They are intelligent, powerful, energy-efficient and loaded with cutting-edge technology to augment every single ride you take.</h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/5'>
                        <Image
                            src="/images/5.png"
                            width={1204}
                            height={950}
                            priority={true}
                            alt='Raptee Motors'
                        />
                    </div>
                </div>
                <BottomLoader></BottomLoader>
            </section>
            {/* ABOUT PAGE - MOBILE */}
            <section className='bg-black hidden sm:block'>
                <div className='flex flex-col'>
                    <div className="title mb-8 mt-16 pl-4">
                        <h2 className=' font-oswald font-light text-4xl tracking-wide'>Our Story</h2>
                        <div className="underline w-10 h-0.5 rounded-xl my-2 bg-highlight"></div>
                    </div>
                    <div className="text-base w-10/12 pl-4">
                        <span style={{ color: 'white' }}>We at Raptee are driven by an innovative spirit to redefine electric mobility.</span>
                        <span style={{ color: 'white' }}>Our motorcycles are intuitive and engineered to outperform conventionally powered vehicles</span>
                        <span style={{ color: 'white' }}>- proving that switching to electric is not a sacrifice.</span>
                        <span style={{ color: 'white' }}>They are intelligent, powerful, energy-efficient and loaded with cutting-edge technology to augment every single ride you take.</span>
                    </div>
                    <div className='overflow-hidden'>
                        <div className='h-72 bg-aboutbg bg-cover scale-110 bg-no-repeat bg-center ease-in duration-500'>
                        </div>
                    </div>
                </div>
            </section>
            {/*  */}
        </div>
    )
}

export default AboutSection