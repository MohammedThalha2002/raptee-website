import NavBar from '../components/widgets/NavBar'
import Footer from '../components/widgets/Footer'
import { useEffect, useRef, useState } from 'react'
import SideActiveIndicatorTechStory from '../components/widgets/SideActiveIndicatorTechStory'
//
import TechHome from '../components/pages/techstory/techHome'
import VcuSection from '../components/pages/techstory/VcuSection'
import BmsSection from '../components/pages/techstory/BmsSection'
import MotorSection from '../components/pages/techstory/MotorSection'
import CcsSection from '../components/pages/techstory/CcsSection'
import SafetySection from '../components/pages/techstory/SafetySection'
//
import scrollLock from 'scroll-lock';
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function Techstory() {
    const productsSection = useRef()
    const vcuSection = useRef()
    const bmsSection = useRef()
    const motorSection = useRef()
    const ccsSection = useRef()
    const safetySection = useRef()
    const [sectionIndex, setSectionIndex] = useState(1)
    let observerOptions = {
        rootMargin: '20px',
        threshold: 0.4
    }

    //animations
    const titlesAnim = useRef([])
    const parasAnim = useRef([])

    useEffect(() => {
        scrollLock.enablePageScroll()
    }, [])

    useEffect(() => {
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
        const techSectionObserver = new IntersectionObserver(observerCallback, observerOptions)
        function observerCallback(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id == 'techHome-id') {
                        // console.log("Homepage")
                        setSectionIndex(1)
                    } else if (entry.target.id == 'vcu-id') {
                        // console.log("About")
                        setSectionIndex(2)
                    } else if (entry.target.id == 'bms-id') {
                        // console.log("Zero")
                        setSectionIndex(3)
                    } else if (entry.target.id == 'motor-id') {
                        // console.log("Performance")
                        setSectionIndex(4)
                    } else if (entry.target.id == 'ccs-id') {
                        // console.log("Performance")
                        setSectionIndex(5)
                    } else if (entry.target.id == 'safety-id') {
                        // console.log("Performance")
                        setSectionIndex(6)
                    } else {
                        // console.log("else")
                        setSectionIndex(1)
                    }
                }
            });
        };
        techSectionObserver.observe(productsSection.current)
        techSectionObserver.observe(vcuSection.current)
        techSectionObserver.observe(bmsSection.current)
        techSectionObserver.observe(motorSection.current)
        techSectionObserver.observe(ccsSection.current)
        techSectionObserver.observe(safetySection.current)

    }, [])

    return (
        <div className='bg-black'>
            <NavBar mobile={false}></NavBar>
            <SideActiveIndicatorTechStory index={sectionIndex}></SideActiveIndicatorTechStory>
            {/*  */}
            <div >
                {/*  */}
                <TechHome productsSection={productsSection} titlesAnim={titlesAnim} parasAnim={parasAnim}></TechHome>
                {/*  */}
                <VcuSection vcuSection={vcuSection} titlesAnim={titlesAnim} parasAnim={parasAnim}></VcuSection>
                {/*  */}
                <BmsSection bmsSection={bmsSection} titlesAnim={titlesAnim} parasAnim={parasAnim}></BmsSection>
                {/* */}
                <MotorSection motorSection={motorSection} titlesAnim={titlesAnim} parasAnim={parasAnim}></MotorSection>
                {/* */}
                <CcsSection ccsSection={ccsSection} titlesAnim={titlesAnim} parasAnim={parasAnim}></CcsSection>
                {/* */}
                <SafetySection safetySection={safetySection} titlesAnim={titlesAnim} parasAnim={parasAnim}></SafetySection>
                {/* */}
            </div>
            {/* FOOTER */}
            <Footer></Footer>
        </div>
    )
}

export default Techstory