import React from "react";
import Link from "next/link";

import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";

export default function MenuFive({ classname }) {
  return (
    <header className={`menu ${classname} border-b border-line`}>
      <div className="xl:px-20 px-4">
        <div className="menu__wrapper">
          <h1>
            <Link href="/" className="menu__wrapper__logo block">
              <img src="/images/logo-white.svg" alt="Logo" />
            </Link>
          </h1>
          <Navigator className={'style-two'} />
          <MenuFunctionIcons />
        </div>
      </div>
    </header>
  );
}
