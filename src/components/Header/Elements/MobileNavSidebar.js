import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import ClientOnlyPortal from "../../../common/ClientOnlyPortal";
import NavigatorMobile from "./NavigatorMobile";
import SocialIcons from "../../Other/SocialIcons";
import Select from "../../Control/Select";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function MobileNavSidebar({ showMobileNav, setShowMobileNav }) {
  const [searchInput, setSearchInput] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("ENG");
  return (
    <>
      <ClientOnlyPortal selector="#nav-sidebar">
        <CSSTransition
          in={showMobileNav}
          unmountOnExit
          timeout={200}
          classNames="cart-sidebar"
        >
          <div className="navigation-sidebar">
            <div className="search-box">
              <form>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button>
                  <Icon.MagnifyingGlass className="text-lg" />
                </button>
              </form>
            </div>
            <NavigatorMobile />
            <div className="navigation-sidebar__footer">
              <a className="navigation-sidebar__footer__auth">Login/Register</a>
            </div>
          </div>
        </CSSTransition>
      </ClientOnlyPortal>
      {showMobileNav && (
        <ClientOnlyPortal selector="#overlay">
          <div
            className="overlay"
            onClick={() => setShowMobileNav(false)}
          ></div>
        </ClientOnlyPortal>
      )}
    </>
  );
}
