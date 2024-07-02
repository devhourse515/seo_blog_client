import Link from "next/link";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import * as Icon from "@phosphor-icons/react/dist/ssr";

import menuData from "../../../data/header/navigation.json";

export default function Navigator() {
  const [dropdownItem, setDropdownItem] = useState();
  function renderMenu() {
    return menuData.map((item, index) => {
      if (item.title === "Shop") {
        return (
          <li key={index}>
            <Link href="#">
              <span
                onClick={() => {
                  if (dropdownItem === "shop") {
                    setDropdownItem("");
                    return;
                  }
                  setDropdownItem("shop");
                }}
              >
                {item.title}
                <span className="dropable-icon">
                  <i
                    className={`fas ${dropdownItem === "shop" ? "fa-angle-up" : "fa-angle-down"
                      }`}
                  ></i>
                </span>
              </span>
            </Link>
            <CSSTransition
              in={dropdownItem === "shop"}
              unmountOnExit
              timeout={200}
              classNames="dropdown-menu-mobile"
            >
              <ul className="dropdown-menu">
                <ul className="dropdown-menu__col">
                  {item.subMenu.slice(0, 4).map((i, index) => (
                    <li key={index}>
                      <Link href={`${process.env.PUBLIC_URL}${i.to}`}>
                        <span>{i.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="dropdown-menu__col">
                  {item.subMenu.slice(4, 8).map((i, index) => (
                    <li key={index}>
                      <Link href={`${process.env.PUBLIC_URL}${i.to}`}>
                        <span>{i.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="dropdown-menu__col">
                  {item.subMenu.slice(8).map((i, index) => (
                    <li key={index}>
                      <Link href={`${process.env.PUBLIC_URL}${i.to}`}>
                        <span>{i.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="dropdown-menu__col -banner">
                  <Link href="/shop/fullwidth-4col">
                    <span>
                      <img
                        src="/images/header/dropdown-menu-banner.png"
                        alt="New product banner"
                      />
                    </span>
                  </Link>
                </ul>
              </ul>
            </CSSTransition>
          </li>
        );
      }
      return (
        <li className="relative" key={index}>
          <Link href="#">
            <span
              onClick={() => {
                if (dropdownItem === item) {
                  setDropdownItem("");
                  return;
                }
                setDropdownItem(item);
              }}
            >
              {item.title}
              <span className="dropable-icon">
                {dropdownItem === item ? <Icon.CaretUp /> : <Icon.CaretDown />}
              </span>
            </span>
          </Link>
          <CSSTransition
            in={dropdownItem === item}
            unmountOnExit
            timeout={200}
            classNames="dropdown-menu-mobile"
          >
            <ul className="dropdown-menu">
              {item.subMenu.map((i, index) => (
                <li key={index}>
                  <Link href={`${process.env.PUBLIC_URL}${i.to}`}>
                    <span>{i.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </CSSTransition>
        </li>
      );
      // return (
      //   <li key={index}>
      //     <Link href={item.to}>
      //       <span>{item.title}</span>
      //     </Link>
      //   </li>
      // );
    });
  }
  return (
    <div className="navigator-mobile">
      <ul>{renderMenu()}</ul>
    </div>
  );
}
