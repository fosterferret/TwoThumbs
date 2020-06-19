import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const RightSide = styled.div``;
const LeftSide = styled.div``;

const NavBar = () => {
  return (
    <StyledNav>
      <RightSide>

      </RightSide>
      <LeftSide>
          
      </LeftSide>
    </StyledNav>
  );
};

export default NavBar;
