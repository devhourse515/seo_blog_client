import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const NewsletterFour = () => {
    return (
        <section className='newsletter-block lg:py-20 sm:py-14 py-10'>
            <div className="container flex items-center justify-center">
                <div className="main sm:w-7/12 w-full flex flex-col items-center justify-center">
                    <span className="icon flex items-center justify-center w-[60px] h-[60px] bg-pink rounded-full">
                        <Icon.PaperPlaneTilt className='text-white text-3xl' />
                    </span>
                    <h3 className="heading3 text-center mt-4">Receive the top blog stories directly in your inbox</h3>
                    <form className='flex items-center justify-end relative w-full lg:mt-9 mt-7'>
                        <input className='bg-[#F3F2F0] absolute top-0 left-0 w-full h-full pl-4 pr-40' type="email" placeholder='Enter your e-mail' required />
                        <button className='button-main relative z-[1] bg-pink text-white rounded-none'>Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewsletterFour
