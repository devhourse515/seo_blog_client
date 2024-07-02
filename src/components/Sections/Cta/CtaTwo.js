import Link from "next/link"

const CtaTwo = () => {
    return (
        <section className="cta-block">
            <div className="container">
                <div className="flex gap-y-4 gap-6 items-center justify-between flex-wrap max-lg:flex-col max-lg:justify-center bg-linear-blue py-7 px-10 rounded-2xl overflow-hidden">
                    <h4 className="text-white heading4 max-lg:text-center">In Search of a Premium Business Consultant?</h4>
                    <Link className="button-main" href="/pages/contact-us">Get a free Quote</Link>
                </div>
            </div>
        </section>
    )
}
export default CtaTwo