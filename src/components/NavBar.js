import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const StyledNav = styled.nav`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font: ${theme.fonts.Merriweather};
`;

const RightSide = styled.div``;
const LeftSide = styled.div``;
const RightSideItem = styled.a`
  text-decoration: note;
`;

const NavBar = () => {
  return (
    <StyledNav>
      <RightSide>
        <RightSideItem></RightSideItem>
        <RightSideItem></RightSideItem>
        <RightSideItem></RightSideItem>
      </RightSide>
      <LeftSide></LeftSide>
    </StyledNav>
  );
};

export default NavBar;
