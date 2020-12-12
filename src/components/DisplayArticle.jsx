import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getArticles from "../modules/getArticles";

const DisplayArticle = () => {
	const [article, setArticle] = useState([]);
  const { id } = useParams();
	useEffect(() => {
		const getArticle = async () => {
			const response = await getArticles.show(id);
			setArticle(response);
		};
		getArticle();
	}, [id]);

	return (
		<>
			<div data-cy="article-display">
				<h2 data-cy="title">{article.title}</h2>
				<h3 data-cy="lead">{article.lead}</h3>
				<p data-cy="body">{article.body}</p>
			</div>
		</>
	);
};

export default DisplayArticle;
