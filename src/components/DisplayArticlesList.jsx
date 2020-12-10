import React, { useState, useEffect } from "react";
import { getArticles } from '../modules/getArticles'

const DisplayArticlesList = () => {
  const [articleData, setArticleData] = useState([]);
  const getArticleData = async () => {
    let response = await getArticles();
    setArticleData(response);
  };
  
  useEffect(() => {
    getArticleData();
  }, [])

  let articleIndex = articleData.map((article) => {
    return (
      <>
        <li key={article.id}>
          {article.title}
          {article.lead}
        </li>
      </>
    );
  });
  return (
    <>
      <ul data-cy="article-index">{articleIndex}</ul>
    </>
  );
};

export default DisplayArticlesList;
