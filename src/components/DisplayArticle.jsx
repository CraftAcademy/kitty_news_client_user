import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../modules/getArticles";
import { Container } from "semantic-ui-react";

const DisplayArticle = () => {
  const [article, setArticle] = useState();
  const [message, setMessage] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getSpecificArticle = async () => {
      const response = await getArticles.show(id);
      response.id ? setArticle(response) : setMessage(response);
    };

    getSpecificArticle();
  }, [id]);

  return (
    <>
      {article && (
        <Container data-cy="article-display">
          <h2 data-cy="title">{article.title}</h2>
          <h3 data-cy="lead">{article.lead}</h3>
          <p data-cy="body">{article.body}</p>
        </Container>
      )}
      {message && (
        <Container data-cy="error-article">
          <h1>{message}</h1>
        </Container>
      )}
    </>
  );
};

export default DisplayArticle;
