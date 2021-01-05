import axios from "axios";

const getArticles = {
  async index(dispatch) {
    let result = await axios.get("/articles");
    dispatch({type: "SET_NEWS_FEED", payload: result.data.articles})
  },

  async show(articleId, dispatch) {
    try {
      let response = await axios.get(`/articles/${articleId}`);
      dispatch({ type: "VIEW_ARTICLE", payload: response.data.article });
    } catch (error) {
      dispatch({ type: "ERROR_MESSAGE", payload: error.response.data.message });
    }
  },
};

export { getArticles };
