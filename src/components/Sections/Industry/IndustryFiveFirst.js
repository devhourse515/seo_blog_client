'use client'

import { useState } from "react";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import VideoFrame from "@/components/Other/VideoFrame";

const IndustryFiveFirst = () => {
    const [openVideo, setOpenVideo] = useState(false)

    return (
        <section className="section-industry style-five style-first">
            <div className="container">
                <div className="flex max-lg:flex-col items-center justify-between gap-y-8 lg:pt-[265px] pt-32 pb-[60px]">
                    <div className="w-full lg:w-1/2 video-block">
                        <button className="play-block flex items-center justify-center w-20 h-20 rounded-full bg-green pointer" onClick={() => setOpenVideo(true)}>
                            <Icon.Play weight="fill" className="text-2xl" />
                        </button>
                        <h2 className="heading2 text-white mt-6">Start building your wealth journey!</h2>
                        <div className="heading6 text-white mt-6">Let us guide you towards a secure financial future.</div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white p-10 max-sm:px-7">
                            <div className="grid sm:grid-cols-2 gap-3">
                                <div className="w-full">
                                    <div className="nav-item service-item nav-item-main">
                                        <Link className="service-name inline-block hover-underline style-2px underline-green text-title text-surface1 hover:text-black duration-300" href="#!" scroll={false}>Personal Finance</Link>
                                    </div>
                                    <div className="nav-item service-item nav-item-main">
                                        <Link className="service-name inline-block hover-underline style-2px underline-green text-title text-surface1 hover:text-black duration-300 mt-3" href="#!" scroll={false}>Business & Corporate</Link>
                                    </div>
                                    <div className="nav-item service-item nav-item-main">
                                        <Link className="service-name inline-block hover-underline style-2px underline-green text-title text-surface1 hover:text-black duration-300 mt-3" href="#!" scroll={false}>Real Estate</Link>
                                    </div>
                                    <div className="nav-item service-item nav-item-main">
                                        <Link className="service-name inline-block hover-underline style-2px underline-green text-title text-surface1 hover:text-black duration-300 mt-3" href="#!" scroll={false}>Healthcare</Link>
                                    </div>
                                    <div className="nav-item service-item nav-item-main">
                                        <Link className="service-name inline-block hover-underline style-2px underline-green text-title text-surface1 hover:text-black duration-300 mt-3" href="#!" scroll={false}>Technology</Link>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="nav-item service-item nav-item-main">
                                        <Link className="service-name inline-block hover-underline style-2px underline-green text-title text-surface1 hover:text-black duration-300" href="#!" scroll={false}>Energy</Link>
                                    </div>
                                    <div className="nav-item service-item nav-item-main">
                                        <Link className="service-name inline-block hover-underline style-2px underline-green text-title text-surface1 hover:text-black duration-300 mt-3" href="#!" scroll={false}>Construction & Architecture</Link>
                                    </div>
                                    <div className="nav-item service-item nav-item-main">
                                        <Link className="service-name inline-block hover-underline style-2px underline-green text-title text-surface1 hover:text-black duration-300 mt-3" href="#!" scroll={false}>Food & Beverage</Link>
                                    </div>
                                    <div className="nav-item service-item nav-item-main">
                                        <Link className="service-name inline-block hover-underline style-2px underline-green text-title text-surface1 hover:text-black duration-300 mt-3" href="#!" scroll={false}>Manufacturing & Industrial</Link>
                                    </div>
                                    <div className="nav-item service-item nav-item-main">
                                        <Link className="service-name inline-block hover-underline style-2px underline-green text-title text-surface1 hover:text-black duration-300 mt-3" href="#!" scroll={false}>Education & Training</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {openVideo ? <VideoFrame setOpenVideo={setOpenVideo} /> : <></>}
        </section>
    )
}
export default IndustryFiveFirst