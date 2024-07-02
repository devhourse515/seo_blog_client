'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { convertToSlug } from '@/common/utils';
import VideoFrame from '@/components/Other/VideoFrame';

const SliderFour = () => {
  const [openVideo, setOpenVideo] = useState(false)

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
                    <div className="text-label text-white">Experience Digital Excellence with Us</div>
                    <h2 className="heading1 text-white mt-4">Crafting Digital <br />Success Stories <br />Together</h2>
                    <div className="group-btn flex items-center flex-wrap gap-3 md:mt-8 mt-5">
                      <Link href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                          process.env.PUBLIC_URL +
                          "/services/" +
                          convertToSlug('Managed IT Services')
                        }
                        className="button-main bg-pink text-white rounded">Our Services</Link>
                    </div>
                  </div>
                  <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                    <Image
                      src={'/images/slider/1920x960.png'}
                      width={4000}
                      height={3000}
                      alt='slider/1920x960'
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
                    <div className="text-label text-white">Experience Digital Excellence with Us</div>
                    <h2 className="heading1 text-white mt-4">Navigate the <br />Digital Frontier <br />Together</h2>
                    <div className="group-btn flex items-center flex-wrap gap-3 md:mt-8 mt-5">
                      <Link href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                          process.env.PUBLIC_URL +
                          "/services/" +
                          convertToSlug('Managed IT Services')
                        }
                        className="button-main bg-white text-black rounded hover:bg-pink hover:text-white">Our Services</Link>
                      <Link href='#!' scroll={false} className="button-main bg-pink rounded-full inline-flex gap-2" onClick={() => setOpenVideo(true)}>
                        <Icon.PlayCircle weight='fill' className='text-white text-2xl' />
                        <span className='text-white'>Video Presentation</span>
                      </Link>
                    </div>
                  </div>
                  <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                    <Image
                      src={'/images/slider/1920x960.png'}
                      width={4000}
                      height={3000}
                      alt='slider/1920x960'
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
                    <div className="text-label text-white">Experience Digital Excellence with Us</div>
                    <h2 className="heading1 text-white mt-4">Transform Your <br />Brand's Digital <br />Landscape</h2>
                    <div className="group-btn flex items-center flex-wrap gap-3 md:mt-8 mt-5">
                      <Link href='/pages/contact-us' className="button-main bg-pink">Get a free Quote</Link>
                    </div>
                  </div>
                  <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                    <Image
                      src={'/images/slider/1920x960.png'}
                      width={4000}
                      height={3000}
                      alt='slider/1920x960'
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

export default SliderFour