import axios from "axios";

export const fetchArticles = (topic = undefined, sort_by = 'created_at', order_by = 'DESC') => {
  return axios
    .get('https://steves-nc-news.herokuapp.com/api/articles', {
      params: {
        topic: topic,
        sort_by: sort_by,
        order_by: order_by
      }
    })
    .then((response) => {
      return response.data.articles;
    });
};

export const fetchArticlesByTopic = (topic) => {
  return axios
    .get(`https://steves-nc-news.herokuapp.com/api/articles?topic=${topic}`)
    .then((response) => {
      return response.data.articles;
    });
};

export const fetchArticleById = (article_id) => {
  return axios
    .get(`https://steves-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    });
};

export const voteOnArticle = (article_id, voteChange) => {
  return axios.patch(
    `https://steves-nc-news.herokuapp.com/api/articles/${article_id}`,
    { votes: voteChange.votes }
  );
};
