import React, { useState } from 'react'
import { Menu } from "semantic-ui-react";

const CategoryMenu = () => {
  const [activeItem, setActiveItem] = useState()
  const handleItemClick = (e) => setActiveItem(e.target.name)

  return (
    <Menu>
      <Menu.Item
        name='global_politics'
        data-cy='category-global-politics'
        active={activeItem === 'global_politics'}
        onClick={handleItemClick}
      >Global Politics
      </Menu.Item>
      <Menu.Item
        name='sports'
        data-cy='category-sports'
        active={activeItem === 'sports'}
        onClick={handleItemClick}
      >Sports
      </Menu.Item>
      <Menu.Item
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
      </Menu.Item>
    </Menu>
  )
}

export default CategoryMenu
