import React from "react";
import { Header, Menu, Segment } from "semantic-ui-react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { ABOUT_URL, CONTACT_URL, HOME_URL, PROJECTS_URL } from "../mappings";

const MenuContainer = styled(Menu)`
  @media only screen and (min-width: 1000px) {
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
        <MenuItem path={HOME_URL} link>
          Home
        </MenuItem>
        <MenuItem path={ABOUT_URL} link>
          About
        </MenuItem>
        <MenuItem path={PROJECTS_URL} link>
          Projects
        </MenuItem>
        <MenuItem path={CONTACT_URL} link>
          Contact
        </MenuItem>
      </MenuContainer>
    </Segment>
  );
}

export default TopMenu;
