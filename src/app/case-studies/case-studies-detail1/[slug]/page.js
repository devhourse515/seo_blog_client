import Image from "next/image";
import * as Icon from '@phosphor-icons/react/dist/ssr'

import LayoutOne from "@/components/Layout/LayoutOne";
import testimonialData from "@/data/testimonial/data.json";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialOne";
import CaseStudyOne from "@/components/Sections/CaseStudy/CaseStudyOne";
import caseStudyData from "@/data/case-study/data.json"
import ContactOne from "@/components/Sections/Contact/ContactOne";
import { getPostByTitle } from "@/common/postSelect";

export default function CaseStudiesDtailOne({ params: { slug } }) {
    // Decode URL
    const decodedSlug = decodeURIComponent(slug);

    // handle with ' and "
    const cleanedSlug = decodedSlug.replace(/['"]/g, "'");

    let foundPost = getPostByTitle(caseStudyData, cleanedSlug);

    return (
        <>
            <LayoutOne className="-style-1">
                <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
                <HeadingSubpage classname={'lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] md:pb-12 pb-8'} tag={foundPost[0].category} title={foundPost[0].title} />
                <div className="introduce">
                    <div className="container">
                        <div className="bg-img md:h-[460px] h-[300px] rounded-[20px] overflow-hidden">
                            <Image src={foundPost[0].coverImage} width={5000} height={5000} alt={foundPost[0].coverImage} className="w-full h-full object-cover" />
                        </div>
                        <div className="desc-block flex items-center justify-center lg:mt-10 mt-7">
                            <p className="desc w-5/6 heading5 font-normal normal-case text-center">American tech companies continue to propel the nation’s economy forward. Not only has technological innovation become an integral part of the way we live, it is also important to our nation’s economic success.</p>
                        </div>
                    </div>
                </div>
                <section className="about-us-block lg:py-20 sm:py-14 py-10">
                    <div className="container">
                        <div className="flex max-lg:flex-col items-center justify-between gap-y-10">
                            <div className="lg:w-1/2 lg:pr-10">
                                <div className="bg-img w-full">
                                    <img className="w-full rounded-3xl" src="/images/blog/1290x837.png" alt="blog/1290x837.png" />
                                </div>
                            </div>
                            <div className="lg:w-1/2 lg:pl-10">
                                <div className="text-content">
                                    <h3 className="heading3">Boosting the American Economy</h3>
                                    <p className="body2 text-surface1 mt-6">Boosting the American Economy According to the US. Today, the tech sector is the second-largest and one of the fastest-growing industries powering the U.S. economy, with American tech companies growing their GDP contributions by 9.8% in 2021</p>
                                    <div className="more-infor xl:w-1/2 lg:w-2/3 sm:w-1/2 w-3/4 mt-6">
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
                            </div>
                        </div>
                    </div>
                </section>
                <section className="counter">
                    <div className="container">
                        <div className="counter-inner flex flex-col items-center justify-center lg:p-[60px] sm:p-10 p-7 rounded-3xl bg-linear">
                            <span className="heading6 font-normal">Services Used</span>
                            <h3 className="heading3 mt-3">Innovation Solutions</h3>
                            <div className="list-counter flex justify-between max-lg:flex-wrap gap-y-8 w-full lg:mt-10 mt-7">
                                <div className="counter-item flex flex-col items-center max-lg:w-1/2">
                                    <strong className="heading3">15-20%</strong>
                                    <span className="heading6 font-normal text-center">Revenue Growth</span>
                                </div>
                                <div className="counter-item flex flex-col items-center max-lg:w-1/2">
                                    <strong className="heading3">+95%</strong>
                                    <span className="heading6 font-normal text-center">Customer Satisfaction</span>
                                </div>
                                <div className="counter-item flex flex-col items-center max-lg:w-1/2">
                                    <strong className="heading3">+450</strong>
                                    <span className="heading6 font-normal text-center">Customer Expansion</span>
                                </div>
                                <div className="counter-item flex flex-col items-center max-lg:w-1/2">
                                    <strong className="heading3">+90</strong>
                                    <span className="heading6 font-normal text-center">Project Diversification</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="benefit lg:pt-20 sm:pt-14 pt-10">
                    <div className="container">
                        <div className="heading flex max-lg:flex-col justify-between gap-y-4">
                            <div className="xl:w-5/12 lg:w-6/12">
                                <h3 className="heading3">the benefits they have gained from using it</h3>
                            </div>
                            <div className="xl:w-5/12 lg:w-6/12">
                                <div className="body2 text-surface1 lg:text-end">At ByteWave, we understand that selecting the right partner for your technology needs is a critical decision. We believe that we are the perfect fit for you, and here's why.</div>
                            </div>
                        </div>
                        <div className="flex max-lg:flex-col justify-between lg:mt-10 mt-7 gap-y-10">
                            <div className="lg:w-5/12">
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
                            <div className="lg:w-6/12">
                                <div className="bg-img overflow-hidden rounded-3xl">
                                    <Image width={5000} height={5000} className="w-full" src="/images/component/bg-case-detail-benefit.png" alt="/component/bg-case-detail-benefit.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="feature-block lg:py-20 sm:py-14 py-10">
                    <div className="container">
                        <div className="flex max-lg:flex-col gap-y-8">
                            <div className="lg:w-6/12 lg:pr-20 lg:border-r border-outline">
                                <h3 className="heading3">What The Project Means For us</h3>
                                <p className="body2 text-surface1 mt-5">ELM is the Employee Leave management Android and Web Application with the Connection between management and Employees. ELM system is a process by which employees apply for leaves; managers approve them and leave balances are tracked. and also work Management Application</p>
                            </div>
                            <div className="lg:w-6/12 lg:pl-20">
                                <h3 className="heading3">Features</h3>
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
                    </div>
                </section>
                <TestimonialOne classname={'style-service md:py-[60px] bg-linear md:rounded-3xl rounded-full'} data={testimonialData} />
                <CaseStudyOne classname={'lg:py-20 sm:py-14 py-10 bg-linear'} data={caseStudyData} start={0} limit={5} />
                <ContactOne classname={'bg-linear-blue'} />
            </LayoutOne>
        </>
    );
}
