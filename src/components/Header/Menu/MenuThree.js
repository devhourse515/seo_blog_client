import React from "react";
import Link from "next/link";

import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";

export default function MenuThree() {
  return (
    <header className="menu -style-2 -style-3 border-b border-line">
      <div className="container">
        <div className="menu__wrapper">
          <h1>
            <Link href="/" className="menu__wrapper__logo block">
              <img src="/images/logo-white.svg" alt="Logo" />
            </Link>
          </h1>
          <Navigator className={'style-three'} />
          <MenuFunctionIcons hide="phone" />
        </div>
      </div>
    </header>
  );
}
