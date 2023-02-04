import React from "react";
import { IconContext } from "react-icons/lib";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import scrollLock from "scroll-lock";
import { gsap } from "gsap/dist/gsap.js";
import * as Scroll from "react-scroll";
import { Link as Linky } from "react-scroll";

function NavLinks(props) {
  function cloaseNavLinks() {
    console.log("Closed the NAVLINK");
    scrollLock.enablePageScroll();
    gsap.fromTo(
      props.reference.current,
      { opacity: 1, x: -384 },
      {
        opacity: 0,
        x: 0,
        duration: 0.5,
        ease: "ease-in",
      }
    );
  }
  return (
    <nav
      className="pt-4 px-8 backdrop-blur-lg
        bg-gray-400/50 z-50 h-100vh w-96 shadow-md top-0 -right-96 fixed 
        sm:w-2/3"
      ref={props.reference}
    >
      <div className="flex flex-col h-full items-end">
        <div className="flex items-center">
          <h4>Close</h4>
          <IconContext.Provider
            value={{
              color: "#E0B317",
              size: "2rem",
            }}
          >
            <IoMdClose onClick={cloaseNavLinks} className="cursor-pointer" />
          </IconContext.Provider>
        </div>
        <div className="flex flex-col justify-evenly h-full items-end">
          <Link href={"/home"}>
            <h1 className="text-3xl sm:text-xl cursor-pointer ease-in duration-100 hover:text-4xl sm:hover:text-2xl">
              Home
            </h1>
          </Link>
          <Link href={"/techstory"}>
            <h1 className="text-3xl sm:text-xl cursor-pointer ease-in duration-100 hover:text-4xl sm:hover:text-2xl">
              Tech Story
            </h1>
          </Link>
          <Link href={"/home"}>
            <h1 className="text-3xl sm:text-xl cursor-pointer ease-in duration-100 hover:text-4xl sm:hover:text-2xl">
              OEM Solutions
            </h1>
          </Link>
          <Link href={"/culture"}>
            <h1 className="text-3xl sm:text-xl cursor-pointer ease-in duration-100 hover:text-4xl sm:hover:text-2xl">
              Culture
            </h1>
          </Link>
          <Linky
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            delay={0}
            onClick={cloaseNavLinks}
          >
            <h1 className="text-3xl sm:text-xl cursor-pointer ease-in duration-100 hover:text-4xl sm:hover:text-2xl">
              Contact
            </h1>
          </Linky>
          <Link href={"https://apply.workable.com/raptee-energy/"}>
            <h1 className="text-3xl sm:text-xl cursor-pointer ease-in duration-100 hover:text-4xl sm:hover:text-2xl">
              Career
            </h1>
          </Link>
          <Link href={"https://medium.com/raptee-energy"}>
            <h1 className="text-3xl sm:text-xl cursor-pointer ease-in duration-100 hover:text-4xl sm:hover:text-2xl">
              Blogs
            </h1>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavLinks;
