import { IconContext } from 'react-icons/lib'
import { IoMdMenu } from 'react-icons/io'

function NavBar() {
    return (
        <nav className='pt-4 px-8 backdrop-blur-sm bg-black/30 z-50 h-20vh w-full shadow-md top-0 fixed'>
            <div className="flex justify-between">
                <h1 className='font-nebula font-semibold text-white text-2xl'>
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