import React from "react";
import Link from "next/link";

import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";

export default function MenuSix({ classname }) {
  return (
    <header className={`menu ${classname}`}>
      <div className="xl:px-20 px-4">
        <div className="menu__wrapper">
          <h1>
            <Link href="/" className="menu__wrapper__logo block">
              <img src="/images/logo.svg" alt="Logo" />
            </Link>
          </h1>
          <Navigator />
          <MenuFunctionIcons hide="phone" />
        </div>
      </div>
    </header>
  );
}
