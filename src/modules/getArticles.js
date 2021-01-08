import axios from "axios";

const getArticles = {
  async index(dispatch) {
    const result = await axios.get("/articles");
    dispatch({ type: "SET_NEWS_FEED", payload: result.data.articles });
  },

  async show(articleId, dispatch) {
    try {
      const response = await axios.get(`/articles/${articleId}`);
      dispatch({ type: "VIEW_ARTICLE", payload: response.data.article });
    } catch (error) {
      dispatch({ type: "ERROR_MESSAGE", payload: error.response.data.message });
    }
  },

  async index_by_category(categoryId, dispatch) {
    debugger
    const result = await axios.get(`/categories/${categoryId}`);
    dispatch({ type: "SET_NEWS_FEED", payload: result.data.category.articles });
  },
};

export { getArticles };
