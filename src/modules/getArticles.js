import axios from "axios";
import Registration from "../components/RegistrationForm"

const getArticles = {
  async index(dispatch) {
    try {
      const result = await axios.get("/articles");
      dispatch({ type: "SET_NEWS_FEED", payload: result.data.articles });
    } catch (error) {
      dispatch({
        type: "ERROR_MESSAGE",
        payload: "MEOW, something went wrong!",
      });
    }
  },

  async show(articleId, dispatch, currentUser) {
    if (currentUser) {
          try {
      const response = await axios.get(`/articles/${articleId}`);
      dispatch({ type: "VIEW_ARTICLE", payload: response.data.article });
    } catch (error) {
      dispatch({ type: "ERROR_MESSAGE", payload: error.response.data.message });
    }
    } else {
      <Registration/>
    }

  },

  async index_by_category(categoryId, dispatch) {
    try {
      const result = await axios.get(`/categories/${categoryId}`);
      dispatch({
        type: "SET_NEWS_FEED",
        payload: result.data.category.articles,
      });
    } catch (error) {
      dispatch({
        type: "ERROR_MESSAGE",
        payload: "MEOW, something went wrong!",
      });
    }
  },
};

export { getArticles };
