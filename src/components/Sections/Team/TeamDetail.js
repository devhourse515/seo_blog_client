'use client'

import React from 'react'
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import teamData from "@/data/team/data.json";
import Link from 'next/link';

const TeamDetail = () => {
    const searchParams = useSearchParams()
    let teamId = searchParams.get('id')

    if (!teamId) {
        teamId = '1'
    }

    const data = teamData.find(item => item.id == teamId)

    return (
        <section className="team-detail-block lg:py-20 sm:py-14 py-10">
            <div className="container">
                <div className="flex max-lg:flex-col gap-y-8">
                    <div className="lg:w-6/12 sm:w-2/3">
                        <div className="bg-img member-img">
                            <Image className="w-full rounded-[20px]" src={data.image} alt={data.image} width={5000} height={5000} />
                        </div>
                    </div>
                    <div className="lg:w-6/12 lg:pl-[65px]">
                        <div className="content-detail">
                            <div className="user-infor">
                                <div className="tag text-label">{data.position}</div>
                                <div className="heading4 mt-5">Hi, I am</div>
                                <h2 className="member-name heading2 mt-4">{data.name}</h2>
                                <div className="list-social flex items-center flex-wrap gap-6 mt-5">
                                    <Link className="item" href="https://www.facebook.com/" target="_blank">
                                        <i className="icon-facebook block text-2xl"></i>
                                    </Link>
                                    <Link className="item" href="https://www.linkedin.com/" target="_blank">
                                        <i className="icon-linkedin block text-2xl"></i>
                                    </Link>
                                    <Link className="item" href="https://www.twitter.com/" target="_blank">
                                        <i className="icon-twitter block text-2xl"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="user-desc">
                                <div className="body2 text-surface1 lg:mt-10 mt-7">As the company's CTO, I am a visionary leader responsible for shaping our company's technology strategy. With over 15 years of experience in the tech industry, she has a deep understanding of emerging technologies and how they can transform businesses. Sarah's forward-thinking approach has been instrumental in our company's growth.</div>
                                <div className="body2 text-surface1 mt-3">Her analytical mindset and ability to extract valuable insights from complex data sets empower our clients to make data-driven decisions. With Nathan's expertise, we turn data into actionable intelligence.</div>
                                <div className="body2 text-surface1 mt-3">Her innovative campaigns and strategic insights connect us with our audience and help us share our story effectively.</div>
                                <div className="quote-block bg-surface p-8 rounded-[20px] lg:mt-10 mt-7">
                                    <div className="heading5">“Teamwork is the ability to work together toward a common vision, the ability to direct individual accomplishments toward organizational objectives.”</div>
                                </div>
                                <div className="award-block lg:mt-10 mt-7">
                                    <div className="heading4">My Award</div>
                                    <div className="list-award flex max-sm:flex-wrap items-center justify-between gap-4 mt-7">
                                        <div className="bg-img">
                                            <Image width={5000} height={5000} className="sm:w-[120px] w-24 sm:h-[120px] h-24" src="/images/award/120x120.png" alt="award/120x120.png" />
                                        </div>
                                        <div className="bg-img">
                                            <Image width={5000} height={5000} className="sm:w-[120px] w-24 sm:h-[120px] h-24" src="/images/award/120x120.png" alt="award/120x120.png" />
                                        </div>
                                        <div className="bg-img">
                                            <Image width={5000} height={5000} className="sm:w-[120px] w-24 sm:h-[120px] h-24" src="/images/award/120x120.png" alt="award/120x120.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamDetail
