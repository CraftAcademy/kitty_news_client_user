import axios from "axios";

const getArticles = {
	async index() {
		let response = await axios.get("/articles");
		return response.data.articles;
	},

	async show(articleId) {
		let response = await axios.get(`/articles/${articleId}`);
		return response.data.article;
	},
};

export default getArticles;
