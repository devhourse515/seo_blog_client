import ServiceItem from "@/components/Service/ServiceItem"

const SolutionOne = ({ data, start, limit }) => {
    return (
        <section className="section-solution bg-linear lg:mt-20 sm:mt-14 mt-10 lg:py-20 sm:py-14 py-10">
            <div className="container text-center">
                <span className="tag text-label">How we do</span>
                <h3 className="heading3 text-center mt-3">Our solutions</h3>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-[30px] gap-5 md:mt-10 mt-6">
                    {data.slice(start, limit).map((item, index) => (
                        <ServiceItem data={item} key={index} type={'style-one'} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default SolutionOne