import Link from "next/link"
import Image from "next/image"
import data from "@/data/case-study/data.json"
import CaseStudyItem from "@/components/CaseStudy/CaseStudyItem"

const StoriesSix = () => {
    return (
        <section className="section-stories lg:mt-20 sm:mt-14 mt-10">
            <div className="container">
                <div className="heading flex items-center justify-between">
                    <h3 className="heading3">Success stories</h3>
                    <Link className="text-button border-b-2 border-purple inline-block duration-300 hover:text-purple whitespace-nowrap"
                        href={process.env.PUBLIC_URL + "/case-studies/case-studies-one"}
                    >
                        View All
                    </Link>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-[30px] gap-5 gap-y-8 md:mt-10 mt-6">
                    {data.slice(20, 23).map(item => (
                        <CaseStudyItem key={item.id} data={item} style={'style-six'} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default StoriesSix