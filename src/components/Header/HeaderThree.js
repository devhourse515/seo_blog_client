import React from "react";
import MenuThree from "./Menu/MenuThree";
import TopNavThree from "./TopNav/TopNavThree";

export default function HeaderThree(props) {
  return (
    <>
      <TopNavThree {...props} />
      <MenuThree {...props} />
    </>
  );
}
