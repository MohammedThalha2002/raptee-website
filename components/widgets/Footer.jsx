import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <section className="bg-black w-screen flex justify-around flex-wrap" id="footer">
            {/* NEWSLETTER */}
            <div className='py-10 w-80'>
                <div className="title">
                    <h2 className=' font-oswald font-light text-2xl tracking-wide sm:text-xl'>NEWSLETTER</h2>
                    <div className="underline w-10 h-0.5 rounded-xl my-2 mr-32 bg-highlight"></div>
                </div>
                <div className='flex w-full my-4'>
                    <div>
                        <input type="text" id="first_name" className="bg-black border-2 border-white text-white
                        text-xs rounded-3xl block p-2.5 " placeholder="First Name" required />
                    </div>
                    <div>
                        <input type="text" id="last_name" className="bg-black border-2 border-white text-white
                        text-xs rounded-3xl block p-2.5 ml-4" placeholder="Last Name" required />
                    </div>
                </div>
                <div>
                    <input type="email" id="email" className="bg-black border-2 border-white text-white
                        text-xs rounded-3xl w-full block p-2.5 my-4" placeholder="Email" required />
                </div>
                <button className='bg-black border-2 border-white text-white
                        text-xs rounded-3xl block py-2.5 px-12 my-4'>SEND</button>
            </div>
            {/* ADDRESS */}
            <div className='py-10 px-2 w-56'>
                <div className="title">
                    <h2 className=' font-oswald font-light text-2xl tracking-wide sm:text-xl'>HEAD OFFICE</h2>
                    <div className="underline w-10 h-0.5 rounded-xl my-2 mr-32 bg-highlight"></div>
                </div>
                <div className='mt-6 tracking-wide sm:text-sm'>
                    <h3>NO 9, Ganapathy Nagar</h3>
                    <h3>1st St, Navarathna Garden,</h3>
                    <h3>Ekkatuthangal, Chennai,</h3>
                    <h3>Tamil Nadu 600032</h3>
                </div>
            </div>
            {/* CONATCT */}
            <div className='py-10 px-2 w-52'>
                <div className="title">
                    <h2 className=' font-oswald font-light text-2xl tracking-wide sm:text-xl'>CONTACT</h2>
                    <div className="underline w-10 h-0.5 rounded-xl my-2 mr-32 bg-highlight"></div>
                </div>
                <div className='mt-6 tracking-wide sm:text-sm'>
                    <h3>Ph. No: +91 8925061646</h3>
                    <h3>contact@rapteemotors.com</h3>
                </div>
                <div className="flex justify-between mt-4">
                    {/* Linkedin: https://www.linkedin.com/company/rapteeenergy/?viewAsMember=true
                    Instagram: https://www.instagram.com/rapteeenergy/
                    twitter: https://twitter.com/RapteeEnergy
                    Facebook: https://www.facebook.com/rapteemotors */}
                    <Link href={'https://www.linkedin.com/company/rapteeenergy/?viewAsMember=true'}
                        target={"_blank"} rel={"noopener noreferrer"}>
                        <Image
                            src={'/images/linkedin.png'}
                            width={25}
                            height={25}
                            className='cursor-pointer'
                        />
                    </Link>
                    <Link href={'https://www.instagram.com/rapteeenergy/'}
                        target={"_blank"} rel={"noopener noreferrer"}>
                        <Image
                            src={'/images/insta.png'}
                            width={25}
                            height={25}
                            className='cursor-pointer'
                        />
                    </Link>
                    <Link href={'https://twitter.com/RapteeEnergy'}
                        target={"_blank"} rel={"noopener noreferrer"}>
                        <Image
                            src={'/images/twitter.png'}
                            width={25}
                            height={25}
                            className='cursor-pointer'
                        />
                    </Link>
                    <Link href={'https://www.facebook.com/rapteemotors'}
                        target={"_blank"} rel={"noopener noreferrer"}>
                        <Image
                            src={'/images/facebook.png'}
                            width={25}
                            height={25}
                            className='cursor-pointer'
                        />
                    </Link>
                </div>
            </div>
            {/* ADDRESS */}
            <div className='py-10 px-2 w-52'>
                <div className="underline w-10 h-0.5 rounded-xl my-2 mr-32 bg-highlight"></div>
                <div className='tracking-wide sm:text-sm'>
                    <h2 className='my-2'>Privacy Policy</h2>
                    <h2 className='my-2'>Refund Policy</h2>
                    <h2 className='my-2'>Terms of Services</h2>
                    <h2 className='my-2'>About Us</h2>
                    <h2 className='my-2'>Blog</h2>
                </div>
                <div className="underline w-10 h-0.5 rounded-xl my-2 mr-32 bg-highlight"></div>
            </div>
        </section>
    )
}

export default Footer