import NavBar from '../components/NavBar'
import ReserveBtn from '../components/ReserveBtn'
import BottomLoader from '../components/BottomLoader'
import SideActiveIndicator from '../components/SideActiveIndicator'
import Image from 'next/image'

function techstory() {
    return (
        <div className='bg-black'>
            <NavBar></NavBar>
            <section className='bg-black aspect-video snap-center relative'>
                <div className=' h-20 '></div>
                <div className=''>
                    <Image
                        src="/images/7.png"
                        width="1920"
                        height="1080"
                        priority={true}
                    />
                    <div className="absolute left-0 top-20 pl-14 pt-2">
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
                    <SideActiveIndicator index={1}></SideActiveIndicator>
                    <BottomLoader></BottomLoader>
                </div>
            </section>
            {/* VC SECTION */}
            <section className='bg-black aspect-video snap-center relative'>
                <div className="flex h-full">
                    {/* SIDE CONTENTS */}
                    <div className='w-2/6 flex flex-col justify-center pl-20 pr-4'>
                        <div className="title mb-14">
                            <h2 className=' font-oswald font-light text-4xl tracking-wide'>VCU</h2>
                            <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                        </div>
                        <div className="contents text-lg tracking-wide text-gray-500">
                            <h3 className='hover:text-white hover:text-xl'>
                                The VCU controls every other subsystem of the vehicle,
                                and continuously monitors data received from it,
                            </h3>
                            <h3 className='hover:text-white hover:text-xl'>
                                which is then optimized using ML algorithms to enable
                                features like throttle mapping, fast charging and over-the-air updates.
                            </h3>
                        </div>
                    </div>
                    <div className='w-2/3 h-full flex items-end relative'>
                        <Image
                            src="/images/2.png"
                            width={1920}
                            height={1080}
                            priority={true}
                        />
                    </div>
                </div>
                <SideActiveIndicator index={2}></SideActiveIndicator>
                <BottomLoader></BottomLoader>
            </section>
            {/* BMS SECTION */}
            <section className='bg-black aspect-video snap-center relative'>
                <div className="flex h-full">
                    {/* SIDE CONTENTS */}
                    <div className='w-2/6 flex flex-col justify-center pl-20 pr-4'>
                        <div className="title mb-14">
                            <h2 className=' font-oswald font-light text-4xl tracking-wide'>BMU</h2>
                            <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                        </div>
                        <div className="contents text-lg tracking-wide text-gray-500">
                            <h3 className='hover:text-white hover:text-xl'>
                                Longer Distance on a Single Charge with Adaptive Charging
                            </h3>
                            <h3 className='hover:text-white hover:text-xl'>
                                Charge Cycle Management: Safety is important to us.
                                Yours as well as the battery&#39;s
                            </h3>
                            <h3 className='hover:text-white hover:text-xl'>
                                Active balancing: Perfectly balanced, as everything should be.
                            </h3>
                        </div>
                    </div>
                    <div className='w-2/3 h-full flex items-end relative'>
                        <Image
                            src="/images/1.png"
                            layout='fill'
                            priority={true}
                        />
                    </div>
                </div>
                <SideActiveIndicator index={3}></SideActiveIndicator>
                <BottomLoader></BottomLoader>
            </section>
            {/* MOTOR SECTION */}
            <section className='bg-black aspect-video snap-center relative'>
                <div className="flex h-full">
                    {/* SIDE CONTENTS */}
                    <div className='w-2/6 flex flex-col justify-center pl-20 pr-4'>
                        <div className="title mb-14">
                            <h2 className=' font-oswald font-light text-4xl tracking-wide'>MOTOR</h2>
                            <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
                        </div>
                        <div className="contents text-lg tracking-wide text-gray-500">
                            <h3 className='hover:text-white hover:text-xl'>
                                Raptee&#39;s Electric Drivetrain is a high-powered software driven
                                vehicle developed in house to adapt to various driving conditions for the Indian roads.
                            </h3>
                            <h3 className='hover:text-white hover:text-xl'>
                                It is backed by the control logics of the VCU that can be adjusted to
                                the rider&#39;s needs, be it ECO mode with enhanced range or the POWER mode
                                with quick acceleration.
                            </h3>
                            <h3 className='hover:text-white hover:text-xl'>
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
                <SideActiveIndicator index={3}></SideActiveIndicator>
                <BottomLoader></BottomLoader>
            </section>
        </div>
    )
}

export default techstory