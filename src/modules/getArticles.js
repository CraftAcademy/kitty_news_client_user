import axios from "axios";

const getArticles = async () => {
  const response = await axios.get("/articles", {});
  return response.data.articles;
};

export { getArticles };