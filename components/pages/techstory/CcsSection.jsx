import React from 'react'
import Image from 'next/image'
import BottomLoader from '../../widgets/BottomLoader'

function CcsSection(props) {
    return (
        <div>
            <section className='bg-black aspect-16/8 snap-center relative sm:hidden' id='ccs-id' ref={props.ccsSection}>
                <div className="flex h-full">
                    {/* SIDE CONTENTS */}
                    <div className='w-2/6 flex flex-col justify-center pl-20 pr-4 z-20'>
                        <div className="title mb-14">
                            <h2 className=' font-oswald font-light text-4xl tracking-wide'
                                ref={(el) => (props.titlesAnim.current[4] = el)}>
                                Charge anywhere.
                            </h2>
                            <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                        </div>
                        <div className="contents text-xl tracking-wide text-greytext">
                            <p ref={(el) => (props.parasAnim.current[4] = el)}>
                                Our motorcycles are the first two-wheelers to support the CCS 2 charging standard, which
                                lets you use any existing public charging station to power your vehicle.
                            </p>
                        </div>
                    </div>
                    <div className='absolute flex items-end'>
                        <Image
                            src="/images/11.png"
                            width={1920}
                            height={1080}
                            priority={true}
                            alt='Motor for electric motorcycle -high-voltage drive-train - traction control bike'
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
                            <h2 className='text-3xl font-light font-oswald 
                                    tracking-wide my-4'>Charge anywhere.</h2>
                            <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                            <div className="contents text-lg tracking-wide text-greytext">
                                <p>
                                    Our motorcycles are the first two-wheelers to support the CCS 2 charging standard, which
                                    lets you use any existing public charging station to power your vehicle.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='overflow-hidden shadow-edgeBlur'>
                        <div className='h-64 w-full top-0
                        bg-ccsbg bg-cover bg-no-repeat bg-right scale-125 ease-in duration-500'></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CcsSection