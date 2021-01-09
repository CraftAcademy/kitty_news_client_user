import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { getArticles } from "../modules/getArticles";
import { useTranslation } from "react-i18next";

const CategoryMenu = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <Menu>
      <Menu.Item
        name="global_politics"
        data-cy="category-global-politics"
        onClick={() => getArticles.index_by_category(1, dispatch)}
        as={Link}
        to="/"
      >
        {t("global_politics")}
      </Menu.Item>
      <Menu.Item
        name="sports"
        data-cy="category-sports"
        onClick={() => getArticles.index_by_category(2, dispatch)}
        as={Link}
        to="/"
      >
        {t("sports")}
      </Menu.Item>
      <Menu.Item
        name="self_care"
        data-cy="category-self-care"
        onClick={() => getArticles.index_by_category(3, dispatch)}
        as={Link}
        to="/"
      >
        {t("self_care")}
      </Menu.Item>
      <Menu.Item
        name="news"
        data-cy="category-news"
        onClick={() => getArticles.index_by_category(4, dispatch)}
        as={Link}
        to="/"
      >
        {t("news")}
      </Menu.Item>
      <Menu.Item
        name="culture"
        data-cy="category-culture"
        onClick={() => getArticles.index_by_category(5, dispatch)}
        as={Link}
        to="/"
      >
        {t("culture")}
      </Menu.Item>
    </Menu>
  );
};

export default CategoryMenu;
