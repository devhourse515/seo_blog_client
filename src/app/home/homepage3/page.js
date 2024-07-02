import SliderThree from "@/components/Sections/Slider/SliderThree";
import AboutThree from "@/components/Sections/About/AboutThree";
import BenefitOne from "@/components/Sections/Benefit/BenefitOne";
import benefitData from "@/data/benefit/data.json"
import SolutionThree from "@/components/Sections/Solution/SolutionThree";
import serviceData from "@/data/service/data.json"
import BannerThree from "@/components/Sections/Banner/BannerThree";
import BrandOne from "@/components/Sections/Brand/BrandOne";
import TestimonialTwo from "@/components/Sections/Testimonial/TestimonialTwo";
import testimonialData from "@/data/testimonial/data.json"
import ContactOne from "@/components/Sections/Contact/ContactOne";
import LayoutThree from "@/components/Layout/LayoutThree";
import CtaThree from "@/components/Sections/Cta/CtaThree";
import BlogTwo from "@/components/Sections/Blog/BlogTwo";
import blogData from "@/data/blog/data.json";

export default function homepage3() {
    return (
        <LayoutThree>
            <SliderThree />
            <BenefitOne classname="lg:py-20 sm:py-14 py-10" data={benefitData} start={8} limit={12} />
            <AboutThree />
            <BannerThree />
            <SolutionThree data={serviceData} start={0} limit={6} />
            <CtaThree />
            <TestimonialTwo data={testimonialData} classname={'bg-[#F3F2F0]'} />
            <BlogTwo data={blogData} start={0} limit={5} />
            <BrandOne classname={'lg:pt-[60px] sm:pt-10 pt-8 lg:pb-20 sm:pb-14 pb-10'} />
            <ContactOne classname={'style-three bg-[#F3F2F0]'} />
        </LayoutThree>
    );
}
