import Link from "next/link"

const CtaAbout = () => {
    return (
        <section className="cta-block lg:mb-20 sm:mb-14 mb-10">
            <div className="container">
                <div className="flex gap-y-4 gap-6 items-center justify-between max-lg:flex-col max-lg:justify-center bg-blue py-10 lg:px-[60px] px-8 rounded-[20px] overflow-hidden">
                    <div className="text lg:w-7/12">
                        <h4 className="text-white heading3 max-lg:text-center">Join Our Team Explore Exciting Opportunities</h4>
                        <p className="text-white heading6 font-normal max-lg:text-center mt-5">Empower your business with our expertise for growth and efficiency. </p>
                    </div>
                    <Link className="button-main bg-white text-black hover:bg-black hover:text-white" href="/pages/contact-us">Join us today!</Link>
                </div>
            </div>
        </section>
    )
}

export default CtaAbout