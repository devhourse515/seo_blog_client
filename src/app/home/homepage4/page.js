import SliderFour from "@/components/Sections/Slider/SliderFour";
import AboutFour from "@/components/Sections/About/AboutFour";
import BenefitFour from "@/components/Sections/Benefit/BenefitFour";
import benefitData from "@/data/benefit/data.json"
import SolutionFour from "@/components/Sections/Solution/SolutionFour";
import serviceData from "@/data/service/data.json"
import BannerFour from "@/components/Sections/Banner/BannerFour";
import TestimonialFour from "@/components/Sections/Testimonial/TestimonialFour";
import testimonialData from "@/data/testimonial/data.json"
import LayoutFour from "@/components/Layout/LayoutFour";
import CtaFour from "@/components/Sections/Cta/CtaFour";
import CaseStudyFour from "@/components/Sections/CaseStudy/CaseStudyFour";
import caseStudyData from "@/data/case-study/data.json"
import BlogFour from "@/components/Sections/Blog/BlogFour";
import blogData from "@/data/blog/data.json";
import NewsletterFour from "@/components/Sections/Newsletter/NewsletterFour";

export default function homepage4() {
    return (
        <LayoutFour>
            <SliderFour />
            <BannerFour />
            <BenefitFour classname="style-four lg:mt-20 sm:mt-14 mt-10" data={benefitData} start={7} limit={13} />
            <CtaFour />
            <AboutFour />
            <SolutionFour data={serviceData} start={22} limit={26} />
            <CaseStudyFour data={caseStudyData} start={16} limit={20} />
            <TestimonialFour data={testimonialData} classname={'bg-surface'} />
            <BlogFour data={blogData} start={0} limit={5} />
            <NewsletterFour />
        </LayoutFour>
    );
}
