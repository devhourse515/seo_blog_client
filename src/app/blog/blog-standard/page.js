
import LayoutOne from "@/components/Layout/LayoutOne";
import LayoutBlogList from "@/components/Blog/LayoutBlogList";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";

export default function BlogStandard() {
    return (
        <LayoutOne title="Blog Standard">
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <HeadingSubpage classname={'lg:pt-20 sm:pt-14 pt-10'} title={'The Latest New'} desc={'The Latest Innovations in Bytewave'} />
            <LayoutBlogList layout={'style-standard'} type={'style-two'} pageLimit={4} />
        </LayoutOne>
    );
}
