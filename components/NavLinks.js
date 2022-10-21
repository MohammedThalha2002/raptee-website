import React from 'react'
import { IconContext } from 'react-icons/lib'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'

function NavLinks(props) {
    function cloaseNavLinks() {
        console.log("Closed the NAVLINK")
        props.reference.current.style.display = 'none'
    }
    return (
        <nav className='pt-4 px-8 backdrop-blur-lg
        bg-gray-400/50 z-50 h-100vh w-2/6 shadow-md top-0 right-0 fixed hidden
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
                    <h1 className='text-3xl sm:text-xl my-8 cursor-pointer hover:font-medium'>Home</h1>
                </Link>
                <Link href={'/techstory'}>
                    <h1 className='text-3xl sm:text-xl my-8 cursor-pointer hover:font-medium'>Tech Story</h1>
                </Link>
                <Link href={'/home'}>
                    <h1 className='text-3xl sm:text-xl my-8 cursor-pointer hover:font-medium'>OEM Solutions</h1>
                </Link>
                <Link href={'/culture'}>
                    <h1 className='text-3xl sm:text-xl my-8 cursor-pointer hover:font-medium'>Culture</h1>
                </Link>
                <Link href={'/home'}>
                    <h1 className='text-3xl sm:text-xl my-8 cursor-pointer hover:font-medium'>Contact</h1>
                </Link>
                <Link href={'/home'}>
                    <h1 className='text-3xl sm:text-xl my-8 cursor-pointer hover:font-medium'>Career</h1>
                </Link>
            </div>
        </nav>
    )
}

export default NavLinks