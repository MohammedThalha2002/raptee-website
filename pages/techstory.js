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
        </div>
    )
}

export default techstory