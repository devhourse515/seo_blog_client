'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import BlogItem from '@/components/Blog/BlogItem';

const BlogFive = ({ data, start, limit }) => {
    return (
        <section className="case-studies-block lg:py-20 sm:py-14 py-10">
            <div className="container">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="tag text-label text-black bg-green">Our Blog</div>
                    <h3 className="heading3 mt-3">Recent posts</h3>
                </div>
                <div className="list md:mt-10 mt-6 overflow-hidden">
                    <Swiper
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className='h-full relative style-border style-section'
                        autoplay={{
                            delay: 4000,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },
                        }}
                    >
                        {data.slice(start, limit).map((item, index) => (
                            <SwiperSlide key={index}>
                                <BlogItem data={item} type={'style-five'} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default BlogFive