import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

const AboutSevenSecond = () => {
    return (
        <section className="section-about style-seven lg:py-20 sm:py-14 py-10">
            <div className="container">
                <div className="flex items-center justify-between gap-y-8 max-lg:flex-wrap">
                    <div className="w-full lg:w-5/12 lg:pr-4">
                        <Image width={8000} height={8000} className="w-full" src="/images/component/about-third7.png" alt="about-third7" />
                    </div>
                    <div className="w-full lg:w-7/12 lg:pl-16">
                        <span className="tag text-label bg-grey text-black">Why Choose US</span>
                        <h3 className="heading3 mt-5">Elevate Productivity with Our Expert Help Desk Services</h3>
                        <div className="desc mt-5">Welcome to Bytewave, your trusted companion in the realm of IoT services. We take pride in being a dedicated partner, committed to delivering state-of-the-art IoT solutions that propel the future of your business.</div>
                        <div className="feature border-t border-outline mt-7">
                            <div className="item flex gap-4 mt-7">
                                <Icon.ChartPolar weight="fill" className="text-5xl flex-shrink-0" />
                                <div className="info sm:flex-shrink-0">
                                    <h5 className="heading5">Efficient Technical Support</h5>
                                    <span className="inline-block mt-1">Quick and effective resolution of technical issues.</span>
                                </div>
                            </div>
                            <div className="item flex gap-4 mt-7">
                                <Icon.ChartBar weight="fill" className="text-5xl flex-shrink-0" />
                                <div className="info sm:flex-shrink-0">
                                    <h5 className="heading5">Enhanced Productivity</h5>
                                    <span className="inline-block mt-1">Time saved through prompt guidance.</span>
                                </div>
                            </div>
                            <div className="item flex gap-4 mt-7">
                                <Icon.ChartLineDown className="text-5xl flex-shrink-0" />
                                <div className="info sm:flex-shrink-0">
                                    <h5 className="heading5">Minimized Incidents</h5>
                                    <span className="inline-block mt-1">Consistent support to minimize disruptions.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSevenSecond