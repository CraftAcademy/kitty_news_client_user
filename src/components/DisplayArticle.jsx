import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../modules/getArticles";
import { Container } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

const DisplayArticle = () => {
  const dispatch = useDispatch();
  const viewArticle = useSelector(state => state.specificArticle);
  const errorMessage = useSelector(state => state.errorMessage);
  const { id } = useParams();

  useEffect(() => {
    getArticles.show(id, dispatch);
  }, [id]);

  return (
    <>
      {viewArticle && (
        <Container data-cy="article-display">
          <h2 data-cy="title">{viewArticle.title}</h2>
          <h3 data-cy="lead">{viewArticle.lead}</h3>
          <p data-cy="body">{viewArticle.body}</p>
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
