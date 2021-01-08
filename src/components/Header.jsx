import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";
import { useDispatch} from "react-redux"
import {getArticles} from "../modules/getArticles"

const Header = () => {
  const dispatch = useDispatch()
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item 
        data-cy="header-news" 
        as={NavLink} 
        to="/"
        // onClick={() => getArticles.index(dispatch)}
        >
          News
        </Menu.Item>
      </Menu>
    </Segment>
  );
};

export default Header;
