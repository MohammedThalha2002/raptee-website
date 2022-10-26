import React from 'react'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import { caurosel } from '../components/carousel'

function culture() {
    return (
        <div className=''>
            <NavBar mobile={false}></NavBar>
            <div>
                <section className='bg-black relative'>
                    <div className='aspect-video bg-culturebg bg-cover bg-center'></div>
                    <div className='absolute z-10 top-96 pl-1/10 w-3/4'>
                        <div className='text-left flex flex-col items-start'>
                            <h3 className='text-2xl font-oswald tracking-wide'>The</h3>
                            <h1 className='text-7xl font-oswald tracking-wide'>CULTURE</h1>
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
                        <div className='absolute w-1/3 top-44rem left-1/90'>
                            <Image
                                src="/images/Artborad8.jpg"
                                layout='responsive'
                                width={16}
                                height={16}
                                priority={true}
                            />
                        </div>
                        <div className='absolute w-1/30 top-96 left-3/4'>
                            <Image
                                src="/images/Artborad7.jpg"
                                layout='responsive'
                                width={16}
                                height={16}
                                priority={true}
                            />
                        </div>
                        <div className='w-2/3 mt-16 pl-1/5'>
                            <div className='text-left flex flex-col items-start'>
                                <h1 className='text-5xl font-oswald font-light tracking-wide'>Who Are We</h1>
                                <div className="underline w-14 h-0.5 rounded-xl my-2 mx-1 bg-highlight"></div>
                                <h3 className='text-2xl tracking-wide text-gray-500'>
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
                <section className='h-30rem border bg-black'>
                    <div className='pl-1/13'>
                        <h1 className='text-5xl font-oswald font-light tracking-wide'>Our Team</h1>
                        <div className="underline w-14 h-0.5 rounded-xl my-2 mx-1 bg-highlight"></div>
                    </div>
                    <div className='pl-1/5'>
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
            </div>
        </div>
    )
}

export default culture