import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getArticles from "../modules/getArticles";
import { Container } from "semantic-ui-react";

const DisplayArticle = () => {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getSpecificArticle = async () => {
      const response = await getArticles.show(id);
      setArticle(response);
    };

    getSpecificArticle();
  }, [id]);

  return (
    <>
      {article.id ? (
        <Container data-cy="article-display">
          <h2 data-cy="title">{article.title}</h2>
          <h3 data-cy="lead">{article.lead}</h3>
          <p data-cy="body">{article.body}</p>
        </Container>
      ) : (
        <Container data-cy="error-article">
          <h1 >
            Something went wrong, this article was not found
          </h1>
        </Container>
      )}
    </>
  );
};

export default DisplayArticle;
