import { IconContext } from 'react-icons/lib'
import { IoMdMenu } from 'react-icons/io'
import NavLinks from './NavLinks'
import { useRef } from 'react'
import Image from 'next/image'


function NavBar() {
    const btnRef = useRef()
    function openNavLinks() {
        console.log("Clicked")
        btnRef.current.style.display = 'block'
    }
    return (
        <div>
            <nav className='pt-4 px-8 backdrop-blur-sm bg-black/30 z-50 h-20vh w-full shadow-md top-0 fixed'>
                <div className="flex justify-between">
                    <Image
                        src="/images/logo.png"
                        width={180}
                        height={28}
                        priority={true}
                    />
                    <IconContext.Provider value={{
                        color: 'white',
                        size: '2rem'
                    }}>
                        <IoMdMenu onClick={openNavLinks} className='cursor-pointer' />
                    </IconContext.Provider>
                </div>
            </nav>
            <NavLinks reference={btnRef}></NavLinks>
        </div>
    )
}

export default NavBar