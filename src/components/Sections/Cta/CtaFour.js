import Link from "next/link"

const CtaFour = () => {
    return (
        <section className="cta-block lg:mt-[60px] sm:mt-10 mt-8">
            <div className="container">
                <div className="flex gap-y-4 gap-6 items-center justify-between flex-wrap max-lg:flex-col max-lg:justify-center bg-linear-pink py-7 px-10 overflow-hidden">
                    <h4 className="text-white heading4 max-lg:text-center">In Search of a Premium Business Consultant?</h4>
                    <Link className="button-main bg-white text-black hover:bg-black hover:text-white" href="/pages/contact-us">Get a free Quote</Link>
                </div>
            </div>
        </section>
    )
}
export default CtaFour