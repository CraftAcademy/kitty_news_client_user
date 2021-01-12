import React, { useEffect } from "react";
import { getArticles } from "../modules/getArticles";
import ArticleCard from "./ArticleCard";
import { Item, Container } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const DisplayArticlesList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { newsFeed } = useSelector(state => state);

  useEffect(() => {
    getArticles.index(dispatch);
  }, [dispatch]);

  let articleIndex;
  articleIndex = (
    <Item.Group 
    vertical>
      {newsFeed.map((article) => {
        return <ArticleCard article={{ ...article }} />;
      })}
    </Item.Group>
  );

  return (
    <>
      {newsFeed.length ? (
        <ul data-cy="article-index">{articleIndex}</ul>
      ) : (
        <Container data-cy="empty-index">
          <h1>{t("empty_index_message")}</h1>
        </Container>
      )}
    </>
  );
};

export default DisplayArticlesList;
