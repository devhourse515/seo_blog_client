import SliderFive from "@/components/Sections/Slider/SliderFive";
import AboutFive from "@/components/Sections/About/AboutFive";
import BenefitFive from "@/components/Sections/Benefit/BenefitFive";
import SolutionFive from "@/components/Sections/Solution/SolutionFive";
import serviceData from "@/data/service/data.json"
import TestimonialFive from "@/components/Sections/Testimonial/TestimonialFive";
import testimonialData from "@/data/testimonial/data.json"
import LayoutFive from "@/components/Layout/LayoutFive";
import BlogFive from "@/components/Sections/Blog/BlogFive";
import blogData from "@/data/blog/data.json";
import IndustryFiveFirst from "@/components/Sections/Industry/IndustryFiveFirst";
import NewsletterFive from "@/components/Sections/Newsletter/NewsletterFive";
import IndustryFiveSecond from "@/components/Sections/Industry/IndustryFiveSecond";
import ContactFive from "@/components/Sections/Contact/ContactFive";

export default function homepage5() {
    return (
        <LayoutFive>
            <SliderFive />
            <BenefitFive />
            <SolutionFive data={serviceData} start={22} limit={26} />
            <AboutFive />
            <IndustryFiveFirst />
            <TestimonialFive data={testimonialData} start={4} limit={7} />
            <NewsletterFive />
            <IndustryFiveSecond />
            <BlogFive data={blogData} start={0} limit={5} />
            <ContactFive />
        </LayoutFive>
    );
}
