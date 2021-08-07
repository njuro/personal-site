import React from "react";
import "./App.css";
import { Button, Container, Header, Menu, Segment } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Segment inverted vertical textAlign="center">
        <Container as="nav">
          <Header inverted as="h1">
            Cover
          </Header>
          <Menu borderless compact inverted>
            <Menu.Item active link>
              Home
            </Menu.Item>
            <Menu.Item link>Feature</Menu.Item>
            <Menu.Item link>Contact</Menu.Item>
          </Menu>
        </Container>
        <Container className="content">
          <Header inverted as="h1">
            Cover your page.
          </Header>
          <p>
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
          <Button size="huge">Learn more</Button>
        </Container>
        <Segment inverted vertical as="footer">
          Cover template for <a href="https://semantic-ui.com">Semantic-UI</a>,
          by{" "}
          <a href="https://github.com/semantic-ui-forest">
            @Semantic-UI-Forest
          </a>
          .
        </Segment>
      </Segment>
    </div>
  );
}

export default App;
