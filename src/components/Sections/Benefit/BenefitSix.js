import * as Icon from "@phosphor-icons/react/dist/ssr"
import React from "react"

const BenefitSix = ({ classname, data, start, limit }) => {
    return (
        <div className={`section-benefit ${classname}`}>
            <div className="container">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[30px]">
                    {data.slice(start, limit).map((item, index) => (
                        <div className="benefit-item h-full bg-white p-10 border border-outline rounded-[20px] shadow-lg" key={index}>
                            <div className="heading flex max-lg:flex-col-reverse justify-between gap-8 gap-y-3">
                                <h5 className="heading5">{item.title}</h5>
                                <div className="block-icon flex flex-shrink-0 items-center justify-center w-[60px] h-[60px] bg-surface rounded-full">
                                    {Icon[item.icon] && React.createElement(Icon[item.icon], { className: 'text-4xl text-purple' })}
                                </div>
                            </div>
                            <p className="desc text-surface1 mt-3">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BenefitSix