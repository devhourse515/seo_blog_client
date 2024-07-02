import LayoutOne from "@/components/Layout/LayoutOne";
import testimonialData from "@/data/testimonial/data.json";
import ContactOne from "@/components/Sections/Contact/ContactOne";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import TestimonialItem from "@/components/Testimonial/TestimonialItem";
import OutstandingCaseStudies from "@/components/HeadingSubpage/OutstandingCaseStudies";
import caseData from '@/data/case-study/data.json'

export default function Testimonials() {
    const data = caseData[10]

    return (
        <>
            <LayoutOne className="-style-1">
                <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
                <HeadingSubpage classname={'lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] sm:pb-12 pb-8'} title={'Our Work Speaks for Itself'} desc={'Feedback from Our Valued Clients'} />
                <OutstandingCaseStudies data={data} showDesc />
                <div className="list-testimonials lg:py-20 sm:py-14 py-10">
                    <div className="container">
                        <h3 className="heading3 text-center">Our Work Speaks for Itself</h3>
                        <div className="list grid xl:grid-cols-3 sm:grid-cols-2 gap-[30px] lg:mt-10 mt-7">
                            {testimonialData.map((item) => (
                                <TestimonialItem key={item.id} data={item} type={'style-main'} />
                            ))}
                        </div>
                    </div>
                </div>
                <ContactOne classname={'bg-linear-blue'} />
            </LayoutOne>
        </>
    );
}
