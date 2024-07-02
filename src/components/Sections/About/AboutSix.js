import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

const AboutSix = () => {
    return (
        <section className="section-benefit bg-white">
            <div className="container">
                <div className="flex max-lg:flex-col gap-y-8 items-center justify-between">
                    <div className="w-full lg:w-1/2 sm:w-2/3 relative">
                        <Image width={8000} height={8000} className="w-full" src="/images/component/benefit-below6.png" alt="img" />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-[47px]">
                        <h3 className="heading3">Transform Your Brand's Digital Landscape</h3>
                        <div className="list-feature mt-7">
                            <div className="flex items-center">
                                <Icon.Check className='text-purple text-2xl' />
                                <div className="heading6 pl-3">We're your reliable allies, ensuring confidence and success.</div>
                            </div>
                            <div className="flex items-center mt-3">
                                <Icon.Check className='text-purple text-2xl' />
                                <div className="heading6 pl-3">Our creative minds amplify your uniqueness for growth.</div>
                            </div>
                            <div className="flex items-center mt-3">
                                <Icon.Check className='text-purple text-2xl' />
                                <div className="heading6 pl-3">Solutions aligned with your goals, resonating with your audience.</div>
                            </div>
                            <div className="flex items-center mt-3">
                                <Icon.Check className='text-purple text-2xl' />
                                <div className="heading6 pl-3">Tangible results showcased through transparent reporting.</div>
                            </div>
                        </div>
                        <Link className="button-main bg-purple md:mt-9 mt-7" href="/company/our-teams">Our Services</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSix