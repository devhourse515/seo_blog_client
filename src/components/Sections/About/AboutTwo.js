import Link from "next/link"

const AboutTwo = () => {
    return (
        <section className="about-block lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] sm:pb-10 pb-8">
            <div className="container">
                <div className="flex gap-y-3 items-center justify-between max-lg:flex-wrap">
                    <div className="w-full xl:w-5/12 lg:w-6/12">
                        <h3 className="heading3">We are your strategic partner for business development</h3>
                    </div>
                    <div className="w-full lg:w-6/12">
                        <div className="desc">At Bytewave, we're more than just business consultants; we're passionate allies on your journey. With a mission to respect and define the unique values of each enterprise, we're committed to crafting innovative solutions and tailored strategies that propel you towards new heights.</div>
                        <Link className="text-button-sm inline-block mt-4 border-b-2 border-black" href="/company/about-us">Our Company</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTwo