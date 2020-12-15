import axios from "axios";

const getArticles = {
  async index() {
    let result = await axios.get("/articles");
    return result.data.articles;
  },

  async show(articleId) {
    try {
      let response = await axios.get(`/articles/${articleId}`);
      return response.data.article;
    } catch (error) {
      return error.response.data.message;
    }
  },
};

export { getArticles };
