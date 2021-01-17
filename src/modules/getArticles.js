import axios from 'axios'

const getArticles = {
  async index(dispatch) {
    debugger
    try {
      const result = await axios.get('/articles')
      dispatch({
        type: 'SET_NEWS_FEED',
        payload: result.data.articles,
      })
    } catch (error) {
      dispatch({
        type: 'ERROR_MESSAGE',
        payload: 'MEOW, something went wrong!',
      })
    }
  },

  async show(articleId, dispatch, currentUser) {
    let headers = JSON.parse(
      localStorage.getItem('J-tockAuth-Storage')
    )
    if (currentUser) {
      if (currentUser.data.role === 'registered_user') {
        dispatch({ type: 'OPEN_PAYMENT_FORM' })
      } else {
        try {
          const response = await axios.get(`/articles/${articleId}`, {
            headers: headers,
          })
          dispatch({
            type: 'VIEW_ARTICLE',
            payload: response.data.article,
          })
        } catch (error) {
          dispatch({
            type: 'ERROR_MESSAGE',
            payload: error.response.data.message,
          })
        }
      }
    } else {
      dispatch({ type: 'OPEN_REGISTRATION_FORM' })
    }
  },

  async index_by_category(categoryId, dispatch) {
    try {
      const result = await axios.get(`/categories/${categoryId}`)
      dispatch({
        type: 'SET_NEWS_FEED',
        payload: result.data.category.articles,
      })
    } catch (error) {
      dispatch({
        type: 'ERROR_MESSAGE',
        payload: 'MEOW, something went wrong!',
      })
    }
  },
}

export { getArticles }
