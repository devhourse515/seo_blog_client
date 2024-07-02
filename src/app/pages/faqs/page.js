'use client'

import React, { useState } from 'react'
import Link from "next/link";
import LayoutOne from "@/components/Layout/LayoutOne";
import faqData from '@/data/faqs/data.json'
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function FAQs() {
    const [openFaq, setOpenFaq] = useState()

    const handleOpenFaq = (id) => {
        setOpenFaq(prevId => prevId === id ? null : id)
    }

    return (
        <LayoutOne>
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <section className="form-contact-us lg:py-20 sm:py-14 py-10 border-b border-outline">
                <div className="container">
                    <div className="flex max-lg:flex-col justify-between gap-y-8">
                        <div className="w-full lg:w-1/3 lg:pr-3">
                            <form className="form-block bg-white rounded-2xl p-8 shadow-xl">
                                <h4 className="heading4">Ask Your Question</h4>
                                <p className="text-surface1 mt-2">Ask Anything, We're Here to Help</p>
                                <div className="list-input mt-5">
                                    <div className="">
                                        <label htmlFor="name" className="caption1 text-surface1">Name</label>
                                        <input className="w-full mt-2 caption1 px-4 py-3 rounded-lg border border-outline" name="name" type="text" placeholder="Name" required />
                                    </div>
                                    <div className="mt-5">
                                        <label htmlFor="email" className="caption1 text-surface1">Company Email</label>
                                        <input className="w-full mt-2 caption1 px-4 py-3 rounded-lg border border-outline" name="email" type="email" placeholder="Subject" required />
                                    </div>
                                    <div className="mt-5">
                                        <label htmlFor="select" className="caption1 text-surface1">How can we help you?</label>
                                        <div className="select-block mt-2 relative">
                                            <select className="w-full pl-4 pr-12 py-3 border border-outline rounded-lg" name="select">
                                                <option value="Financial Planning">Financial Planning</option>
                                                <option value="Business Planning">Business Planning</option>
                                                <option value="Development Planning">Development Planning</option>
                                            </select>
                                            <Icon.CaretDown />
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <label htmlFor="messsage" className="caption1 text-surface1">Message</label>
                                        <textarea className="w-full mt-2 caption1 px-4 py-3 rounded-lg border border-outline" name="messsage" rows="4" placeholder="Your Message..." required></textarea>
                                    </div>
                                </div>
                                <button className="button-main w-full text-center lg:mt-5 mt-4">Send Request</button>
                            </form>
                        </div>
                        <div className="w-full lg:w-2/3 lg:pl-12">
                            <div class="list-faqs bg-white py-8 px-10 rounded-2xl shadow-xl">
                                <h4 class="heading4">IT solutions</h4>
                                <div class="list mt-3">
                                    {faqData.slice(0, 6).map((item) => (
                                        <div
                                            className={`question-item py-5 border-b border-outline cursor-pointer ${openFaq === item.id ? 'open' : ''}`}
                                            key={item.id}
                                            onClick={() => handleOpenFaq(item.id)}
                                        >
                                            <div className="question-item-main flex items-center justify-between">
                                                <strong className='heading6 pr-8'>{item.title}</strong>
                                                <div className="icon">
                                                    <Icon.Plus className="icon-plus text-xl" />
                                                    <Icon.Minus className="icon-minus text-xl" />
                                                </div>
                                            </div>
                                            <div className="content-question">
                                                <div className="body3 text-secondary pt-3">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h4 class="heading4 mt-5"> Digital Agency</h4>
                                <div class="list mt-3">
                                    {faqData.slice(6, 12).map((item) => (
                                        <div
                                            className={`question-item py-5 border-b border-outline cursor-pointer ${openFaq === item.id ? 'open' : ''}`}
                                            key={item.id}
                                            onClick={() => handleOpenFaq(item.id)}
                                        >
                                            <div className="question-item-main flex items-center justify-between">
                                                <strong className='heading6 pr-8'>{item.title}</strong>
                                                <div className="icon">
                                                    <Icon.Plus className="icon-plus text-xl" />
                                                    <Icon.Minus className="icon-minus text-xl" />
                                                </div>
                                            </div>
                                            <div className="content-question">
                                                <div className="body3 text-secondary pt-3">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h4 class="heading4 mt-5">Support Center</h4>
                                <div class="list mt-3">
                                    {faqData.slice(12, 18).map((item) => (
                                        <div
                                            className={`question-item py-5 border-b border-outline cursor-pointer ${openFaq === item.id ? 'open' : ''}`}
                                            key={item.id}
                                            onClick={() => handleOpenFaq(item.id)}
                                        >
                                            <div className="question-item-main flex items-center justify-between">
                                                <strong className='heading6 pr-8'>{item.title}</strong>
                                                <div className="icon">
                                                    <Icon.Plus className="icon-plus text-xl" />
                                                    <Icon.Minus className="icon-minus text-xl" />
                                                </div>
                                            </div>
                                            <div className="content-question">
                                                <div className="body3 text-secondary pt-3">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutOne>
    );
}