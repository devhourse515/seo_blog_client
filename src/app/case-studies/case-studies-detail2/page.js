'use client'

import Image from "next/image";
import * as Icon from '@phosphor-icons/react/dist/ssr'
import StickyBox from 'react-sticky-box';

import LayoutOne from "@/components/Layout/LayoutOne";
import testimonialData from "@/data/testimonial/data.json";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialOne";
import CaseStudyOne from "@/components/Sections/CaseStudy/CaseStudyOne";
import caseStudyData from "@/data/case-study/data.json"
import ContactOne from "@/components/Sections/Contact/ContactOne";

export default function CaseStudiesDtailTwo() {
    return (
        <>
            <LayoutOne className="-style-1">
                <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
                <HeadingSubpage classname={'lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] md:pb-12 pb-8'} tag={"IT Solution"} title={"exploring tech trends"} />
                <div className="introduce">
                    <div className="container">
                        <div className="bg-img md:h-[460px] h-[300px] rounded-[20px] overflow-hidden">
                            <Image src="/images/blog/1290x837.png" width={5000} height={5000} alt="/images/blog/1290x837.png" className="w-full h-full object-cover" />
                        </div>
                        <div className="desc-block flex items-center justify-center lg:mt-10 mt-7">
                            <p className="desc w-5/6 heading5 font-normal normal-case text-center">American tech companies continue to propel the nation’s economy forward. Not only has technological innovation become an integral part of the way we live, it is also important to our nation’s economic success.</p>
                        </div>
                    </div>
                </div>
                <section className="case-detail-two-content lg:py-[60px] sm:py-12 py-8">
                    <div className="container">
                        <div className="flex max-lg:flex-col-reverse justify-between gap-y-8">
                            <div className="content-main lg:w-2/3 lg:pr-4">
                                <div className="bg-img w-full">
                                    <img className="w-full rounded-3xl" src="/images/blog/1290x837.png" alt="blog/1290x837.png" />
                                </div>
                                <h3 className="heading4 lg:mt-10 mt-7">the benefits they have gained from using it</h3>
                                <p className="body2 text-surface1 mt-3">At ByteWave, we understand that selecting the right partner for your technology needs is a critical decision. We believe that we are the perfect fit for you, and here's why.</p>
                                <div className="list-features">
                                    <div className="feature-item flex item-center gap-6">
                                        <div className="icon flex flex-shrink-0 items-center justify-center lg:w-[68px] w-14 lg:h-[68px] h-14 bg-surface rounded-full">
                                            <Icon.Target className="text-blue lg:text-4xl text-3xl" />
                                        </div>
                                        <div className="infor">
                                            <h5 className="heading5">Efficient Technical Support</h5>
                                            <p className="body2 text-surface1 lg:mt-3 mt-2">Our efficient technical support team is dedicated to being your trusted IT partner.</p>
                                        </div>
                                    </div>
                                    <div className="feature-item flex item-center gap-6 lg:mt-10 mt-7">
                                        <div className="icon flex flex-shrink-0 items-center justify-center lg:w-[68px] w-14 lg:h-[68px] h-14 bg-surface rounded-full">
                                            <Icon.ChartBar className="text-blue lg:text-4xl text-3xl" />
                                        </div>
                                        <div className="infor">
                                            <h5 className="heading5">Enhanced Productivity</h5>
                                            <p className="body2 text-surface1 lg:mt-3 mt-2">In the fast-paced world of business, enhancing productivity is a constant challenge.</p>
                                        </div>
                                    </div>
                                    <div className="feature-item flex item-center gap-6 lg:mt-10 mt-7">
                                        <div className="icon flex flex-shrink-0 items-center justify-center lg:w-[68px] w-14 lg:h-[68px] h-14 bg-surface rounded-full">
                                            <Icon.ChartLineDown className="text-blue lg:text-4xl text-3xl" />
                                        </div>
                                        <div className="infor">
                                            <h5 className="heading5">Minimized Incidents</h5>
                                            <p className="body2 text-surface1 lg:mt-3 mt-2">Trust us for proactive monitoring, rapid incident response, and scalable solutions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="counter-inner flex flex-col items-center justify-center lg:p-[60px] sm:p-12 p-8 lg:mt-[60px] sm:mt-12 mt-8 rounded-3xl bg-linear">
                                    <span className="heading6 font-normal">Services Used</span>
                                    <h3 className="heading4 mt-3">Innovation Solutions</h3>
                                    <div className="list-counter flex justify-between max-lg:flex-wrap gap-y-8 w-full lg:mt-10 mt-7">
                                        <div className="counter-item flex flex-col items-start max-lg:w-1/2">
                                            <strong className="heading4">15-20%</strong>
                                            <span className="heading6 font-normal">Revenue Growth</span>
                                        </div>
                                        <div className="counter-item flex flex-col items-start max-lg:w-1/2">
                                            <strong className="heading4">+450</strong>
                                            <span className="heading6 font-normal">Customer Expansion</span>
                                        </div>
                                        <div className="counter-item flex flex-col items-start max-lg:w-1/2">
                                            <strong className="heading4">+90</strong>
                                            <span className="heading6 font-normal">Project Diversification</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex max-lg:flex-col gap-y-8 lg:py-[60px] md:py-12 py-8">
                                    <div className="lg:w-6/12 lg:pr-7 lg:border-r border-outline">
                                        <h3 className="heading4">What The Project Means For us</h3>
                                        <p className="body2 text-surface1 mt-5">ELM is the Employee Leave management Android and Web Application with the Connection between management and Employees. ELM system is a process by which employees apply for leaves; managers approve them and leave balances are tracked. and also work Management Application</p>
                                    </div>
                                    <div className="lg:w-6/12 lg:pl-7">
                                        <h3 className="heading4">Features</h3>
                                        <p className="body2 mt-5">Initially, most companies opt for a manual process that involves a lot of busywork for the HR department:</p>
                                        <div className="list-feature mt-3">
                                            <div className="flex items-center">
                                                <Icon.CheckCircle weight="fill" className="flex-shrink-0 text-blue text-2xl" />
                                                <div className="text-title pl-3">The employee checks their leave balances</div>
                                            </div>
                                            <div className="flex items-center mt-4">
                                                <Icon.CheckCircle weight="fill" className="flex-shrink-0 text-blue text-2xl" />
                                                <div className="text-title pl-3">The employee drops an email to their manager</div>
                                            </div>
                                            <div className="flex items-center mt-4">
                                                <Icon.CheckCircle weight="fill" className="flex-shrink-0 text-blue text-2xl" />
                                                <div className="text-title pl-3">The manager looks through the work calendar</div>
                                            </div>
                                            <div className="flex items-center mt-4">
                                                <Icon.CheckCircle weight="fill" className="flex-shrink-0 text-blue text-2xl" />
                                                <div className="text-title pl-3">who then adjusts the leave balances accordingly</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <TestimonialOne classname={'style-service sm:py-[60px] max-sm:pb-10 bg-linear sm:rounded-3xl rounded-t-full rounded-b-3xl'} data={testimonialData} />
                            </div>
                            <StickyBox offsetTop={90} offsetBottom={10} className='box-fixed lg:w-1/3 lg:pl-10 h-fit'>
                                <div className="text-content">
                                    <h3 className="heading3">Boosting the American Economy</h3>
                                    <p className="body2 text-surface1 mt-6">Boosting the American Economy According to the US. Today, the tech sector is the second-largest and one of the fastest-growing industries powering the U.S. economy, with American tech companies growing their GDP contributions by 9.8% in 2021</p>
                                    <div className="more-infor xl:w-3/4 lg:w-4/5 sm:w-1/2 w-3/4 mt-6">
                                        <div className="flex items-center justify-between">
                                            <strong className="heading6">Client</strong>
                                            <span className="body2 text-surface1">Avitex Company</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-3">
                                            <strong className="heading6">Date</strong>
                                            <span className="body2 text-surface1">September, 2023</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-3">
                                            <strong className="heading6">Author</strong>
                                            <span className="body2 text-surface1">Tony Nguyen</span>
                                        </div>
                                    </div>
                                </div>
                            </StickyBox>
                        </div>
                    </div>
                </section>
                <CaseStudyOne classname={'lg:py-20 sm:py-14 py-10 bg-linear'} data={caseStudyData} start={0} limit={5} />
                <ContactOne classname={'bg-linear-blue'} />
            </LayoutOne>
        </>
    );
}
