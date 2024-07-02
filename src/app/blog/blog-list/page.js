
import LayoutOne from "@/components/Layout/LayoutOne";
import LayoutBlogList from "@/components/Blog/LayoutBlogList";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import OutstandingBlog from "@/components/HeadingSubpage/OutstandingBlog";
import dataBlog from "@/data/blog/data.json"

export default function BlogList() {
    const data = dataBlog[3]

    return (
        <LayoutOne title="Blog List">
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <HeadingSubpage classname={'lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] sm:pb-12 pb-8'} title={'The Latest New'} desc={'The Latest Innovations in Bytewave'} />
            <OutstandingBlog data={data} />
            <LayoutBlogList layout={'style-list'} type={'style-list'} pageLimit={5} />
        </LayoutOne>
    );
}
