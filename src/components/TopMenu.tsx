import React, { useContext } from "react";
import { Header, Menu, MenuItemProps, Segment } from "semantic-ui-react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { ABOUT_URL, CONTACT_URL, HOME_URL, PROJECTS_URL } from "../mappings";
import { NavigationContext } from "./App";

function MenuItem({ path, children, ...rest }: MenuItemProps) {
  const history = useHistory();
  const { activePath } = useContext(NavigationContext);

  return (
    <Menu.Item
      name={path}
      active={activePath === path}
      onClick={() => path && history.push(path)}
      onAuxClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
        if (path && event.button === 1) {
          window.open(path, "_blank");
        }
      }}
      {...rest}
    >
      {children}
    </Menu.Item>
  );
}

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
        <Link to={HOME_URL} className="header-link">
          <Header as="h1">
            Juraj Noge
            <Header.Subheader>Software Engineer</Header.Subheader>
          </Header>
        </Link>
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
