import axios from "axios";

export const fetchComments = (article_id) => {
  return axios
    .get(`https://steves-nc-news.herokuapp.com/api/articles/${article_id}/comments`)
    .then((response) => {
      return response.data.comments;
    });
};

export const postComment = (article_id, newComment) => {
  return axios.post(`https://steves-nc-news.herokuapp.com/api/articles/${article_id}/comments`, newComment)
}

export const deleteCommentById = (comment_id) => {
  return axios.delete(`https://steves-nc-news.herokuapp.com/api/comments/${comment_id}`)
}