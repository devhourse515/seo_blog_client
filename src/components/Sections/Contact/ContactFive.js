import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr"
import Link from 'next/link'
import Image from 'next/image'

const ContactFive = ({ classname }) => {
    return (
        <section className={`section-contact relative lg:py-[60px] max-lg:pb-12 max-sm:pb-8 bg-[#F3F2F0] ${classname}`}>
            <div className="bg-img lg:absolute top-0 right-0 bottom-0 lg:w-1/2">
                <Image className='w-full h-full object-cover' src={'/images/component/contact5.png'} alt='contact5' width={9000} height={9000} />
            </div>
            <div className="container relative">
                <div className="lg:flex items-center max-lg:mt-8">
                    <div className="content-main w-full xl:w-5/12 lg:w-1/2">
                        <span className="text-label tag bg-green text-black">Contact us</span>
                        <h3 className="heading3 mt-3">Unlock Your Financial Potential Today!</h3>
                        <p className="desc mt-6">Unlock your business's potential with a free consultation. Our expert consultants will analyze your challenges and craft strategies for growth and success.</p>
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
                    <div className="w-full xl:w-1/3 lg:w-[40%] lg:ml-[70px] max-lg:mt-10">
                        <div className="form-block bg-white py-6 px-7 flex flex-col gap-5">
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
                                <div className="email w-full max-lg:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="companyEmail">Company Email</label>
                                    <input className="w-full bg-white px-4 py-3 rounded border border-outline" type="email" id="companyEmail" placeholder="" required />
                                </div>
                                <div className="message w-full max-lg:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="message">How can we help you?</label>
                                    <textarea className="w-full bg-white px-4 py-3 rounded border border-outline display-block" name="message" rows="3" id="message" placeholder="" required></textarea>
                                </div>
                                <div className="block-button max-lg:col-span-2 mt-3">
                                    <button className="button-main w-full bg-green text-black">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactFive
