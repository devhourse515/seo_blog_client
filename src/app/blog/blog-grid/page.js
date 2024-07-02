
import LayoutOne from "@/components/Layout/LayoutOne";
import LayoutBlogGrid from "@/components/Blog/LayoutBlogGrid";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import OutstandingBlog from "@/components/HeadingSubpage/OutstandingBlog";
import dataBlog from "@/data/blog/data.json"

export default function BlogGrid() {
    const data = dataBlog[0]

    return (
        <LayoutOne title="Blog Grid">
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <HeadingSubpage classname={'lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] sm:pb-12 pb-8'} title={'The Latest New'} desc={'The Latest Innovations in Bytewave'} />
            <OutstandingBlog data={data} />
            <LayoutBlogGrid layout={'style-grid'} type={'style-two'} pageLimit={10} />
        </LayoutOne>
    );
}
