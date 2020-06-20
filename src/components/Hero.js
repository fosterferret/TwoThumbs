import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import rdr from "../assets/images/rdr.png";

const StyledImage = styled.div`
width: 100%;
display: flex;
justify-content: center;
img {
  width: 20%;
  height: auto;
  align-item:center;
}
`;

const Hero = () => {
  return (
    <StyledImage>
      <img src={rdr} alt="rdr" />
    </StyledImage>
  );
};

export default Hero;
