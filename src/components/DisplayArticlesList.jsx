import React, { useEffect } from "react";
import { getArticles } from "../modules/getArticles";
import ArticleCard from "./ArticleCard";
import { Card, Container } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

const DisplayArticlesList = () => {
  const dispatch = useDispatch();
  const articleList = useSelector(state => state.newsFeed);

  useEffect(() => {
    getArticles.index(dispatch);
  }, []);

  let articleIndex;
  articleIndex = (
    <Card.Group itemsPerRow={5}>
      {articleList.map((article) => {
        return <ArticleCard article={{ ...article }} />;
      })}
    </Card.Group>
  );

  return (
    <>
      {articleList.length ? (
        <ul data-cy="article-index">{articleIndex}</ul>
      ) : (
        <Container data-cy="empty-index">
          <h1>Sorry, there's nothing to see here yet!</h1>
        </Container>
      )}
    </>
  );
};

export default DisplayArticlesList;
