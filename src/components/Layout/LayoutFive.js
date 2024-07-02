'use client'

import FooterOne from "../Footer/FooterOne";
import MenuFive from "../Header/Menu/MenuFive";


export default function LayoutFour(props) {
  return (
    <>
      {/* <ScrollFixedHeader container={props.container} /> */}
      <MenuFive classname='-style-2 -style-5' />
      {props.children}
      <FooterOne classname={'style-three style-four'} />
    </>
  );
}
