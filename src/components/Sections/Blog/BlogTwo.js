'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import BlogItem from '@/components/Blog/BlogItem';

const BlogTwo = ({ data, start, limit }) => {
    console.log(data);
    return (
        <section className="case-studies-block list-blog lg:pt-20 sm:pt-14 pt-10">
            <div className="container">
                <div className="content-main lg:pb-[60px] sm:pb-12 pb-8 border-b border-outline">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <h3 className="heading3">Latest News</h3>
                        <div className="mt-2 text-center">Empowering Your Success Through Expert Consulting Services</div>
                    </div>
                    <div className="list md:mt-10 mt-7">
                        <Swiper
                            spaceBetween={24}
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            modules={[Pagination, Autoplay]}
                            className='h-full relative style-section'
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
                                    <BlogItem data={item} type={'style-two'} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogTwo