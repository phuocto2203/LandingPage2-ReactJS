import React from "react";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavImg,
  NavButton,
} from "./NavBar.elements";
import logo from "../../images/logo.svg";
const NavBar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            <NavImg src={logo} />
          </NavLogo>
          <NavButton>Try It Free</NavButton>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
