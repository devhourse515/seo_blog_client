'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { convertToSlug } from '@/common/utils'

const SliderSeven = () => {
  return (
    <>
      <section className="slider style-seven">
        <div className="slider-main bg-[#F3F2F0]">
          <div className="flex items-center">
            <div className="w-1/2 left-20">
              <div className="text-label">Experience Digital Excellence with Us</div>
              <h2 className="heading1 mt-3">Crafting Digital Success Stories Together</h2>
              <div className="button mt-6">
                <Link href={process.env.PUBLIC_URL + "/services/[slug]"}
                  as={
                    process.env.PUBLIC_URL +
                    "/services/" +
                    convertToSlug('Managed IT Services')
                  }
                  className="button-main rounded">Our Services
                </Link>
              </div>
            </div>
            <div className="w-1/2">
              <div className="bg-img">
                <Image width={3000} height={3000} className="w-full" src="/images/slider/slider7.png" alt="slider7" />
              </div>
              <div className="about bg-blue py-7 px-10 flex items-center justify-between">
                <div className="heading4 text-white">Ready to Ignite Your Digital Presence?</div>
                <Link className="button-main bg-white text-black hover:bg-black" href="/pages/contact-us">Get a free Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SliderSeven