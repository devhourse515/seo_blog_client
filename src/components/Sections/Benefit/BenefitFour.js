import * as Icon from "@phosphor-icons/react/dist/ssr"
import React from "react"

const BenefitFour = ({ classname, data, start, limit }) => {
    return (
        <section className={`section-benefit ${classname}`}>
            <div className="container">
                <h3 className="heading3 text-center">Experience Digital Excellence with Us</h3>
                <div className="list grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-[30px] gap-5 lg:mt-10 mt-8">
                    {data.slice(start, limit).map((item, index) => (
                        <div className="benefit-item max-xl:flex flex-col items-center" key={index}>
                            <div className="block-icon">
                                {Icon[item.icon] && React.createElement(Icon[item.icon], { className: 'text-4xl' })}
                            </div>
                            <h6 className="heading6 sm:mt-4 mt-2">{item.title}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default BenefitFour