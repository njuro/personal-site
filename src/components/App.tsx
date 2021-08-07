import React from "react";
import { ThemeProvider } from "styled-components/macro";
import styled from "styled-components";
import { Container } from "semantic-ui-react";
import TopMenu from "./TopMenu";
import { GlobalStyle, theme } from "../theme";
import Home from "./Home";
import Footer from "./Footer";

const Wrapper = styled.div`
  margin: 5%;

  @media only screen and (min-width: 768px) {
    width: 50% !important;
    margin: auto !important;
  }
`;
function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <nav>
          <TopMenu />
        </nav>
        <main>
          <Container text>
            <Home />
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
