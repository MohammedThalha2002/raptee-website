import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import NavBar from "../components/widgets/NavBar";
import Footer from "../components/widgets/Footer";
import SideActiveIndicatorAboutUs from "../components/widgets/SideActiveIndicatorAboutUs";

function AboutUs() {
  const [sectionIndex, setSectionIndex] = useState(1);
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  let observerOptions = {
    rootMargin: "20px",
    threshold: 0.4,
  };
  useEffect(() => {
    const aboutSectionObserver = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    function observerCallback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "abs-section1") {
            // console.log("Homepage")
            setSectionIndex(1);
          } else if (entry.target.id == "abs-section2") {
            // console.log("About")
            setSectionIndex(2);
          } else if (entry.target.id == "abs-section3") {
            // console.log("Zero")
            setSectionIndex(3);
          } else if (entry.target.id == "abs-section4") {
            // console.log("Performance")
            setSectionIndex(4);
          } else if (entry.target.id == "abs-section5") {
            // console.log("Performance")
            setSectionIndex(5);
          } else {
            // console.log("else")
            setSectionIndex(1);
          }
        }
      });
    }
    aboutSectionObserver.observe(section1.current);
    aboutSectionObserver.observe(section2.current);
    aboutSectionObserver.observe(section3.current);
    aboutSectionObserver.observe(section4.current);
    aboutSectionObserver.observe(section5.current);
  }, []);

  return (
    <main className="bg-black">
      <Head>
        <title>Raptee | About Us</title>
        <meta
          name="about us page"
          content="An E-motorcycle website - RAPTEE. Raptee Motors"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Nebula-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="true"
        />
      </Head>
      <NavBar mobile={false}></NavBar>
      <SideActiveIndicatorAboutUs index={sectionIndex} />
      {/* WHO ARE WE - 1 */}
      <section
        id="abs-section1"
        ref={section1}
        className="bg-black flex w-100vw relative"
      >
        <div className="absolute top-[5%] left-[25%] text-lgreytext z-50 text-right">
          <h1 className="text-[7rem] ">Who are</h1>
          <h1 className="text-[8rem] font-bold leading-[3rem]">
            WE <span className="text-highlight">?</span>
          </h1>
        </div>
        <div className="w-[40%] px-8 flex justify-center items-center">
          <p className="w-[90%] mt-[60%] tracking-wide leading-[2.8rem] text-lgreytext text-[2rem] text-justify">
            This isn&apos;t your typical &apos;About Us&apos; redirect but
            rather a true narrative that drives us to revolutionize the future
            of the automotive sector. When the concept of Raptee was initially
            coined in 2019, the sole intention was to build a motorcycle that
            was effortless. Reminiscing, though we may not have known how this
            would pan out back in the day, we did see that we wanted to make a
            difference. A difference that transforms the contemporary concept of
            motorcycling in today&apos;s time. A change that inexorably ties
            innovation and sustainability together. We wanted to do what we did
            best, mindfully innovate!
          </p>
        </div>
        <div className="w-[60%]">
          <Image
            src="/images/aboutUs/1.png"
            width="1138"
            height="1662"
            priority={true}
            alt="EV-olution of electric motorcycles - New-gen innovation bike"
          />
        </div>
      </section>
      {/* SOMEONE - 2 */}
      <section
        id="abs-section2"
        ref={section2}
        className="bg-black flex w-100vw relative"
      >
        <div className="w-[55%] mt-12">
          <Image
            src="/images/aboutUs/2.png"
            width="715"
            height="1300"
            priority={true}
            alt="EV-olution of electric motorcycles - New-gen innovation bike"
          />
        </div>
        <div className="w-[45%] flex flex-col justify-between items-start">
          <p className="w-[90%] tracking-wide leading-[2.8rem] text-lgreytext text-[2rem] text-justify">
            Someone once said, &apos;A team of engineers can position to alter
            the world and not just study it,&apos; and we believe it stands
            true. Raptee is a full stack electric motorcycle startup with a very
            strong technical moat. The company is founded by four engineers from
            Chennai (Ex Tesla, Wipro), working on bringing a no-compromise
            electric motorcycle to an otherwise scooter-only EV market. In
            recent times, we&apos;ve received 4 Cr in grants from ARAI. We at
            Raptee are on a mission to craft a motorcycle that is more than just
            an EV; instead, an augmented machine built with an adaptive
            machine-learning algorithm to bring you an effortless experience.
          </p>
          <div className="text-right text-lgreytext mb-[20%] font-mont font-light tracking-[3.5px] relative">
            <h2 className="text-[4rem]">We are more than</h2>
            <h2 className="text-[4rem]">just the talk!</h2>
            <div className="border-r-4 border-b-4 border-highlight h-20 w-14 absolute right-0 bottom-0"></div>
          </div>
        </div>
      </section>
      {/* BEING 60+ - 3 */}
      <section
        id="abs-section3"
        ref={section3}
        className="bg-black flex justify-evenly w-100vw relative"
      >
        <p className="w-[50%] tracking-wide leading-[2.8rem] text-lgreytext text-[2rem] text-justify">
          Being a 60+ member team, we bring in a portfolio of 18 patents (and
          counting) with us, working towards a no-compromise electric motorcycle
          for the consumers in the largest motorcycle market in the world, India
          with plans of setting the first plant near Guindy, Chennai. We aim to
          offer the customers, a premium experience with our cutting-edge
          technology products and passionate people to make the mobility
          effortless, smart and safe.
        </p>
        <div className="text-right text-lgreytext mb-[8rem] font-mont font-light tracking-[3.5px] relative">
          <h2 className="text-[4rem]">We understand</h2>
          <h2 className="text-[4rem]">that speed is fun,</h2>
          <h2 className="text-[4rem]">but so is your</h2>
          <h2 className="text-[4rem]">safety!</h2>
          <div className="border-r-4 border-b-4 border-highlight h-20 w-14 absolute right-0 bottom-0"></div>
        </div>
      </section>
      {/* ACCUMULATED LIFESTYLE - 4 */}
      <section
        id="abs-section4"
        ref={section4}
        className="bg-black flex w-100vw relative pb-[4rem]"
      >
        <div className="w-[40%] px-8 flex justify-center items-center">
          <p className="w-[90%] tracking-wide leading-[2.8rem] text-lgreytext text-[2rem] text-justify">
            In today&apos;s time, we have acclimated to the lifestyle where it
            seems like there&apos;s no escape from monthly vehicle service
            visits. But what if we told you that there is a motorcycle that is
            truly adaptive in itself? We at Raptee believe that no one should
            ever have to worry about vehicle maintenance, which is why our teams
            have worked tirelessly to bring you a motorcycle that comes with no
            fuss, no part replacement, and zero maintenance. An independently
            designed vehicle meant to stay in shape for times to come so you can
            sit back, unwind and let the motorcycle take care of itself.
          </p>
        </div>
        <div className="w-[60%]">
          <Image
            src="/images/aboutUs/3.png"
            width="1960"
            height="1900"
            priority={true}
            alt="EV-olution of electric motorcycles - New-gen innovation bike"
          />
        </div>
      </section>
      {/* PREMIUM - 5 */}
      <section
        id="abs-section5"
        ref={section5}
        className="bg-black flex w-100vw relative"
      >
        <div className="w-[55%] mt-12">
          <Image
            src="/images/aboutUs/4.png"
            width="715"
            height="1300"
            priority={true}
            alt="EV-olution of electric motorcycles - New-gen innovation bike"
          />
        </div>
        <div className="w-[45%] flex flex-col justify-between items-start">
          <p className="w-[90%] tracking-wide leading-[2.8rem] text-lgreytext text-[2rem] text-justify">
            Our premium motorcycle is unlike any other vehicle and are built to
            be intuitive and intelligent, with features like throttle mapping,
            blind spot detection, and Bluetooth connectivity to keep you safe
            and sound at all times. Raptee motorcycles have been tested with
            real-time simulations, and we are elated to say that we have kicked
            off tooling and expect to roll out our world-class motorcycles by
            the end of the year. We, as a team, share a mutual eye for the brink
            of innovation and believe that the beauty of riding is when you can
            safely unwind, all while we look out for you and the pale blue dot.
          </p>
          <div className="text-right text-lgreytext mb-[20%] font-mont font-light tracking-[3.5px] relative">
            <h2 className="text-[4rem]">In virtuous, when </h2>
            <h2 className="text-[4rem]">we mentioned </h2>
            <h2 className="text-[4rem]">&apos;Effortless&apos;, we </h2>
            <h2 className="text-[4rem]">meant that!</h2>
            <div className="border-r-4 border-b-4 border-highlight h-20 w-14 absolute right-0 bottom-0"></div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <Footer></Footer>
    </main>
  );
}

export default AboutUs;
