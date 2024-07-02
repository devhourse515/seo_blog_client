import { convertToSlug } from '@/common/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CaseStudyItem = ({ data, style }) => {
    return (
        <>
            {style === 'style-one' && (
                <div className="case-studies-item md:px-6 md:border-r md:border-outline">
                    <Link className="main-item block"
                        href={process.env.PUBLIC_URL + "/case-studies/case-studies-detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/case-studies/case-studies-detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <div className="bg-img block w-full aspect-[397/258] overflow-hidden rounded-xl">
                            <Image width={4000} height={4000} className="w-full h-full object-cover block" src={data.thumbImage} alt={data.title} />
                        </div>
                        <div className="info mt-7 inline-block">
                            <span className="tag text-button-sm rounded-lg">{data.category}</span>
                            <strong className="heading5 title block mt-3">{data.title}</strong>
                            <p className="desc text-surface1 block mt-3">{data.description}</p>
                            <span className="text-button-sm inline-block mt-3">Learn more</span>
                        </div>
                    </Link>
                </div>
            )}
            {style === 'style-four' && (
                <div className="case-studies-item">
                    <Link className="main-item block relative"
                        href={process.env.PUBLIC_URL + "/case-studies/case-studies-detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/case-studies/case-studies-detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <div className="bg-img block w-full overflow-hidden">
                            <Image width={4000} height={4000} className="w-full h-full object-cover block " src={data.thumbImage} alt={data.title} />
                        </div>
                        <div className="info flex flex-col items-center absolute right-5 bottom-5 left-5 p-5 bg-white ">
                            <span className="text-surface1">{data.category}</span>
                            <strong className="heading5 title mt-1">{data.title}</strong>
                        </div>
                    </Link>
                </div>
            )}
            {style === 'style-six' && (
                <div className="item">
                    <Link
                        className="main-item block relative rounded-[20px] overflow-hidden"
                        href={process.env.PUBLIC_URL + "/case-studies/case-studies-detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/case-studies/case-studies-detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <div className="bg-brand absolute top-5 left-5">
                            <Image width={5000} height={5000} className="w-full" src={data.brand} alt={data.brand} />
                        </div>
                        <div className="bg-img aspect-square">
                            <Image width={5000} height={5000} className="w-full h-full object-cover block" src={data.thumbImage} alt={data.thumbImage} />
                        </div>
                        <div className="title flex items-center justify-between absolute right-5 bottom-5 left-5 p-5 rounded-2xl">
                            <strong className="heading4">+{data.percent}%</strong>
                            <strong className="heading6">{data.category}</strong>
                        </div>
                    </Link>
                </div>
            )}
            {style === 'hide-info' && (
                <div className="case-studies-item duration-300 hover:shadow-lg overflow-hidden rounded-xl">
                    <Link className="main-item overflow-hidden block relative"
                        href={process.env.PUBLIC_URL + "/case-studies/case-studies-detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/case-studies/case-studies-detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <div className="bg-img block w-full">
                            <Image width={4000} height={4000} className="w-full h-full object-cover block" src={data.thumbImage} alt={data.title} />
                        </div>
                        <span className="info flex flex-col items-center justify-center absolute bottom-0 left-0 w-full px-8 py-6 bg-white">
                            <span className="tag text-button-sm rounded-lg">{data.category}</span>
                            <strong className="heading5 title block text-center mt-3">{data.title}</strong>
                        </span>
                    </Link>
                </div>
            )}
            {style === 'style-list' && (
                <div className="case-studies-item">
                    <Link className="main-item flex max-md:flex-col items-center bg-white rounded-[20px] overflow-hidden shadow-lg"
                        href={process.env.PUBLIC_URL + "/case-studies/case-studies-detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/case-studies/case-studies-detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <div className="bg-img overflow-hidden lg:w-7/12 md:w-1/2 w-full lg:pr-[45px] md:pr-6 aspect-[397/258]">
                            <Image width={4000} height={4000} className="w-full h-full object-cover block" src={data.thumbImage} alt={data.title} />
                        </div>
                        <div className="info lg:w-5/12 md:w-1/2 w-full md:pl-[15px] md:pr-8 max-md:py-8 max-md:px-6">
                            <span className="tag text-button-sm rounded-lg">{data.category}</span>
                            <strong className="heading4 title block mt-3">{data.title}</strong>
                            <p className="desc text-surface1 block mt-3">{data.description}</p>
                            <span className="text-button-sm inline-block mt-3">Learn more</span>
                        </div>
                    </Link>
                </div>
            )}
        </>
    )
}

export default CaseStudyItem