import Image from 'next/image'
import React from 'react'

const HistoryAbout = () => {
    return (
        <section className="history-block lg:py-20 sm:py-12 py-10">
            <div className="container">
                <div className="row flex items-center justify-center">
                    <div className="lg:w-5/6 md:w-full">
                        <div className="heading">
                            <h3 className="heading3 text-center">Our Journey Through Time</h3>
                            <div className="body2 text-surface1 text-center mt-4">Tracing the Path of Our Legacy and Growth</div>
                        </div>
                        <div className="content-main lg:mt-10 mt-7">
                            <div className="flex max-sm:flex-col-reverse sm:items-center justify-between gap-y-6">
                                <div className="lg:w-2/5 sm:w-[45%] w-full text-content-block">
                                    <div className="text-content sm:text-end">
                                        <div className="text-surface1">02/2016</div>
                                        <div className="heading5">The Early Days</div>
                                        <div className="text-surface1 mt-3">In the early years, we were a small team with a big vision. We started with a handful of passionate individuals determined to make a difference.</div>
                                    </div>
                                </div>
                                <div className="lg:w-2/5 sm:w-[45%] w-full">
                                    <div className="bg-img">
                                        <Image width={4000} height={4000} className="w-full rounded-[20px]" src="/images/blog/1290x837.png" alt="blog/item16" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex max-sm:flex-col sm:items-center justify-between gap-y-6 pt-10">
                                <div className="lg:w-2/5 sm:w-[45%] w-full">
                                    <div className="bg-img">
                                        <Image width={4000} height={4000} className="w-full rounded-[20px]" src="/images/blog/1290x837.png" alt="blog/item11" />
                                    </div>
                                </div>
                                <div className="lg:w-2/5 sm:w-[45%] w-full text-content-block">
                                    <div className="text-content text-start">
                                        <div className="text-surface1">08/2019</div>
                                        <div className="heading5">Growth and Expansion</div>
                                        <div className="text-surface1 mt-3">We expanded our operations, both in terms of scope and
                                            geography, to better serve the evolving needs of our clients.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex max-sm:flex-col-reverse sm:items-center justify-between gap-y-6 pt-10">
                                <div className="lg:w-2/5 sm:w-[45%] w-full text-content-block">
                                    <div className="text-content sm:text-end">
                                        <div className="text-surface1">04/2022</div>
                                        <div className="heading5">Adapting to Change</div>
                                        <div className="text-surface1 mt-3">We embraced emerging technologies, implemented sustainable practices, and fostered a culture of innovation that has allowed us to stay ahead cuve.</div>
                                    </div>
                                </div>
                                <div className="lg:w-2/5 sm:w-[45%] w-full">
                                    <div className="bg-img">
                                        <Image width={4000} height={4000} className="w-full rounded-[20px]" src="/images/blog/1290x837.png" alt="blog/item14" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex max-sm:flex-col sm:items-center justify-between gap-y-6 pt-10">
                                <div className="lg:w-2/5 sm:w-[45%] w-full">
                                    <div className="bg-img">
                                        <Image width={4000} height={4000} className="w-full rounded-[20px]" src="/images/blog/1290x837.png" alt="blog/item15" />
                                    </div>
                                </div>
                                <div className="lg:w-2/5 sm:w-[45%] w-full text-content-block">
                                    <div className="text-content text-start">
                                        <div className="text-surface1">06/2022</div>
                                        <div className="heading5">Our Team</div>
                                        <div className="text-surface1 mt-3">They are the heart of our organization, and their unwavering commitment to excellence has been the driving force behind our growth.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex max-sm:flex-col-reverse sm:items-center justify-between gap-y-6 pt-10">
                                <div className="lg:w-2/5 sm:w-[45%] w-full text-content-block">
                                    <div className="text-content sm:text-end">
                                        <div className="text-surface1">12/2022</div>
                                        <div className="heading5">Client-Centric Approach</div>
                                        <div className="text-surface1 mt-3">We have always placed their needs and satisfaction at the center of everything we do. Their trust and loyalty have been instrumental in our journey.
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-2/5 sm:w-[45%] w-full">
                                    <div className="bg-img">
                                        <Image width={4000} height={4000} className="w-full rounded-[20px]" src="/images/blog/1290x837.png" alt="blog/item13" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex max-sm:flex-col sm:items-center justify-between gap-y-6 pt-10">
                                <div className="lg:w-2/5 sm:w-[45%] w-full">
                                    <div className="bg-img">
                                        <Image width={4000} height={4000} className="w-full rounded-[20px]" src="/images/blog/1290x837.png" alt="blog/item12" />
                                    </div>
                                </div>
                                <div className="lg:w-2/5 sm:w-[45%] w-full text-content-block">
                                    <div className="text-content text-start">
                                        <div className="text-surface1">04/2023</div>
                                        <div className="heading5">Looking Ahead</div>
                                        <div className="text-surface1 mt-3">We remain dedicated to pushing boundaries, delivering unmatched IT Solution, and continuing to be a partner in the success of our clients.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="heading5 text-center mt-10 sm:px-20 px-6 capitalize">Thank you for being a part of our history, and we look forward to a future filled with shared successes and continued excellence.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistoryAbout
