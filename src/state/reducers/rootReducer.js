import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEWS_FEED":
      return {
        ...state,
        newsFeed: action.payload,
      };

    case "VIEW_ARTICLE":
      return {
        ...state,
        specificArticle: action.payload,
      };

    case "ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
