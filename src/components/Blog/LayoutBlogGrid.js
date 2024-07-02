'use client'

import React, { useState } from "react";
import blogData from "@/data/blog/data.json"
import BlogItem from "@/components/Blog/BlogItem"
import HandlePagination from "../Other/HandlePagination";

const LayoutBlogGrid = ({ layout, type, pageLimit }) => {
  const [currentPage, setCurrentPage] = useState(0);
  let offset = currentPage * pageLimit;

  const pageCount = Math.ceil((blogData.length - 1) / pageLimit);

  // If page number 0, set current page = 0
  if (pageCount === 0) {
    setCurrentPage(0);
  }

  let currentBlogs = blogData.slice(offset + 1, offset + pageLimit);
  if (currentPage > 0) {
    currentBlogs = blogData.slice(offset, offset + pageLimit);
  }

  const handlePageChange = (selected) => {
    setCurrentPage(selected);
  };

  return (
    <div className={`blog-layout ${layout} lg:py-20 sm:py-14 py-10 border-b border-outline`}>
      <div className="container">
        <div className="list-blog">
          <div className="list grid xl:grid-cols-3 md:grid-cols-2 gap-8">
            {currentBlogs.map((item) => (
              <BlogItem key={item.id} data={item} type={type} />
            ))}
          </div>
          {pageCount > 1 && (
            <div className="list-pagination flex items-center lg:mt-10 mt-7">
              <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LayoutBlogGrid