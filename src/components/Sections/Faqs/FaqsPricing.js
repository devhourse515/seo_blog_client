'use client'

import React, { useState } from 'react'
import faqData from '@/data/faqs/data.json'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const FaqsPricing = () => {
    const [openFaq, setOpenFaq] = useState()

    const handleOpenFaq = (id) => {
        setOpenFaq(prevId => prevId === id ? null : id)
    }

    return (
        <section className="faqs-block bg-linear lg:py-20 sm:py-14 py-10">
            <div className="container">
                <div className="heading">
                    <h3 className="heading3 text-center">Frequently Asked Questions</h3>
                    <p className="body2 text-surface1 text-center mt-4">Your Queries, Our Answers</p>
                </div>
                <div className="list-faqs flex items-center justify-center lg:mt-10 mt-7">
                    <div className="main md:w-2/3">
                        {
                            faqData.slice(0, 6).map((item) => {
                                return (
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
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqsPricing
