'use client'

import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import SearchBox from "./SearchBox";
import CartItemsSidebar from "./CartItemsSidebar";
import MobileNavSidebar from "./MobileNavSidebar";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function MenuFunctionIcons(props) {
  const cartState = useSelector((state) => state.cartReducer);
  const hide = props.hide || "";
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  function calcalateTotal(arr) {
    let total = 0;
    arr.forEach((item) => (total += item.price * item.cartQuantity));
    return total;
  }
  return (
    <>
      <div
        className={`menu__wrapper__functions ${classNames(props.className)}`}
      >
        <div className="list__button flex items-center gap-4 pr-10">
          {!hide.includes("phone") && (
            <div className="flex items-center gap-2 bg-grey px-2.5 py-[5px] rounded-full max-xl:hidden">
              <span className="icon bg-white text-blue w-8 h-8 flex items-center justify-center rounded-full">
                <Icon.PhoneCall className="text-2xl flex-shrink-0" />
              </span>
              <span className="text-button text-blue whitespace-nowrap flex-shrink-0">1-333-345-6868</span>
            </div>
          )}
          <Link href={'/pages/contact-us'} className="button-main text-button-sm max-sm:hidden">Contact</Link>
        </div>
        <div className="list__icons flex items-center">
          {!hide.includes("search") && (
            <button
              className="menu-icon -search flex-shrink-0"
              onClick={(e) => {
                e.preventDefault();
                setShowSearch(true);
              }}
              style={{ marginRight: hide.includes("cart") && 0 }}
            >
              <Icon.MagnifyingGlass className="text-2xl" />
            </button>
          )}
          {!hide.includes("cart") && (
            <>
              <button
                className="menu-icon -cart flex-shrink-0"
                onClick={(e) => {
                  e.preventDefault();
                  setShowCart(!showCart);
                }}
              >
                <Icon.Handbag className="text-2xl" />
                <span className="cart__quantity">{cartState.length}</span>
              </button>
              <button
                className="menu-icon -navbar flex-shrink-0"
                onClick={(e) => {
                  e.preventDefault();
                  setShowMobileNav(!showMobileNav);
                }}
              >
                <Icon.List className="text-3xl" />
              </button>
            </>
          )}
          {!hide.includes("button") && (
            <Link href={'/pages/contact-us'} className="button-main max-sm:hidden ml-4">Get A quote</Link>
          )}
        </div>
      </div>
      {/* Search input */}
      <SearchBox showSearch={showSearch} setShowSearch={setShowSearch} />
      {/* Cart sidebar */}
      <CartItemsSidebar showCart={showCart} setShowCart={setShowCart} />
      {/* Mobile navigation sidebar */}
      <MobileNavSidebar
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
    </>
  );
}
