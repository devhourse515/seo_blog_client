'use client'

import React, { useState } from "react"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const PricingSeven = ({ classname }) => {
    const [enableSwitch, setEnableSwitch] = useState(false)

    const handleSwitch = () => {
        setEnableSwitch(!enableSwitch)
    }

    return (
        <section className={`section-pricing style-seven lg:py-20 sm:py-14 py-10 ${classname}`}>
            <div className="container flex max-xl:flex-col xl:items-center justify-between gap-y-10">
                <div className="introduce xl:w-1/3 flex flex-col lg:gap-8 gap-6">
                    <div className="heading">
                        <h3 className="heading3">Reach Out for Support!</h3>
                        <div className="desc mt-4">A comprehensive solution for your technical support needs. With this package, you'll experience dedicated assistance from our professional technical experts.</div>
                    </div>
                    <div className="choose-type flex items-center mt-4 gap-5">
                        <strong className={`text-title ${enableSwitch ? 'text-surface1' : ''}`}>Pay Monthly</strong>
                        <div className={`switch ${enableSwitch ? 'enable' : ''}`} onClick={handleSwitch}>
                            <div className="background bg-white border-outline"></div>
                        </div>
                        <strong className={`text-title ${enableSwitch ? '' : 'text-surface1'}`}>Pay Yearly (Save 10%)</strong>
                    </div>
                    <div className="list-feature flex flex-col gap-4">
                        <div className="item flex items-center gap-2">
                            <Icon.Check className="text-2xl text-blue" />
                            <div className="feature text-title">24/7 Support</div>
                        </div>
                        <div className="item flex items-center gap-2">
                            <Icon.Check className="text-2xl text-blue" />
                            <div className="feature text-title">Professional Expertise</div>
                        </div>
                        <div className="item flex items-center gap-2">
                            <Icon.Check className="text-2xl text-blue" />
                            <div className="feature text-title">Time and Resource Savings</div>
                        </div>
                    </div>
                </div>
                <div className={`list-pricing xl:w-7/12 ${enableSwitch ? '' : 'show'}`}>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div className="pricing-item bg-white p-10 rounded-[20px] border border-outline">
                            <strong className="heading5">Gold</strong>
                            <div className="price gap-2 mt-5">
                                <div className="heading3 text-blue">$149.00</div>
                                <div className="caption1 text-surface1">/ per month</div>
                            </div>
                            <div className="list-feature mt-6 flex flex-col gap-3 pt-8">
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
                        <div className="pricing-item bg-white p-10 rounded-[20px] border border-outline">
                            <div className="title flex justify-between">
                                <strong className="heading5">Platinum</strong>
                                <span className="tag h-fit text-label rounded-full bg-blue text-white">Save 25%</span>
                            </div>
                            <div className="price gap-2 mt-5">
                                <div className="heading3">$379.00</div>
                                <div className="caption1 text-surface1">/ per month</div>
                            </div>
                            <div className="list-feature mt-6 flex flex-col gap-3 pt-8">
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
                <div className={`list-pricing-year w-7/12 ${enableSwitch ? 'show' : ''}`}>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="pricing-item bg-white p-10 rounded-[20px] border border-outline">
                            <strong className="heading5">Gold</strong>
                            <div className="price gap-2 mt-5">
                                <div className="heading3 text-blue">$1609.2</div>
                                <div className="caption1 text-surface1">/ per month</div>
                            </div>
                            <div className="list-feature mt-6 flex flex-col gap-3 pt-8">
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
                        <div className="pricing-item bg-white p-10 rounded-[20px] border border-outline">
                            <div className="title flex justify-between">
                                <strong className="heading5">Platinum</strong>
                                <span className="tag h-fit text-label rounded-full bg-blue text-white">Save 25%</span>
                            </div>
                            <div className="price gap-2 mt-5">
                                <div className="heading3">$4093.2</div>
                                <div className="caption1 text-surface1">/ per month</div>
                            </div>
                            <div className="list-feature mt-6 flex flex-col gap-3 pt-8">
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
        </section>
    )
}
export default PricingSeven