import SliderSix from "@/components/Sections/Slider/SliderSix";
import AboutSix from "@/components/Sections/About/AboutSix";
import BenefitSix from "@/components/Sections/Benefit/BenefitSix";
import benefitData from "@/data/benefit/data.json"
import serviceData from "@/data/service/data.json"
import TestimonialSix from "@/components/Sections/Testimonial/TestimonialSix";
import testimonialData from "@/data/testimonial/data.json"
import LayoutSix from "@/components/Layout/LayoutSix";
import BlogSix from "@/components/Sections/Blog/BlogSix";
import blogData from "@/data/blog/data.json";
import CounterSix from "@/components/Sections/Counter/CounterSix";
import BannerSix from "@/components/Sections/Banner/BannerSix";
import SolutionSix from "@/components/Sections/Solution/SolutionSix";
import StoriesSix from "@/components/Sections/CaseStudy/StoriesSix";
import PricingSix from "@/components/Sections/Pricing/PricingSix";
import BrandOne from "@/components/Sections/Brand/BrandOne";

export default function homepage6() {
    return (
        <LayoutSix>
            <SliderSix />
            <BenefitSix classname="" data={benefitData} start={13} limit={16} />
            <CounterSix />
            <BannerSix />
            <SolutionSix data={serviceData} start={26} limit={30} />
            <AboutSix />
            <StoriesSix />
            <PricingSix />
            <BrandOne />
            <TestimonialSix data={testimonialData} />
            <BlogSix data={blogData} start={0} limit={5} />
        </LayoutSix>
    );
}
