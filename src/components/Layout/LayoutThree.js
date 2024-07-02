'use client'

import React from "react";
import HeaderThree from "../Header/HeaderThree";
import FooterOne from "../Footer/FooterOne";

export default function LayoutThree(props) {
  return (
    <>
      <HeaderThree />
      {props.children}
      <FooterOne classname={'style-three'} />
    </>
  );
}
