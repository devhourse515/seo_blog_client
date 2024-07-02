import { convertToSlug } from "@/common/utils"
import Link from "next/link"

const ServiceItem = ({ data, type }) => {
    return (
        <>
            {type === 'style-one' && (
                <div className="service-item -solution rounded-2xl bg-white h-full">
                    <Link className="main md:p-10 p-8 flex flex-col items-center h-full"
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                            process.env.PUBLIC_URL + "/services/" + convertToSlug(data.title) + "?id=" + data.id
                        }
                    >
                        <i className={`${data.icon} text-6xl text-blue`}></i>
                        <strong className="service-name heading5 mt-6">{data.title}</strong>
                        <p className="service-desc text-surface1 text-center mt-3">{data.desc}</p>
                    </Link>
                </div>
            )}
            {type === 'style-two' && (
                <div className="service-item style-two rounded-2xl bg-white h-full">
                    <Link className="main md:p-10 p-8 flex items-start gap-6 h-full"
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                            process.env.PUBLIC_URL + "/services/" + convertToSlug(data.title) + "?id=" + data.id
                        }
                    >
                        <i className={`${data.icon} text-6xl text-blue flex-shrink-0`}></i>
                        <div className="">
                            <strong className="service-name heading5">{data.title}</strong>
                            <p className="service-desc text-surface1 whitespace-normal mt-3">{data.desc}</p>
                        </div>
                    </Link>
                </div>
            )}
            {type === 'style-three' && (
                <div className="service-item -solution style-three">
                    <Link className="main"
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                            process.env.PUBLIC_URL + "/services/" + convertToSlug(data.title) + "?id=" + data.id
                        }
                    >
                        <i className={`${data.icon} text-6xl flex-shrink-0`}></i>
                        <div className="mt-6">
                            <strong className="service-name heading5">{data.title}</strong>
                            <p className="service-desc whitespace-normal mt-3">{data.desc}</p>
                        </div>
                    </Link>
                </div>
            )}
            {type === 'style-four' && (
                <div className="service-item style-four -solution bg-white h-full">
                    <Link className="main md:p-[60px] p-10 flex max-sm:flex-col items-start gap-6 h-full"
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                            process.env.PUBLIC_URL + "/services/" + convertToSlug(data.title) + "?id=" + data.id
                        }
                    >
                        <i className={`${data.icon} text-6xl text-pink flex-shrink-0`}></i>
                        <div className="">
                            <strong className="service-name heading5">{data.title}</strong>
                            <p className="service-desc body2 text-surface1 whitespace-normal mt-3">{data.desc}</p>
                        </div>
                    </Link>
                </div>
            )}
            {type === 'style-five' && (
                <div className="service-item -solution style-five">
                    <Link className="main p-10 max-sm:py-6 max-sm:px-8 block relative h-full bg-white border-r border-outline"
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                            process.env.PUBLIC_URL + "/services/" + convertToSlug(data.title) + "?id=" + data.id
                        }
                    >
                        <div className="slash flex items-center absolute -top-4 right-6 opacity-0 duration-500">
                            <span className="icon-slash text-5xl"></span>
                            <span className="icon-slash text-5xl -ml-6"></span>
                        </div>
                        <i className={`${data.icon} text-6xl flex-shrink-0`}></i>
                        <div className="mt-6">
                            <strong className="service-name heading5 duration-300">{data.title}</strong>
                            <p className="service-desc body2 text-surface1 whitespace-normal mt-3">{data.desc}</p>
                        </div>
                    </Link>
                </div>
            )}
            {type === 'style-six' && (
                <div className="service-item style-six">
                    <Link className="main p-8 block relative h-full bg-white rounded-[20px] shadow-lg"
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={process.env.PUBLIC_URL + "/services/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <i className={`${data.icon} text-purple text-6xl flex-shrink-0`}></i>
                        <div className="mt-6">
                            <strong className="service-name heading5 duration-300">{data.title}</strong>
                            <p className="service-desc body2 text-surface1 whitespace-normal mt-3">{data.desc}</p>
                        </div>
                    </Link>
                </div>
            )}
            {type === 'style-seven' && (
                <div className="service-item -solution rounded-2xl bg-white border border-outline h-full">
                    <Link className="main xl:p-10 p-8 flex flex-col items-center h-full"
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                            process.env.PUBLIC_URL + "/services/" + convertToSlug(data.title) + "?id=" + data.id
                        }
                    >
                        <i className={`${data.icon} text-6xl`}></i>
                        <strong className="service-name heading5 mt-6">{data.title}</strong>
                        <p className="service-desc text-surface1 text-center mt-3">{data.desc}</p>
                    </Link>
                </div>
            )}
        </>
    )
}

export default ServiceItem