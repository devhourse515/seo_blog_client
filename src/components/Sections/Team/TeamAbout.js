import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const TeamAbout = ({ data, start, limit }) => {
    return (
        <section className="teams-block lg:py-20 sm:py-14 py-10">
            <div className="container">
                <div className="heading">
                    <h3 className="heading3 text-center">Meet our leader</h3>
                    <div className="text-center mt-3">Discover exceptional experiences through testimonials from our satisfied customers.</div>
                </div>
                <div className="list-member grid md:grid-cols-3 sm:grid-cols-2 gap-[30px] lg:mt-10 mt-7">
                    {data.slice(start, limit).map((item) => (
                        <div className="member-item" key={item.id}>
                            <Link className="bg-img" href={`/company/team-detail?id=${item.id}`}>
                                <Image width={3000} height={3000} className="w-full rounded-3xl" src={item.image} alt={item.image} />
                            </Link>
                            <div className="member-infor mt-4 flex items-center justify-between">
                                <Link className="left" href={`/company/team-detail?id=${item.id}`}>
                                    <div className="name heading5 duration-300 hover:text-blue">{item.name}</div>
                                    <div className="position caption1 text-surface1 mt-1">{item.position}</div>
                                </Link>
                                <Link className="icon w-12 h-12 flex-shrink-0 rounded-full bg-surface flex items-center justify-center duration-300 hover:bg-blue hover:text-white" href="https://linkedin.com/" target="_blank">
                                    <span className="icon-linkedin"></span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamAbout
