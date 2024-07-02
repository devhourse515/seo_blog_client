import React from "react";
import Link from "next/link";

import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";

export default function MenuSeven({ classname }) {
  return (
    <header className={`menu ${classname} border-b border-line`}>
      <div className="xl:px-20 px-4">
        <div className="menu__wrapper">
          <div className="mennu__inner flex items-center gap-[88px]">
            <h1>
              <Link href="/" className="menu__wrapper__logo block">
                <img src="/images/logo.svg" alt="Logo" className="max-lg:hidden" />
                <img src="/images/logo-white.svg" alt="Logo" className="lg:hidden" />
              </Link>
            </h1>
            <Navigator />
          </div>
          <MenuFunctionIcons hide="phone" />
        </div>
      </div>
    </header>
  );
}
