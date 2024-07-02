import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';

const SliderSix = () => {
    return (
        <section className="slider style-two style-four style-six">
            <div className="container">
                <div className="slider-inner flex items-center justify-between">
                    <div className="lg:w-1/2 md:w-5/6 w-full">
                        <div className="text-content">
                            <h2 className="heading1">Maximize your visibility online</h2>
                            <div className="body2 md:mt-7 mt-4">Empower Your Business with Expert Digital Marketing Solutions. From SEO to Social Media, We Drive Your Success!</div>
                            <div className="block-input flex items-center justify-end relative w-full md:mt-10 mt-7">
                                <input className="border-transparent absolute top-0 left-0 w-full h-full bg-surface text-button px-4" type="text" placeholder="Enter your e-mail" />
                                <button className="button-main bg-purple inline-flex items-center relative z-[1] rounded-none">
                                    <Icon.PaperPlaneTilt className="text-button text-xl max-sm:hidden" />
                                    <span className="text-button pl-2">Subscribe</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full h-full max-lg:hidden">
                        <div className="slider-img w-full">
                            <Image width={4000} height={4000} className='w-full' src="/images/slider/bg-slider6.png" alt="bg-slider6" />
                            <Image width={4000} height={4000} className='w-full' src="/images/slider/slider6.png" alt="slider6" />
                        </div>
                    </div>
                </div>
                <div className="sub-img-dots max-lg:hidden">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </section >
    )
}

export default SliderSix
