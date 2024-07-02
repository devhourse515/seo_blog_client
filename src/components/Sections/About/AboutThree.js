import Image from "next/image"
import Link from "next/link"

const AboutThree = () => {
    const text = '20yearsexperience20yearsexperience'
    return (
        <section className="section-about style-three bg-[#F3F2F0] lg:py-20 sm:py-14 py-10">
            <div className="container">
                <div className="flex max-lg:flex-col gap-y-8 lg:items-center justify-between">
                    <div className="w-full lg:w-6/12 lg:pr-[65px]">
                        <h3 className="heading3">Empowering your future with advanced IoT services</h3>
                        <div className="desc mt-5">Welcome to Bytewave, your trusted companion in the realm of IoT services. We take pride in being a dedicated partner, committed to delivering state-of-the-art IoT solutions that propel the future of your business.</div>
                        <div className="counter flex mt-4">
                            <div className="item">
                                <div className="heading3">20</div>
                                <div className="text-title mt-1">Years experiences</div>
                            </div>
                            <div className="item pl-10">
                                <div className="heading3">1.8<span>k</span></div>
                                <div className="text-title mt-1">Happy customers</div>
                            </div>
                        </div>
                        <Link className="button-main text-black bg-transparent border border-black hover:bg-yellow hover:border-yellow md:mt-10 mt-7" href="/company/our-teams">Meet our team</Link>
                    </div>
                    <div className="w-full box-circle lg:w-6/12 lg:pl-[65px]">
                        <div className="text-box-circle bg-white">
                            <div className="text-label">
                                {text.split('').map((char, i) => (
                                    <span key={i} style={{ transform: `rotate(${i * 10.5}deg)` }}>{char}</span>
                                ))}
                            </div>
                            <i className="icon-icon-logo"></i>
                        </div>
                        <Image width={8000} height={8000} className="w-full" src="/images/component/about3.png" alt="img" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutThree