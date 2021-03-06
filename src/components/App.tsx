import React, { createContext, useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components/macro";
import styled from "styled-components";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router } from "react-router-dom";
import TopMenu from "./TopMenu";
import { GlobalStyle, theme } from "../theme";
import Footer from "./Footer";
import NavigationSwitch from "./NavigationSwitch";
import ScrollToTop from "./ScrollToTop";

interface NavigationContextProps {
  activePath?: string;
  setActivePath: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export const NavigationContext = createContext<NavigationContextProps>(
  {} as NavigationContextProps
);
const Wrapper = styled.div`
  margin: 5%;

  @media only screen and (min-width: 1000px) {
    width: 50% !important;
    margin: auto !important;
  }
`;
function App() {
  const [activePath, setActivePath] = useState<string>();

  return (
    <Wrapper>
      <Helmet titleTemplate="%s - Juraj Noge" defaultTitle="Juraj Noge" />
      <NavigationContext.Provider value={{ activePath, setActivePath }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <nav>
              <TopMenu />
            </nav>
            <main>
              <ScrollToTop />
              <Container
                text
                style={{
                  display: "block",
                  padding: "30px 5px 30px",
                  minWidth: "80%",
                }}
              >
                <NavigationSwitch />
              </Container>
            </main>
            <footer>
              <Footer />
            </footer>
          </Router>
        </ThemeProvider>
      </NavigationContext.Provider>
    </Wrapper>
  );
}

export default App;
