import React from "react";
import MenuTwo from "./Menu/MenuTwo";
import TopNavTwo from "./TopNav/TopNavTwo";

export default function HeaderTwo(props) {
  return (
    <>
      <TopNavTwo {...props} />
      <MenuTwo classname='-style-2' />
    </>
  );
}
