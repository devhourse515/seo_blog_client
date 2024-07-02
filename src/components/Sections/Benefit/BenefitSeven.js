'use client'

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import VideoFrame from "@/components/Other/VideoFrame";

const BenefitSeven = ({ classname, background }) => {
    const [openVideo, setOpenVideo] = useState(false)

    return (
        <section className={`section-benefit ${classname}`}>
            <div className="container">
                <div className={`flex gap-y-8 xl:items-center justify-between max-xl:flex-col sm:p-14 p-6 ${background} rounded-3xl`}>
                    <div className="w-full xl:w-1/2 relative">
                        <h4 className="heading4">100 Years Of History Serving The Poconos Region</h4>
                        <div className="bg-img mt-7 video-block relative overflow-hidden rounded-[20px]">
                            <Image width={5000} height={5000} className="w-full" src="/images/component/about3.png" alt="about3" />
                            <button
                                className="icon-play w-[60px] h-[60px] text-white bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center hover:bg-white hover:text-black duration-300"
                                onClick={() => setOpenVideo(true)}
                            >
                                <Icon.Play weight="fill" className="text-2xl" />
                            </button>
                            <span className="text-title text-white absolute left-5 bottom-5">Tony Nguyen, CEO, Bytewave</span>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2 xl:pl-20">
                        <div className="bg-white sm:p-10 p-6 rounded-[20px]">
                            <h3 className="heading3">Unlock your financial potential today!</h3>
                            <div className="list-feature mt-7">
                                <div className="flex items-center">
                                    <Icon.Check className='text-blue text-2xl' />
                                    <div className="text-title pl-3">Supported by experienced financial experts.</div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <Icon.Check className='text-blue text-2xl' />
                                    <div className="text-title pl-3">Optimizing investment portfolios and assets.</div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <Icon.Check className='text-blue text-2xl' />
                                    <div className="text-title pl-3">Building stable financial plans for the future.</div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <Icon.Check className='text-blue text-2xl' />
                                    <div className="text-title pl-3">Ensuring financial security through suitable insurance.</div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <Icon.Check className='text-blue text-2xl' />
                                    <div className="text-title pl-3">Optimizing investment portfolios and assets.</div>
                                </div>
                            </div>
                            <Link className="button-main md:mt-9 mt-7" href="/company/our-teams">Our Services</Link>
                        </div>
                    </div>
                </div>
            </div>

            {openVideo ? <VideoFrame setOpenVideo={setOpenVideo} /> : <></>}
        </section>
    )
}
export default BenefitSeven