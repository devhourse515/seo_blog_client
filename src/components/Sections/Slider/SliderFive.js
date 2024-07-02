'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const SliderFive = () => {
  return (
    <>
      <section className="slider style-two style-four w-full">
        <div className="slider-main h-full w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className='h-full relative style-slider style-white'
            autoplay={{
              delay: 5000,
            }}
          >
            <SwiperSlide>
              <div className="slider-item h-full w-full relative">
                <div className="container w-full h-full flex items-center">
                  <div className="text-content">
                    <h2 className="heading1 text-white">Master Your <br />Financial Future <br />with <span className='text-green'>Strategic <br />Planning</span></h2>
                    <div className="body2 text-white md:mt-4 mt-2">Chart a course to financial success with expert insights and strategies. <br />Your voyage to prosperity begins here</div>
                    <div className="group-btn flex items-center flex-wrap gap-3 md:mt-8 mt-5">
                      <Link href={"/pages/contact-us"}
                        className="button-main bg-white text-black rounded hover:bg-green">Request a free consult</Link>
                    </div>
                  </div>
                  <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                    <Image
                      src={'/images/slider/1920x840.png'}
                      width={4000}
                      height={3000}
                      alt='slider5'
                      priority={true}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item h-full w-full relative">
                <div className="container w-full h-full flex items-center">
                  <div className="text-content">
                    <h2 className="heading1 text-white">Master Your <br />Financial Future <br />with <span className='text-green'>Expert <br />advice</span></h2>
                    <div className="body2 text-white md:mt-4 mt-2">Chart a course to financial success with expert insights and strategies. <br />Your voyage to prosperity begins here</div>
                    <div className="group-btn flex items-center flex-wrap gap-3 md:mt-8 mt-5">
                      <Link href={"/pages/contact-us"}
                        className="button-main bg-white text-black rounded hover:bg-green">Request a free consult</Link>
                    </div>
                  </div>
                  <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                    <Image
                      src={'/images/slider/1920x840.png'}
                      width={4000}
                      height={3000}
                      alt='slider5'
                      priority={true}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item h-full w-full relative">
                <div className="container w-full h-full flex items-center">
                  <div className="text-content">
                    <h2 className="heading1 text-white">Master Your <br />Financial Future <br />with <span className='text-green'>Professional <br />Insights</span></h2>
                    <div className="body2 text-white md:mt-4 mt-2">Chart a course to financial success with expert insights and strategies. <br />Your voyage to prosperity begins here</div>
                    <div className="group-btn flex items-center flex-wrap gap-3 md:mt-8 mt-5">
                      <Link href={"/pages/contact-us"}
                        className="button-main bg-white text-black rounded hover:bg-green">Request a free consult</Link>
                    </div>
                  </div>
                  <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                    <Image
                      src={'/images/slider/1920x840.png'}
                      width={4000}
                      height={3000}
                      alt='slider5'
                      priority={true}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default SliderFive