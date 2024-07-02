import React from 'react'
import Link from 'next/link';

const NewsletterFive = () => {
    return (
        <section className='newsletter-block lg:py-20 sm:py-14 py-10 bg-[#F3F2F0]'>
            <div className="container flex max-lg:flex-col lg:items-center justify-between md:gap-y-8 gap-y-5">
                <div className="left lg:w-1/2 w-full">
                    <div className="icon flex items-center">
                        <span className="icon-slash text-5xl"></span>
                        <span className="icon-slash text-5xl -ml-6"></span>
                    </div>
                    <h3 className="heading3 mt-3">Receive the top blog stories directly in your inbox</h3>
                </div>
                <div className="right lg:w-[40%] sm:w-2/3 w-full">
                    <form className='flex items-center justify-end relative w-full'>
                        <input className='bg-white absolute top-0 left-0 w-full h-full pl-4 pr-40' type="email" placeholder='Enter your e-mail' required />
                        <button className='button-main relative z-[1] bg-pink text-white rounded-none'>Subscribe</button>
                    </form>
                    <div className="checkbox flex items-start mt-5">
                        <input type="checkbox" id="checkbox" className='mt-1.5' />
                        <label htmlFor="checkbox" className="ml-2 text-surface1">I have read the <Link href={'#!'} className='text-black underline'>Privacy Policy</Link> and agree to its terms</label>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterFive
