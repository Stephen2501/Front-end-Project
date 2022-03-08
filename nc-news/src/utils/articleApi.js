import axios from "axios";

export const fetchArticles = () => {
    return axios.get('https://steves-nc-news.herokuapp.com/api/articles').then((response) => {
        return response.data.articles
    })
}

export const fetchArticlesByTopic = (topic) => {
    return axios.get(`https://steves-nc-news.herokuapp.com/api/articles?topic=${topic}`).then((response) => {
        return response.data.articles
    })
}

export const fetchArticleById = (article_id) => {
    return axios.get(`https://steves-nc-news.herokuapp.com/api/articles/${article_id}`).then((response) => {
        return response.data.article
    })
}

export const voteOnArticle = (article_id, voteChange) => {
    return axios.patch(`https://steves-nc-news.herokuapp.com/api/articles/${article_id}`, voteChange)
}