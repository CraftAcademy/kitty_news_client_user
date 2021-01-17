import React from 'react'
import { Item } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const ArticleCard = ({ article }) => {
  return (
    <Item
      data-cy={`article-${article.id}`}
      key={article.id}
      as={NavLink}
      to={`/articles/${article.id}`}
    >
      <Item.Image size='small' wrapped ui={false} src={article.image} />
      <Item.Content>
        <Item.Header>{article.title}</Item.Header>
        <Item.Description>{article.lead}</Item.Description>
        <Item.Meta>{article.category}</Item.Meta>
        <Item.Meta>{article.created}</Item.Meta>
      </Item.Content>
    </Item>
  )
}

export default ArticleCard
