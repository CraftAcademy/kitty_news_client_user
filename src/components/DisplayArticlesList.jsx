import React, { useState, useEffect } from "react";
import { getArticles } from '../modules/getArticles'
import { Item } from 'semantic-ui-react'

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
        <Item.Group>
          <Item key={article.id}>
            <Item.Content>
              <Item.Header >
                {article.title}
              </Item.Header>
              <Item.Meta>
                {article.lead}
              </Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
      </>
    );
  });
  return (
    <>
    {articleData.length ?
      <ul data-cy="article-index">{articleIndex}</ul>
      :
      <h1 data-cy="empty-index">
        Sorry, there's nothing to see here yet!
      </h1>
    }
    </>
  );
};

export default DisplayArticlesList;
