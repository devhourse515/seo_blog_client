import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

const BenefitFive = () => {
    return (
        <section className="section-benefit bg-white lg:py-20 sm:py-14 py-10">
            <div className="container">
                <div className="flex max-lg:flex-col gap-y-8 lg:items-center justify-between">
                    <div className="w-full lg:w-1/2 relative">
                        <Image width={8000} height={8000} className="w-full" src="/images/component/benefit5.png" alt="img" />
                        <div className="icon flex items-center absolute -top-4 right-20">
                            <span className="icon-slash text-5xl"></span>
                            <span className="icon-slash text-5xl -ml-6"></span>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-[74px]">
                        <h3 className="heading3">Unlock your financial potential today!</h3>
                        <div className="list-feature mt-7">
                            <div className="flex items-center">
                                <Icon.Check className='text-green text-2xl' />
                                <div className="heading6 pl-3">Supported by experienced financial experts.</div>
                            </div>
                            <div className="flex items-center mt-3">
                                <Icon.Check className='text-green text-2xl' />
                                <div className="heading6 pl-3">Optimizing investment portfolios and assets.</div>
                            </div>
                            <div className="flex items-center mt-3">
                                <Icon.Check className='text-green text-2xl' />
                                <div className="heading6 pl-3">Building stable financial plans for the future.</div>
                            </div>
                            <div className="flex items-center mt-3">
                                <Icon.Check className='text-green text-2xl' />
                                <div className="heading6 pl-3">Ensuring financial security through suitable insurance</div>
                            </div>
                        </div>
                        <Link className="button-main text-black bg-green md:mt-9 mt-7" href="/company/our-teams">Our Services</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BenefitFive