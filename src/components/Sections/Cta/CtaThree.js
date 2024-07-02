import Link from "next/link"

const CtaThree = () => {
    return (
        <section className="cta-block lg:mt-10 mt-8 lg:mb-20 sm:mb-14 mb-10">
            <div className="container">
                <div className="flex gap-y-4 gap-6 items-center justify-between flex-wrap max-lg:flex-col max-lg:justify-center bg-linear-blue py-7 px-10 rounded-2xl overflow-hidden">
                    <h4 className="text-white heading4 max-lg:text-center">Do you want visionary IOT?</h4>
                    <Link className="button-main bg-yellow text-black" href="/pages/contact-us">Get a free Quote</Link>
                </div>
            </div>
        </section>
    )
}
export default CtaThree