import LayoutDetailTwo from "@/components/Blog/LayoutDetailTwo";
import LayoutOne from "@/components/Layout/LayoutOne";
import BlogTwo from "@/components/Sections/Blog/BlogTwo";
import blogData from "@/data/blog/data.json";

export default function BlogDetail1() {
    const data = blogData[2]

    return (
        <LayoutOne>
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <LayoutDetailTwo data={data} />
            <BlogTwo data={blogData} start={0} limit={5} />
        </LayoutOne>
    );
}
