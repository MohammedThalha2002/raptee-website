import React from 'react'
import Image from 'next/image'
import ReserveBtn from '../../widgets/ReserveBtn'

function PerformanceSection(props) {
    return (
        <div>
            {/* PERFORMANCE DESKTOP*/}
            <section className='bg-black aspect-16/8 snap-center relative sm:hidden' id='performance-id' ref={props.performSection}>
                <div className="flex h-full">
                    <div className='w-2/3 relative flex items-end' ref={props.performImg}>
                        <Image
                            src="/images/6.png"
                            width={1450}
                            height={1080}
                            priority={true}
                        />
                    </div>
                    <div className='w-2/5 flex flex-col justify-center items-end pl-0 pr-20'>
                        <div className="title mb-14" ref={(el) => (props.titlesAnim.current[3] = el)}>
                            <h2 className=' font-oswald font-light text-4xl tracking-wide'>Performance</h2>
                            <div className="underline w-10 h-0.5 rounded-xl my-2 ml-32 bg-highlight"></div>
                        </div>
                        <div className="contents tracking-wide text-right text-greytext">
                            <h2 className='text-white text-lg' ref={(el) => (props.titlesAnim.current[4] = el)}>Electric is now fast.</h2>
                            <h1 className='text-3xl font-light mb-8' ref={(el) => (props.performanceAnim.current[0] = el)}>Top Speed of <span className='font-medium'>135</span> kmph</h1>
                            <h2 className='text-white text-lg' ref={(el) => (props.titlesAnim.current[5] = el)}>Week long charge.</h2>
                            <h1 className='text-3xl font-light mb-8' ref={(el) => (props.performanceAnim.current[1] = el)}><span className='font-medium'>150</span> km Real World Range</h1>
                            <h2 className='text-white text-lg' ref={(el) => (props.titlesAnim.current[6] = el)}>First off the traffic line.</h2>
                            <h1 className='text-3xl font-light mb-8' ref={(el) => (props.performanceAnim.current[2] = el)}>0-60 kmph in &#60; <span className='font-medium'>3.5</span> secs<span className='text-2xl'>*</span></h1>
                            <h2 className='text-white text-lg' ref={(el) => (props.titlesAnim.current[7] = el)}>Get to your destination quicker.</h2>
                            <h1 className='text-3xl font-light mb-8' ref={(el) => (props.performanceAnim.current[3] = el)}>0-80% charge in <span className='font-medium'>45</span> mins<span className='text-2xl'>*</span></h1>
                        </div>
                    </div>
                </div>
                <ReserveBtn name={'Tech Story'} route={true} link={'/techstory'}></ReserveBtn>
            </section>
            {/* PERFORMANCE MOBILE */}
            <section className='bg-black hidden sm:block'>
                <div className='relative'>
                    <div className="flex flex-col h-full">
                        <div className='mt-8 flex flex-col justify-start items-end pr-4'>
                            <div className="title mb-8">
                                <h2 className=' font-oswald font-light text-4xl tracking-wide'>Performance</h2>
                                <div className="underline w-10 h-0.5 rounded-xl my-2 ml-32 bg-highlight"></div>
                            </div>
                            <div className="contents tracking-wide text-right text-greytext">
                                <h2 className='text-white text-lg'>Electric is now fast.</h2>
                                <h1 className='text-2xl font-light mb-3'>Top Speed of 135 kmph</h1>
                                <h2 className='text-white text-lg'>Week long charge.</h2>
                                <h1 className='text-2xl font-light mb-3'>150 km Real World Range</h1>
                                <h2 className='text-white text-lg'>First off the traffic line.</h2>
                                <h1 className='text-2xl font-light mb-3'>0-60 kmph in &#60; 3.5 secs<span className='text-xl'>*</span></h1>
                                <h2 className='text-white text-lg'>Get to your destination quicker.</h2>
                                <h1 className='text-2xl font-light mb-3'>0-80% charge in 45 mins<span className='text-xl'>*</span></h1>
                            </div>
                        </div>
                        <div className='overflow-hidden'>
                            <div className='w-full h-96
                bg-performbg bg-cover bg-no-repeat bg-center scale-150 ease-in duration-500'>
                            </div>
                        </div>
                    </div>
                    <ReserveBtn name={'Tech Story'} route={true} link={'/techstory'}></ReserveBtn>
                </div>
            </section>
        </div>
    )
}

export default PerformanceSection