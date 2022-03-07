import axios from 'axios'

export const fetchTopics = () => {
    return axios.get('https://steves-nc-news.herokuapp.com/api/topics').then((response) => {
        return response.data.topics
    })
}