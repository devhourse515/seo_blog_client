'use client'

import FooterOne from "../Footer/FooterOne";
import HeaderSix from "../Header/HeaderSix";

export default function LayoutSix(props) {
  return (
    <>
      <HeaderSix classname={'-style-2 -style-6'} {...props} />
      {props.children}
      <FooterOne classname={'style-three style-four'} />
    </>
  );
}
