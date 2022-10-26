import React from 'react'
import { IconContext } from 'react-icons/lib'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import { gsap } from "gsap/dist/gsap.js";

function NavLinks(props) {
    function cloaseNavLinks() {
        console.log("Closed the NAVLINK")
        gsap.fromTo(props.reference.current,
            { opacity: 1, x: -384 },
            {
                opacity: 0, x: 0, duration: 0.5, ease: "ease-in",
            },
        )
    }
    return (
        <nav className='pt-4 px-8 backdrop-blur-lg
        bg-gray-400/50 z-50 h-100vh w-96 shadow-md top-0 -right-96 fixed 
        sm:w-2/3' ref={props.reference}>
            <div className="flex flex-col items-end">
                <div className='flex items-center'>
                    <h4>Close</h4>
                    <IconContext.Provider value={{
                        color: '#E0B317',
                        size: '2rem'
                    }}>
                        <IoMdClose onClick={cloaseNavLinks} className='cursor-pointer' />
                    </IconContext.Provider>
                </div>
                <Link href={'/home'}>
                    <h1 className='text-3xl sm:text-xl my-8 cursor-pointer ease-in duration-100 hover:text-4xl'>Home</h1>
                </Link>
                <Link href={'/techstory'}>
                    <h1 className='text-3xl sm:text-xl my-8 cursor-pointer ease-in duration-100 hover:text-4xl'>Tech Story</h1>
                </Link>
                <Link href={'/home'}>
                    <h1 className='text-3xl sm:text-xl my-8 cursor-pointer ease-in duration-100 hover:text-4xl'>OEM Solutions</h1>
                </Link>
                <Link href={'/culture'}>
                    <h1 className='text-3xl sm:text-xl my-8 cursor-pointer ease-in duration-100 hover:text-4xl'>Culture</h1>
                </Link>
                <Link href={'/home'}>
                    <h1 className='text-3xl sm:text-xl my-8 cursor-pointer ease-in duration-100 hover:text-4xl'>Contact</h1>
                </Link>
                <Link href={'/home'}>
                    <h1 className='text-3xl sm:text-xl my-8 cursor-pointer ease-in duration-100 hover:text-4xl'>Career</h1>
                </Link>
            </div>
        </nav>
    )
}

export default NavLinks