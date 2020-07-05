import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import styled from "styled-components";
import theme from "../styles/theme";
import media from "../styles/media";
import { generateSpace } from "../styles/shared-styles";

export const Section = styled.section`
  height: 100vh;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <Section>
      <NavBar />
      <Hero />
    </Section>
  );
};

export default Home;
