import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Segment, Flag, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { getArticles } from "../modules/getArticles";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const Header = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
          data-cy="header-news"
          as={NavLink}
          to="/"
          onClick={() => getArticles.index(dispatch)}
        >
          {t("home_link")}
        </Menu.Item>
        <Flag
          name="gb"
          data-cy="english-icon"
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        />
        <Flag
          name="se"
          data-cy="swedish-icon"
          onClick={() => {
            i18n.changeLanguage("sv");
          }}
        />
        <Icon
          name="paw"
          data-cy="cat-icon"
          onClick={() => {
            i18n.changeLanguage("cat");
          }}
        />
      </Menu>
    </Segment>
  );
};

export default Header;
