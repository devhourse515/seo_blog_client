import React from "react";
import Link from "next/link";

import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";
import { renderContainer } from "../../../common/utils";

export default function MenuOne({ container }) {
  return (
    <header className="menu -style-1 bg-white border-b border-outline">
      <div className={renderContainer(container)}>
        <div className="menu__wrapper">
          <h1>
            <Link href="/" className="menu__wrapper__logo block">
              <img src="/images/logo.svg" alt="Logo" />
            </Link>
          </h1>
          <Navigator />
          <MenuFunctionIcons hide="button" />
        </div>
      </div>
    </header>
  );
}
