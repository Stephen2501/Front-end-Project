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