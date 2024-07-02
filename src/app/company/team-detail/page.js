import LayoutOne from "@/components/Layout/LayoutOne";
import ContactOne from "@/components/Sections/Contact/ContactOne";
import TeamDetail from "@/components/Sections/Team/TeamDetail";
import CaseStudyOne from "@/components/Sections/CaseStudy/CaseStudyOne";
import caseStudyData from "@/data/case-study/data.json"

export default function TeamsDetail() {
    return (
        <>
            <LayoutOne className="-style-1">
                <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
                <TeamDetail />
                <CaseStudyOne classname={'lg:py-20 sm:py-14 py-10 bg-linear'} data={caseStudyData} start={0} limit={5} />
                <ContactOne classname={'bg-linear-blue'} />
            </LayoutOne>
        </>
    );
}
