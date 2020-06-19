import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
    </ThemeProvider>
  );
};

export default App;
