'use client'

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

export default function TestimonialFive({ data, start, limit }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (item) => {
    setActiveIndex(item.activeIndex);
  };

  return (
    <section className="testimonial-block style-one lg:py-20 sm:py-14 py-10">
      <div className="container">
        <div className="w-full flex max-md:flex-col items-center justify-end relative bg-[#F3F5EF]">
          <div className="list-avatar md:absolute top-0 left-0 md:w-1/2 md:h-full w-full">
            {data.slice(start, limit).map((item, index) => (
              <div className={`bg-img w-full aspect-square ${index === activeIndex ? 'active' : ''}`} key={index}>
                <Image width={5000} height={5000} src={item.image} alt={item.image} className={`w-full h-full object-cover`} />
              </div>
            ))}
          </div>
          <div className="list-testimonials flex items-center justify-center md:w-1/2 w-full lg:px-20 sm:px-10 px-8 lg:py-[144px] md:py-16 py-10">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              pagination={{
                clickable: true
              }}
              modules={[Pagination]}
              className='h-full relative style-section style-testimonial-five'
              onSlideChange={handleSlideChange}
            >
              {data.slice(start, limit).map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item">
                    <div className="icon flex items-center">
                      <span className="icon-slash text-5xl"></span>
                      <span className="icon-slash text-5xl -ml-6"></span>
                    </div>
                    <h4 className="heading4 lg:mt-6 mt-4">{item.review}</h4>
                    <div className="infor mt-4">
                      <span className="heading6 block pb-1">{item.name}</span>
                      <span className="text-surface1">{item.company}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section >
  );
}
