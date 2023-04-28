import React from 'react'
import Image from 'next/image'
import BottomLoader from '../../widgets/BottomLoader'

function MotorSection(props) {
    return (
        <div>
            <section className='bg-black aspect-16/8 snap-center relative sm:hidden' id='motor-id' ref={props.motorSection}>
                <div className="flex h-full">
                    {/* SIDE CONTENTS */}
                    <div className='w-2/6 flex flex-col justify-center pl-20 pr-4'>
                        <div className="title mb-14">
                            <h2 className=' font-oswald font-light text-4xl tracking-wide' ref={(el) => (props.titlesAnim.current[3] = el)}>
                                Motor and Motor Controller: The Hercules.
                            </h2>
                            <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                        </div>
                        <div className="contents text-xl tracking-wide text-greytext">
                            <p ref={(el) => (props.parasAnim.current[3] = el)}>
                                Raptee&#39;s Electric Drivetrain (RED) is a high-powered software driven vehicle developed in
                                house to adapt to various driving conditions for the Indian roads. It is backed by the
                                control logics of the VCU that can be adjusted to the rider&#39;s needs, be it ECO mode with
                                enhanced range or the POWER mode with quick acceleration.
                                With a motor controller developed to suit our high voltage drivetrain, RED can extract the
                                most out of the permanent magnet synchronous motor we use, in the most efficient
                                manner
                            </p>
                        </div>
                    </div>
                    <div className='w-2/3 h-full flex items-end relative sm:hidden'>
                        <Image
                            src="/images/3.png"
                            width={1920}
                            height={1080}
                            priority={true}
                            alt='Motor for electric motorcycle - high-voltage drive-train - traction control bike'
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
                                    tracking-wide my-4'>Motor and Motor Controller: The Hercules.</h3>
                            <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                            <div className="contents text-lg tracking-wide text-greytext">
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
                </div>
            </section>
        </div>
    )
}

export default MotorSection