import React from 'react'
import Image from 'next/image';
import * as Icon from "@phosphor-icons/react/dist/ssr";

const BenefitAbout = () => {
    return (
        <section className="our-value-block bg-linear-gradient-yellow lg:py-20 sm:py-14 py-10">
            <div className="container">
                <div className="heading text-center">
                    <h3 className="heading3 text-center">Our Journey Through Time</h3>
                    <div className="text-center mt-3">Discover exceptional experiences through testimonials from our satisfied customers.</div>
                </div>
                <div className="list-values grid xl:grid-cols-4 sm:grid-cols-2 gap-[30px] lg:mt-10 mt-6">
                    <div className="item bg-white p-8 rounded-[20px] h-full">
                        <Icon.Users className="text-blue text-6xl" />
                        <div className="heading5 fw-600 mt-6">Customer Centricity</div>
                        <div className="text-surface1 mt-3">Our clients are our priority. We listen to their needs,
                            understand their challenges, and work tirelessly to deliver IT solutions that meet and exceed their
                            expectations. Their success is our success.</div>
                    </div>
                    <div className="item bg-white p-8 rounded-[20px] h-full">
                        <Icon.Trophy className="text-blue text-6xl" />
                        <div className="heading5 fw-600 mt-6">Quality Assurance</div>
                        <div className="text-surface1 mt-3">We have a relentless commitment to quality. We set high
                            standards and rigorously test and monitor our IT services to ensure they meet those standards. Quality
                            is non-negotiable.</div>
                    </div>
                    <div className="item bg-white p-8 rounded-[20px] h-full">
                        <Icon.Crosshair className="text-blue text-6xl" />
                        <div className="heading5 fw-600 mt-6">Client Focus</div>
                        <div className="text-surface1 mt-3">Our clients are the center of our IT universe. We listen to
                            their needs, provide tailored solutions, and stand by them every step of the way. Their success is our
                            success, excellence, integrity.</div>
                    </div>
                    <div className="item bg-white p-8 rounded-[20px] h-full">
                        <Icon.ShieldCheck className="text-blue text-6xl" />
                        <div className="heading5 fw-600 mt-6">Integrity Always</div>
                        <div className="text-surface1 mt-3">Integrity is the foundation of trust. We operate with complete
                            transparency, ensuring the highest ethical standards in all our IT operations. Our clients rely on us
                            for honesty and fairness.</div>
                    </div>
                </div>
            </div>
            <div className="award-block lg:mt-20 sm:mt-14 mt-10">
                <div className="container xl:flex gap-8">
                    <div className="heading4 flex-shrink-0">Outstanding Customer<br className='max-sm:hidden' />Service Recognition</div>
                    <div className="w-full max-xl:mt-7">
                        <div className="list-award flex items-center xl:justify-end max-sm:flex-wrap sm:gap-14 gap-8">
                            <div className="bg-img">
                                <Image width={4000} height={4000} className="lg:w-[120px] w-24 lg:h-[120px] h-24" src="/images/award/120x120.png" alt="award/120x120.png" />
                            </div>
                            <div className="bg-img">
                                <Image width={4000} height={4000} className="lg:w-[120px] w-24 lg:h-[120px] h-24" src="/images/award/120x120.png" alt="award/120x120.png" />
                            </div>
                            <div className="bg-img">
                                <Image width={4000} height={4000} className="lg:w-[120px] w-24 lg:h-[120px] h-24" src="/images/award/120x120.png" alt="award/120x120.png" />
                            </div>
                            <div className="bg-img">
                                <Image width={4000} height={4000} className="lg:w-[120px] w-24 lg:h-[120px] h-24" src="/images/award/120x120.png" alt="award/120x120.png" />
                            </div>
                            <div className="bg-img">
                                <Image width={4000} height={4000} className="lg:w-[120px] w-24 lg:h-[120px] h-24" src="/images/award/120x120.png" alt="award/120x120.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BenefitAbout
