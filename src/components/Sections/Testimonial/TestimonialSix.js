'use client'

import React, { useState } from "react";
import TestimonialItem from "@/components/Testimonial/TestimonialItem";
import Slider from "react-slick";

export default function TestimonialSix({ data, classname }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    touchThreshold: 100,
    swipe: true,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className={`testimonial-block style-six overflow-hidden lg:py-20 sm:py-14 py-10 ${classname}`}>
      <div className="container">
        <div className="heading">
          <h3 className="heading3 text-center">Testimonials</h3>
          <p className="text-center mt-2">Discover exceptional experiences through testimonials from our satisfied customers.</p>
        </div>
        <div className="list-testimonials md:mt-10 mt-7">
          <Slider {...settings} className="-mx-4">
            {data.slice(7, 12).map((item, index) => (
              <div className="testimonial-item h-full px-4" key={index}>
                <TestimonialItem data={item} type={'style-six'} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
