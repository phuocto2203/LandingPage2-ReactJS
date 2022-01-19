import styled from "styled-components";
import { Container } from "../../globalStyle";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #fff;
  color: black;
`;
export const NavBarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  ${Container}
  max-width: 100%;
`;

export const NavLogo = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
`;

export const NavImg = styled.img`
  width: 240px;
  height: 40px;
`;

export const NavButton = styled.button`
  display: inline-block;
  width: 136px;
  height: 40px;
  border-radius: 15px;
  border: 1px solid #fb94d9;
  color: #eba3cb;
  text-align: center;
  background: #fff;
  cursor: pointer;
  transform: translateY(-5px);
`;


