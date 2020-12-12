import React, { useState, useEffect } from "react";
import { getArticles } from '../modules/getArticles'
import ArticleCard from './ArticleCard'
import { Card } from 'semantic-ui-react'

const DisplayArticlesList = () => {
  const [articleData, setArticleData] = useState([]);
  const getArticleData = async () => {
    let response = await getArticles();
    setArticleData(response);
  };

  useEffect(() => {
    getArticleData();
  }, [])

  let articleIndex        
  articleIndex = (
    <Card.Group data-cy="article-index" itemsPerRow={5}>
      {articleData.map((article) => {
        return <ArticleCard article={{ ...article }} />;
      })}
    </Card.Group>
  );




    // return (
    //   <>
    //     <ArticleCard article={{ ...article, id: index }} />;

        {/* <Item.Group>
          <Item key={article.id} data-cy={`article-${article.id}`}>
            <Item.Content>
              <Item.Header 
              data-cy="article-title"
              as={NavLink} to={{ pathname: `/articles/${article.id}` }}
              >
                {article.title}
              </Item.Header>
              <Item.Meta>
                {article.lead}
              </Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group> */}
      // </>
  //   );
  // });
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
