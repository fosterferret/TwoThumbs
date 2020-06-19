import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const Container = styled.div`
  width: 100%;
  background-color: ${theme.colors.yellow};
  margin-top: 0rem;
  padding: 2rem;
`;

const StyledNav = styled.nav`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font: ${theme.fonts.Merriweather};
  margin: 0 auto;
`;

const NavRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;
const NavLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
`;
const NavRightItem = styled.a`
  text-decoration: none;
  &:hover {
      color: ${theme.colors.red};
      cursor: default;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <StyledNav>
        <NavLeft>
          <a>Buttonmash</a>
        </NavLeft>
        <NavRight>
          <NavRightItem>Sign In</NavRightItem>
          <NavRightItem>Register</NavRightItem>
          <NavRightItem>Games</NavRightItem>
        </NavRight>
      </StyledNav>
    </Container>
  );
};

export default NavBar;
