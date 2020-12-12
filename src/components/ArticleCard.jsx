import React from "react";
import { Card, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Card 
    data-cy={`article-${article.id}`}
    key={article.id} 
    as={NavLink} 
    to={`/articles/${article.id}`}>
      <Image
        size="small"
        wrapped
        ui={false}
        src="https://www.veterinarypracticenews.com/wp-content/uploads/2019/08/bigstock-Little-Striped-Cute-Kitten-Sit-244080397-300x200.jpg"
      />
      <Card.Content>
        <Card.Description>{article.title}</Card.Description>
        <Card.Meta>{article.lead}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default ArticleCard;
