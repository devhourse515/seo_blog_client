import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link';

const NewsletterSeven = () => {
    return (
        <section className='newsletter-block lg:py-[60px] sm:py-14 py-10 bg-[#0D0F44]'>
            <div className="container flex max-lg:flex-col lg:items-center justify-between md:gap-y-8 gap-y-5">
                <div className="left lg:w-1/2 w-full">
                    <h3 className="heading3 text-white">Receive the top blog stories directly in your inbox</h3>
                </div>
                <div className="right lg:w-[40%] sm:w-2/3 w-full">
                    <form className='flex items-center justify-end relative w-full rounded overflow-hidden'>
                        <input className='bg-white absolute top-0 left-0 w-full h-full pl-4 pr-40' type="email" placeholder='Enter your e-mail' required />
                        <button className='button-main relative z-[1] rounded-l-none rounded-r'>Subscribe</button>
                    </form>
                    <div className="checkbox flex items-center mt-5">
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox" className="ml-2 text-white">I have read the <Link href={'#!'} className='text-white underline'>Privacy Policy</Link> and agree to its terms</label>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterSeven
