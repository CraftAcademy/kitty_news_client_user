import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Segment, Flag } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { getArticles } from "../modules/getArticles";
import i18n from "i18n"
import {useTranslation} from "react-i18next"



const Header = () => {
  const dispatch = useDispatch();
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
          data-cy="header-news"
          as={NavLink}
          to="/"
          onClick={() => getArticles.index(dispatch)}
        >
          News
        </Menu.Item>
        <Flag name="gb" onClick={() => {i18n.changeLanguage("en")}}/>
        <Flag name="se" onClick={() => {i18n.changeLanguage("sv")}}/>
      </Menu>
    </Segment>
  );
};

export default Header;
