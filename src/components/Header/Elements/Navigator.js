import Link from "next/link";
import classNames from "classnames";
import menuData from "@/data/header/navigation.json";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { convertToSlug } from "@/common/utils"

export default function Navigator({ disableSubmenu, className }) {
  const pathname = usePathname();

  function renderMenu() {
    return menuData.map((item, index) => {
      if (item.title === "Home") {
        return (
          <li className={`relative ${pathname.includes('/home/') || pathname === '/' ? 'active' : ''}`} key={index}>
            <Link href={process.env.PUBLIC_URL + item.to}>
              <span>
                {item.title}
              </span>
            </Link>
            <ul className="dropdown-menu">
              {item.subMenu?.map((i, index) => (
                <li key={index} className={`${pathname === i.to ? 'active' : ''}`}>
                  <Link href={i.to}>
                    <span>{i.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        );
      }
      if (item.title === "Solutions") {
        return (
          <li key={index} className={`${pathname.includes('/services/') ? 'active' : ''}`}>
            <Link href={process.env.PUBLIC_URL + item.to}>
              <span>
                {item.title}
              </span>
            </Link>
            <div className="dropdown-menu -wide flex">
              <div className="left w-3/4 pr-[15px]">
                <div className="service-cate heading6">IT Solutions</div>
                <ul className="grid grid-cols-3 gap-5 gap-y-2.5 mt-2">
                  {item.subMenu.slice(0, 6).map((i, index) => (
                    <li key={index} className={`${pathname === i.to ? 'active' : ''}`}>
                      <Link
                        className={`flex items-center gap-2`}
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={process.env.PUBLIC_URL + "/services/" + convertToSlug(i.title)}
                      >
                        <span className={`${i.icon} text-blue text-2xl flex-shrink-0`}></span>
                        <span>{i.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="service-cate heading6 mt-5">Digital Agency</div>
                <ul className="grid grid-cols-3 gap-5 gap-y-2.5 mt-2">
                  {item.subMenu.slice(6, 12).map((i, index) => (
                    <li key={index} className={`${pathname === i.to ? 'active' : ''}`}>
                      <Link
                        className={`flex items-center gap-2`}
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={process.env.PUBLIC_URL + "/services/" + convertToSlug(i.title)}
                      >
                        <span className={`${i.icon} text-blue text-2xl flex-shrink-0`}></span>
                        <span>{i.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="right w-1/4 pl-[15px]">
                <div className="content bg-linear rounded-lg p-6">
                  <div className="heading6">Explore All Services</div>
                  <div className="caption1 text-surface1 mt-1">Unlocking the Full Spectrum of IT Solutions and Business Consulting for your needs</div>
                  <Link className="button-main text-button-sm mt-3" href="/services/service-detail">Explore Now</Link>
                  <div className="more-infor mt-8">
                    <div className="mail flex items-center">
                      <Icon.Envelope className="text-lg" />
                      <div className="caption1 pl-2">hi.avitex@gmail.com</div>
                    </div>
                    <div className="call flex items-center mt-3">
                      <span className="w-6 h-6 bg-blue flex items-center justify-center rounded-full flex-shrink-0">
                        <Icon.Phone weight="fill" className="text-sm text-white" />
                      </span>
                      <div className="text-title pl-2">123 456 7890</div>
                    </div>
                    <div className="list-social flex items-center gap-2.5 mt-4">
                      <Link className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300" href="https://www.facebook.com/" target="_blank">
                        <span className="icon-facebook text-base"></span>
                      </Link>
                      <Link className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300" href="https://www.linkedin.com/" target="_blank">
                        <span className="icon-linkedin text-base"></span>
                      </Link>
                      <Link className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300" href="https://www.twitter.com/" target="_blank">
                        <span className="icon-twitter text-base"></span>
                      </Link>
                      <Link className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300" href="https://www.youtube.com/" target="_blank">
                        <span className="icon-youtube text-base"></span>
                      </Link>
                      <Link className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300" href="https://www.instagram.com/" target="_blank">
                        <span className="icon-instagram text-sm"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      }
      if (item.title === "Pages") {
        return (
          <li className={`relative ${pathname.includes('/pages/') ? 'active' : ''}`} key={index}>
            <Link href={process.env.PUBLIC_URL + item.to}>
              <span>
                {item.title}
              </span>
            </Link>
            <ul className="dropdown-menu style-pages grid grid-cols-2 gap-5">
              {item.subMenu?.map((i, index) => (
                <li key={index} className={`${pathname.includes(i.to) ? 'active' : ''}`}>
                  <Link href={i.to}>
                    <span>{i.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        );
      }
      return (
        <li className={`relative ${pathname.includes('/' + convertToSlug(item.title.toLowerCase()) + '/') ? 'active' : ''}`} key={index}>
          <Link href={process.env.PUBLIC_URL + item.to}>
            <span>
              {item.title}
            </span>
          </Link>
          <ul className="dropdown-menu">
            {item.subMenu?.map((i, index) => (
              <li key={index} className={`${pathname.includes(i.to) ? 'active' : ''}`}>
                <Link href={i.to}>
                  <span>{i.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    });
  }
  if (disableSubmenu) {
    return (
      <div className={`navigator -off-submenu ${classNames(className)}`}>
        <ul>
          {menuData.map((item, index) => (
            <li key={index}>
              <Link href={process.env.PUBLIC_URL + item.to}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className={`navigator ${classNames(className)}`}>
      <ul>{renderMenu()}</ul>
    </div>
  );
}
