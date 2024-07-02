import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import LayoutOne from "@/components/Layout/LayoutOne";
import ContactOne from "@/components/Sections/Contact/ContactOne";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import FaqsPricing from "@/components/Sections/Faqs/FaqsPricing";
import caseData from '@/data/case-study/data.json'
import OutstandingCaseStudies from "@/components/HeadingSubpage/OutstandingCaseStudies";

export default function PricingPlan() {
    const data = caseData[2]

    return (
        <>
            <LayoutOne className="-style-1">
                <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
                <HeadingSubpage classname={'lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] sm:pb-12 pb-8'} title={'Reach Out for Support!'} desc={'Feedback from Our Valued Clients'} />
                <OutstandingCaseStudies data={data} showDesc />
                <div className="list-pricing lg:py-20 sm:py-14 py-10">
                    <div className="container">
                        <h3 className="heading3 text-center">Pricing Plan</h3>
                        <p className="body2 text-surface1 text-center mt-3">Tracing the Path of Our Legacy and Growth</p>
                        <div className="list grid xl:grid-cols-3 md:grid-cols-2 gap-8 lg:mt-10 mt-7">
                            <div className="pricing-item bg-white p-10 rounded-[20px] border border-outline duration-300 hover:shadow-lg">
                                <div className="heading5">Silver</div>
                                <div className="price gap-2 mt-3">
                                    <div className="heading2">$599.00</div>
                                    <div className="caption1 text-surface1">/ per month</div>
                                </div>
                                <div className="list-feature mt-6 flex flex-col gap-3 pt-8 border-t border-outline">
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">20 keywords</div>
                                    </div>
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">2,000 monthly website visitors</div>
                                    </div>
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">4 blogs / month</div>
                                    </div>
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">3 quality backlinks / month</div>
                                    </div>
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">Dedicated expert team</div>
                                    </div>
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">Monitoring & reporting</div>
                                    </div>
                                </div>
                                <Link className="button-main text-black bg-transparent border border-black hover:text-white hover:bg-blue hover:border-blue mt-6" href="/company/pricing-plan">Choose Plan</Link>
                            </div>
                            <div className="pricing-item bg-white p-10 rounded-[20px] border border-outline duration-300 hover:shadow-lg">
                                <div className="heading5">Gold</div>
                                <div className="price gap-2 mt-5">
                                    <div className="heading2 text-blue">$1149.00</div>
                                    <div className="caption1 text-on-surface1">/ per month</div>
                                </div>
                                <div className="list-feature mt-6 flex flex-col gap-3 pt-8 border-t border-outline">
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">60 keywords</div>
                                    </div>
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">6,000 monthly website visitors</div>
                                    </div>
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">8 blogs / month</div>
                                    </div>
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">10 quality backlinks / month</div>
                                    </div>
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">Dedicated expert team</div>
                                    </div>
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">Monitoring & reporting</div>
                                    </div>
                                </div>
                                <Link className="button-main bg-blue border border-blue mt-6" href="/company/pricing-plan">Choose Plan</Link>
                            </div>
                            <div className="pricing-item bg-white p-10 rounded-[20px] border border-outline duration-300 hover:shadow-lg">
                                <div className="heading5">Platinum</div>
                                <div className="price gap-2 mt-5">
                                    <div className="heading2">$4379.00</div>
                                    <div className="caption1 text-on-surface1">/ per month</div>
                                </div>
                                <div className="list-feature mt-6 flex flex-col gap-3 pt-8 border-t border-outline">
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">150 keywords</div>
                                    </div>
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">20,000 monthly website visitors</div>
                                    </div>
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">15 blogs / month</div>
                                    </div>
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">20 quality backlinks / month</div>
                                    </div>
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">Dedicated expert team</div>
                                    </div>
                                    <div className="item flex items-center gap-2">
                                        <Icon.Check className="text-2xl text-blue" />
                                        <div className="feature">Monitoring & reporting</div>
                                    </div>
                                </div>
                                <Link className="button-main text-black bg-transparent border border-black hover:text-white hover:bg-blue hover:border-blue mt-6" href="/company/pricing-plan">Choose Plan</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <FaqsPricing />
                <ContactOne classname={'bg-linear-blue'} />
            </LayoutOne>
        </>
    );
}
