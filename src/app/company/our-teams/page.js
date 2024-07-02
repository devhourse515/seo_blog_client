import Link from "next/link";
import Image from "next/image";
import LayoutOne from "@/components/Layout/LayoutOne";
import BenefitSeven from "@/components/Sections/Benefit/BenefitSeven";
import teamData from "@/data/team/data.json";
import ContactOne from "@/components/Sections/Contact/ContactOne";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import CtaAbout from "@/components/Sections/Cta/CtaAbout";

export default function OurTeams() {
    return (
        <>
            <LayoutOne className="-style-1">
                <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
                <HeadingSubpage classname={'lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] sm:pb-12 pb-8'} title={'Meet Our Team'} desc={'Get Acquainted with the Exceptional Individuals Comprising Our Talented Team.'} />
                <div className="introduce-block">
                    <div className="container flex flex-col items-center justify-center">
                        <div className="bg-img w-full max-lg:h-[400px] max-sm:h-[300px]">
                            <Image
                                src={'/images/component/bg-heading-style2.png'}
                                width={4000}
                                height={4000}
                                alt="component/bg-heading-style2"
                                className="w-full h-full object-cover rounded-[20px]"
                            />
                        </div>
                        <div className="heading5 font-normal normal-case sm:w-5/6 w-full text-center lg:mt-10 mt-7">American tech companies continue to propel the nation’s economy forward. Not only has technological innovation become an integral part of the way we live, it is also important to our nation’s economic success.</div>
                    </div>
                </div>
                <section className="our-leader lg:py-20 sm:py-14 py-10">
                    <div className="container">
                        <h3 className="heading3 text-center">Our Leaders</h3>
                        <div className="list grid lg:grid-cols-3 sm:grid-cols-2 gap-[30px] lg:mt-10 mt-7">
                            {teamData.slice(0, 3).map((item) => (
                                <div className="member-item" key={item.id}>
                                    <Link
                                        className="bg-img"
                                        href={`/company/team-detail?id=${item.id}`}
                                    >
                                        <Image width={3000} height={3000} className="w-full rounded-3xl" src={item.image} alt={item.image} />
                                    </Link>
                                    <div className="member-infor mt-4 flex items-center justify-between">
                                        <Link
                                            className="left"
                                            href={`/company/team-detail?id=${item.id}`}
                                        >
                                            <div className="name heading5 duration-300 hover:text-blue">{item.name}</div>
                                            <div className="position caption1 text-surface1 mt-1">{item.position}</div>
                                        </Link>
                                        <div className="flex items-center gap-3">
                                            <Link className="icon w-12 h-12 flex-shrink-0 rounded-full bg-surface flex items-center justify-center duration-300 hover:bg-blue hover:text-white" href="https://facebook.com/" target="_blank">
                                                <span className="icon-facebook"></span>
                                            </Link>
                                            <Link className="icon w-12 h-12 flex-shrink-0 rounded-full bg-surface flex items-center justify-center duration-300 hover:bg-blue hover:text-white" href="https://linkedin.com/" target="_blank">
                                                <span className="icon-linkedin"></span>
                                            </Link>
                                            <Link className="icon w-12 h-12 flex-shrink-0 rounded-full bg-surface flex items-center justify-center duration-300 hover:bg-blue hover:text-white" href="https://twitter.com/" target="_blank">
                                                <span className="icon-twitter"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <BenefitSeven background="bg-linear" />
                <section className="our-leader lg:py-20 sm:py-14 py-10">
                    <div className="container">
                        <h3 className="heading3">Our Leaders</h3>
                        <div className="list grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[30px] lg:mt-10 mt-7">
                            {teamData.slice(3, 11).map((item) => (
                                <div className="member-item" key={item.id}>
                                    <Link
                                        className="bg-img"
                                        href={`/company/team-detail?id=${item.id}`}
                                    >
                                        <Image width={3000} height={3000} className="w-full rounded-3xl" src={item.image} alt={item.image} />
                                    </Link>
                                    <div className="member-infor mt-4 flex items-center justify-between">
                                        <Link
                                            className="left"
                                            href={`/company/team-detail?id=${item.id}`}
                                        >
                                            <div className="name heading5 duration-300 hover:text-blue">{item.name}</div>
                                            <div className="position caption1 text-surface1 mt-1">{item.position}</div>
                                        </Link>
                                        <Link className="icon w-12 h-12 flex-shrink-0 rounded-full bg-surface flex items-center justify-center duration-300 hover:bg-blue hover:text-white" href="https://facebook.com/" target="_blank">
                                            <span className="icon-facebook"></span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <CtaAbout />
                <ContactOne classname={'bg-linear-blue'} />
            </LayoutOne>
        </>
    );
}
