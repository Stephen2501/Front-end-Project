import axios from "axios";

export const fetchComments = (article_id) => {
  return axios
    .get(`https://steves-nc-news.herokuapp.com/api/articles/${article_id}/comments`)
    .then((response) => {
      return response.data.comments;
    });
};