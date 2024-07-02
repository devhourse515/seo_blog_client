import React from 'react'
import CaseStudyItem from '@/components/CaseStudy/CaseStudyItem';

const CaseStudyFour = ({ data, start, limit }) => {
    return (
        <section className="case-studies-block style-four lg:mt-20 sm:mt-14 mt-10">
            <div className="container">
                <h3 className="heading3 text-center">Our Case studies</h3>
            </div>
            <div className="list grid lg:grid-cols-4 sm:grid-cols-2 md:mt-10 mt-6 overflow-hidden">
                {data.slice(start, limit).map((item, index) => (
                    <CaseStudyItem key={index} data={item} style={'style-four'} />
                ))}
            </div>
        </section>
    )
}

export default CaseStudyFour