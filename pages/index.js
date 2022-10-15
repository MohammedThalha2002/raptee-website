import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import ReserveBtn from '../components/ReserveBtn'
import BottomLoader from '../components/BottomLoader'
import SideActiveIndicator from '../components/SideActiveIndicatorHome'
import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function Home() {
  const evolSection = useRef()
  const aboutSection = useRef()
  const zeroSection = useRef()
  const performSection = useRef()
  const [sectionIndex, setSectionIndex] = useState(1)
  let observerOptions = {
    rootMargin: '20px',
    threshold: 0.4
  }
  const lazyRoot = useRef(null)
  //
  const [about1, setAbout1] = useState('grey')
  const [about2, setAbout2] = useState('grey')
  const [about3, setAbout3] = useState('grey')
  const [about4, setAbout4] = useState('grey')

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset - window.innerWidth;
    // console.log(position)
    setScrollPosition(position);
    if (position < -800 && position >= -900) {
      // console.log("ONE")
      setAbout1('white')
      setAbout2('grey')
      setAbout3('grey')
      setAbout4('grey')
    }
    else if (position < -700 && position >= -800) {
      // console.log("TWO")
      setAbout1('grey')
      setAbout2('white')
      setAbout3('grey')
      setAbout4('grey')
    }
    else if (position < -600 && position >= -700) {
      // console.log("THREE")
      setAbout1('grey')
      setAbout2('grey')
      setAbout3('white')
      setAbout4('grey')
    }
    else if (position < -500 && position >= -600) {
      // console.log("FOUR")
      setAbout1('grey')
      setAbout2('grey')
      setAbout3('grey')
      setAbout4('white')
    }
    else {
      setAbout1('grey')
      setAbout2('grey')
      setAbout3('grey')
      setAbout4('grey')
    }
  };

  useEffect(() => {

    // gsap.fromTo(about1.current,
    //   { opacity: 0, y: -100 },
    //   {
    //     opacity: 1, y: 0, duration: 2, ease: "ease-in",
    //     scrollTrigger: {
    //       trigger: about1.current,
    //     }
    //   },
    // )
    // gsap.to(
    //   about1.current,
    //   {
    //     color: 'white', 
    //     scrollTrigger: {
    //       trigger: about1.current,
    //     }
    //   }
    // )

    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions)

    function observerCallback(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id == 'homepage-id') {
            // console.log("Homepage")
            setSectionIndex(1)
          } else if (entry.target.id == 'about-id') {
            // console.log("About")
            setSectionIndex(2)
          } else if (entry.target.id == 'zero-id') {
            // console.log("Zero")
            setSectionIndex(3)
          } else if (entry.target.id == 'performance-id') {
            // console.log("Performance")
            setSectionIndex(4)
          } else {
            // console.log("else")
            setSectionIndex(1)
          }
        }
      });
    };
    sectionObserver.observe(evolSection.current)
    sectionObserver.observe(aboutSection.current)
    sectionObserver.observe(zeroSection.current)
    sectionObserver.observe(performSection.current)
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  // console.log(scrollPosition)

  return (
    <div className='bg-black'>
      <Head>
        <title>Raptee | E-Vehicle</title>
        <meta name="description" content="An E-Vehicle website - RAPTEE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-black'>
        <NavBar></NavBar>
        <SideActiveIndicator index={sectionIndex}></SideActiveIndicator>
        {/* Evoloution SECTION */}
        <section className='bg-black aspect-video snap-center relative' id='homepage-id' ref={evolSection}>
          <div className=' h-12 '></div>
          <div className=''>
            <Image lazyRoot={lazyRoot}
              src="/images/4.png"
              width="1920"
              height="1080"
              priority={true}
            />
            <div className="absolute right-0 top-20 pr-14 pt-2">
              <div className="content text-right flex flex-col items-end">
                <h3 className='text-2xl font-oswald tracking-wide'>Join the</h3>
                <h1 className='text-7xl font-oswald tracking-wide'>EVOLUTION</h1>
                <div className="underline w-14 h-0.5 rounded-xl my-2 mx-1 bg-highlight"></div>
              </div>
            </div>
            <ReserveBtn name={"Reserve Now"}></ReserveBtn>
            <BottomLoader></BottomLoader>
          </div>
        </section>
        {/* ABOUT SECTION */}
        <section className='bg-black aspect-video snap-center relative' id='about-id' ref={aboutSection}>
          <div className="flex h-full">
            {/* SIDE CONTENTS */}
            <div className='w-2/5 flex flex-col mt-16 pl-20 pr-20'>
              <div className="title mb-14">
                <h2 className=' font-oswald font-light text-4xl tracking-wide'>About</h2>
                <div className="underline w-10 h-0.5 rounded-xl my-2 bg-highlight"></div>
              </div>
              <div className="contents text-xl tracking-wide text-gray-500">
                <span style={{ color: about1 }}>We at Raptee are driven by an innovative spirit to redefine electric mobility.</span>
                <span style={{ color: about2 }}>We design and build motorcycles that prove that switching to electric is not a sacrifice.</span>
                <span style={{ color: about3 }}>Our motorcycles are intuitive and engineered to outperform conventionally powered vehicles;</span>
                <span style={{ color: about4 }}>they are intelligent, powerful, energy-efficient and loaded with cutting-edge technology to augment every single ride you take.</span>
              </div>
            </div>
            <div className='w-3/5'>
              <Image
                src="/images/5.png"
                width={1204}
                height={1052}
                priority={true}
              />
            </div>
          </div>
          <BottomLoader></BottomLoader>
        </section>
        {/* ZERO SECTIONS */}
        <section className='bg-black aspect-video snap-center relative' id='zero-id' ref={zeroSection}>
          <div className="flex h-full">
            <div className='w-2/6 flex flex-col justify-center pl-20 pr-28'>
              <div className="title mb-14 h-28">
                <h2 className=' font-oswald font-light text-4xl tracking-wide'>Zero</h2>
                <div className="h-12 overflow-hidden">
                  <span className='block h-full animate-spin_words font-oswald font-light text-4xl tracking-wide'>Hassle</span>
                  <span className='block h-full animate-spin_words font-oswald font-light text-4xl tracking-wide'>Emissions</span>
                  <span className='block h-full animate-spin_words font-oswald font-light text-4xl tracking-wide'>Maintenence</span>
                </div>
                <div className="underline w-10 h-0.5 rounded-xl my-2 bg-highlight"></div>
              </div>
              {/* CONTENTS */}
              <div className="h-60 overflow-hidden">
                <span className="block h-full animate-spin_words text-lg tracking-wide text-gray-500 ">
                  <h3 className='hover:text-white hover:text-xl'>
                    Breakdowns, failures, and repairs are all things of the past.
                  </h3>
                  <h3 className='hover:text-white hover:text-xl'>
                    We promise not only a futuristic motorcycle, but also a futuristic
                    and hassle-free riding experience.
                  </h3>
                </span>
                <span className="block h-full animate-spin_words text-lg tracking-wide text-gray-500">
                  <h3 className='hover:text-white hover:text-xl'>
                    We believe in doing what is best for the environment.
                  </h3>
                  <h3 className='hover:text-white hover:text-xl'>
                    Electric is the future, and we are building for it right now.
                  </h3>
                </span>
                <span className="block h-full animate-spin_words text-lg tracking-wide text-gray-500">
                  <br />
                  <h3 className='hover:text-white hover:text-xl'>
                    No more needless part replacements. No more taking your vehicle to the
                    service centre every few months.
                  </h3>
                  <h3 className='hover:text-white hover:text-xl'>
                    Sit back and relax while we look after your motorcycle.
                    Rather, while the motorcycle looks after itself.
                  </h3>
                </span>
              </div>
            </div>
            <div className='w-2/3 h-full flex items-end relative'>
              {/* <div className="slider"></div> */}
              <Image
                src="/images/9.png"
                width={1920}
                height={1080}
                priority={true}
              />
            </div>
          </div>
          <BottomLoader></BottomLoader>
        </section>
        {/* PERFORMANCE */}
        <section className='bg-black aspect-video snap-center relative' id='performance-id' ref={performSection}>
          <div className="flex h-full">
            <div className='w-2/3 relative flex items-end'>
              <Image
                src="/images/6.png"
                width={1450}
                height={1080}
                priority={true}
              />
            </div>
            <div className='w-2/6 flex flex-col justify-center items-end pl-12 pr-20'>
              <div className="title mb-14">
                <h2 className=' font-oswald font-light text-4xl tracking-wide'>Performance</h2>
                <div className="underline w-10 h-0.5 rounded-xl my-2 ml-32 bg-highlight"></div>
              </div>
              <div className="contents tracking-widest text-gray-500">
                <h2 className='text-white text-lg'>Top Speed</h2>
                <h1 className='text-4xl font-light mb-8'>135Kmph</h1>
                <h2 className='text-white text-lg'>Ranges</h2>
                <h1 className='text-4xl font-light mb-8'>Takes you Places</h1>
                <h2 className='text-white text-lg'>0-60 kmph</h2>
                <h1 className='text-4xl font-light mb-8'>Before you Blink</h1>
                <h2 className='text-white text-lg'>0-80% charge</h2>
                <h1 className='text-4xl font-light mb-8'>25 mins</h1>
              </div>
            </div>
          </div>
          <Link href={'/techstory'}>
            <ReserveBtn name={'Tech Story'}></ReserveBtn>
          </Link>
        </section>
      </main>
    </div>
  )
}
