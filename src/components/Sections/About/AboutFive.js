import Image from "next/image"
import Link from "next/link"

const AboutThree = () => {
    return (
        <section className="section-about lg:py-20 sm:py-14 py-10">
            <div className="container">
                <div className="flex max-lg:flex-col gap-y-8 lg:items-center justify-between">
                    <div className="w-full lg:w-6/12 lg:pr-[65px]">
                        <h3 className="heading3">Empowering your financial future with expertise</h3>
                        <div className="desc mt-5">Welcome to us - a dedicated and professional finance company committed to elevating your financial prosperity. Leveraging our extensive financial knowledge, we craft tailored solutions to help you achieve personal</div>
                        <div className="counter flex mt-5">
                            <div className="item">
                                <strong className="heading3 flex items-center">
                                    <span className="icon-slash"></span>
                                    <span>20</span>
                                </strong>
                                <div className="text-title mt-1">Years experiences</div>
                            </div>
                            <div className="item pl-10">
                                <strong className="heading3 flex items-center">
                                    <span className="icon-slash"></span>
                                    <span>1.8k</span>
                                </strong>
                                <div className="text-title mt-1">Happy customers</div>
                            </div>
                        </div>
                        <div className="counter flex mt-5">
                            <div className="item">
                                <strong className="heading3 flex items-center">
                                    <span className="icon-slash"></span>
                                    <span>250</span>
                                </strong>
                                <div className="text-title mt-1">Project completed</div>
                            </div>
                            <div className="item pl-10">
                                <strong className="heading3">
                                    <strong className="heading3 flex items-center">
                                        <span className="icon-slash"></span>
                                        <span>10</span>
                                    </strong>
                                </strong>
                                <div className="text-title mt-1">Awards achievement</div>
                            </div>
                        </div>
                        <Link className="inline-block caption1 font-bold text-black border-b-2 border-green hover:text-green md:mt-6 mt-5 duration-300" href="/company/about-us">About Us</Link>
                    </div>
                    <div className="w-full box-circle lg:w-1/2 lg:pl-[65px] relative">
                        <div className="icon flex items-center absolute -top-4 right-20">
                            <span className="icon-slash text-5xl"></span>
                            <span className="icon-slash text-5xl -ml-6"></span>
                        </div>
                        <Image width={8000} height={8000} className="w-full" src="/images/component/about5.png" alt="img" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutThree