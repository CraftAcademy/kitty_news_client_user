import React from "react";
import { useDispatch } from "react-redux";
import { Menu } from "semantic-ui-react";
import { getArticles } from "../modules/getArticles";

const CategoryMenu = () => {
  const dispatch = useDispatch();

  return (
    <Menu>
      <Menu.Item
        name="global_politics"
        data-cy="category-global-politics"
        onClick={() => getArticles.index_by_category(1, dispatch)}
      >
        Global Politics
      </Menu.Item>
      <Menu.Item
        name="sports"
        data-cy="category-sports"
        onClick={() => getArticles.index_by_category(2, dispatch)}
      >
        Sports
      </Menu.Item>
      <Menu.Item
        name="self_care"
        data-cy="category-self-care"
        onClick={() => getArticles.index_by_category(3, dispatch)}
      >
        Self Care
      </Menu.Item>
      <Menu.Item 
      name="news" 
      data-cy="category-news" 
      onClick={() => getArticles.index_by_category(4, dispatch)}
      >
        News
      </Menu.Item>
      <Menu.Item
        name="culture"
        data-cy="category-culture"
        onClick={() => getArticles.index_by_category(5, dispatch)}
      >
        Culture
      </Menu.Item>
    </Menu>
  );
};

export default CategoryMenu;
