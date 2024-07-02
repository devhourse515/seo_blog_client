'use client'

import FooterOne from "../Footer/FooterOne";
import MenuFour from "../Header/Menu/MenuFour";


export default function LayoutFour(props) {
  return (
    <>
      <MenuFour classname='-style-2 -style-4' />
      {props.children}
      <FooterOne classname={'style-three style-four'} />
    </>
  );
}
