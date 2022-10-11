import React from 'react'
import { Link } from 'react-scroll'

function SideActiveIndicator(props) {
    if (props.index == 1) {
        return (
            <div className="home-nav absolute top-1/2 -translate-y-1/2 left-4">
                <Link to="homepage-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-evo h-16 w-0.5 bg-highlight m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="about-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="zero-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="performance-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
            </div>
        )
    }
    else if (props.index == 2) {
        return (
            <div className="home-nav absolute top-1/2 -translate-y-1/2 left-4">
                <Link to="homepage-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-evo h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="about-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="zero-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="performance-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
            </div>
        )
    }
    else if (props.index == 3) {
        return (
            <div className="home-nav absolute top-1/2 -translate-y-1/2 left-4">
                <Link to="homepage-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-evo h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="about-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="zero-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="performance-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
            </div>
        )
    }
    else if (props.index == 4) {
        return (
            <div className="home-nav absolute top-1/2 -translate-y-1/2 left-4">
                <Link to="homepage-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-evo h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="about-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="zero-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight-low m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
                <Link to="performance-id" spy={true} smooth={true} offset={0} duration={1000} >
                    <div className="h-about h-16 w-0.5 bg-highlight m-4 
                    rounded-xl cursor-pointer hover:w-1"></div>
                </Link>
            </div>
        )
    }

}

export default SideActiveIndicator