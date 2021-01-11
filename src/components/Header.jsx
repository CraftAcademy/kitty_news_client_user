import React from "react";
import { Menu, Segment, Flag, Icon } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  return (
    <Segment
      attached="top"
      style={{
        width: "100%",
        height: "80px",
        backgroundImage: `url("images/KittyNews5.5.5.png")`,
        backgroundRepeat: "no-repeat",
      }}>
      <Menu inverted secondary floated="right">
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
          color="yellow"
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
