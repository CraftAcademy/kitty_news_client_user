import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../modules/getArticles";
import { Container } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

const DisplayArticle = () => {
  const dispatch = useDispatch();
  const { specificArticle, errorMessage } = useSelector(state => state)
  const { id } = useParams();

  useEffect(() => {
    getArticles.show(id, dispatch);
  }, [id]);

  return (
    <>
      {specificArticle && (
        <Container data-cy="article-display">
          <h2 data-cy="title">{specificArticle.title}</h2>
          <h3 data-cy="lead">{specificArticle.lead}</h3>
          <p data-cy="body">{specificArticle.body}</p>
        </Container>
      )}
      {errorMessage && (
        <Container data-cy="error-article">
          <h1>{errorMessage}</h1>
        </Container>
      )}
    </>
  );
};

export default DisplayArticle;
