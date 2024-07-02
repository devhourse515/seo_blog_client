import LayoutOne from "@/components/Layout/LayoutOne";
import testimonialData from "@/data/testimonial/data.json";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialOne";
import caseStudyData from "@/data/case-study/data.json"
import ContactOne from "@/components/Sections/Contact/ContactOne";
import CaseStudyItem from "@/components/CaseStudy/CaseStudyItem"
import caseData from '@/data/case-study/data.json'
import OutstandingCaseStudies from "@/components/HeadingSubpage/OutstandingCaseStudies";

export default function CaseStudyPageTwo() {
    const data = caseData[4]

    return (
        <>
            <LayoutOne className="-style-1">
                <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
                <HeadingSubpage classname={'lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] md:pb-12 pb-8'} title={"Success Stories"} desc={"From Clients Who Achieved Excellence with ByteWave"} />
                <OutstandingCaseStudies data={data} showDesc />
                <section className="case-studies-block style-hide-info lg:py-20 sm:py-14 py-10">
                    <div className="container">
                        <div className="list grid md:grid-cols-2 lg:gap-8 gap-6">
                            {caseStudyData.slice(0, 8).map((item) => (
                                <CaseStudyItem key={item.id} data={item} style={'hide-info'} />
                            ))}
                        </div>
                    </div>
                </section>
                <TestimonialOne classname={'style-service sm:py-[60px] max-sm:pb-10 bg-linear sm:rounded-3xl rounded-t-full rounded-b-3xl'} data={testimonialData} />
                <ContactOne classname={'bg-linear-blue'} />
            </LayoutOne>
        </>
    );
}
