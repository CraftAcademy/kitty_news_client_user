import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Menu } from "semantic-ui-react";
import { getArticles } from "../modules/getArticles";

const CategoryMenu = () => {
  const [activeItem, setActiveItem] = useState()
  const dispatch = useDispatch();
  // const { id } = useParams();

  // useEffect(() => {
  //   getArticles.index_by_category(id, dispatch);
  // }, [id, dispatch]);

  // const categoryIndex = (e) => {
  //   handleItemClick = (e) => setActiveItem(e.target.name)
  //   const 
  // }

  return (
    <Menu>
      <Menu.Item
        name='global_politics'
        data-cy='category-global-politics'
        active={activeItem === 'global_politics'}
        onClick={() => getArticles.index_by_category(0, dispatch)}
      >Global Politics
      </Menu.Item>
      <Menu.Item
        name='sports'
        data-cy='category-sports'
        active={activeItem === 'sports'}
        onClick={() => getArticles.index_by_category(1, dispatch)}
      >Sports
      </Menu.Item>
      {/* <Menu.Item
        name='self_care'
        data-cy='category-self-care'
        active={activeItem === 'self_care'}
        onClick={handleItemClick}
      >Self Care
      </Menu.Item>
      <Menu.Item
        name='news'
        data-cy='category-news'
        active={activeItem === 'news'}
        onClick={handleItemClick}
      >News
      </Menu.Item>
      <Menu.Item
        name='culture'
        data-cy='category-culture'
        active={activeItem === 'culture'}
        onClick={handleItemClick}
      >Culture
      </Menu.Item> */}
    </Menu>
  )
}

export default CategoryMenu
