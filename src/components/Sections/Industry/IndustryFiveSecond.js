import Link from "next/link";

const IndustryFiveSecond = () => {
    return (
        <section className="section-industry style-five style-second">
            <div className="container">
                <div className="w-full sm:pt-[295px] pt-48 pb-[60px]">
                    <div className="w-full xl:w-7/12 video-block">
                        <h2 className="heading2 text-white">Discover our dedicated professionals</h2>
                        <div className="text-title text-white mt-4">Let us guide you towards a secure financial future.</div>
                        <div className="flex items-center gap-5 mt-4">
                            <Link href={'/company/our-teams'} className="button-main bg-green text-black">Our Team</Link>
                            <Link href={'/pages/contact-us'} className="caption1 font-bold text-white border-b-2 border-green hover:text-green duration-300">Join Our Team</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default IndustryFiveSecond