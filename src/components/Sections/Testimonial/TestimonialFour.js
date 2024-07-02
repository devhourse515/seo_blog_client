'use client'

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import Rate from "@/components/Other/Rate";

export default function TestimonialFour({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (item) => {
    setActiveIndex(item.activeIndex);
  };

  return (
    <section className="testimonial-block style-one lg:py-20 sm:py-14 py-10">
      <div className="container">
        <div className="w-full flex max-sm:flex-col-reverse items-center justify-between relative">
          <div className="list-testimonials sm:w-7/12 w-full sm:pr-[55px] lg:py-24 py-9">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              pagination={{
                clickable: true
              }}
              modules={[Pagination]}
              className='h-full relative style-section style-testimonial-four'
              onSlideChange={handleSlideChange}
            >
              {data.slice(7, 11).map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item">
                    <div className="star flex items-center gap-px">
                      <Rate currentRate={item.rate} style={"text-yellow text-xl"} />
                    </div>
                    <h4 className="desc heading4 lg:mt-6 mt-4">{item.review}</h4>
                    <div className="infor mt-4">
                      <span className="heading6 block pb-1">{item.name}</span>
                      <span className="text-surface1">{item.company}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="list-avatar md:absolute top-0 right-0 sm:w-5/12 md:h-full max-md:w-full sm:pl-[55px]">
            {data.map((item, index) => (
              <div className={`bg-img w-full aspect-square ${index === activeIndex ? 'active' : ''}`} key={index}>
                <Image width={5000} height={5000} src={item.image} alt={item.image} className={`w-full h-full object-cover`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
