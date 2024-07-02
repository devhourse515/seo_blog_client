'use client'

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import Rate from "@/components/Other/Rate";

export default function TestimonialOne({ classname, data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (item) => {
    setActiveIndex(item.activeIndex);
  };

  return (
    <section className="testimonial-block style-one lg:pb-20 sm:pb-14 pb-10">
      <div className="container">
        <div className={`w-full flex items-center justify-center ${classname}`}>
          <div className="lg:w-11/12 w-full relative rounded-[40px] overflow-hidden bg-linear max-md:flex max-sm:flex-col-reverse">
            <div className="list-testimonials sm:w-7/12 lg:pb-12 pb-9">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                className='h-full relative style-testimonial'
                pagination={{ clickable: true }}
                modules={[Pagination]}
                onSlideChange={handleSlideChange}
              >
                {data.slice(0, 4).map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item lg:px-[60px] px-9 lg:py-12 py-9">
                      <div className="star flex items-center gap-px">
                        <Rate currentRate={item.rate} style={"text-blue text-xl"} />
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
            <div className="list-avatar md:absolute top-0 right-0 sm:w-5/12 md:h-full max-md:w-full">
              {data.map((item, index) => (
                <div className={`bg-img w-full h-full ${index === activeIndex ? 'active' : ''}`} key={index}>
                  <Image width={5000} height={4000} src={item.image} alt={item.image} className={`w-full h-full object-cover`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
