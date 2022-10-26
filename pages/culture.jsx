import React from 'react'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import { caurosel } from '../components/carousel'
import Footer from '../components/Footer'

function culture() {
    return (
        <div className='w-full'>
            <NavBar mobile={false}></NavBar>
            <div className='w-full'>
                <section className='bg-black relative'>
                    <div className='aspect-video bg-culturebg bg-cover bg-center'></div>
                    <div className='absolute z-10 top-96 pl-1/10 w-3/4 sm:top-60'>
                        <div className='text-left flex flex-col items-start'>
                            <h3 className='text-2xl sm:text-lg font-oswald tracking-wide'>The</h3>
                            <h1 className='text-7xl sm:text-4xl font-oswald tracking-wide'>CULTURE</h1>
                            <div className="underline w-14 h-0.5 rounded-xl my-2 mx-1 bg-highlight"></div>
                        </div>
                        <div className=''>
                            <Image
                                src="/images/Artboard6.jpg"
                                layout='responsive'
                                height={9}
                                width={16}
                                priority={true}
                            />
                        </div>
                        <div className='absolute w-1/3 top-44rem sm:top-10rem left-1/90 sm:left-1/70'>
                            <Image
                                src="/images/Artborad8.jpg"
                                layout='responsive'
                                width={16}
                                height={16}
                                priority={true}
                            />
                        </div>
                        <div className='absolute w-1/30 top-96 sm:top-60 left-3/4 sm:left-1/90'>
                            <Image
                                src="/images/Artborad7.jpg"
                                layout='responsive'
                                width={16}
                                height={16}
                                priority={true}
                            />
                        </div>
                        <div className='w-2/3 sm:w-4/5 mt-16 pl-1/5'>
                            <div className='text-left flex flex-col items-start'>
                                <h1 className='text-5xl sm:text-3xl font-oswald font-light tracking-wide'>Who Are We</h1>
                                <div className="underline w-14 h-0.5 rounded-xl my-2 mx-1 bg-highlight"></div>
                                <h3 className='text-2xl sm:text-sm tracking-wide text-gray-500'>
                                    We are Raptee. Effortless. Individuals that are tenacious in their pursuit of
                                    our mission to let people move anywhere, achieve anything, and forge their own
                                    path. What we power is mobility. It strengthens us. It trickles through us.
                                    It forces us to continually think of new ways to move more effectively.
                                    For each and every location you desire. For anything you wish to acquire.
                                    In the future. at the present&#39;s breath-taking speed. Till then we&#39;ll stop
                                    at nothing less.
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='h-50rem bg-black'></section>
                <section className='h-30rem bg-black'>
                    <div className='pl-1/13'>
                        <h1 className='text-5xl font-oswald font-light tracking-wide'>Our Team</h1>
                        <div className="underline w-14 h-0.5 rounded-xl my-2 mx-1 bg-highlight"></div>
                    </div>
                    <div className='pl-1/5 mt-8'>
                        <div id='img-slider' className='flex gap-1 w-full overflow-x-scroll overflow-y-hidden'>
                            {caurosel.map((items) => (
                                <div key={items.id}>
                                    <Image
                                        src={items.img}
                                        layout='fixed'
                                        height={240}
                                        width={160}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className='bg-black relative'>
                    <div className='absolute w-1/25 sm:w-1/5 z-10 bottom-7rem sm:bottom-10 left-1/5 ease-in duration-200 hover:scale-110'>
                        <Image
                            src={'/images/Artboard4.jpg'}
                            layout='responsive'
                            height={1080}
                            width={1920}
                        />
                    </div>
                    <div className='pl-1/13 ease-in duration-200 hover:scale-110'>
                        <h1 className='text-5xl font-oswald font-light tracking-wide'>What Are We</h1>
                        <div className="underline w-14 h-0.5 rounded-xl my-2 mx-1 bg-highlight"></div>
                    </div>
                    {/* 1st row */}
                    <div className='relative mx-12 flex items-end'>
                        <div className='w-1/35 ease-in duration-200 hover:scale-110'>
                            <Image
                                src={'/images/Artboard1.jpg'}
                                layout='responsive'
                                height={1080}
                                width={1920}
                            />
                        </div>
                        <div className='w-1/20 h-40 sm:h-12 bg-greydiv flex flex-col justify-end p-2 sm:p-1 ease-in duration-200 hover:scale-110'>
                            <h3 className='text-xl sm:text-mml sm:leading-normal font-bold text-white'>We are</h3>
                            <h1 className='text-2xl sm:text-mmb sm:leading-normal font-bold text-white'>CONFIDENT</h1>
                        </div>
                        <div className='w-1/45 ease-in duration-200 hover:scale-110'>
                            <Image
                                src={'/images/Artboard2.jpg'}
                                layout='responsive'
                                height={1080}
                                width={1920}
                            />
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className='relative mx-12 flex '>
                        <div className='w-1/20 h-40 sm:h-2 bg-black flex flex-col justify-end p-2'></div>
                        <div className='w-1/15 h-28 sm:h-10 bg-highlight flex flex-col justify-end p-2 sm:pl-1 ease-in duration-200 hover:scale-110'>
                            <h3 className='text-xl sm:text-mml sm:leading-normal font-bold sm:font-normal text-white'>We are</h3>
                            <h1 className='text-2xl sm:text-mmb sm:leading-normal font-bold sm:font-semibold text-white'>BRAVE</h1>
                        </div>
                        <div className='w-1/45 ease-in duration-200 hover:scale-110'>
                            <Image
                                src={'/images/Artboard3.jpg'}
                                layout='responsive'
                                height={1080}
                                width={1920}
                            />
                        </div>
                        <div className='w-1/25 aspect-video flex items-end'>
                            <div className='w-full h-40 sm:h-12 bg-highlight flex flex-col justify-end p-2 sm:pl-1 ease-in duration-200 hover:scale-110'>
                                <h3 className='text-xl sm:text-mml sm:leading-normal  font-bold sm:font-normal text-white'>We are</h3>
                                <h1 className='text-2xl sm:text-mmr sm:leading-normal font-bold sm:font-semibold text-white'>UNCOMPROMISING</h1>
                            </div>
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className='relative mx-12 flex '>
                        <div className='w-1/25 h-40 sm:h-2 bg-black flex flex-col justify-end p-2'></div>
                        <div className='w-1/15 aspect-video flex items-end'>
                            <div className='w-full h-28 sm:h-10 bg-highlight flex flex-col justify-end p-2 sm:pl-1 ease-in duration-200 hover:scale-110'>
                                <h3 className='text-xl sm:text-mml sm:leading-normal font-bold sm:font-normal text-white'>We are</h3>
                                <h1 className='text-2xl sm:text-mmr sm:leading-normal font-bold sm:font-semibold text-white'>INTUITIVE</h1>
                            </div>
                        </div>
                        <div className='w-1/10 h-40 sm:h-2 bg-black flex flex-col justify-end p-2'></div>
                        <div className='w-1/15 h-28 sm:h-10 bg-greydiv flex flex-col justify-end p-2 sm:pl-1 ease-in duration-200 hover:scale-110'>
                            <h3 className='text-xl sm:text-mml sm:leading-normal font-bold sm:font-normal text-white'>We are</h3>
                            <h1 className='text-2xl sm:text-mmr sm:leading-normal font-bold sm:font-semibold text-white'>RELIABLE</h1>
                        </div>
                        <div className='w-1/35 ease-in duration-200 hover:scale-110'>
                            <Image
                                src={'/images/Artboard4.jpg'}
                                layout='responsive'
                                height={1080}
                                width={1920}
                            />
                        </div>
                    </div>
                </section>
            </div>
            {/* FOOTER */}
            <Footer></Footer>
        </div>
    )
}

export default culture