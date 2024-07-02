import ServiceItem from "@/components/Service/ServiceItem"

const SolutionSeven = ({ data, start, limit }) => {
    return (
        <section className="section-solution bg-white lg:py-20 sm:py-14 py-10">
            <div className="container text-center">
                <span className="tag text-label bg-blue text-white">How we do</span>
                <h3 className="heading3 text-center mt-3">Our solutions</h3>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-[30px] gap-5 md:mt-10 mt-6">
                    {data.slice(start, limit).map((item, index) => (
                        <ServiceItem data={item} key={index} type={'style-seven'} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default SolutionSeven