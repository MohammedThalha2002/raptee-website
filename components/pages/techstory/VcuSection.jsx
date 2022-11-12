import React from 'react'
import Image from 'next/image'
import BottomLoader from '../../widgets/BottomLoader'

function VcuSection(props) {
    return (
        <div>
            <section className='bg-black aspect-16/8 snap-center relative sm:hidden' id='vcu-id' ref={props.vcuSection}>
                <div className="flex h-full">
                    {/* SIDE CONTENTS */}
                    <div className='w-2/6 flex flex-col justify-center pl-20 pr-4'>
                        <div className="title mb-14">
                            <h2 className=' font-oswald font-light text-4xl tracking-wide' ref={(el) => (props.titlesAnim.current[1] = el)}>
                                VCU: The Brain.
                            </h2>
                            <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                        </div>
                        <div className="contents text-base tracking-wide text-greytext">
                            <h3 className='text-xl' ref={(el) => (props.parasAnim.current[1] = el)}>
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
                            height={900}
                            priority={true}
                            alt='Raptee Motors'
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
                            <div className="contents text-lg tracking-wide text-greytext">
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
                </div>
            </section>
        </div>
    )
}

export default VcuSection