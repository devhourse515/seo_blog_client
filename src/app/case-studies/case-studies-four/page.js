import LayoutOne from "@/components/Layout/LayoutOne";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import ContactOne from "@/components/Sections/Contact/ContactOne";
import ListCaseStudiesFour from "../../../components/CaseStudy/ListCaseStudiesFour";

export default function CaseStudyPageFour() {
    return (
        <>
            <LayoutOne className="-style-1">
                <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
                <HeadingSubpage classname={'lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] md:pb-12 pb-8'} title={"Success Stories"} desc={"From Clients Who Achieved Excellence with ByteWave"} />
                <ListCaseStudiesFour />
                <ContactOne classname={'bg-linear-blue'} />
            </LayoutOne>
        </>
    );
}
