'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { convertToSlug } from '@/common/utils';
import VideoFrame from '@/components/Other/VideoFrame';

const SliderTwo = () => {
  const [openVideo, setOpenVideo] = useState(false)
  return (
    <>
      <section className="slider style-two w-full">
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
                    <h2 className="heading1 text-white">Experts engineering <br />industrial solutions</h2>
                    <div className="body2 text-white md:mt-4 mt-2">Collaborating to create a roadmap for your triumph</div>
                    <div className="group-btn flex items-center flex-wrap gap-3 md:mt-8 mt-5">
                      <Link href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                          process.env.PUBLIC_URL +
                          "/services/" +
                          convertToSlug('Managed IT Services')
                        }
                        className="button-main bg-white text-black rounded hover:bg-yellow">Our Services</Link>
                      <Link href='#!' scroll={false} className="button-main bg-yellow rounded-full inline-flex gap-2" onClick={() => setOpenVideo(true)}>
                        <Icon.PlayCircle weight='fill' className='text-black text-2xl' />
                        <span className='text-black'>Video Presentation</span>
                      </Link>
                    </div>
                  </div>
                  <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                    <Image
                      src={'/images/slider/1920x960.png'}
                      width={4000}
                      height={3000}
                      alt='organic1'
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
                    <h2 className="heading1 text-white">Tailored Solutions<br />for Growth</h2>
                    <div className="list-feature mt-3">
                      <div className="flex items-center">
                        <Icon.Check className='text-yellow text-2xl' />
                        <div className="heading6 text-white pl-3">Flexibility & Adaptability</div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Icon.Check className='text-yellow text-2xl' />
                        <div className="heading6 text-white pl-3">Market Analysis & Research</div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Icon.Check className='text-yellow text-2xl' />
                        <div className="heading6 text-white pl-3">Customer Care & Support</div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Icon.Check className='text-yellow text-2xl' />
                        <div className="heading6 text-white pl-3">24/7 Support with Live Chat</div>
                      </div>
                    </div>
                    <div className="group-btn flex items-center flex-wrap gap-3 md:mt-8 mt-5">
                      <Link href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                          process.env.PUBLIC_URL +
                          "/services/" +
                          convertToSlug('Managed IT Services')
                        }
                        className="button-main bg-white text-black rounded hover:bg-yellow">Our Services</Link>
                      <Link href='#!' scroll={false} className="button-main bg-yellow rounded-full inline-flex gap-2" onClick={() => setOpenVideo(true)}>
                        <Icon.PlayCircle weight='fill' className='text-black text-2xl' />
                        <span className='text-black'>Video Presentation</span>
                      </Link>
                    </div>
                  </div>
                  <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                    <Image
                      src={'/images/slider/1920x960.png'}
                      width={4000}
                      height={3000}
                      alt='organic1'
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
                    <h2 className="heading1 text-white">Crafting Growth<br />Strategies</h2>
                    <div className="body2 text-white md:mt-4 mt-2">Navigate dynamic markets with our change management expertise.</div>
                    <div className="group-btn flex items-center flex-wrap gap-3 md:mt-8 mt-5">
                      <Link href='/pages/contact-us' className="button-main text-black bg-yellow">Get a free Quote</Link>
                    </div>
                  </div>
                  <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                    <Image
                      src={'/images/slider/1920x960.png'}
                      width={4000}
                      height={3000}
                      alt='organic1'
                      priority={true}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {openVideo ? <VideoFrame setOpenVideo={setOpenVideo} /> : <></>}
      </section>
    </>
  )
}

export default SliderTwo