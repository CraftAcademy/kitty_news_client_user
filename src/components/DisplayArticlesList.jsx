import React, { useState, useEffect } from "react";
import getArticles from "../modules/getArticles";
import ArticleCard from "./ArticleCard";
import { Card } from "semantic-ui-react";

const DisplayArticlesList = () => {
  const [articleData, setArticleData] = useState([]);
  const getArticleData = async () => {
    let response = await getArticles.index();
    setArticleData(response);
  };

  useEffect(() => {
    getArticleData();
  }, []);

  let articleIndex;
  articleIndex = (
    <Card.Group itemsPerRow={5}>
      {articleData.map((article) => {
        return <ArticleCard article={{ ...article }} />;
      })}
    </Card.Group>
  );

  return (
    <>
      {articleData.length ? (
        <ul data-cy="article-index">{articleIndex}</ul>
      ) : (
        <h1 data-cy="empty-index">Sorry, there's nothing to see here yet!</h1>
      )}
    </>
  );
};

export default DisplayArticlesList;
