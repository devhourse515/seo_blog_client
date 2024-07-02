'use client'

import React from "react";
import HeaderTwo from "../Header/HeaderTwo";
import FooterOne from "../Footer/FooterOne";

export default function LayoutTwo(props) {
  return (
    <>
      <HeaderTwo />
      {props.children}
      <FooterOne />
    </>
  );
}
