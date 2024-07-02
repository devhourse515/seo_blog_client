import SliderSeven from "@/components/Sections/Slider/SliderSeven";
import serviceData from "@/data/service/data.json"
import TestimonialSeven from "@/components/Sections/Testimonial/TestimonialSeven";
import testimonialData from "@/data/testimonial/data.json"
import LayoutSeven from "@/components/Layout/LayoutSeven";
import SolutionSeven from "@/components/Sections/Solution/SolutionSeven";
import PricingSeven from "@/components/Sections/Pricing/PricingSeven";
import BenefitSeven from "@/components/Sections/Benefit/BenefitSeven";
import AboutSevenFirst from "@/components/Sections/About/AboutSevenFirst";
import AboutSevenSecond from "@/components/Sections/About/AboutSevenSecond";
import NewsletterSeven from "@/components/Sections/Newsletter/NewsletterSeven";

export default function homepage7() {
    return (
        <LayoutSeven>
            <SliderSeven />
            <SolutionSeven data={serviceData} start={0} limit={3} />
            <BenefitSeven background={'bg-[#F8EEEF]'} />
            <AboutSevenFirst />
            <AboutSevenSecond />
            <PricingSeven classname={'bg-[#F3F2F0]'} />
            <NewsletterSeven />
            <TestimonialSeven data={testimonialData} classname={'bg-[#F3F2F0]'} />
        </LayoutSeven>
    );
}
