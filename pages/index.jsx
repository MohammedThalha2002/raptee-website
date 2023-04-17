import Head from "next/head";
import Script from "next/script";
import NavBar from "../components/widgets/NavBar";
import Footer from "../components/widgets/Footer";
import SideActiveIndicator from "../components/widgets/SideActiveIndicatorHome";
import scrollLock from "scroll-lock";
//
import EvolutionSection from "../components/pages/home/EvolutionSection";
import AboutSection from "../components/pages/home/AboutSection";
import ZeroSection from "../components/pages/home/ZeroSection";
import PerformanceSection from "../components/pages/home/PerformanceSection";
//
import { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const evolSection = useRef();
  const aboutSection = useRef();
  const about1Ref = useRef();
  const about2Ref = useRef();
  const about3Ref = useRef();
  const zeroSection = useRef();
  const performSection = useRef();
  const performImg = useRef();
  const zeroWord1 = useRef();
  const zeroWord2 = useRef();
  const zeroWord3 = useRef();
  const zeroCont1 = useRef();
  const zeroCont2 = useRef();
  const zeroCont3 = useRef();
  const zeroImg = useRef();
  const NavRef = useRef();
  const [sectionIndex, setSectionIndex] = useState(1);
  const [mobile, setMobile] = useState(false);
  let observerOptions = {
    rootMargin: "20px",
    threshold: 0.4,
  };
  const [about1, setAbout1] = useState("grey");
  const [about2, setAbout2] = useState("grey");
  const [about3, setAbout3] = useState("grey");
  const [scrollPosition, setScrollPosition] = useState(0);

  // MOBILE - zero section
  const MzeroWord1 = useRef();
  const MzeroWord2 = useRef();
  const MzeroWord3 = useRef();
  const MzeroCont1 = useRef();
  const MzeroCont2 = useRef();
  const MzeroCont3 = useRef();
  const MzeroImg = useRef();

  //animations
  const titlesAnim = useRef([]);
  const parasAnim = useRef([]);
  const performanceAnim = useRef([]);

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
      setAbout1("white");
      setAbout2("grey");
      setAbout3("grey");
    } else if (elementsOverlap(NavRef, about2Ref)) {
      // console.log("TWO")
      setAbout1("grey");
      setAbout2("white");
      setAbout3("grey");
    } else if (elementsOverlap(NavRef, about3Ref)) {
      // console.log("THREE")
      setAbout1("grey");
      setAbout2("grey");
      setAbout3("white");
    } else {
      setAbout1("grey");
      setAbout2("grey");
      setAbout3("grey");
    }
    // ZERO section - animations
    // DESKTOP
    if (window.innerWidth > 639) {
      if (position <= 300 && position > -700) {
        zeroWord1.current.style.transform = "translateY(0%)";
        zeroWord2.current.style.transform = "translateY(0%)";
        zeroWord3.current.style.transform = "translateY(0%)";
        zeroCont1.current.style.transform = "translateY(0%)";
        zeroCont2.current.style.transform = "translateY(0%)";
        zeroCont3.current.style.transform = "translateY(0%)";
        zeroImg.current.style.backgroundImage = "url('/images/9.png')";
      } else if (position <= 420 && position > 300) {
        zeroWord1.current.style.transform = "translateY(-100%)";
        zeroWord2.current.style.transform = "translateY(-100%)";
        zeroWord3.current.style.transform = "translateY(-100%)";
        zeroCont1.current.style.transform = "translateY(-100%)";
        zeroCont2.current.style.transform = "translateY(-100%)";
        zeroCont3.current.style.transform = "translateY(-100%)";
        zeroImg.current.style.backgroundImage = "url('/images/12.png')";
      } else if (position <= 800 && position > 420) {
        zeroWord1.current.style.transform = "translateY(-200%)";
        zeroWord2.current.style.transform = "translateY(-200%)";
        zeroWord3.current.style.transform = "translateY(-200%)";
        zeroCont1.current.style.transform = "translateY(-200%)";
        zeroCont2.current.style.transform = "translateY(-200%)";
        zeroCont3.current.style.transform = "translateY(-200%)";
        zeroImg.current.style.backgroundImage = "url('/images/8.png')";
      }
    }
    // MOBILE
    else {
      if (position <= 1100 && position > 700) {
        MzeroWord1.current.style.transform = "translateY(0%)";
        MzeroWord2.current.style.transform = "translateY(0%)";
        MzeroWord3.current.style.transform = "translateY(0%)";
        MzeroCont1.current.style.transform = "translateY(0%)";
        MzeroCont2.current.style.transform = "translateY(0%)";
        MzeroCont3.current.style.transform = "translateY(0%)";
        MzeroImg.current.style.backgroundImage = "url('/images/9.png')";
      } else if (position <= 1300 && position > 1100) {
        MzeroWord1.current.style.transform = "translateY(-100%)";
        MzeroWord2.current.style.transform = "translateY(-100%)";
        MzeroWord3.current.style.transform = "translateY(-100%)";
        MzeroCont1.current.style.transform = "translateY(-100%)";
        MzeroCont2.current.style.transform = "translateY(-100%)";
        MzeroCont3.current.style.transform = "translateY(-100%)";
        MzeroImg.current.style.backgroundImage = "url('/images/12.png')";
      } else if (position <= 1500 && position > 1300) {
        MzeroWord1.current.style.transform = "translateY(-200%)";
        MzeroWord2.current.style.transform = "translateY(-200%)";
        MzeroWord3.current.style.transform = "translateY(-200%)";
        MzeroCont1.current.style.transform = "translateY(-200%)";
        MzeroCont2.current.style.transform = "translateY(-200%)";
        MzeroCont3.current.style.transform = "translateY(-200%)";
        MzeroImg.current.style.backgroundImage = "url('/images/8.png')";
      }
    }
  };

  useEffect(() => {
    scrollLock.enablePageScroll();
  }, []);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    // titles animation
    titlesAnim.current.forEach((val, index) => {
      gsap.fromTo(
        titlesAnim.current[index],
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "ease-in",
          scrollTrigger: {
            trigger: titlesAnim.current[index],
            toggleActions: "restart none none none",
          },
        }
      );
    });
    //paras animations
    parasAnim.current.forEach((val, index) => {
      gsap.fromTo(
        parasAnim.current[index],
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "ease-in",
          scrollTrigger: {
            trigger: parasAnim.current[index],
            toggleActions: "restart none none none",
          },
        }
      );
    });
    //performance animations
    performanceAnim.current.forEach((val, index) => {
      gsap.fromTo(
        performanceAnim.current[index],
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "ease-in",
          scrollTrigger: {
            trigger: performanceAnim.current[index],
            toggleActions: "restart none none none",
          },
        }
      );
    });

    const sectionObserver = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    function observerCallback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "homepage-id") {
            // console.log("Homepage")
            setSectionIndex(1);
          } else if (entry.target.id == "about-id") {
            // console.log("About")
            setSectionIndex(2);
          } else if (entry.target.id == "zero-id") {
            // console.log("Zero")
            setSectionIndex(3);
          } else if (entry.target.id == "performance-id") {
            // console.log("Performance")
            setSectionIndex(4);
          } else {
            // console.log("else")
            setSectionIndex(1);
          }
        }
      });
    }
    sectionObserver.observe(evolSection.current);
    sectionObserver.observe(aboutSection.current);
    sectionObserver.observe(zeroSection.current);
    sectionObserver.observe(performSection.current);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black">
      <Script
        id="google-analytics"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PKHFT82G5P"
      ></Script>
      <Script id="analytics" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-PKHFT82G5P', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Head>
        <title>Raptee | E-motorcycle</title>
        <meta
          name="description"
          content="An E-motorcycle website - RAPTEE. Raptee Motors"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Nebula-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin
        />
      </Head>
      <main className="bg-black">
        <ToastContainer />
        <NavBar mobile={mobile}></NavBar>
        <SideActiveIndicator index={sectionIndex}></SideActiveIndicator>
        <section className="sticky top-35rem z-50 ml-32">
          <div
            className="h-24 w-4 bg-transparent absolute pointer-events-none"
            ref={NavRef}
          ></div>
        </section>
        {/*  */}
        <EvolutionSection
          evolSection={evolSection}
          titlesAnim={titlesAnim}
        ></EvolutionSection>
        {/*  */}
        <AboutSection
          aboutSection={aboutSection}
          titlesAnim={titlesAnim}
          parasAnim={parasAnim}
          about1={about1}
          about2={about2}
          about3={about3}
          about1Ref={about1Ref}
          about2Ref={about2Ref}
          about3Ref={about3Ref}
        ></AboutSection>
        {/*  */}
        <ZeroSection
          zeroSection={zeroSection}
          titlesAnim={titlesAnim}
          parasAnim={parasAnim}
          zeroCont1={zeroCont1}
          zeroCont2={zeroCont2}
          zeroCont3={zeroCont3}
          zeroImg={zeroImg}
          zeroWord1={zeroWord1}
          zeroWord2={zeroWord2}
          zeroWord3={zeroWord3}
          MzeroCont1={MzeroCont1}
          MzeroCont2={MzeroCont2}
          MzeroCont3={MzeroCont3}
          MzeroImg={MzeroImg}
          MzeroWord1={MzeroWord1}
          MzeroWord2={MzeroWord2}
          MzeroWord3={MzeroWord3}
        ></ZeroSection>
        {/*  */}
        <PerformanceSection
          performSection={performSection}
          titlesAnim={titlesAnim}
          performanceAnim={performanceAnim}
          performImg={performImg}
        ></PerformanceSection>
        {/* FOOTER */}
        <Footer></Footer>
      </main>
    </div>
  );
}
