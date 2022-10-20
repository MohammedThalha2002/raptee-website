import { IconContext } from 'react-icons/lib'
import { IoMdMenu } from 'react-icons/io'
import NavLinks from './NavLinks'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'


function NavBar(props) {

    const btnRef = useRef()
    function openNavLinks() {
        console.log("Clicked")
        btnRef.current.style.display = 'block'
    }
    function LogoComponent() {
        if (props.mobile) {
            return (
                <Link href={'/home'}>
                    <Image
                        src="/images/logo.png"
                        width={110}
                        height={17.5}
                        priority={true}
                        className=' cursor-pointer'
                    />
                </Link>
            )
        } else {
            return (
                <Link href={'/home'}>
                    <Image
                        src="/images/logo.png"
                        width={108}
                        height={28}
                        priority={true}
                        className=' cursor-pointer'
                    />
                </Link>
            )
        }
    }
    return (
        <div>
            <nav className='pt-4 px-8 backdrop-blur-sm
            bg-black/30 z-50 h-20vh w-full shadow-md top-0 fixed 
            sm:pt-1 sm:px-4'>
                <div className="flex justify-between">

                    <LogoComponent></LogoComponent>
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