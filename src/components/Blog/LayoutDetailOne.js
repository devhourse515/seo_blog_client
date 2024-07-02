'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useRouter } from 'next/navigation';
import blogData from '@/data/blog/data.json'
import testimonialData from '@/data/testimonial/data.json'
import { convertToSlug } from '@/common/utils';

const LayoutDetailOne = ({ data }) => {
    const router = useRouter()
    const [showReply, setShowReply] = useState()

    const handleTag = (tag) => {
        router.push(`/blog/blog-list?tag=${tag}`)
    }

    const handleShowReply = (id) => {
        setShowReply(prevId => prevId === id ? null : id)
    }

    return (
        <div className='list-blog blog-layout lg:pt-20 sm:pt-14 pt-10'>
            <div className="container">
                <div className="flex items-center justify-center">
                    <div className="w-full lg:w-2/3">
                        <div className="blog-paragraph">
                            <div className="paragraph-heading">
                                <div className="heading-infor w-full flex max-sm:flex-wrap items-center sm:justify-center gap-2.5 gap-y-4">
                                    <strong className="category text-button text-blue">{data?.category || 'Performance Enhancement'}</strong>
                                    <div className="flex items-center gap-2.5">
                                        <Icon.DotOutline weight='fill' className="text-surface1" />
                                        <span className="author">{data?.author || 'Avitex'}</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Icon.DotOutline weight='fill' className="text-surface1" />
                                        <span className="date">{data?.publicDate || '2 days ago'}</span>
                                    </div>
                                </div>
                                <h3 className="heading3 sm:text-center mt-3">{data?.title || 'Navigating success: insights from business consulting experts'}</h3>
                                <div className="bg-img lg:mt-10 mt-7">
                                    <Image width={4000} height={4000} className="w-full rounded-2xl" src={data?.coverImage || "/images/blog/1290x837.png"} alt="img" />
                                </div>
                            </div>
                            <div className="paragraph-content lg:mt-10 mt-7">
                                <div className="body2 text-secondary">Attracting good money and achieving financial success is within your reach. With our innovative solutions and expert guidance, we empower you to unlock your creative business potential and thrive in today's competitive landscape.</div>
                                <div className="review pl-4 py-2 border-l-2 border-outline mt-4">
                                    <div className="body2 italic">“ Seize control of your financial future and unleash your potential for success. Our expert guidance will empower you to navigate the intricacies of financial management. From budgeting and saving to investing and debt management, we provide the tools and knowledge you need to achieve your goals.”.</div>
                                    <span className="inline-block text-xs uppercase font-bold mt-4">Tony Nguyen, CEO of Avitex</span>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-7 mt-8">
                                {data?.listImg ? data?.listImg.map(item => (
                                    <div className="w-full" key={item}> <Image width={4000} height={4000} className="w-full rounded-xl" src={item} alt="img" /></div>
                                )) : (
                                    <>
                                        <div className="w-full"> <Image width={4000} height={4000} className="w-full rounded-xl" src="/images/blog/1290x837.png" alt="img" /></div>
                                        <div className="w-full"> <Image width={4000} height={4000} className="w-full rounded-xl" src="/images/blog/1290x837.png" alt="img" /></div>
                                    </>
                                )}
                            </div>
                            <div className="paragraph-content mt-8">
                                <div className="heading6">How to Saving Finacial</div>
                                <div className="body2 text-secondary mt-4">Let us help you navigate the complexities of the financial world, maximize your earnings, and turn your creative passion into a lucrative venture. It's time to unleash your full potential and embark on a journey towards financial prosperity.</div>
                                <div className="list-feature mt-8">
                                    <div className="grid lg:grid-cols-2 gap-y-3">
                                        <div className="w-full gap-y-3 flex flex-col">
                                            <div className="item flex items-center gap-3">
                                                <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                                                <div className="text-button">Identification of monthly income</div>
                                            </div>
                                            <div className="item flex items-center gap-3">
                                                <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                                                <div className="text-button">Creation of savings and investment plan</div>
                                            </div>
                                            <div className="item flex items-center gap-3">
                                                <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                                                <div className="text-button">Management and calculation expenses</div>
                                            </div>
                                        </div>
                                        <div className="w-full gap-y-3 flex flex-col">
                                            <div className="item flex items-center gap-3">
                                                <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                                                <div className="text-button">Research and Analysis</div>
                                            </div>
                                            <div className="item flex items-center gap-3">
                                                <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                                                <div className="text-button">Investment Management and Investment Advice</div>
                                            </div>
                                            <div className="item flex items-center gap-3">
                                                <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                                                <div className="text-button">Education and Resources</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-li mt-5 pl-5">
                                    <li className="body3 list-disc text-secondary">15+ years of industry experience designing, building, and supporting large-scale distributed systems in production, with recent experience in building large scale cloud services.</li>
                                    <li className="body3 list-disc text-secondary mt-2">Deep knowledge and experience with different security areas like identity and access management, cryptography, network security, etc.</li>
                                    <li className="body3 list-disc text-secondary mt-2">Experience with database systems and database internals, such as query engines and optimizers are a big plus. </li>
                                    <li className="body3 list-disc text-secondary mt-2">Strong fundamentals in computer science skills.</li>
                                </ul>
                                <div className="body2 text-secondary mt-5">Let us help you navigate the complexities of the financial world, maximize your earnings, and turn your creative passion into a lucrative venture. It's time to unleash your full potential and embark on a journey towards financial prosperity.</div>
                                <div className="end mt-3 body2 text-secondary">Saving money is an essential skill for financial stability and long-term success. We understand the importance of efficient resource management, and we're here to guide you through proven strategies to optimize your financial savings. Our experts will provide you with practical tips and insights, such as budgeting techniques, expense tracking, smart investment options, and ways to reduce unnecessary expenses.</div>
                            </div>
                        </div>
                        <div className="blog-more-infor mt-8">
                            <div className="infor-above flex items-center justify-between flex-wrap gap-6">
                                <div className="tags-cloud-block flex items-center gap-3 max-sm:flex-wrap">
                                    <strong className="text-button">Tag(s):</strong>
                                    <div className="list-nav flex items-center gap-3 max-sm:flex-wrap">
                                        <span className="tag caption1 font-bold cursor-pointer hover:bg-blue hover:text-white duration-300" onClick={() => handleTag('cloud-solutions')}>Cloud Solutions</span>
                                        <span className="tag caption1 font-bold cursor-pointer hover:bg-blue hover:text-white duration-300" onClick={() => handleTag('it-services')}>IT Services</span>
                                    </div>
                                </div>
                                <div className="share-block flex items-center gap-4 max-sm:flex-wrap">
                                    <strong className="text-button py-2 px-4 rounded-lg border border-outline">Share this post:</strong>
                                    <div className="social-media flex items-center gap-3 max-sm:flex-wrap">
                                        <Link href="http://facebook.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover:bg-blue hover:text-white duration-300'>
                                            <i className="icon-facebook"></i>
                                        </Link>
                                        <Link href="http://linkedin.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover:bg-blue hover:text-white duration-300'>
                                            <i className="icon-linkedin"></i>
                                        </Link>
                                        <Link href="http://twitter.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover:bg-blue hover:text-white duration-300'>
                                            <i className="icon-twitter text-sm"></i>
                                        </Link>
                                        <Link href="http://instagram.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover:bg-blue hover:text-white duration-300'>
                                            <i className="icon-instagram text-sm"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="infor-below flex max-sm:flex-wrap items-center justify-between gap-6 py-6 mt-8 border-t border-b border-outline">
                                {data.id === 1 ? (
                                    <Link className="text-left cursor-pointer"
                                        href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(blogData[blogData.length - 1].title) + "?id=" + blogData[blogData.length - 1].id}
                                    >
                                        <div className="text-button text-surface2">Previous</div>
                                        <div className="heading6 duration-300 hover:text-blue mt-1">{blogData[blogData.length - 1].title}</div>
                                    </Link>
                                ) : (
                                    <Link className="text-left cursor-pointer"
                                        href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(blogData[Number(data.id) - 2].title) + "?id=" + blogData[Number(data.id) - 2].id}
                                    >
                                        <div className="text-button text-surface2">Previous</div>
                                        <div className="heading6 duration-300 hover:text-blue mt-1">{blogData[Number(data.id) - 2].title}</div>
                                    </Link>
                                )}
                                {Number(data.id) === blogData.length ? (
                                    <Link className="sm:text-right cursor-pointer"
                                        href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(blogData[0].title) + "?id=" + blogData[0].id}
                                    >
                                        <div className="text-button text-surface2">Next</div>
                                        <div className="heading6 duration-300 hover:text-blue mt-1">{blogData[0].title}</div>
                                    </Link>
                                ) : (
                                    <Link className="sm:text-right cursor-pointer"
                                        href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(blogData[Number(data.id)].title) + "?id=" + blogData[Number(data.id)].id}
                                    >
                                        <div className="text-button text-surface2">Next</div>
                                        <div className="heading6 duration-300 hover:text-blue mt-1">{blogData[Number(data.id)].title}</div>
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className="blog-review lg:mt-[60px] sm:mt-10 mt-8">
                            <div className="heading flex items-center justify-between">
                                <h5 className="heading5">03 Comments </h5>
                                <div className="sort flex items-center gap-2">
                                    <strong className="text-button">Sort By:</strong>
                                    <div className="select-block relative">
                                        <select className="w-full py-2 pl-4 pr-10 border border-outline rounded" name="sort">
                                            <option value="Newest">Newest</option>
                                            <option value="Oldest">Oldest</option>
                                            <option value="Best Fit">Best Fit</option>
                                        </select>
                                        <Icon.CaretDown />
                                    </div>
                                </div>
                            </div>
                            {testimonialData.slice(0, 3).map(item => (
                                <div className="review-item border-b border-outline">
                                    <div className="main-item py-6 bg-white relative z-[1]">
                                        <div className="heading flex items-center justify-between">
                                            <div className="user-infor flex gap-4">
                                                <div className="avatar w-[52px] h-[52px] rounded-full overflow-hidden">
                                                    <Image
                                                        src={item.image}
                                                        width={200}
                                                        height={200}
                                                        alt={item.image}
                                                        className='w-full h-full object-cover'
                                                    />
                                                </div>
                                                <div className="user">
                                                    <div className="text-button">{item.name}</div>
                                                    <div className="caption1 text-surface2">1 days ago</div>
                                                </div>
                                            </div>
                                            <div className="more-action cursor-pointer">
                                                <Icon.DotsThree size={24} weight='bold' />
                                            </div>
                                        </div>
                                        <div className="mt-3">{item.review}</div>
                                        <div className="action w-full flex items-center justify-between mt-3">
                                            <div className="flex items-center gap-4">
                                                <div className="like-btn flex items-center gap-1 cursor-pointer">
                                                    <Icon.HandsClapping size={18} />
                                                    <strong className="text-button">20</strong>
                                                </div>
                                                <button className="show-reply-btn flex items-center gap-1 cursor-pointer" onClick={() => handleShowReply(item.id)}>
                                                    {item.listReply.length > 0 && (
                                                        <>
                                                            <Icon.Chat size={18} />
                                                            <strong className="text-button">1 Replies</strong>
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                            <Link href={'#form-review'} className="reply-btn text-button text-surface1 cursor-pointer hover:text-black">Reply</Link>
                                        </div>
                                    </div>
                                    {item.listReply.length > 0 && (
                                        <>
                                            <div className={`list-reply pl-[60px] ${showReply === item.id ? 'open' : ''}`}>
                                                <div className="review-item pb-6">
                                                    <div className="heading flex items-center justify-between">
                                                        <div className="user-infor flex gap-4">
                                                            <div className="avatar">
                                                                <Image
                                                                    src={'/images/avatar/52x52.png'}
                                                                    width={200}
                                                                    height={200}
                                                                    alt='img'
                                                                    className='w-[52px] aspect-square rounded-full'
                                                                />
                                                            </div>
                                                            <div className="user">
                                                                <div className="text-button">Darlene Robertson</div>
                                                                <div className="caption1 text-surface2">1 days ago</div>
                                                            </div>
                                                        </div>
                                                        <div className="more-action cursor-pointer">
                                                            <Icon.DotsThree size={24} weight='bold' />
                                                        </div>
                                                    </div>
                                                    <div className="mt-3">From the initial consultation to project completion, demonstrated exceptional professionalism to detail.</div>
                                                    <div className="action w-full flex items-center justify-between mt-3">
                                                        <div className="like-btn flex items-center gap-1 cursor-pointer">
                                                            <Icon.HandsClapping size={18} />
                                                            <strong className="text-button">20</strong>
                                                        </div>
                                                        <Link href={'#form-review'} className="reply-btn text-button text-surface1 cursor-pointer hover:text-black">Reply</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div id='form-review' className="blog-form-contact lg:mt-10 mt-7 md:p-10 p-7 border border-outline rounded-xl">
                            <h5 className="heading5">Leave a Comment</h5>
                            <form className="form-contact-input mt-6">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="w-full">
                                        <div className="body3 pb-3">Name</div>
                                        <input className="border border-outline rounded-lg p-4 w-full" type="text" placeholder="Alexander" required />
                                    </div>
                                    <div className="w-full">
                                        <div className="body3 pb-3">Email</div>
                                        <input className="border border-outline rounded-lg p-4 w-full" type="email" placeholder="avitex@mail.com" required />
                                    </div>
                                    <div className="w-full sm:col-span-2">
                                        <div className="body3 pb-3">Comment</div>
                                        <textarea className="border border-outline rounded-lg w-full p-4" rows={3} placeholder="Write comment..." required ></textarea>
                                    </div>
                                    <div className="w-full sm:col-span-2 flex items-center">
                                        <input type="checkbox" id='check' name="check" />
                                        <label htmlFor='check' className="caption1 pl-2">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </div>
                                </div>
                                <div className="button-block mt-8">
                                    <button className="button-main bg-blue text-white text-button">Submit Comment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutDetailOne
