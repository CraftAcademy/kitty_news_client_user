import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

const Header = () => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item data-cy="header-news" as={Link} to="/">
          News
        </Menu.Item>
      </Menu>
    </Segment>
  );
};

export default Header;
