'use client'

import React, { useState } from "react";
import caseStudyData from "@/data/case-study/data.json"
import CaseStudyItem from "@/components/CaseStudy/CaseStudyItem"
import HandlePagination from "../Other/HandlePagination";

const ListCaseStudiesThree = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const pageLimit = 9;
    let offset = currentPage * pageLimit

    const pageCount = Math.ceil(caseStudyData.length / pageLimit);

    // If page number 0, set current page = 0
    if (pageCount === 0) {
        setCurrentPage(0);
    }

    const currentPosts = caseStudyData.slice(offset, offset + pageLimit);

    const handlePageChange = (selected) => {
        setCurrentPage(selected);
    };

    return (
        <div className="case-studies-block lg:pb-20 sm:pb-14 pb-10">
            <div className="container">
                <div className="list-case-studies overflow-hidden">
                    <div className="list style-border grid xl:grid-cols-3 md:grid-cols-2 gap-y-8">
                        {currentPosts.map((item) => (
                            <CaseStudyItem key={item.id} data={item} style={'style-one'} />
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

export default ListCaseStudiesThree
