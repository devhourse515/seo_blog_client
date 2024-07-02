'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Rate from "../Other/Rate";
import testimonialData from '@/data/testimonial/data.json'
import Image from "next/image";

const DetailReview = function ({ data }) {
  const [tab, setTab] = useState('review')
  const [showReply, setShowReply] = useState()

  const handleTab = (item) => {
    setTab(item)
  }

  const handleShowReply = (id) => {
    setShowReply(prevId => prevId === id ? null : id)
  }

  return (
    <div className="product-detail-content lg:mt-[60px] sm:mt-12 mt-8">
      <div className="container flex items-center justify-center">
        <div className="lg:basis-5/6 max-lg:w-full">
          <div className="category flex items-center gap-8 border-b border-outline">
            {['description', 'review'].map((item, index) => (
              <h6
                key={index}
                className={`heading6 py-2 text-surface2 cursor-pointer capitalize ${tab === item ? 'active' : ''}`}
                onClick={() => handleTab(item)}
              >
                {item}
              </h6>
            ))}
          </div>
          <div className={`tabs-item desc-block lg:mt-8 mt-6 ${tab === 'description' ? 'open' : ''}`}>
            <div className="content flex flex-col gap-2">
              <p>The story is narrated from the perspective of Scout Finch, an intelligent and curious young girl. Scout and her brother Jem are raised by their single father, Atticus Finch, who steadfastly upholds principles of justice and ethics. When Atticus defends a black man named Tom Robinson, who is falsely accused of raping a white girl, the Finch family faces prejudice and hostility from the community.</p>
              <p>It is not only a story about injustice and racial discrimination but also a lesson in courage, empathy, and love. Through the character of Atticus Finch, Harper Lee conveys a powerful message about standing up for justice and treating everyone with respect and kindness, regardless of race or circumstances. The book won the Pulitzer Prize and has become an important part of educational curricula in many countries, imparting profound and enduring human values.</p>
            </div>
          </div>
          <div className={`tabs-item review-block lg:mt-8 mt-6 ${tab === 'review' ? 'open' : ''}`}>
            <div className="rating-block flex max-md:flex-col items-center justify-between gap-y-6 mt-8">
              <div className="left flex flex-col items-center">
                <h2 className="heading2">4.8</h2>
                <div className="star flex items-center gap-1 mt-2">
                  <Icon.Star weight="fill" className="text-yellow text-xl" />
                  <Icon.Star weight="fill" className="text-yellow text-xl" />
                  <Icon.Star weight="fill" className="text-yellow text-xl" />
                  <Icon.Star weight="fill" className="text-yellow text-xl" />
                  <Icon.Star weight="fill" className="text-surface1 text-xl" />
                </div>
                <strong className="text-button text-center mt-2">(1,968 Ratings)</strong>
              </div>
              <div className="rating md:w-5/12 w-full flex items-center justify-center gap-2">
                <div className="number-star flex flex-col items-end gap-1">
                  <strong className="text-button">5</strong>
                  <strong className="text-button">4</strong>
                  <strong className="text-button">3</strong>
                  <strong className="text-button">2</strong>
                  <strong className="text-button">1</strong>
                </div>
                <div className="star flex flex-col gap-2">
                  <Icon.Star weight="fill" className="text-yellow text-xl" />
                  <Icon.Star weight="fill" className="text-yellow text-xl" />
                  <Icon.Star weight="fill" className="text-yellow text-xl" />
                  <Icon.Star weight="fill" className="text-yellow text-xl" />
                  <Icon.Star weight="fill" className="text-yellow text-xl" />
                </div>
                <div className="line w-full flex flex-col gap-4">
                  <div className="relative w-full h-3 rounded-sm bg-outline overflow-hidden">
                    <div className="percent absolute top-0 left-0 h-full w-[60%] bg-blue"></div>
                  </div>
                  <div className="relative w-full h-3 rounded-sm bg-outline overflow-hidden">
                    <div className="percent absolute top-0 left-0 h-full w-[20%] bg-blue"></div>
                  </div>
                  <div className="relative w-full h-3 rounded-sm bg-outline overflow-hidden">
                    <div className="percent absolute top-0 left-0 h-full w-[10%] bg-blue"></div>
                  </div>
                  <div className="relative w-full h-3 rounded-sm bg-outline overflow-hidden">
                    <div className="percent absolute top-0 left-0 h-full w-[7%] bg-blue"></div>
                  </div>
                  <div className="relative w-full h-3 rounded-sm bg-outline overflow-hidden">
                    <div className="percent absolute top-0 left-0 h-full w-[3%] bg-blue"></div>
                  </div>
                </div>
                <div className="percent flex flex-col items-start justify-start md:gap-1.5 gap-0.5 -mt-0.5">
                  <strong className="caption1 font-semibold">60%</strong>
                  <strong className="caption1 font-semibold">20%</strong>
                  <strong className="caption1 font-semibold">10%</strong>
                  <strong className="caption1 font-semibold">7%</strong>
                  <strong className="caption1 font-semibold">3%</strong>
                </div>
              </div>
              <div className="block-button">
                <Link href={'#form-review'} className="button-main bg-white text-black border border-black hover:border-blue hover:bg-blue hover:text-white">Write a review</Link>
              </div>
            </div>
            <div className="customer-review blog-detail-page lg:mt-10 mt-7">
              <h5 className="heading5">Customer reviews</h5>
              <div className="blog-comment mt-6">
                <div className="list-comment">
                  {testimonialData.slice(0, 3).map(item => (
                    <div className="review-item">
                      <div className="main-item py-6 bg-white relative z-[1]">
                        <div className="heading flex items-center justify-between">
                          <div className="user-infor flex gap-4">
                            <div className="avatar w-[52px] h-[52px] rounded-full overflow-hidden">
                              <Image
                                src={item.image}
                                width={200}
                                height={200}
                                alt={item.image}
                                className='w-full h-full object-cover'
                              />
                            </div>
                            <div className="user">
                              <div className="flex items-center gap-2">
                                <strong className="name text-button">{item.name}</strong>
                                <strong className="name text-button"> - </strong>
                                <Rate currentRate={item.rate} style={'text-sm text-yellow'} />
                              </div>
                              <div className="caption1 text-surface2">1 days ago</div>
                            </div>
                          </div>
                          <div className="more-action cursor-pointer">
                            <Icon.DotsThree size={24} weight='bold' />
                          </div>
                        </div>
                        <div className="mt-3">{item.review}</div>
                        <div className="action w-full flex items-center justify-between mt-3">
                          <div className="flex items-center gap-4">
                            <div className="like-btn flex items-center gap-1 cursor-pointer">
                              <Icon.HandsClapping size={18} />
                              <strong className="text-button">20</strong>
                            </div>
                            <button className="show-reply-btn flex items-center gap-1 cursor-pointer" onClick={() => handleShowReply(item.id)}>
                              {item.listReply.length > 0 && (
                                <>
                                  <Icon.Chat size={18} />
                                  <strong className="text-button">1 Replies</strong>
                                </>
                              )}
                            </button>
                          </div>
                          <Link href={'#form-review'} className="reply-btn text-button text-surface1 cursor-pointer hover:text-black">Reply</Link>
                        </div>
                      </div>
                      {item.listReply.length > 0 && (
                        <>
                          <div className={`list-reply  ${showReply === item.id ? 'open' : ''}`}>
                            <div className="review-item px-6 py-5 bg-surface rounded-lg">
                              <div className="heading flex items-center justify-between">
                                <div className="user-infor flex gap-4">
                                  <div className="avatar">
                                    <Image
                                      src={'/images/avatar/52x52.png'}
                                      width={200}
                                      height={200}
                                      alt='img'
                                      className='w-[52px] aspect-square rounded-full'
                                    />
                                  </div>
                                  <div className="user">
                                    <div className="flex items-center gap-2">
                                      <strong className="name text-button">Darlene Robertson</strong>
                                      <strong className="name text-button"> - </strong>
                                      <Rate currentRate={item.rate} style={'text-sm text-yellow'} />
                                    </div>
                                    <div className="caption1 text-surface2">1 days ago</div>
                                  </div>
                                </div>
                                <div className="more-action cursor-pointer">
                                  <Icon.DotsThree size={24} weight='bold' />
                                </div>
                              </div>
                              <div className="mt-3">From the initial consultation to project completion, demonstrated exceptional professionalism to detail.</div>
                              <div className="action w-full flex items-center justify-between mt-3">
                                <div className="like-btn flex items-center gap-1 cursor-pointer">
                                  <Icon.HandsClapping size={18} />
                                  <strong className="text-button">20</strong>
                                </div>
                                <Link href={'#form-review'} className="reply-btn text-button text-surface1 cursor-pointer hover:text-black">Reply</Link>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div id='form-review' className="blog-form-contact lg:mt-10 mt-7">
                <h5 className="heading5">Leave a Comment</h5>
                <form className="form-contact-input mt-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="w-full">
                      <div className="body3 pb-3">Name</div>
                      <input className="border border-outline rounded-lg p-4 w-full" type="text" placeholder="Alexander" required />
                    </div>
                    <div className="w-full">
                      <div className="body3 pb-3">Email</div>
                      <input className="border border-outline rounded-lg p-4 w-full" type="email" placeholder="avitex@mail.com" required />
                    </div>
                    <div className="w-full sm:col-span-2">
                      <div className="body3 pb-3">Comment</div>
                      <textarea className="border border-outline rounded-lg w-full p-4" rows={3} placeholder="Write comment..." required ></textarea>
                    </div>
                    <div className="w-full sm:col-span-2 flex items-center">
                      <input type="checkbox" id='check' name="check" />
                      <label htmlFor='check' className="caption1 pl-2">Save my name, email, and website in this browser for the next time I comment.</label>
                    </div>
                  </div>
                  <div className="button-block mt-8">
                    <button className="button-main bg-blue text-white text-button">Submit Reviews</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailReview
