import React from "react";
import { Header, Menu, Segment } from "semantic-ui-react";
import styled from "styled-components";

const MenuContainer = styled(Menu)`
  @media only screen and (min-width: 768px) {
    float: right !important;
  }

  & > .item {
    margin-left: 16px !important;
    margin-right: 16px !important;
  }
`;
function TopMenu() {
  return (
    <Segment vertical style={{ marginTop: "20px", marginBottom: "20px" }}>
      <header style={{ display: "inline-block", paddingTop: "14px" }}>
        <Header as="h1">
          Juraj Noge
          <Header.Subheader inverted>Software Engineer</Header.Subheader>
        </Header>
      </header>
      <MenuContainer pointing secondary stackable>
        <Menu.Item active link>
          Home
        </Menu.Item>
        <Menu.Item link>About</Menu.Item>
        <Menu.Item link>Projects</Menu.Item>
        <Menu.Item link>Contact</Menu.Item>
      </MenuContainer>
    </Segment>
  );
}

export default TopMenu;
