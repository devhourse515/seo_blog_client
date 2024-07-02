import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { convertToSlug } from '@/common/utils'

const BlogItem = ({ data, type }) => {
    return (
        <>
            {type === 'style-two' && (
                <div className="blog-item">
                    <Link className="main-item block"
                        href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <div className="bg-img block w-full overflow-hidden rounded-xl">
                            <Image width={5000} height={5000} className="w-full block" src={data.thumbImage} alt={data.title} />
                        </div>
                        <div className="infor mt-7">
                            <span className="tag text-button-sm rounded-lg">{data.tag}</span>
                            <strong className="heading5 title block mt-3">{data.title}</strong>
                            <span className="desc text-surface1 block mt-3">{data.description}</span>
                            <span className="inline-block text-label text-surface1 mt-4">{data.publicDate}</span>
                        </div>
                    </Link>
                </div>
            )}
            {type === 'style-four' && (
                <div className="blog-item h-full">
                    <Link className="main-item block h-full"
                        href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <div className="bg-img block relative w-full overflow-hidden">
                            <Image width={5000} height={5000} className="w-full block" src={data.thumbImage} alt={data.title} />
                            <div className="tag text-label rounded-none absolute bottom-0 left-0 px-2 py-1 bg-pink text-white">{data.tag}</div>
                        </div>
                        <div className="infor p-7 bg-white h-full">
                            <span className="title heading5 block">{data.title}</span>
                            <span className="inline-block text-label text-surface1 mt-4">{data.publicDate}</span>
                        </div>
                    </Link>
                </div>
            )}
            {type === 'style-five' && (
                <div className="blog-item sm:px-6 sm:border-r border-outline">
                    <Link className="main-item block"
                        href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <div className="bg-img block w-full overflow-hidden">
                            <Image width={5000} height={5000} className="w-full h-full block" src={data.thumbImage} alt={data.title} />
                        </div>
                        <div className="infor mt-6">
                            <span className="text-label text-surface1">{data.title}</span>
                            <strong className="heading5 title block mt-3">{data.title}</strong>
                            <span className="text-label text-surface1 inline-block mt-4">{data.publicDate}</span>
                        </div>
                    </Link>
                </div>
            )}
            {type === 'style-six' && (
                <div className="blog-item h-full">
                    <Link className="main-item block h-full overflow-hidden rounded-[20px]"
                        href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <div className="bg-img block relative w-full overflow-hidden">
                            <Image width={5000} height={5000} className="w-full block" src={data.thumbImage} alt={data.title} />
                            <div className="tag text-label absolute bottom-0 left-0 px-2 py-1 bg-purple text-white">{data.tag}</div>
                        </div>
                        <div className="infor p-7 bg-white h-full">
                            <span className="title heading5 block">{data.title}</span>
                            <span className="inline-block text-label text-surface1 mt-4">{data.publicDate}</span>
                        </div>
                    </Link>
                </div>
            )}
            {type === 'style-list' && (
                <div className="blog-item style-list">
                    <Link className="main-item relative flex items-center max-sm:flex-col bg-white border border-outline rounded-2xl overflow-hidden duration-300 hover:shadow-lg"
                        href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <div className="bg-img sm:absolute top-0 left-0 sm:w-[45%] w-full h-full overflow-hidden">
                            <Image width={5000} height={5000} className="w-full h-full object-cover" src={data.thumbImage} alt={data.title} />
                        </div>
                        <div className="infor sm:p-8 p-6 sm:ml-[45%]">
                            <span className="tag text-button-sm rounded-lg">{data.tag}</span>
                            <strong className="heading5 title block mt-3">{data.title}</strong>
                            <span className="desc text-surface1 block mt-3">{data.description}</span>
                            <span className="inline-block text-label text-surface1 mt-4">{data.publicDate}</span>
                        </div>
                    </Link>
                </div>
            )}
            {type === 'style-modern' && (
                <div className="blog-item style-modern">
                    <Link className="main-item relative block bg-white duration-500 rounded-xl overflow-hidden shadow-lg"
                        href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <div className="bg-img absolute top-0 left-0 w-full h-full duration-500 opacity-0 z-[-1]">
                            <Image width={5000} height={5000} className="w-full h-full object-cover" src={data.thumbImage} alt={data.title} />
                        </div>
                        <div className="infor py-8 px-7">
                            <span className="tag text-button-sm rounded-lg duration-500">{data.tag}</span>
                            <strong className="heading5 title block mt-3 duration-500">{data.title}</strong>
                            <span className="desc text-surface1 block mt-3 duration-500">{data.description}</span>
                            <span className="date inline-block text-label text-surface1 mt-4 duration-500">{data.publicDate}</span>
                        </div>
                    </Link>
                </div>
            )}
        </>
    )
}

export default BlogItem