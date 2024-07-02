'use client'

import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"
import VideoFrame from "@/components/Other/VideoFrame"

const CounterSix = () => {
    const [openVideo, setOpenVideo] = useState(false)

    return (
        <section className="section-about lg:mt-20 sm:mt-14 mt-10">
            <div className="container">
                <div className="flex max-lg:flex-col gap-y-8 lg:items-center justify-between">
                    <div className="w-full lg:w-6/12">
                        <h3 className="heading3">Ready to Dominate the Online Market?</h3>
                        <div className="desc mt-5">Welcome to us - a dedicated and professional finance company committed to elevating your financial prosperity. Leveraging our extensive financial knowledge, we craft tailored solutions to help you achieve personal</div>
                        <div className="group-btn flex items-center flex-wrap gap-3 md:mt-8 mt-5">
                            <Link href={"/pages/contact-us"} className="button-main bg-purple rounded">Let's Talk!</Link>
                            <Link
                                href='#!'
                                scroll={false}
                                className="button-main bg-white text-black border border-black rounded-full inline-flex gap-2 hover:border-purple hover:bg-purple hover:text-white"
                                onClick={() => setOpenVideo(true)}
                            >
                                <Icon.PlayCircle weight='fill' className='text-2xl' />
                                <span className=''>Video Presentation</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="counter flex">
                            <div className="item">
                                <strong className="heading3 flex items-center gap-2">
                                    <span className="icon-slash-bora"></span>
                                    <span>20</span>
                                </strong>
                                <div className="text-title mt-1">Years experiences</div>
                            </div>
                            <div className="item pl-10">
                                <strong className="heading3 flex items-center gap-2">
                                    <span className="icon-slash-bora"></span>
                                    <span>1.8k</span>
                                </strong>
                                <div className="text-title mt-1">Happy customers</div>
                            </div>
                        </div>
                        <div className="counter flex mt-5">
                            <div className="item">
                                <strong className="heading3 flex items-center gap-2">
                                    <span className="icon-slash-bora"></span>
                                    <span>250</span>
                                </strong>
                                <div className="text-title mt-1">Project completed</div>
                            </div>
                            <div className="item pl-10">
                                <strong className="heading3">
                                    <strong className="heading3 flex items-center gap-2">
                                        <span className="icon-slash-bora"></span>
                                        <span>10</span>
                                    </strong>
                                </strong>
                                <div className="text-title mt-1">Awards achievement</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {openVideo ? <VideoFrame setOpenVideo={setOpenVideo} /> : <></>}
        </section>
    )
}
export default CounterSix