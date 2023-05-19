import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";

function SideActiveIndicatorAboutUs(props) {
  if (props.index == 1) {
    return (
      <div className="home-nav top-1/2 -translate-y-1/2 left-4 z-10 fixed sm:hidden">
        <Link
          to="abs-section1"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-evo h-16 w-0.5 bg-highlight m-4 
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section2"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4 
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section3"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4 
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section4"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section5"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
      </div>
    );
  } else if (props.index == 2) {
    return (
      <div className="home-nav top-1/2 -translate-y-1/2 left-4 z-10 fixed sm:hidden">
        <Link
          to="abs-section1"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-evo h-16 w-0.5 bg-highlight-low m-4 
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section2"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight m-4 
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section3"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4 
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section4"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section5"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
      </div>
    );
  } else if (props.index == 3) {
    return (
      <div className="home-nav top-1/2 -translate-y-1/2 left-4 z-10 fixed sm:hidden">
        <Link
          to="abs-section1"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-evo h-16 w-0.5 bg-highlight-low m-4 
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section2"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4 
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section3"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight m-4 
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section4"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section5"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
      </div>
    );
  } else if (props.index == 4) {
    return (
      <div className="home-nav top-1/2 -translate-y-1/2 left-4 z-10 fixed sm:hidden">
        <Link
          to="abs-section1"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-evo h-16 w-0.5 bg-highlight-low m-4 
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section2"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4 
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section3"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4 
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section4"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight m-4
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section5"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
      </div>
    );
  } else if (props.index == 5) {
    return (
      <div className="home-nav top-1/2 -translate-y-1/2 left-4 z-10 fixed sm:hidden">
        <Link
          to="abs-section1"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-evo h-16 w-0.5 bg-highlight-low m-4 
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section2"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4 
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section3"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4 
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section4"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight-low m-4
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
        <Link
          to="abs-section5"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div
            className="h-about h-16 w-0.5 bg-highlight m-4
                        rounded-xl cursor-pointer hover:w-1"
          ></div>
        </Link>
      </div>
    );
  }
}

export default SideActiveIndicatorAboutUs;
