import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import rdr from "../assets/images/rdr.png";

const Description = styled.div`
  display: flex;
  flex-direction: column;
`; 

const StyledImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
  margin-top: 5rem;
  img {
    width: 480px;
    height: auto;
    align-item: center;
  }
`;

const Hero = () => {
  return (
    <>
    <StyledImage>
      <img src={rdr} alt="rdr" />
    </StyledImage>
    <Description>
      <p>Log games you've played.</p>
      <p>Log games you've played.</p>
    </Description>
    </>
  );
};

export default Hero;
