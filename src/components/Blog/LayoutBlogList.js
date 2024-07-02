'use client'

import React, { useEffect, useState } from "react";
import blogData from "@/data/blog/data.json"
import BlogItem from "@/components/Blog/BlogItem"
import BlogSidebar from "./BlogSidebar";
import StickyBox from "react-sticky-box";
import { useSearchParams } from "next/navigation";
import { getPostByKeyword, getPostByTag, getPosts } from "@/common/postSelect";
import Paginator from "react-hooks-paginator";

const LayoutBlogList = ({ layout, type, pageLimit }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const category = searchParams.get("category");
  const tag = searchParams.get("tag");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  let [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    if (!search || search.length === 0) {
      if (!category || category.length === 0) {
        if (!tag || tag.length === 0) {
          setCurrentData(blogData);
        } else {
          setCurrentData(getPostByTag(blogData, tag));
        }
      } else {
        setCurrentData(getPosts(blogData, category));
      }
    } else {
      setCurrentData(getPostByKeyword(blogData, search));
    }
  }, [offset, search, category, tag]);

  if (search) {
    currentData = getPostByKeyword(currentData, search)
  }

  if (category) {
    currentData = getPosts(currentData, category, offset + pageLimit)
  }

  if (tag) {
    currentData = getPostByTag(currentData, tag)
  }

  if (currentData && !Array.isArray(currentData)) {
    currentData = [currentData];
  } else if (currentData === undefined) {
    currentData = [];
  }

  return (
    <div className={`blog-layout ${layout} lg:py-20 sm:py-14 py-10 border-b border-outline`}>
      <div className="container flex max-lg:flex-col gap-y-10">
        <div className="list-blog lg:w-3/4 lg:pr-12">
          <div className="list flex flex-col gap-10">
            {currentData !== undefined && currentData.length > 0 ? (
              <>
                {currentData.slice(offset, offset + pageLimit).map((item) => (
                  <BlogItem key={item.id} data={item} type={type} />
                ))}
              </>
            ) : (
              <>
                <strong className="heading6">No blog found!</strong>
              </>
            )}
          </div>
          <Paginator
            pageContainerClass="paginator list-pagination flex items-center gap-2.5 lg:mt-10 mt-7"
            totalRecords={currentData.length}
            pageLimit={pageLimit}
            pageNeighbours={2}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="sidebar lg:w-1/4 lg:pl-3">
          <StickyBox offsetTop={90} offsetBottom={20}>
            <BlogSidebar data={blogData} layout={layout} />
          </StickyBox>
        </div>
      </div>
    </div>
  )
}

export default LayoutBlogList