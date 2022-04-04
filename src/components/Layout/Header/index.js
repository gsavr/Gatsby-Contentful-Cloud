import React from "react";
import { HeaderInner, HeaderWrapper } from "./style";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <NavBar />
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
