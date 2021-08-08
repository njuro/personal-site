import React, { useContext } from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
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
export default MenuItem;
