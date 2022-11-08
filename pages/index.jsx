import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import SideActiveIndicator from '../components/SideActiveIndicatorHome'
import BottomLoaderZeroSec from '../components/BottomLoaderZeroSec'
import ReserveBtn from '../components/ReserveBtn'
import BottomLoader from '../components/BottomLoader'
import Footer from '../components/Footer'
import CommingSoon from '../components/CommingSoon'
import scrollLock from 'scroll-lock';
import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const evolSection = useRef()
  const aboutSection = useRef()
  const about1Ref = useRef()
  const about2Ref = useRef()
  const about3Ref = useRef()
  const zeroSection = useRef()
  const performSection = useRef()
  const performImg = useRef()
  const zeroWord1 = useRef()
  const zeroWord2 = useRef()
  const zeroWord3 = useRef()
  const zeroCont1 = useRef()
  const zeroCont2 = useRef()
  const zeroCont3 = useRef()
  const zeroImg = useRef()
  const NavRef = useRef()
  const [sectionIndex, setSectionIndex] = useState(1)
  const [mobile, setMobile] = useState(false)
  let observerOptions = {
    rootMargin: '20px',
    threshold: 0.4
  }
  const [about1, setAbout1] = useState('grey')
  const [about2, setAbout2] = useState('grey')
  const [about3, setAbout3] = useState('grey')
  const [about4, setAbout4] = useState('grey')
  const [scrollPosition, setScrollPosition] = useState(0);

  // MOBILE
  const MzeroWord1 = useRef()
  const MzeroWord2 = useRef()
  const MzeroWord3 = useRef()
  const MzeroCont1 = useRef()
  const MzeroCont2 = useRef()
  const MzeroCont3 = useRef()
  const MzeroImg = useRef()

  //animations
  const titlesAnim = useRef([])
  const parasAnim = useRef([])
  const performanceAnim = useRef([])

  function elementsOverlap(el1, el2) {
    const domRect1 = el1.current.getBoundingClientRect();
    const domRect2 = el2.current.getBoundingClientRect();

    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  }


  const handleScroll = () => {

    const position = window.pageYOffset - window.innerWidth;
    setScrollPosition(position);
    if (elementsOverlap(NavRef, about1Ref)) {
      // console.log("ONE")
      setAbout1('white')
      setAbout2('grey')
      setAbout3('grey')
    }
    else if (elementsOverlap(NavRef, about2Ref)) {
      // console.log("TWO")
      setAbout1('grey')
      setAbout2('white')
      setAbout3('grey')
    }
    else if (elementsOverlap(NavRef, about3Ref)) {
      // console.log("THREE")
      setAbout1('grey')
      setAbout2('grey')
      setAbout3('white')
    }
    else {
      setAbout1('grey')
      setAbout2('grey')
      setAbout3('grey')
    }
    // ZERO section - animations
    // DESKTOP
    if (window.innerWidth > 639) {
      if (position <= 300 && position > -700) {
        zeroWord1.current.style.transform = 'translateY(0%)';
        zeroWord2.current.style.transform = 'translateY(0%)';
        zeroWord3.current.style.transform = 'translateY(0%)';
        zeroCont1.current.style.transform = 'translateY(0%)';
        zeroCont2.current.style.transform = 'translateY(0%)';
        zeroCont3.current.style.transform = 'translateY(0%)';
        zeroImg.current.style.backgroundImage = "url('/images/9.png')"
      } else if (position <= 420 && position > 300) {
        zeroWord1.current.style.transform = 'translateY(-100%)';
        zeroWord2.current.style.transform = 'translateY(-100%)';
        zeroWord3.current.style.transform = 'translateY(-100%)';
        zeroCont1.current.style.transform = 'translateY(-100%)';
        zeroCont2.current.style.transform = 'translateY(-100%)';
        zeroCont3.current.style.transform = 'translateY(-100%)';
        zeroImg.current.style.backgroundImage = "url('/images/12.png')"
      } else if (position <= 800 && position > 420) {
        zeroWord1.current.style.transform = 'translateY(-200%)';
        zeroWord2.current.style.transform = 'translateY(-200%)';
        zeroWord3.current.style.transform = 'translateY(-200%)';
        zeroCont1.current.style.transform = 'translateY(-200%)';
        zeroCont2.current.style.transform = 'translateY(-200%)';
        zeroCont3.current.style.transform = 'translateY(-200%)';
        zeroImg.current.style.backgroundImage = "url('/images/8.png')"
      }
    }
    // MOBILE
    else {
      if (position <= 1100 && position > 700) {
        MzeroWord1.current.style.transform = 'translateY(0%)';
        MzeroWord2.current.style.transform = 'translateY(0%)';
        MzeroWord3.current.style.transform = 'translateY(0%)';
        MzeroCont1.current.style.transform = 'translateY(0%)';
        MzeroCont2.current.style.transform = 'translateY(0%)';
        MzeroCont3.current.style.transform = 'translateY(0%)';
        MzeroImg.current.style.backgroundImage = "url('/images/9.png')"
      } else if (position <= 1300 && position > 1100) {
        MzeroWord1.current.style.transform = 'translateY(-100%)';
        MzeroWord2.current.style.transform = 'translateY(-100%)';
        MzeroWord3.current.style.transform = 'translateY(-100%)';
        MzeroCont1.current.style.transform = 'translateY(-100%)';
        MzeroCont2.current.style.transform = 'translateY(-100%)';
        MzeroCont3.current.style.transform = 'translateY(-100%)';
        MzeroImg.current.style.backgroundImage = "url('/images/12.png')"
      } else if (position <= 1500 && position > 1300) {
        MzeroWord1.current.style.transform = 'translateY(-200%)';
        MzeroWord2.current.style.transform = 'translateY(-200%)';
        MzeroWord3.current.style.transform = 'translateY(-200%)';
        MzeroCont1.current.style.transform = 'translateY(-200%)';
        MzeroCont2.current.style.transform = 'translateY(-200%)';
        MzeroCont3.current.style.transform = 'translateY(-200%)';
        MzeroImg.current.style.backgroundImage = "url('/images/8.png')"
      }
    }
  };

  useEffect(() => {
    scrollLock.enablePageScroll()
  }, [])


  useEffect(() => {
    const width = window.innerWidth
    if (width < 600) {
      setMobile(true)
    } else {
      setMobile(false)
    }

    // titles animation
    titlesAnim.current.forEach((val, index) => {
      gsap.fromTo(titlesAnim.current[index],
        { opacity: 0, x: -100 },
        {
          opacity: 1, x: 0, duration: 2, ease: "ease-in",
          scrollTrigger: {
            trigger: titlesAnim.current[index],
            toggleActions: 'restart none none none'
          }
        },
      )
    })
    //paras animations
    parasAnim.current.forEach((val, index) => {
      gsap.fromTo(parasAnim.current[index],
        { opacity: 0, y: 100 },
        {
          opacity: 1, y: 0, duration: 2, ease: "ease-in",
          scrollTrigger: {
            trigger: parasAnim.current[index],
            toggleActions: 'restart none none none'
          }
        },
      )
    })
    //performance animations
    performanceAnim.current.forEach((val, index) => {
      gsap.fromTo(performanceAnim.current[index],
        { opacity: 0, x: 50 },
        {
          opacity: 1, x: 0, duration: 2, ease: "ease-in",
          scrollTrigger: {
            trigger: performanceAnim.current[index],
            toggleActions: 'restart none none none'
          }
        },
      )
    })

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
    }
  }, [])

  return (
    <div className='bg-black'>
      <Head>
        <title>Raptee | E-Vehicle</title>
        <meta name="description" content="An E-Vehicle website - RAPTEE" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/Nebula-Regular.otf" as="font" type="font/otf" crossorigin />
      </Head>
      <main className='bg-black'>
        <NavBar mobile={mobile}></NavBar>
        <SideActiveIndicator index={sectionIndex}></SideActiveIndicator>
        <section className='sticky top-35rem z-50 ml-32'>
          <div className='h-24 w-4 bg-transparent absolute pointer-events-none' ref={NavRef}></div>
        </section>
        {/*  */}
        {/* Evoloution SECTION  - DESKTOP*/}
        <section className='bg-black h-screen snap-center relative sm:hidden' id='homepage-id' ref={evolSection}>
          <div className=' h-12 '></div>
          <div>
            <Image
              src="/images/4.png"
              width="1920"
              height="1080"
              priority={true}
            />
            <div className="absolute right-0 top-20 pr-14 pt-2">
              <div className="content text-right flex flex-col items-end" ref={(el) => (titlesAnim.current[0] = el)}>
                <h3 className='text-2xl font-oswald tracking-wide'>Join the</h3>
                <h1 className='text-7xl font-oswald tracking-wide'>EV-olution</h1>
                <div className="underline w-14 h-0.5 rounded-xl my-2 mx-1 bg-highlight"></div>
              </div>
            </div>
            <ReserveBtn name={"Reserve Now"} route={false} link={'https://pages.razorpay.com/pl_EAjfop8xakIQaU/view'}>
            </ReserveBtn>
            <BottomLoader></BottomLoader>
          </div>
        </section>
        {/* Evoloution SECTION  - MOBILE */}
        <section className='bg-black hidden sm:block'>
          <div className='relative'>
            <div className='h-40rem w-full
                bg-homebg bg-cover bg-no-repeat bg-left ease-in duration-500 '>
              <div className="absolute left-4 top-20 pt-2">
                <div className="content text-left flex flex-col items-start">
                  <h3 className='text-xl font-oswald tracking-wide'>Join the</h3>
                  <h1 className='text-4xl font-oswald tracking-wide'>EV-olution</h1>
                  <div className="underline w-14 h-0.5 rounded-xl my-2 mx-1 bg-highlight"></div>
                </div>
              </div>
            </div>
            <ReserveBtn name={"Reserve Now"} route={false} link={'https://pages.razorpay.com/pl_EAjfop8xakIQaU/view'}>
            </ReserveBtn>
          </div>
        </section>
        {/*  */}
        {/*  */}
        {/* ABOUT SECTION - DESKTOP*/}
        <section className='bg-black aspect-16/8 snap-center relative sm:hidden' id='about-id' ref={aboutSection}>
          <div className="flex h-full">
            {/* SIDE CONTENTS */}
            <div className='w-2/5 flex flex-col mt-16 pl-20 pr-20'>
              <div className="title mb-14" ref={(el) => (titlesAnim.current[1] = el)}>
                <h2 className=' font-oswald font-light text-4xl tracking-wide'>Our Story</h2>
                <div className="underline w-10 h-0.5 rounded-xl my-2 bg-highlight"></div>
              </div>
              <div ref={(el) => (parasAnim.current[0] = el)}>
                <div className="contents text-2xl tracking-wide text-gray-500">
                  <h2 style={{ color: about1 }} ref={about1Ref} >We at Raptee are driven by an innovative spirit to redefine electric mobility.</h2>
                  <h2 style={{ color: about2 }} ref={about2Ref} >Our motorcycles are intuitive and engineered to outperform conventionally powered vehicles - proving that switching to electric is not a sacrifice.</h2>
                  <h2 style={{ color: about3 }} ref={about3Ref} >They are intelligent, powerful, energy-efficient and loaded with cutting-edge technology to augment every single ride you take.</h2>
                </div>
              </div>
            </div>
            <div className='w-3/5'>
              <Image
                src="/images/5.png"
                width={1204}
                height={950}
                priority={true}
              />
            </div>
          </div>
          <BottomLoader></BottomLoader>
        </section>
        {/* ABOUT PAGE - MOBILE */}
        <section className='bg-black hidden sm:block'>
          <div className='flex flex-col'>
            <div className="title mb-8 mt-16 pl-4">
              <h2 className=' font-oswald font-light text-4xl tracking-wide'>Our Story</h2>
              <div className="underline w-10 h-0.5 rounded-xl my-2 bg-highlight"></div>
            </div>
            <div className="text-base w-10/12 pl-4">
              <span style={{ color: 'white' }}>We at Raptee are driven by an innovative spirit to redefine electric mobility.</span>
              <span style={{ color: 'white' }}>Our motorcycles are intuitive and engineered to outperform conventionally powered vehicles</span>
              <span style={{ color: 'white' }}>- proving that switching to electric is not a sacrifice.</span>
              <span style={{ color: 'white' }}>They are intelligent, powerful, energy-efficient and loaded with cutting-edge technology to augment every single ride you take.</span>
            </div>
            <div className='h-72 bg-aboutbg bg-cover bg-no-repeat bg-center ease-in duration-500'>
            </div>
          </div>
        </section>
        {/*  */}
        {/* ZERO SECTION DESKTOP */}
        <section className='bg-black h-150vh relative sm:hidden' id='zero-id' ref={zeroSection}>
          <div className="h-full flex">
            {/* titles and contents */}
            <section className='h-screen w-2/6 bg-black sticky top-0'>
              <div className="title mt-32 h-28 pl-20" ref={(el) => (titlesAnim.current[2] = el)}>
                <h2 className=' font-oswald font-light text-4xl tracking-wide'>Zero</h2>
                <div className="h-12 overflow-hidden">
                  <span className='block h-full font-oswald ease-in duration-500 font-light text-4xl tracking-wide'
                    ref={zeroWord1}>Hassle</span>
                  <span className='block h-full font-oswald ease-in duration-500 font-light text-4xl tracking-wide'
                    ref={zeroWord2}>Emissions</span>
                  <span className='block h-full font-oswald ease-in duration-500 font-light text-4xl tracking-wide'
                    ref={zeroWord3}>Maintenance</span>
                </div>
                <div className="underline w-10 h-0.5 rounded-xl my-2 bg-highlight"></div>
              </div>
              {/* CONTENTS */}
              <div className="h-80 w-96 mt-10 pl-20 overflow-hidden text-2xl" ref={(el) => (parasAnim.current[1] = el)}>
                <span className="block h-full ease-in duration-1000 tracking-wide text-greytext "
                  ref={zeroCont1}>
                  <h3>
                    Breakdowns, failures, and repairs are all things of the past.
                    We promise not only a futuristic motorcycle, but also a futuristic
                    and hassle-free riding experience.
                  </h3>
                </span>
                <span className="block h-full ease-in duration-1000 tracking-wide text-greytext"
                  ref={zeroCont2}>
                  <h3>
                    We believe in doing what is best for the environment.
                    Electric is the future, and  we&#39;re building for it right now.
                  </h3>
                </span>
                <span className="block h-full ease-in duration-1000 tracking-wide text-greytext"
                  ref={zeroCont3}>
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
                bg-zerobg1 bg-contain bg-no-repeat bg-center ease-in duration-500' ref={zeroImg}>
              <BottomLoaderZeroSec></BottomLoaderZeroSec>
            </section>
          </div>
        </section>
        {/* ZERO SECTION - MOBILE*/}
        <section className='bg-black h-150vh hidden sm:block'>
          <div className="h-full flex">
            {/* titles and contents */}
            <section className='h-screen bg-black sticky top-0'>
              <div className='h-40vh'>
                <div className="title mt-10 h-28 pl-4">
                  <h2 className=' font-oswald font-light text-4xl tracking-wide'>Zero</h2>
                  <div className="h-10 overflow-hidden">
                    <span className='block h-full font-oswald ease-in duration-500 font-light text-3xl tracking-wide'
                      ref={MzeroWord1}>Hassle</span>
                    <span className='block h-full font-oswald ease-in duration-500 font-light text-3xl tracking-wide'
                      ref={MzeroWord2}>Emissions</span>
                    <span className='block h-full font-oswald ease-in duration-500 font-light text-3xl tracking-wide'
                      ref={MzeroWord3}>Maintenance</span>
                  </div>
                  <div className="underline w-10 h-0.5 rounded-xl my-2 bg-highlight"></div>
                </div>
                {/* CONTENTS */}
                <div className="h-60 w-5/6 pl-4 overflow-hidden">
                  <span className="block h-full ease-in duration-500 text-lg tracking-wide text-greytext "
                    ref={MzeroCont1}>
                    <h3>
                      Breakdowns, failures, and repairs are all things of the past.
                      We promise not only a futuristic motorcycle, but also a futuristic
                      and hassle-free riding experience.
                    </h3>
                  </span>
                  <span className="block h-full ease-in duration-500 text-lg tracking-wide text-greytext"
                    ref={MzeroCont2}>
                    <h3>
                      We believe in doing what is best for the environment.
                      Electric is the future, and  we&#39;re building for it right now.
                    </h3>
                  </span>
                  <span className="block h-full ease-in duration-500 text-lg tracking-wide text-greytext"
                    ref={MzeroCont3}>
                    <br />
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
                bg-zerobg1 bg-cover bg-no-repeat bg-center ease-in duration-500' ref={MzeroImg}>
              </section>
            </section>
          </div>
        </section>
        {/* PERFORMANCE DESKTOP*/}
        <section className='bg-black aspect-16/8 snap-center relative sm:hidden' id='performance-id' ref={performSection}>
          <div className="flex h-full">
            <div className='w-2/3 relative flex items-end' ref={performImg}>
              <Image
                src="/images/6.png"
                width={1450}
                height={1080}
                priority={true}
              />
            </div>
            <div className='w-2/5 flex flex-col justify-center items-end pl-0 pr-20'>
              <div className="title mb-14" ref={(el) => (titlesAnim.current[3] = el)}>
                <h2 className=' font-oswald font-light text-4xl tracking-wide'>Performance</h2>
                <div className="underline w-10 h-0.5 rounded-xl my-2 ml-32 bg-highlight"></div>
              </div>
              <div className="contents tracking-wide text-right text-greytext">
                <h2 className='text-white text-lg' ref={(el) => (titlesAnim.current[4] = el)}>Electric is now fast.</h2>
                <h1 className='text-3xl font-light mb-8' ref={(el) => (performanceAnim.current[0] = el)}>Top Speed of <span className='font-medium'>135</span> kmph</h1>
                <h2 className='text-white text-lg' ref={(el) => (titlesAnim.current[5] = el)}>Week long charge.</h2>
                <h1 className='text-3xl font-light mb-8' ref={(el) => (performanceAnim.current[1] = el)}><span className='font-medium'>150</span> km Real World Range</h1>
                <h2 className='text-white text-lg' ref={(el) => (titlesAnim.current[6] = el)}>First off the traffic line.</h2>
                <h1 className='text-3xl font-light mb-8' ref={(el) => (performanceAnim.current[2] = el)}>0-60 kmph in &#60; <span className='font-medium'>3.5</span> secs<span className='text-2xl'>*</span></h1>
                <h2 className='text-white text-lg' ref={(el) => (titlesAnim.current[7] = el)}>Get to your destination quicker.</h2>
                <h1 className='text-3xl font-light mb-8' ref={(el) => (performanceAnim.current[3] = el)}>0-80% charge in <span className='font-medium'>45</span> mins<span className='text-2xl'>*</span></h1>
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
        {/* FOOTER */}
        <Footer></Footer>
      </main>
    </div>
  )
}
