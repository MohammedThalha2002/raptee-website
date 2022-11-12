import React from 'react'
import Image from 'next/image'
import BottomLoader from '../../widgets/BottomLoader'

function BmsSection(props) {
    return (
        <div>
            {/* BMS SECTION */}
            <section className='bg-black aspect-16/8 snap-center relative sm:hidden' id='bms-id' ref={props.bmsSection}>
                <div className="flex h-full">
                    {/* SIDE CONTENTS */}
                    <div className='w-2/6 flex flex-col justify-center pl-20 pr-4'>
                        <div className="title mb-14">
                            <h2 className=' font-oswald font-light text-4xl tracking-wide'
                                ref={(el) => (props.titlesAnim.current[2] = el)}>
                                BMS: Zeus to the Batteries.
                            </h2>
                            <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                        </div>
                        <div className="contents text-xl tracking-wide text-greytext">
                            <h3 ref={(el) => (props.parasAnim.current[2] = el)}>
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
                            alt='Raptee Motors'
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
                            <div className="contents text-lg tracking-wide text-greytext">
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
        </div>
    )
}

export default BmsSection