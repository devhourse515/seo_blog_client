import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr"
import Link from 'next/link'

const ContactOne = ({ classname }) => {
    return (
        <section className={`section-contact py-[60px] ${classname}`}>
            <div className="container">
                <div className="lg:flex items-center justify-between">
                    <div className="content-main w-full xl:w-7/12 lg:w-1/2 text-white">
                        <span className="text-label tag text-white bg-blue">Contact us</span>
                        <h3 className="heading3 mt-3">Free consultation - discover IT solutions for your business</h3>
                        <p className="desc mt-6">Unlock the full potential of your business with our free consultation. Our expert team will assess your IT needs, recommend tailored solutions, and chart a path to success. Book your consultation now and take the first step towards empowering your business with cutting-edge technology.</p>
                        <div className="list-features mt-4 pb-6 border-b border-line">
                            <div className="item flex items-center">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Confirmation of appointment details</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Research and preparation by the IT services company</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Consultation to discuss technology solutions</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Needs assessment for tailored solutions</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Presentation of proposed solutions</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Project execution and ongoing support</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Follow-up to evaluate effectiveness and satisfaction</span>
                            </div>
                        </div>
                        <div className="flex items-center mt-6">
                            <Icon.Envelope className="text-xl" />
                            <span className="body2 pl-3">hi.avitex@gmail.com</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <Icon.PhoneCall className="text-xl" />
                            <span className="body2 pl-3">1-333-345-6868</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <Icon.MapPin className="text-xl" />
                            <span className="body2 pl-3">101 E 129th St, East Chicago, IN 46312, US</span>
                        </div>
                        <Link href={'https://maps.app.goo.gl/NMPUkvGS3x2PC4eM7'} target='_blank' className='inline-block underline mt-2'>Open map</Link>
                    </div>
                    <div className="w-full xl:w-1/3 lg:w-[40%] max-lg:mt-10">
                        <div className="form-block rounded-2xl bg-white py-6 px-7 flex flex-col gap-5">
                            <div className="heading5">Schedule a free consultation</div>
                            <form className="grid max-lg:grid-cols-2 gap-5 gap-y-2">
                                <div className="name w-full max-sm:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="name">Name</label>
                                    <input className="w-full bg-white px-4 py-3 rounded border border-outline" type="text" id="name" placeholder="" required />
                                </div>
                                <div className="phone w-full max-sm:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="phone">Phone</label>
                                    <input className="w-full bg-white px-4 py-3 rounded border border-outline" type="text" id="phone" placeholder="" required />
                                </div>
                                <div className="email w-full max-sm:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="companyEmail">Company Email</label>
                                    <input className="w-full bg-white px-4 py-3 rounded border border-outline" type="email" id="companyEmail" placeholder="" required />
                                </div>
                                <div className="organization w-full max-sm:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="company">Company/ Organization</label>
                                    <input className="w-full bg-white px-4 py-3 rounded border border-outline" type="text" id="company" placeholder="" required />
                                </div>
                                <div className="select w-full max-lg:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="cate">How can we help you?</label>
                                    <div className="select-block relative">
                                        <select className="w-full bg-white pl-4 pr-6 py-3 rounded border border-outline" name="form" id="cate">
                                            <option value="Financial Planning">Financial Planning</option>
                                            <option value="Business Planning">Business Planning</option>
                                            <option value="Development Planning">Development Planning</option>
                                        </select>
                                        <Icon.CaretDown className="absolute top-1/2 right-4 -translate-y-1/2 text-xl" />
                                    </div>
                                </div>
                                <div className="message w-full max-lg:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="message">Message</label>
                                    <textarea className="w-full bg-white px-4 py-3 rounded border border-outline display-block" name="message" rows="3" id="message" placeholder="" required></textarea>
                                </div>
                                <div className="block-button max-lg:col-span-2 mt-3">
                                    <button className="button-main w-full">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactOne
