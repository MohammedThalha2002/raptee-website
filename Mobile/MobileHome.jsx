import React from 'react'
import NavBar from '../components/NavBar'
import ReserveBtn from '../components/ReserveBtn'

function MobileHome(props) {
    return (
        <section className=' bg-black'>
            {/* HOMEPAGE */}
            <section>
                <NavBar mobile={props.mobile}></NavBar>
                <div className='h-screen w-full sticky top-0
                bg-homebg bg-cover bg-no-repeat bg-left ease-in duration-500'>
                    <div className="absolute left-4 top-20 pt-2">
                        <div className="content text-left flex flex-col items-start">
                            <h3 className='text-xl font-oswald tracking-wide'>Join the</h3>
                            <h1 className='text-4xl font-oswald tracking-wide'>EVOLUTION</h1>
                            <div className="underline w-14 h-0.5 rounded-xl my-2 mx-1 bg-highlight"></div>
                        </div>
                    </div>
                </div>
                <ReserveBtn name={"Reserve Now"} route={'/techstory'}></ReserveBtn>
            </section>
            {/* ABOUT PAGE */}
            <section className='h-100vh bg-black'>
                <div className='flex flex-col mt-4' style={{marginLeft : '15px', marginTop : '40px'}}>
                    <div className="title mb-14 mt-10 pl-4">
                        <h2 className=' font-oswald font-light text-4xl tracking-wide'>About</h2>
                        <div className="underline w-10 h-0.5 rounded-xl my-2 bg-highlight"></div>
                    </div>
                    <div className="contents text-xs tracking-wide text-gray-500">
                        <span style={{ color: 'white' }}>We at Raptee are driven by an innovative spirit to redefine electric mobility.</span>
                        <span style={{ color: 'white' }}>We design and build motorcycles that prove that switching to electric is not a sacrifice.</span>
                        <span style={{ color: 'white' }}>Our motorcycles are intuitive and engineered to outperform conventionally powered vehicles;</span>
                        <span style={{ color: 'white' }}>they are intelligent, powerful, energy-efficient and loaded with cutting-edge technology to augment every single ride you take.</span>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default MobileHome