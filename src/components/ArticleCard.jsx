import React from "react";
import { Item } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Item
      data-cy={`article-${article.id}`}
      key={article.id}
      as={NavLink}
      to={`/articles/${article.id}`}
    >
          
      <Item.Image
        size="small"
        wrapped
        ui={false}
        src="https://www.veterinarypracticenews.com/wp-content/uploads/2019/08/bigstock-Little-Striped-Cute-Kitten-Sit-244080397-300x200.jpg"
        />

      <Item.Content>
        <Item.Description>{article.title}</Item.Description>
        <Item.Meta>{article.lead}</Item.Meta>
      </Item.Content>
    </Item>
  );
};

export default ArticleCard;
