'use client'

import React, { useState } from "react"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const PricingSix = () => {
    const [enableSwitch, setEnableSwitch] = useState(false)

    const handleSwitch = () => {
        setEnableSwitch(!enableSwitch)
    }

    return (
        <section className="section-pricing lg:mt-20 sm:mt-14 mt-10 lg:py-20 sm:py-14 py-10 bg-linear-purple">
            <div className="container">
                <div className="heading flex flex-col items-center justify-center">
                    <h3 className="heading3 text-center">SEO Packages</h3>
                    <div className="choose-type flex items-center mt-4 gap-5">
                        <strong className={`text-title ${enableSwitch ? 'text-surface1' : ''}`}>Pay Monthly</strong>
                        <div className={`switch ${enableSwitch ? 'enable' : ''}`} onClick={handleSwitch}>
                            <div className="background bg-white border-outline"></div>
                        </div>
                        <strong className={`text-title ${enableSwitch ? '' : 'text-surface1'}`}>Pay Yearly (Save 10%)</strong>
                    </div>
                </div>
                <div className={`list-pricing lg:mt-10 mt-7 ${enableSwitch ? '' : 'show'}`}>
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="pricing-item bg-white p-10 rounded-[20px] border border-outline">
                            <div className="heading5">Silver</div>
                            <div className="price gap-2 mt-3">
                                <div className="heading2">$99.00</div>
                                <div className="caption1 text-surface1">/ per month</div>
                            </div>
                            <div className="list-feature mt-6 flex flex-col gap-3 pt-8">
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">20 keywords</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">2,000 monthly website visitors</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">4 blogs / month</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">3 quality backlinks / month</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">Dedicated expert team</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">Monitoring & reporting</div>
                                </div>
                            </div>
                            <Link className="button-main text-black bg-transparent border border-black hover:text-white hover:bg-purple hover:border-purple mt-6" href="/company/pricing-plan">Choose Plan</Link>
                        </div>
                        <div className="pricing-item bg-white p-10 rounded-[20px] border border-outline">
                            <div className="heading5">Gold</div>
                            <div className="price gap-2 mt-5">
                                <div className="heading2 text-purple">$149.00</div>
                                <div className="caption1 text-surface1">/ per month</div>
                            </div>
                            <div className="list-feature mt-6 flex flex-col gap-3 pt-8">
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">60 keywords</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">6,000 monthly website visitors</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">8 blogs / month</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">10 quality backlinks / month</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">Dedicated expert team</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">Monitoring & reporting</div>
                                </div>
                            </div>
                            <Link className="button-main bg-purple border border-purple mt-6" href="/company/pricing-plan">Choose Plan</Link>
                        </div>
                        <div className="pricing-item bg-white p-10 rounded-[20px] border border-outline">
                            <div className="heading5">Platinum</div>
                            <div className="price gap-2 mt-5">
                                <div className="heading2">$379.00</div>
                                <div className="caption1 text-surface1">/ per month</div>
                            </div>
                            <div className="list-feature mt-6 flex flex-col gap-3 pt-8">
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">150 keywords</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">20,000 monthly website visitors</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">15 blogs / month</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">20 quality backlinks / month</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">Dedicated expert team</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">Monitoring & reporting</div>
                                </div>
                            </div>
                            <Link className="button-main text-black bg-transparent border border-black hover:text-white hover:bg-purple hover:border-purple mt-6" href="/company/pricing-plan">Choose Plan</Link>
                        </div>
                    </div>
                </div>
                <div className={`list-pricing-year lg:mt-10 mt-7 ${enableSwitch ? 'show' : ''}`}>
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="pricing-item bg-white p-10 rounded-[20px] border border-outline">
                            <div className="heading5">Silver</div>
                            <div className="price gap-2 mt-5">
                                <div className="heading2">$1069.2</div>
                                <div className="caption1 text-surface1">/ per month</div>
                            </div>
                            <div className="list-feature mt-6 flex flex-col gap-3 pt-8">
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">20 keywords</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">2,000 monthly website visitors</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">4 blogs / month</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">3 quality backlinks / month</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">Dedicated expert team</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">Monitoring & reporting</div>
                                </div>
                            </div>
                            <Link className="button-main text-black bg-transparent border border-black hover:text-white hover:bg-purple hover:border-purple mt-6" href="/company/pricing-plan">Choose Plan</Link>
                        </div>
                        <div className="pricing-item bg-white p-10 rounded-[20px] border border-outline">
                            <div className="heading5">Gold</div>
                            <div className="price gap-2 mt-5">
                                <div className="heading2 text-purple">$1609.2</div>
                                <div className="caption1 text-surface1">/ per month</div>
                            </div>
                            <div className="list-feature mt-6 flex flex-col gap-3 pt-8">
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">60 keywords</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">6,000 monthly website visitors</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">8 blogs / month</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">10 quality backlinks / month</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">Dedicated expert team</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">Monitoring & reporting</div>
                                </div>
                            </div>
                            <Link className="button-main bg-purple border border-purple mt-6" href="/company/pricing-plan">Choose Plan</Link>
                        </div>
                        <div className="pricing-item bg-white p-10 rounded-[20px] border border-outline">
                            <div className="heading5">Platium</div>
                            <div className="price gap-2 mt-5">
                                <div className="heading2">$4093.2</div>
                                <div className="caption1 text-surface1">/ per month</div>
                            </div>
                            <div className="list-feature mt-6 flex flex-col gap-3 pt-8">
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">150 keywords</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">20,000 monthly website visitors</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">15 blogs / month</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">20 quality backlinks / month</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">Dedicated expert team</div>
                                </div>
                                <div className="item flex items-center gap-2">
                                    <Icon.Check className="text-2xl text-purple" />
                                    <div className="feature">Monitoring & reporting</div>
                                </div>
                            </div>
                            <Link className="button-main text-black bg-transparent border border-black hover:text-white hover:bg-purple hover:border-purple mt-6" href="/company/pricing-plan">Choose Plan</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PricingSix