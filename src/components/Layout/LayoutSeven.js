'use client'

import FooterOne from "../Footer/FooterOne";
import HeaderSeven from "../Header/HeaderSeven";

export default function LayoutSeven(props) {
  return (
    <>
      <HeaderSeven classname={'-style-2 -style-7'} {...props} />
      {props.children}
      <FooterOne classname={'style-three style-four'} />
    </>
  );
}
