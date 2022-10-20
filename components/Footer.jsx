import React from 'react'

function Footer() {
    return (
        <section className="bg-black h-72 flex justify-around sm:hidden">
            {/* ADDRESS */}
            <div className='py-10 w-52'>
                <div className="title">
                    <h2 className=' font-oswald font-light text-2xl tracking-wide'>HEAD OFFICE</h2>
                    <div className="underline w-10 h-0.5 rounded-xl my-2 mr-32 bg-highlight"></div>
                </div>
                <div className='mt-6 tracking-wide'>
                    <h3>NO 9, Ganapathy Nagar 1st </h3>
                    <h3>St, Navarathna Garden,</h3>
                    <h3>Ekkatuthangal, Chennai,</h3>
                    <h3>Tamil Nadu 600032</h3>
                </div>
            </div>
            {/* CONATCT */}
            <div className='py-10 w-52'>
                <div className="title">
                    <h2 className=' font-oswald font-light text-2xl tracking-wide'>CONTACT</h2>
                    <div className="underline w-10 h-0.5 rounded-xl my-2 mr-32 bg-highlight"></div>
                </div>
                <div className='mt-6 tracking-wide'>
                    <h3>Ph. No - +1 765 426 3072</h3>
                    <h3>Ph. No - +91 89250 61646</h3>
                    <h3>contact@rapteemotors.com</h3>
                </div>
            </div>
            {/* SUPPORT */}
            <div className='py-10 w-52'>
                <div className="title">
                    <h2 className=' font-oswald font-light text-2xl tracking-wide'>SUPPORT US</h2>
                    <div className="underline w-10 h-0.5 rounded-xl my-2 mr-32 bg-highlight"></div>
                </div>
                <div className='mt-6 tracking-wide'>
                    <h3>We are on continuous </h3>
                    <h3>lookout for investors who</h3>
                    <h3>share our passion</h3>
                    <h3>towards motorcycles and</h3>
                    <h3>help us achieve our goal</h3>
                    <h3>of sustainable mobility</h3>
                </div>
            </div>
            {/* ADDRESS */}
            <div className='py-10 w-52'>
                <div className='tracking-wide'>
                    <h2 className='my-2'>Privacy Policy</h2>
                    <h2 className='my-2'>Refund Policy</h2>
                    <h2 className='my-2'>Terms of Services</h2>
                </div>
                <div className="underline w-10 h-0.5 rounded-xl my-2 mr-32 bg-highlight"></div>
            </div>
        </section>
    )
}

export default Footer