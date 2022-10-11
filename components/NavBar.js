import { IconContext } from 'react-icons/lib'
import { IoMdMenu } from 'react-icons/io'

function NavBar() {
    return (
        <nav className='pt-4 px-8 bg-black z-10 w-full shadow-md top-0'>
            <div className="flex justify-between">
                <h1 className='font-nebula text-white text-2xl'>
                    RAPTEE
                </h1>
                <IconContext.Provider value={{
                    color: 'white',
                    size: '2rem'
                }}>
                    <IoMdMenu />
                </IconContext.Provider>
            </div>
        </nav>
    )
}

export default NavBar