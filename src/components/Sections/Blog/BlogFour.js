'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import BlogItem from '@/components/Blog/BlogItem';

const BlogFour = ({ data, start, limit }) => {
    return (
        <section className="case-studies-block list-blog lg:py-20 sm:py-14 py-10 bg-[#F3F2F0]">
            <div className="container">
                <div className="content-main">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <h3 className="heading3">Latest News</h3>
                        <div className="mt-2 text-center">Empowering Your Success Through Expert Consulting Services</div>
                    </div>
                    <div className="list md:mt-10 mt-7">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            modules={[Pagination, Autoplay]}
                            className='h-full relative style-four style-section'
                            autoplay={{
                                delay: 4000,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {data.slice(start, limit).map((item, index) => (
                                <SwiperSlide key={index}>
                                    <BlogItem data={item} type={'style-four'} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogFour