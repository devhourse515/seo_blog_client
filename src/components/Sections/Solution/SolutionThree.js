import Link from "next/link"
import ServiceItem from "@/components/Service/ServiceItem"
import { convertToSlug } from "@/common/utils"

const SolutionThree = ({ data, start, limit }) => {
    return (
        <section className="section-solution lg:mt-20 sm:mt-14 mt-10">
            <div className="container">
                <div className="heading flex items-center justify-between">
                    <h3 className="heading3 ">Our solutions</h3>
                    <Link className="text-button border-b-2 border-yellow inline-block duration-300 hover:text-yellow whitespace-nowrap"
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                            process.env.PUBLIC_URL +
                            "/services/" +
                            convertToSlug('Managed IT Services')
                        }
                    >
                        View All Solutions
                    </Link>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-[30px] gap-5 gap-y-10 md:mt-10 mt-6">
                    {data.slice(start, limit).map((item, index) => (
                        <ServiceItem data={item} key={index} type={'style-three'} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default SolutionThree