'use client'

import React, { useState } from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link';
import { convertToSlug } from '@/common/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const BlogSidebar = ({ classname, data, layout }) => {
    const router = useRouter()
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState()
    const [categorySelected, setCategory] = useState();
    const [tagSelected, setTag] = useState();
    const uniqueCategories = Array.from(new Set(data.map(item => item.category)));
    const uniqueTags = Array.from(new Set(data.map(item => item.tag)));

    const handleSearch = (search) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('search', convertToSlug(search.toLowerCase()));
        if (layout === 'style-detail') {
            router.push(`/blog/blog-list?${newParams.toString()}`);
        } else {
            router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
        }
    }

    const handleCategoryClick = (category) => {
        const newCategory = categorySelected === category ? null : category;
        setCategory(newCategory);
        const newParams = new URLSearchParams(searchParams.toString());

        if (newCategory) {
            newParams.set('category', convertToSlug(newCategory.toLowerCase()));
        } else {
            newParams.delete('category');
        }

        if (layout === 'style-detail') {
            router.push(`/blog/blog-list?${newParams.toString()}`);
        } else {
            router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
        }
    };

    const handleTagClick = (tag) => {
        const newTag = tagSelected === tag ? null : tag;
        setTag(newTag);
        const newParams = new URLSearchParams(searchParams.toString());

        if (newTag) {
            newParams.set('tag', convertToSlug(newTag.toLowerCase()));
        } else {
            newParams.delete('tag');
        }

        if (layout === 'style-detail') {
            router.push(`/blog/blog-list?${newParams.toString()}`);
        } else {
            router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
        }
    };


    return (
        <div className={`blog-sidebar ${classname}`}>
            <div className="text-content">
                <div className="search-block h-[46px] border border-outline rounded-lg relative">
                    <input
                        className="w-full h-full rounded-lg pl-4 pr-8"
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch(search)}
                    />
                    <button
                        className='flex items-center absolute top-1/2 right-4 -translate-y-1/2'
                        onClick={() => handleSearch(search)}
                    >
                        <Icon.MagnifyingGlass className="text-xl" />
                    </button>
                </div>
                <div className="cate-block mt-8">
                    <h6 className="heading6">Categories</h6>
                    <div className="list-nav mt-4 flex flex-col gap-3">
                        {uniqueCategories.map((category, index) => (
                            <span
                                key={index}
                                className={`nav-item w-fit capitalize font-medium cursor-pointer duration-300 hover:text-blue ${category === categorySelected ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="recent-post-block mt-8">
                    <div className="heading6">Recent Posts</div>
                    <div className="list-recent-post flex flex-col gap-7 mt-5">
                        {data.slice(5, 8).map(item => (
                            <Link
                                key={item.id}
                                className="blog-item flex item-start gap-4"
                                href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                                as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(item.title) + "?id=" + item.id}
                            >
                                <div className="item-img flex-shrink-0">
                                    <img className="w-20 h-20 rounded-lg object-cover" src={item.thumbImage} alt={item.thumbImage} />
                                </div>
                                <div className="item-infor">
                                    <div className="caption2 bg-surface px-2 inline-block">{item.tag}</div>
                                    <div className="title mt-1">{item.title}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="tags-popular-block mt-8">
                    <h6 className="tag-heading heading6">Popular Tags</h6>
                    <div className="list-tag mt-4 flex flex-wrap gap-3">
                        {uniqueTags.slice(0, 5).map((tag, index) => (
                            <span
                                key={index}
                                className={`caption2 py-2 px-4 bg-surface rounded-lg cursor-pointer duration-300 hover:bg-blue hover:text-white ${tag === tagSelected ? 'active' : ''}`}
                                onClick={() => handleTagClick(tag)}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar
