import React from 'react'
import { Link } from 'react-scroll'

function SideActiveIndicatorTechStory(props) {
    // console.log("SIDE BAR : ", props.index)
    if (props.index == 1) {
        return (
            <div className="home-nav top-1/2 -translate-y-1/2 left-4 z-10 fixed">
                <Link to="products-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-evo h-16 w-0.5 bg-highlight m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="vcu-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="bms-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="motor-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="ccs-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="safety-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
            </div>
        )
    } else if (props.index == 2) {
        return (
            <div className="home-nav top-1/2 -translate-y-1/2 left-4 z-10 fixed">
                <Link to="products-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-evo h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="vcu-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="bms-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="motor-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="ccs-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="safety-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
            </div>
        )
    } else if (props.index == 3) {
        return (
            <div className="home-nav top-1/2 -translate-y-1/2 left-4 z-10 fixed">
                <Link to="products-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-evo h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="vcu-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="bms-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="motor-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="ccs-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="safety-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
            </div>
        )
    } else if (props.index == 4) {
        return (
            <div className="home-nav top-1/2 -translate-y-1/2 left-4 z-10 fixed">
                <Link to="products-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-evo h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="vcu-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="bms-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="motor-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="ccs-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="safety-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
            </div>
        )
    } else if (props.index == 5) {
        return (
            <div className="home-nav top-1/2 -translate-y-1/2 left-4 z-10 fixed">
                <Link to="products-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-evo h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="vcu-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="bms-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="motor-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="ccs-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="safety-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
            </div>
        )
    } else if (props.index == 6) {
        return (
            <div className="home-nav top-1/2 -translate-y-1/2 left-4 z-10 fixed">
                <Link to="products-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-evo h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="vcu-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="bms-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="motor-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="ccs-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="safety-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
            </div>
        )
    }
}

export default SideActiveIndicatorTechStory