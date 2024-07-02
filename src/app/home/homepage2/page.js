import SliderTwo from "@/components/Sections/Slider/SliderTwo";
import AboutTwo from "@/components/Sections/About/AboutTwo";
import BenefitOne from "@/components/Sections/Benefit/BenefitOne";
import benefitData from "@/data/benefit/data.json"
import SolutionTwo from "@/components/Sections/Solution/SolutionTwo";
import serviceData from "@/data/service/data.json"
import BannerOne from "@/components/Sections/Banner/BannerOne";
import BrandOne from "@/components/Sections/Brand/BrandOne";
import TestimonialTwo from "@/components/Sections/Testimonial/TestimonialTwo";
import testimonialData from "@/data/testimonial/data.json"
import ContactOne from "@/components/Sections/Contact/ContactOne";
import LayoutTwo from "@/components/Layout/LayoutTwo";
import CtaTwo from "@/components/Sections/Cta/CtaTwo";
import CounterTwo from "@/components/Sections/Counter/CounterTwo";
import BlogTwo from "@/components/Sections/Blog/BlogTwo";
import blogData from "@/data/blog/data.json";

export default function homepage2() {
    return (
        <LayoutTwo>
            <SliderTwo />
            <AboutTwo />
            <CtaTwo />
            <BenefitOne classname="lg:mt-[60px] sm:mt-10 mt-8" data={benefitData} start={4} limit={8} />
            <SolutionTwo data={serviceData} start={16} limit={22} />
            <CounterTwo />
            <BannerOne />
            <TestimonialTwo data={testimonialData} classname={'bg-surface'} />
            <BlogTwo data={blogData} start={0} limit={5} />
            <BrandOne classname={'lg:pt-[60px] sm:pt-10 pt-8 lg:pb-20 sm:pb-14 pb-10'} />
            <ContactOne classname={'bg-linear-blue'} />
        </LayoutTwo>
    );
}
