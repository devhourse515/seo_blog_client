import React from "react"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"
import { convertToSlug } from "@/common/utils"

const ServiceOne = ({ data, start, limit }) => {
    return (
        <section className="service-block lg:py-20 sm:py-14 py-10">
            <div className="container">
                <div className="flex items-center justify-between w-full max-lg:flex-wrap gap-y-4">
                    <div className="xl:w-2/3 lg:w-3/4 w-full">
                        <div className="tag text-label">What we do</div>
                        <h3 className="heading3 mt-3">Solve technology problems in every industry that customers need.</h3>
                    </div>
                    <Link className="text-button border-b border-blue inline-block duration-300 hover:text-blue whitespace-nowrap"
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                            process.env.PUBLIC_URL +
                            "/services/" +
                            convertToSlug('Managed IT Services')
                        }
                    >
                        View All industries
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 lg:gap-7 gap-5 md:gap-y-4 gap-y-5 mt-10">
                    {data.slice(start, limit).map((item, index) => (
                        <Link
                            key={index}
                            className="service-item -list bg-surface py-4 px-5 flex items-center rounded-lg h-full"
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                                process.env.PUBLIC_URL + "/services/" + convertToSlug(item.title) + "?id=" + item.id
                            }
                        >
                            {Icon[item.icon] && React.createElement(Icon[item.icon], { className: 'service-icon text-2xl flex-shrink-0' })}
                            <div className="service-name heading6 pl-3">{item.title}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default ServiceOne