import axios from "axios";

export const fetchArticles = () => {
    return axios.get('https://steves-nc-news.herokuapp.com/api/articles').then((response) => {
        console.log(response.data.articles)
        return response.data.articles
    })
}