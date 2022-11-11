import React from 'react'
import BottomLoaderZeroSec from '../../widgets/BottomLoaderZeroSec'

function ZeroSection(props) {
    return (
        <div>
            {/* ZERO SECTION DESKTOP */}
            <section className='bg-black h-180vh relative sm:hidden' id='zero-id' ref={props.zeroSection}>
                <div className="h-full flex">
                    {/* titles and contents */}
                    <section className='h-screen w-2/6 bg-black sticky top-0'>
                        <div className="title mt-32 h-28 pl-20" ref={(el) => (props.titlesAnim.current[2] = el)}>
                            <h2 className=' font-oswald font-light text-4xl tracking-wide'>Zero</h2>
                            <div className="h-12 overflow-hidden">
                                <span className='block h-full font-oswald ease-in duration-500 font-light text-4xl tracking-wide'
                                    ref={props.zeroWord1}>Hassle</span>
                                <span className='block h-full font-oswald ease-in duration-500 font-light text-4xl tracking-wide'
                                    ref={props.zeroWord2}>Emissions</span>
                                <span className='block h-full font-oswald ease-in duration-500 font-light text-4xl tracking-wide'
                                    ref={props.zeroWord3}>Maintenance</span>
                            </div>
                            <div className="underline w-10 h-0.5 rounded-xl my-2 bg-highlight"></div>
                        </div>
                        {/* CONTENTS */}
                        <div className="h-80 w-96 mt-10 pl-20 overflow-hidden text-2xl" ref={(el) => (props.parasAnim.current[1] = el)}>
                            <span className="block h-full ease-in duration-1000 tracking-wide text-greytext "
                                ref={props.zeroCont1}>
                                <h3>
                                    Breakdowns, failures, and repairs are all things of the past.
                                    We promise not only a futuristic motorcycle, but also a futuristic
                                    and hassle-free riding experience.
                                </h3>
                            </span>
                            <span className="block h-full ease-in duration-1000 tracking-wide text-greytext"
                                ref={props.zeroCont2}>
                                <h3>
                                    We believe in doing what is best for the environment.
                                    Electric is the future, and  we&#39;re building for it right now.
                                </h3>
                            </span>
                            <span className="block h-full ease-in duration-1000 tracking-wide text-greytext"
                                ref={props.zeroCont3}>
                                <br />
                                <h3>
                                    No more needless part replacements. No more taking your vehicle to the
                                    service centre every few months.Sit back and relax while we look after your motorcycle.
                                    Rather, while the motorcycle looks after itself.
                                </h3>
                            </span>
                        </div>
                    </section>
                    {/* Image section */}
                    <section className='h-screen w-4/6 sticky top-0
                bg-zerobg1 bg-contain bg-no-repeat bg-center ease-in duration-500' ref={props.zeroImg}>
                        <BottomLoaderZeroSec></BottomLoaderZeroSec>
                    </section>
                </div>
            </section>
            {/* ZERO SECTION - MOBILE*/}
            <section className='bg-black h-180vh hidden sm:block'>
                <div className="h-full flex">
                    {/* titles and contents */}
                    <section className='h-screen bg-black sticky top-0'>
                        <div className='h-40vh'>
                            <div className="title mt-10 h-28 pl-4">
                                <h2 className=' font-oswald font-light text-4xl tracking-wide'>Zero</h2>
                                <div className="h-10 overflow-hidden">
                                    <span className='block h-full font-oswald ease-in duration-500 font-light text-3xl tracking-wide'
                                        ref={props.MzeroWord1}>Hassle</span>
                                    <span className='block h-full font-oswald ease-in duration-500 font-light text-3xl tracking-wide'
                                        ref={props.MzeroWord2}>Emissions</span>
                                    <span className='block h-full font-oswald ease-in duration-500 font-light text-3xl tracking-wide'
                                        ref={props.MzeroWord3}>Maintenance</span>
                                </div>
                                <div className="underline w-10 h-0.5 rounded-xl my-2 bg-highlight"></div>
                            </div>
                            {/* CONTENTS */}
                            <div className="h-60 w-5/6 pl-4 overflow-hidden">
                                <span className="block h-full ease-in duration-500 text-lg tracking-wide text-greytext "
                                    ref={props.MzeroCont1}>
                                    <h3>
                                        Breakdowns, failures, and repairs are all things of the past.
                                        We promise not only a futuristic motorcycle, but also a futuristic
                                        and hassle-free riding experience.
                                    </h3>
                                </span>
                                <span className="block h-full ease-in duration-500 text-lg tracking-wide text-greytext"
                                    ref={props.MzeroCont2}>
                                    <h3>
                                        We believe in doing what is best for the environment.
                                        Electric is the future, and  we&#39;re building for it right now.
                                    </h3>
                                </span>
                                <span className="block h-full ease-in duration-500 text-lg tracking-wide text-greytext"
                                    ref={props.MzeroCont3}>
                                    <h3>
                                        No more needless part replacements. No more taking your vehicle to the
                                        service centre every few months.
                                        Sit back and relax while we look after your motorcycle.
                                        Rather, while the motorcycle looks after itself.
                                    </h3>
                                </span>
                            </div>
                        </div>
                        {/* Image section */}
                        <section className='h-60vh sticky top-0
                bg-zerobg1 bg-cover bg-no-repeat bg-center ease-in duration-500' ref={props.MzeroImg}>
                        </section>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default ZeroSection