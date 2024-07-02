import { getPostByTitle } from "@/common/postSelect";
import LayoutDetailOne from "@/components/Blog/LayoutDetailOne";
import LayoutOne from "@/components/Layout/LayoutOne";
import BlogTwo from "@/components/Sections/Blog/BlogTwo";
import blogData from "@/data/blog/data.json";

export default function BlogDetail1({ params: { slug } }) {
    // Decode URL
    const decodedSlug = decodeURIComponent(slug);

    // handle with ' and "
    const cleanedSlug = decodedSlug.replace(/['"]/g, "'");

    let foundPost = getPostByTitle(blogData, cleanedSlug);

    return (
        <LayoutOne>
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <LayoutDetailOne data={foundPost[0]} />
            <BlogTwo data={blogData} start={0} limit={5} />
        </LayoutOne>
    );
}
